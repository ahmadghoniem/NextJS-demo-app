import TodoList from "@/components/TodoList"
import db from "@/app/_utils/db"
import { getTodos } from "../_utils/actions"

export default async function TodosPage() {
  const todos = await getTodos()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>hello from todos root page</div>
      <TodoList todos={todos} />
    </main>
  )
}
