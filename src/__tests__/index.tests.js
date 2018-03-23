"use strict"

const app = require("../../index")
const request = require("supertest")
const cheerio = require("cheerio")
const articles = require("../data.json")

describe("index route", () => {
  const agent = request.agent(app).get("/")
  it("should respond with a 200", () => {
    return agent.then(response => {
      expect(response.statusCode).toEqual(200)
    })
  })

  describe("articles", () => {
    it("should have the correct number of articles", () => {
      return agent.then(response => {
        const $ = cheerio.load(response.text)
        expect($(".articles__item").length).toBe(articles.length)
      })
    })

    it("should each have a title and cover image", () => {
      return agent.then(response => {
        const $ = cheerio.load(response.text)
        expect($(".articles__item h2").length).toBe(articles.length)
        expect($(".articles__item img").length).toBe(articles.length)
      })
    })
  })
})

describe("article route", () => {
  const agent = request.agent(app).get("/article/0")
  const article = articles[0]

  describe("when the article exists", () => {
    it("should respond with a 200 status", () => {
      return agent.then(response => {
        expect(response.statusCode).toBe(200)
      })
    })

    it("should have the correct title", () => {
      return agent.then(response => {
        const $ = cheerio.load(response.text)
        expect($("h1").text()).toEqual(article.title)
      })
    })

    it("should have a correctly styled h2", () => {
      return agent.then(response => {
        const $ = cheerio.load(response.text)
        expect($("h2").hasClass("article__subheading")).toBe(true)
      })
    })

    it("should have a correctly styled plaintext", () => {
      return agent.then(response => {
        const $ = cheerio.load(response.text)
        expect($("p").hasClass("article__plaintext")).toBe(true)
      })
    })

    it("should have a correctly styled pull quote", () => {
      return agent.then(response => {
        const $ = cheerio.load(response.text)
        expect($("blockquote").hasClass("article__quote")).toBe(true)
      })
    })
  })

  describe("when the article does not exist", () => {
    const agent404 = request.agent(app).get("/article/999")

    it("should respond with a 404", () => {
      return agent404.then(response => {
        expect(response.statusCode).toBe(404)
        expect(response.text).toEqual("Article not found :(")
      })
    })
  })
})

describe("all other routes", () => {
  const agent404 = request.agent(app).get("/james")

  it("should respond with a 404", () => {
    return agent404.then(response => {
      expect(response.statusCode).toBe(404)
      expect(response.text).toEqual("Whoops! Where are you trying to go?")
    })
  })
})
