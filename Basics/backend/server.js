const express = require("express")

const app = express()

const port= process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("server is ready")
})

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
          id: 1,
          setup: "Why don't scientists trust atoms?",
          punchline: "Because they make up everything!"
        },
        {
          id: 2,
          setup: "How does a penguin build its house?",
          punchline: "Igloos it together!"
        },
        {
          id: 3,
          setup: "Why did the bicycle fall over?",
          punchline: "Because it was two-tired!"
        },
        {
          id: 4,
          setup: "What did the left eye say to the right eye?",
          punchline: "Between us, something smells."
        },
        {
          id: 5,
          setup: "Why dont skeletons fight each other?",
          punchline: "They dont have the guts."
        },
    ]
    res.send(jokes)
})

app.listen(port, () => {
    console.log(`server is listening on http://localhost:${port}`);
    
})