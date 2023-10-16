import {useState, useEffect} from "react"
import {NavLink} from "react-router-dom"
import "../App.css"

export default function Leaderboard() {
    const [isLoading, setIsLoading] = useState(true);
    const [userData, setUserData] = useState([])

    const getData = async () => {
        const res = await fetch("https://city-game.onrender.com/leaderboard/users");
        const data = await res.json();
        setUserData(data.users);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
          getData();
        }, 5000);
        return () => clearTimeout(timer);
      }, []);

    const sortedLeaderboard = userData.sort((a,b) => b.points-a.points)
    console.log(userData);
    console.log(userData.map((user) => user.username));
    return (
        <>
    <NavLink to="/">Home</NavLink>
        <h1 style={{textAlign: "center"}}>Leaderboard</h1>
        <div>
        {isLoading ? (
        <h2 className="questionLoader" style={{ fontSize: "20rem", textAlign: "center" }}>?</h2>
        ) : null}
        {userData.map((user, index) => (
            <div key={index} style={{display: "flex", wrap: "wrap", justifyContent: "space-evenly", alignItems: "flex-start", backgroundColor: "grey", alignItems: "center"}}>
                <h2>{`#${index + 1}`} {user.username}</h2>
                <h2>Score: {user.score}</h2>
                <h2>Total Games: {user.games_total}</h2>
            </div>
        ))}
        </div>
        </>
    )
}