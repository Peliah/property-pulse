import connectDb from '@/config/database';
import User from '@/models/User';
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google';


type CustomSession = {
    user: {
        email: string;
        id?: string;  // Optional, because it's being assigned later
    };
};

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })
    ],
    callbacks: {
        //   invoked on successful authentication
        async signIn({ profile }: { profile: GoogleProfile }): Promise<string | boolean> {
            // 1. connect to database
            await connectDb();
            // 2. Check if the user exists
            const userExists = await User.findOne({ email: profile.email });
            // 3. if not, create in database
            if (!userExists) {
                // Truncate user name if too long
                const username = profile.name.slice(0, 20);
                await User.create({
                    email: profile.email,
                    username,
                    image: profile.picture
                });
            }
            // 4. Return true to allow sign in
            return true
        },
        // Modifies the session object
        async session({ session }: { session: CustomSession }) {
            // 1. get the user from the database
            const user = await User.findOne({ email: session.user.email });
            // 2. Assign the user to the session
            session.user.id = user._id.toString();
            // 3. return the session
            return session;
        }
    }
}