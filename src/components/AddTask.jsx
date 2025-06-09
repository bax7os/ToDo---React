import { useState } from "react";
import Input from "./Input";
function AddTask({ onAddTasksSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Type the title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <Input
        type="text"
        placeholder="Type the description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Title and Description do not be empty!");
          }
          onAddTasksSubmit(title, description);
          setTitle(" ");
          setDescription(" ");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Add
      </button>
    </div>
  );
}
export default AddTask;
