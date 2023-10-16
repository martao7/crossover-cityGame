import { useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function CreateGamer({ setGamers }) {
  const [newGamer, setNewGamer] = useState({
    name: "",
    score: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:8000/posts", newGamer)
      .then((response) => {
        console.log("Success:", response.data);
        alert("You're ready! Click on PLAY");
        setGamers((prevGamers) => [...prevGamers, response.data]);
        setNewGamer({
          name: "",
          score: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    setNewGamer({ ...newGamer, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={newGamer.name}
        onChange={handleChange}
        placeholder="name"
        required
      />

      <button type="submit" id="submitButton">
        OK
      </button>
    </form>
  );
}

export default CreateGamer;
