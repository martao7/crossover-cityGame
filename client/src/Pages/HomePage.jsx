import React from "react";
import { useState } from "react";
import CreateGamer from "./CreateGamer";
import { useNavigate, NavLink } from "react-router-dom";
import GameRulesPopup from "./GameRulesPopUp";

export default function HomePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
    <NavLink to="/leaderboard">Leaderboard</NavLink>
      <div className="homepage">
        <h1>CityQuiz</h1>
        <p>What city is it?</p>
        <div className="picture1">
          {/* <img src="./img/picture" /> */}
          <img src="https://picture" width="100%" />
        </div>

        <div classname="gameRulesExpl">
          <button onClick={openPopup} id="gameRulesButton">
            Game rules explanation
          </button>
          <GameRulesPopup
            isOpen={isPopupOpen}
            onClose={closePopup}
            text=" In this game you should guess the names of the cities they are
          presented on the next pages on the photos. Choose the answer, that is your guess of the right name of presented city. When you are
          ready, click on the OK button to go to the next page. Your total score you will see at the end of the game. 
          Good luck and have fun! :) "
          />
        </div>

        <div className="usersName">
          <p>Put your name here:</p>
          <CreateGamer />
          {/* <form onSubmit={""}>
            <input id="name" type="text" placeholder="name" value="" />
            </form> */}
          <div className="playButton">
            <p>...and press:</p>
            <button onClick id="playButton">
              PLAY
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
