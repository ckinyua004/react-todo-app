const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
          <button onClick={() => toggleComplete(todo.id)}>✓</button>
          <button onClick={() => deleteTodo(todo.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
