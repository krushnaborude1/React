import React from "react";

const Note = ({ title, content, onDelete, id }) => {
  const handleClick = () => onDelete(id);

  return (
    <div className="col-md-4 mb-4">
      <div className="card bg-secondary text-white h-100 shadow-sm border border-dark note-card">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{content}</p>
          <button
            className="btn btn-danger mt-3 delete-btn"
            onClick={handleClick}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
