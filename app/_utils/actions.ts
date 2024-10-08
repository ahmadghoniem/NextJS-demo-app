"use server"
import db from "./db"
import { revalidatePath } from "next/cache"

export const getTodos = async () => {
  // fake delay to show loading component
  // await new Promise((res) => setTimeout(res, 500))
  // fake error to show error component
  // await new Promise((res, rej) => setTimeout(rej, 520))
  const todos = await db.todo.findMany({})
  return todos
}
export const getTodoById = async (id) => {
  // fake delay to show loading component
  // await new Promise((res) => setTimeout(res, 500))
  // fake error to show error component
  // await new Promise((res, rej) => setTimeout(rej, 520))
  const todo = await db.todo.findFirst({ where: { id } })
  return todo
}
export const newTodo = async (data: FormData) => {
  const newTodo = data.get("todo") as string

  if (newTodo) {
    await db.todo.create({
      data: {
        content: newTodo
      }
    })
    // expires the cache of the todo route's page which makes it re-fetch it's data
    revalidatePath("/todos")
  }
}

export const toggleTodoCompletion = async ({ id, completed }) => {
  await db.todo.update({
    where: { id },
    data: {
      completed: !completed
    }
  })
  revalidatePath("/todos")
}
