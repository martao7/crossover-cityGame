import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CreateUser() {
  const [user, setUser] = useState();
  const [modalState, setModal] = useState(false);
  const [input, setInput] = useState();

  const handleShow = () => {
    setModal(true);
  };
  const handleClose = () => {
    setModal(false);
  };

  const registerUser = async (name) => {
    try {
      const res = await axios.post(
        "https://city-game.onrender.com/leaderboard/users",
        {
          username: name,
        }
      );

      setUser(res.data);

      localStorage.setItem("user", JSON.stringify(res.data));

      handleClose();
    } catch (err) {
      console.error("Error registering user:", err);
    }
  };

  useEffect(() => {
    // Check if user data is in session storage
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  console.log(user);

  return (
    <>
      {modalState ? (
        <Modal show={modalState} onHide={() => handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title className="m-title">
              Please enter your name
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ display: "flex", justifyContent: "center" }}>
            <input
              style={{ width: "25%" }}
              type="text"
              onChange={(e) => {
                setTimeout(() => {
                  setInput(e.target.value);
                }, 800);
                clearTimeout();
              }}
            ></input>
          </Modal.Body>
          <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
            <Button
              className="btn btn-round b-level-1 b-type-4"
              onClick={() => registerUser(input)}
            >
              Save
            </Button>
            <Button
              className="btn btn-round b-level-1 b-type-4"
              onClick={() => handleClose()}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ) : null}
      {!user ? (
        <Button
          className="btn btn-round b-level-1 b-type-4"
          onClick={handleShow}
        >
          Register with your username
        </Button>
      ) : null}
      {user ? (
        <h1
          style={{
            color: "white",
            backgroundColor: "#CC5803",
            padding: "10px",
            border: "2px solid white",
            marginTop: "250px",
          }}
        >
          Welcome to CityQuiz, {user.username}
        </h1>
      ) : (
        <h1
          style={{
            color: "white",
            backgroundColor: "#CC5803",
            padding: "10px",
            border: "2px solid white",
          }}
        >
          Welcome to CityQuiz, Stinky Guest
        </h1>
      )}
      {user ? (
        <Link to={`/game`}>
          <h5 className="btn btn-round b-level-1 b-type-4"> play</h5>
        </Link>
      ) : null}
    </>
  );
}
