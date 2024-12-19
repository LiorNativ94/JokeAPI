import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev/";

app.use(express.static("public"));

app.get("/", async (req,res) => {
    try {
        const result = await axios.get(API_URL + "/joke/Any");
        console.log(result.data.type)
        if(result.data.type == "single") {
            res.render("index.ejs", {type:result.data.type, joke:result.data.joke, category:result.data.category});
        } else {
            res.render("index.ejs", {type:result.data.type, setup:result.data.setup,delivery: result.data.delivery, category:result.data.category});
        }
      } catch (error) {
        res.render("index.ejs", {secret: "", user:""});
      }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  