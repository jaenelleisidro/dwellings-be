import express from 'express';
import { AppDataSource } from "./dataaccess/data-source.js";
import { User } from "./dataaccess/entity/User.js";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
    res.json({ status: "success", data: "the server is running!" });
});

app.get('/health', async (req, res) => {
    res.json({ status: "success", data: "the server is running!" });
});

app.get('/api/users', async (req, res) => {
    const data = await db.user.find();
    res.json({ data });
});



app.listen(port, () => console.log('Server running on port: ' + port));


const db={user:null};


AppDataSource.initialize()
    .then(async () => {
        console.log("Database connected successfully! 🎉");

        // Get the repository to interact with the database
        db.user = AppDataSource.getRepository(User);

        // // 1. Create and Save a new user
        // const newUser = {
        //     firstName: "John",
        //     lastName: "Doe",
        // };
        // await db.user.save(newUser);
        // console.log("Saved a new user.");

        // // 2. Fetch all users
        // const allUsers = await db.user.find();
        // console.log("All users in DB:", allUsers);
    })
    .catch((error) => console.error("Database connection error:", error));
