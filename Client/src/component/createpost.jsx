import React, { useState } from "react";
import axios from "axios";
import "./createpost.css"

function CreatePost() {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    date: "",
    time: "",
    body: ""

  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      console.log(formData);
      const res = await axios.post("http://localhost:3001/createpost", formData);
      setFormData(res);

      setFormData({
        id: "",
        title: "",
        date: "",
        time: "",
        body: ""

      })

    } catch (e) {
      console.log(e);
    }

  };


  return (
    <>
      <div className="post-form-container">
        <h2>Create a New Post</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="id">ID</label>
            <input
              type="number"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea
              id="body"
              name="body"
              value={formData.body}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </>
  )
}

export default CreatePost;