import { useEffect, useState } from "react";
import List from "@mui/material/List";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { Box } from "@mui/material";

export interface Item {
  id: number;
  name: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Item[]>([]);

  // to store new item in local storage
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Load data from localStorage on the client-side only
      const storedList = localStorage.getItem("todos");
      if (storedList) {
        setTodos(JSON.parse(storedList));
      }
    }
  }, []);


  useEffect(() => {
    // Save data to localStorage whenever myList changes
   if (todos.length > 0) {
     localStorage.setItem("todos", JSON.stringify(todos));
   } 
  }, [todos]);

  // Remove Todo
  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle Todo
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  // add todo
  const addTodo = (text: string) => {
    if (text.trim() !== "") {
      setTodos([...todos, { id: Date.now(), name: text, completed: false }]);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px",
      }}
    >
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              removeTodo={() => removeTodo(todo.id)}
              toggleTodo={() => toggleTodo(todo.id)}
            />
          );
        })}
        <TodoForm addTodo={addTodo} />
      </List>
    </Box>
  );
}
