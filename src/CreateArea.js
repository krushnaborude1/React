import React, { useState } from "react";

const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  };

  const submitNote = (e) => {
    e.preventDefault();
    if (!note.title.trim() || !note.content.trim()) {
      alert(" Both Title and Content are required.");
      return;
    }
    onAdd(note);
    setNote({ title: "", content: "" });
  };

  return (
    <form onSubmit={submitNote} className="mb-5">
      <div className="mb-3">
        <input
          name="title"
          value={note.title}
          onChange={handleChange}
          className="form-control bg-dark text-white border-secondary custom-placeholder"
          placeholder="Title"
        />
      </div>
      <div className="mb-3">
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          className="form-control bg-dark text-white border-secondary custom-placeholder"
          rows="3"
          placeholder="Content"
        />
      </div>
      <button className="btn btn-warning fw-semibold add-btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default CreateArea;
