import TodoList from "@/components/TodoList"
import db from "../_utils/db"
const getTodos = async () => {
  const todos = await db.todo.findMany({})
  return todos
}

export default async function TodosPage() {
  const todos = await getTodos()
  console.log(todos)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>hello from todos root page</div>
      <div>Todos Page</div>
      <div>
        <TodoList todos={todos} />
      </div>
    </main>
  )
}
