import express from "express";

const router = express.Router();

const users = [
    {
        name: "John",
        lastName: "Doe",
        age: 25
    },
    {
        name: "Jane",
        lastName: "Doe",
        age: 24
    }
]

router.get("/", (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {

    const user = req.body;

    users.push(user);

    res.send("User with the name " + user.name + " was added to the database.");
})

export default router;