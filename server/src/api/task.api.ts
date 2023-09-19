import { Hono } from "hono";

const task = new Hono();

task.get("/", (context) => context.text("List Tasks"));

task.get("/:id", (context) => {
  const id = context.req.param("id");
  return context.text("Get Task: " + id);
});

task.post("/", (context) => context.text("Create Task"));

task.put("/", (context) => context.text("Update Task"));

task.delete("/", (context) => context.text("Delete Task"));

export default task;
