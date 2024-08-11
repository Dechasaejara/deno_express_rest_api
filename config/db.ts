import mongoose from "npm:mongoose"
// import { config } from "https://deno.land/x/dotenv/mod.ts";
// const env = config()
// await mongoose.connect(env.MONGO_URL)
// mongoose.connection




const uri = "mongodb+srv://admin:admin@1277@cluster0.rsk9h.mongodb.net/bot_db?retryWrites=true&w=majority";
async function run() {
    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        // await mongoose.connect(uri);
        // await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await mongoose.disconnect();
    }
}
run().catch(console.dir);

