import { useEffect, useState } from 'react'

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    
    useEffect(() => {
        setStars(generateStars());
        setMeteors(generateMeteors());
    }, []);

    // star: id, size, x, y, opacity, animationDuration
    const generateStars = () => {
        const starsArray = [];
        for (let i = 0; i < 100; i++) { // generate amount
            const id = i;
            const size = Math.random() * 2 + 1; // size between 1 and 3
            const x = Math.random() * 100; // x position in vw
            const y = Math.random() * 100; // y position in vh
            const opacity = Math.random(); // opacity between 0 and 1
            const animationDuration = Math.random() * 5 + 5; // duration between 5s and 10s
            starsArray.push({ id, size, x, y, opacity, animationDuration });
        }
        return starsArray;
    };

    // meteors: id, size, x, y, delay, animationDuration
    const generateMeteors = () => {
        const meteorsArray = [];
        for (let i = 0; i < 10; i++) { // generate amount
            const id = i;
            const size = Math.random() * 2 + 1; // size between 1 and 3
            const x = Math.random() * 100; // x position in vw
            const y = Math.random() * 100; // y position in vh
            const delay = Math.random() * 20; // delay between 0s and 20s
            const animationDuration = Math.random() * 3 + 2; // duration between 2s and 5s
            meteorsArray.push({ id, size, x, y, delay, animationDuration });
        }
        return meteorsArray;
    }

    // Render stars and meteors
    return <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'> 
        {stars.map(star => (
            <div 
                key={star.id} className='star animate-pulse-subtle' style = {{
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    top: `${star.y}vh`,
                    left: `${star.x}vw`,
                    opacity: star.opacity,
                    animationDuration: `${star.animationDuration}s`,
                }}
            />
        ))} 

        {meteors.map(meteor => (
            <div 
                key={meteor.id} className='meteor animate-meteor' style = {{
                    width: `${meteor.size * 10}px`,
                    height: `${meteor.size}px`,
                    top: `${meteor.y}vh`,
                    left: `${meteor.x}vw`,
                    animationDelay: meteor.delay,
                    animationDuration: `${meteor.animationDuration}s`,
                }}
            />
        ))}
    </div>;
}