const request = require("supertest")
const app = require("../../index")

describe("index route", () => {
  test("should respond with a 200", () => {
    return request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.text).toBe("Hello, World!")
      })
  })
  // Should respond with 404 if thing doesn't exist
})
