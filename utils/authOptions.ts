import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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
        async signIn({ account }: { account: any }): Promise<string | boolean> {
            // 1. connect to database
            // 2. Check if the user exists
            // 3. if not, create in database
            // 4. Return true to allow sign in
            return true
        },
        // Modifies the session object
        async session({ session }: { session: any }) {
            // 1. get the user from the database
            // 2. Assign the user to the session
            // 3. return the session
            return session;
        }
    }
}