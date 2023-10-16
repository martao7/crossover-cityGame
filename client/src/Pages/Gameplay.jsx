import axios from "axios";

export default function Gameplay() {
  const playerWin = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      user.games_total++;
      user.score += 10;

      console.log("NOW USER GAME won", user.score);

      const newData = {
        games_total: user.games_total,
        score: user.score,
      };
      try {
        const res = await axios.put(
          `https://city-game.onrender.com/leaderboard/users/${user._id}`,

          newData
        );

        localStorage.setItem("user", JSON.stringify(res.data.user));
      } catch (err) {
        console.error("Error updating player:", err);
        console.log("Error  player:", user);
      }
    }
    const updatedUser = JSON.parse(localStorage.getItem("user"));

    console.log(updatedUser);
    return <h1>Score is {user.score}</h1>;
  };

  return <></>;
}
