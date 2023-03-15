require("dotenv").config()

const apiKey = process.env.apiKey

const axios = require("axios")
const newsRouter = require("express").Router()

newsRouter.get("/all",async(req,res)=>{
    try {
        const result = await axios.get("https://newsapi.org/v2/top-headlines?language=en&pageSize=50&apiKey=" + apiKey)
        res.send(result.data.articles)
    } catch (error) {
        console.log(error)
    }

})

newsRouter.get("/:category", async(req,res)=>{
    try {
        const category = req.params.category
        const result = await axios.get(`https://newsapi.org/v2/top-headlines?language=en&category=${category}&pageSize=50&apiKey=${apiKey}`)
        res.send(result.data.articles)
    } catch (error) {
        console.log(error)
    }

})

module.exports = newsRouter