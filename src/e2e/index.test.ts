import { createApp } from "../createApp";
import { type Express } from "express";
import request from "supertest";

describe("/api/users", () => {
  let app: Express;

  beforeAll(() => {
    app = createApp();
  });

  it("should return an empty array when getting /api/users", async () => {
    const response = await request(app).get("/api/users");
    expect(response.body).toStrictEqual([]);
  });
});
