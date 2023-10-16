import { useState, useEffect } from 'react';

export default function QuizPage() {

    const [gameData, setGameData] = useState([]);

    useEffect(() => {
        const fetchCityData = async () => {
            try {
                const response = await fetch('https://city-game.onrender.com/game');
                if (response.ok) {
                    const data = await response.json();
                    setGameData(data.cities);
                    
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchCityData();
    }, []);
    console.log(gameData);
    return (
        <>
        
        {gameData?.map((city, index) => 
            
        <div className="qP_wrap" key={index}>
            <img
                className="qP-image"
                src={`${city?.url}`}
                alt=""
            />
                <button
                    className='qP1_btn'
                    type="submit"
                    
                > {city?.correct_answer} </button>
                                <button
                    className='qP2_btn'
                    type="submit"
                    
                >{city?.additional_answer1}</button>
                                <button
                    className='qP3_btn'
                    type="submit"
                    
                > {city?.additional_answer2} </button>
            
            <button className="qP-submit">Next Level</button>
        </div>)} 

        </> 
    )
}