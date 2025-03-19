import React, { useState, useEffect } from "react";
import api from "../services/api";

const CommentSection = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const { data } = await api.get(`/blogs/${blogId}/comments`);
        setComments(data);
      } catch (err) {
        console.error("Error fetching comments:", err);
      }
    };
    fetchComments();
  }, [blogId]);

  const handleAddComment = async () => {
    try {
      const { data } = await api.post(`/blogs/${blogId}/comment`, {
        text: newComment,
      });
      setComments([...comments, data]);
      setNewComment("");
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };

  return (
    <div>
      <h3 className="font-semibold mt-4">Comments</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index} className="border-b py-2">
            {comment.text}
          </li>
        ))}
      </ul>
      <input
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment"
        className="border rounded p-2 w-full mt-2"
      />
      <button onClick={handleAddComment} className="bg-green-500 px-4 py-2 mt-2 rounded text-white">
        Add Comment
      </button>
    </div>
  );
};

export default CommentSection;
