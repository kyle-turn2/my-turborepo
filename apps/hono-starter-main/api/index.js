import { Hono } from "hono";
import { handle } from "hono/vercel";
import { add } from "@repo/math/add";

const app = new Hono().basePath("/api");

app.get("/", (c) => {
  const sum = add(1, 3);
  return c.json({ message: "Congrats! You've deployed Hono to Vercel", sum });
});

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;
