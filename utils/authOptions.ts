import connectDb from '@/config/database';
import User from '@/models/User';
import { AuthOptions, Profile, Session } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';


type CustomSession = {
    user: {
        email: string;
        id?: string;  // Optional, because it's being assigned later
    };
};

export const authOptions: AuthOptions = {
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
        async signIn({ profile }: { profile?: Profile }): Promise<boolean> {
            if (!profile?.email) {
                return false; // Reject sign-in if no profile or email
            }

            // 1. Connect to the database
            await connectDb();

            // 2. Check if the user exists
            const userExists = await User.findOne({ email: profile.email });

            // 3. If not, create the user in the database
            if (!userExists) {
                const username = profile.name?.slice(0, 20) ?? 'Unknown User';
                await User.create({
                    email: profile.email,
                    username,
                    image: profile.image
                });
            }

            // 4. Return true to allow sign-in
            return true;
        },
        // Modifies the session object
        async session({ session }: { session: Session }) {
            if (session?.user?.email) {
                // 1. Connect to the database
                await connectDb();

                // 2. Find the user in the database
                const dbUser = await User.findOne({ email: session.user.email });

                // 3. Attach the user ID to the session if found
                if (dbUser) {
                    (session as CustomSession).user.id = dbUser._id.toString();
                }
            }

            return session;
        }
    }
}