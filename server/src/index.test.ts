import { describe, it, expect } from "bun:test";
import app from ".";

describe("My first test", () => {
  it("Should return 200 Response", async () => {
    const req = new Request("http://localhost/api");
    const res = await app.fetch(req);
    expect(res.status).toBe(200);
  });
});
