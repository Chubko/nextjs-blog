import { MongoClient} from "mongodb";

const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster_name}.b2j5vvk.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`

async function handler(req, res) {
    if (req.method === "POST") {
        const { email, name, message } =req.body;

        if (
            !email ||
            !email.includes("@") ||
            !name ||
            name.trim() === "" ||
            !message ||
            message.trim() === ""
        ) {
            return res.status(422).json({ message: "Invalid input."})
        }

        const newMessage = {
            email,
            name,
            message
        };

        let client

        try {
            client = await MongoClient.connect(connectionString);
        } catch (e) {
            return res.status(500).json( { message: e || "Could not connect to DB!"});
        }

        const db = client.db();

        try {
            const result = await db.collection("messages").insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (e) {
            await client.close();
            return res.status(500).json( { message: e || "Storing message failed!"});
        }

        await client.close();

        return res.status(200).json({ message: "Successfully stored message!", newMessage });
    }
}

export default handler;
