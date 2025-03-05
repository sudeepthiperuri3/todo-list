import {  InputAdornment, TextField } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import { ChangeEvent, FormEvent, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";

interface TodoFormProps {
    addTodo: (text: string) => void;
}

export default function TodoForm({addTodo}: TodoFormProps) { 
    const [text, setText] = useState<string>("");
    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
      setText(evt.target.value);
  };
  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    addTodo(text);
    setText("");
  };
    return (
      <ListItem>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Add List"
            variant="outlined"
            onChange={handleChange}
            value={text}
            size="small"
            sx={{width: '340px'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="Create todo" edge="end" type="submit">
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
      </ListItem>
    );
}

