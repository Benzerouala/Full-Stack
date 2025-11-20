import { useEffect, useState } from 'react'

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000);

        return () => clearInterval(timer); 
    }, []);

    return (
        <div>
            <h1>temps écoulé : {time} s</h1>
        </div>
    );
};

export default Timer;