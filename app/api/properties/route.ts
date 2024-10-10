import connectDb from "@/config/database";


export const GET = async () => {
    try {
        await connectDb();
        return new Response(JSON.stringify({ message: "Hello World" }), { status: 200 })
    } catch (error) {
        console.error(error);
        return new Response("Something went wrong", { status: 400 })

    }
}