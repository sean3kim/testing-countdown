const app = require("../../app");
const request = require("supertest");
const mongoose = require("mongoose");

describe("timers functionality", () => {
    it("should recieve the same data back from api with the correct status code", async () => {
        const res = await request(app).post("/api/timer/new").send({ start: 5, end: 0 });

        expect(res.statusCode).toEqual(201);
        expect(res.body.timer).toMatchObject({ start: 5, end: 0 });
    });
    it("should return the right status code and message for an invalid request", async () => {
        const res = await request(app).post("/api/timer/new").send({ start: 10 });

        expect(res.statusCode).toEqual(400);
        expect(res.error.text).toBe("please include a start and end time");
    })

    afterAll(() => {
        mongoose.connection.close();
    })


})