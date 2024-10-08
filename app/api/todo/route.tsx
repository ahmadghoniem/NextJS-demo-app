// assuming our todo app is developer friendly and developers would like to do CRUD on their todos
import { getTodoById } from "@/app/_utils/actions"
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
  return NextResponse.json({ message: "hello" })
}
export const POST = async (request: Request) => {
  const { id: TodoId } = await request.json()
  const todoData = await getTodoById(TodoId)

  return NextResponse.json({
    message: `todo: ${todoData.content} is ${
      todoData.completed ? "completed" : "not completed"
    }`
  })
}
