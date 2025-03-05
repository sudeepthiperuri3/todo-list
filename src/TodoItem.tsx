
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Item } from "./TodoList";

interface TodoItemProps {
  todo: Item,
  removeTodo: (id: number) => void,
  toggleTodo :(id: number) =>void
}
export default function TodoItem({ todo, removeTodo, toggleTodo }: TodoItemProps) {
  const labelId = `checkbox-list-label-${todo.id}`;

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="comments"
          onClick={() => removeTodo(todo.id)}
        >
          <DeleteOutlineIcon color="error" />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton
        dense
        onClick={() => toggleTodo(todo.id)}
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={todo.name} />
      </ListItemButton>
    </ListItem>
  );
}
