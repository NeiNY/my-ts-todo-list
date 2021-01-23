import React, { useState } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(title);
      setTitle("");
    }
  };

  return (
    <div className="my-1">
      <div className="input-field">
        <input
          value={title}
          type="text"
          id="title"
          placeholder="Title"
          onChange={changeHandler}
          onKeyPress={keyPressHandler}
        />
        <label htmlFor="title" className="active">
          Title of TODO item
        </label>
      </div>
    </div>
  );
};

export default TodoForm;
