const fs = require("fs/promises")

const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded())
app.use(express.static("./public"))

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/review", async (req, res) => {
    const email = req.body.email;
    const reviewText  = req.body.reviewText;

    
    const addReviewDto = {
        email: email,
        text: reviewText,
    };

    const reviewsJSON = await fs.readFile("./reviews.json", "utf-8");
    const reviews = JSON.parse(reviewsJSON);



    reviews.push(addReviewDto);

    const updatedReviewsJSON = JSON.stringify(reviews, null, 2);

    await fs.writeFile("./reviews.json", updatedReviewsJSON);

    res.redirect("/")
})

app.listen(3000, () => console.log("Server is listening"))