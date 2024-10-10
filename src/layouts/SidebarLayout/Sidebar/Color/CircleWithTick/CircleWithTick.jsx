import { useState } from 'react';

function CircleWithTick({ color = 'bg-blue-500', tickColor = 'text-white' }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleClick = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div
            className={`relative w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${color}`}
            onClick={handleClick}
        >
            {isChecked && (
                <svg
                    className={`absolute ${tickColor} w-5 h-5`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                    />
                </svg>
            )}
        </div>
    );
}

export default CircleWithTick;
