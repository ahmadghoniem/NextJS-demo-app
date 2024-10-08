import NewTodoForm from "@/components/NewTodoForm"

const TodosLayout = ({ children }) => {
  return (
    <div>
      <NewTodoForm />
      {children}
    </div>
  )
}
export default TodosLayout
