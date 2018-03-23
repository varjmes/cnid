"use strict"

const fs = require("fs")
const express = require("express")
const articles = require("./src/data.json")

const PORT = process.env.PORT
const app = express()
app.set("view engine", "pug")
app.set("views", "./src/views")
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.render("index", { articles })
})

app.get("/article/:id", (req, res) => {
  const article = articles.filter(item => {
    return item.id == req.params.id
  })[0]

  article
    ? res.render("article", { article })
    : res.status(404).send("Article not found :(")
})

app.get("*", (req, res) => {
  res.status(404).send("Whoops! Where are you trying to go?")
})

app.listen(PORT, () => console.log(`Running on port ${PORT}!`))

module.exports = app
