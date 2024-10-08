"use client"
import { toggleTodoCompletion } from "@/app/_utils/actions"
import { cn } from "@/app/_utils/helper"
import { useTransition } from "react"

const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition()

  return (
    <div
      className={cn(
        todo.completed && "line-through text-gray/80",
        "cursor-pointer"
      )}
      onClick={() => toggleTodoCompletion(todo)}
    >
      {todo.content}
    </div>
  )
}
export default Todo
