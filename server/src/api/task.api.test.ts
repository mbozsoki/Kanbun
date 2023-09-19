import { describe, it, expect } from "bun:test";
import app from "..";

const TASK_API_URL = "http://localhost/api/task";

describe("Task API", () => {
  it("Should return task list", async () => {
    const req = new Request(TASK_API_URL);
    const res = await app.fetch(req);
    expect(res.status).toBe(200);
    expect(await res.text()).toBe("List Tasks");
  });

  it("Should get task by id", async () => {
    const ID_MOCK = 3;
    const req = new Request(`${TASK_API_URL}/${ID_MOCK}`);
    const res = await app.fetch(req);
    expect(res.status).toBe(200);
    expect(await res.text()).toBe(`Get Task: ${ID_MOCK}`);
  });

  it("Should create task", async () => {
    const req = new Request(TASK_API_URL, {
      method: "POST",
    });
    const res = await app.fetch(req);
    expect(res.status).toBe(200);
    expect(await res.text()).toBe("Create Task");
  });

  it("Should update task", async () => {
    const req = new Request(TASK_API_URL, {
      method: "PUT",
    });
    const res = await app.fetch(req);
    expect(res.status).toBe(200);
    expect(await res.text()).toBe("Update Task");
  });

  it("Should delete task", async () => {
    const req = new Request(TASK_API_URL, {
      method: "DELETE",
    });
    const res = await app.fetch(req);
    expect(res.status).toBe(200);
    expect(await res.text()).toBe("Delete Task");
  });
});
