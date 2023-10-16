import { useState } from 'react';

export default function QuizPage() {
    const [clickedButton, setClickedButton] = useState(null);

    const handleChange = (buttonIndex) => {
        setClickedButton(buttonIndex);
    };

    const qPbuttonStyle = [
        {
            className: 'qP1_btn',
            borderColor: '#0000',
            text:'London',
        },
        {
            className: 'qP2_btn',
            borderColor: '#0000',
            text: 'London',
        },
        {
            className: 'qP3_btn',
            borderColor: '#0000',
            text: 'London',

        },
    ];

    return (
        <div className="qP_wrap">
            <img
                className="qP-image"
                src='https://images.pexels.com/photos/13940670/pexels-photo-13940670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                alt=""
            />
            {qPbuttonStyle.map((button, index) => (
                <button
                    key={index}
                    className={`qP_btn ${button.className}`}
                    type="submit"
                    onClick={() => handleChange(index)}
                    style={{
                        borderColor: clickedButton === index ? '#8933c3' : button.borderColor,
                    }}
                >{button.text}</button>
            ))}
            <button className="qP-submit">Next Level</button>
        </div>
    );
}