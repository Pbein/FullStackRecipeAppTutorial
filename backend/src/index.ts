import express from 'express'
import cors from 'cors'
import * as RecipeApi from './recipe-api'

const app = express()

app.use(express.json())
app.use(cors())

app.get("/api/recipes/search", async (req, res) => {
    //GET http://localhost:5000/api/recipes/search?searchTerm=chicken&page=0
    const searchTerm = req.query.searchTerm as string;
    const page = parseInt(req.query.page as string);
    const results = await RecipeApi.searchRecipes(searchTerm, page);    

    return res.json(results);
})

app.get("/api/recipes/:recipeID/summary", async (req,res) => {
    const recipeID = req.params.recipeID;
    const results = await RecipeApi.getRecipeSummary(recipeID);
    return res.json(results);
})

app.listen(5000, () => {
    console.log("Server is running on port 5000")
});