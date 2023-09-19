import { Hono } from "hono";
import task from "./api/task.api";

const app: Hono = new Hono().basePath("/api");

app.get("/", async (context, next) => context.text("Hello Bun!"));

app.route("/task", task);

export default app;
