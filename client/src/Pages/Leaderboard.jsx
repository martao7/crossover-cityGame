import {useState, useEffect} from "react"

export default function Leaderboard() {
    const [userData, setUserData] = useState([])

    const getData = async () => {
        const res = await fetch("https://city-game.onrender.com/leaderboard/users");
        const data = await res.json();
        setUserData(data.users);
    }


    useEffect(() => {
        getData()
    }, [])

    const sortedLeaderboard = userData.sort((a,b) => b.points-a.points)
    console.log(userData);
    console.log(userData.map((user) => user.username));
    return (
        <>
        <h1 style={{textAlign: "center"}}>Leaderboard</h1>
        <div>
        {userData.map((user, index) => (
            <div key={index} style={{display: "flex", wrap: "wrap", justifyContent: "space-evenly", backgroundColor: "grey", alignItems: "center"}}>
                <h2>{`#${index + 1}`} {user.username}</h2>
                <h2>Score: {user.score}</h2>
                <h2>Total Games: {user.games_total}</h2>
            </div>
        ))}
        </div>
        </>
    )
}