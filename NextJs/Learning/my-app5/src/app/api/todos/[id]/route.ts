import { NextResponse } from "next/server";

const DATA_SOURCE_URL = `https://jsonplaceholder.typicode.com/todos`;

export async function GET(req: Request) {
    
  const id = req.url.slice(req.url.lastIndexOf("/") + 1);
  const res = await fetch(`${DATA_SOURCE_URL}/${id}`);

  const todo: Todo = await res.json();

  if (!todo.id) return NextResponse.json({ message: "to do not found" });

  return NextResponse.json(todo);
}
