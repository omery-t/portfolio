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
        for (let i = 0; i < 100; i++) {
            const id = i;
            const size = Math.random() * 2 + 1;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const opacity = Math.random();
            const animationDuration = Math.random() * 5 + 5;
            starsArray.push({ id, size, x, y, opacity, animationDuration });
        }
        return starsArray;
    };

    // meteors: id, size, x, y, delay, animationDuration
    const generateMeteors = () => {
        const meteorsArray = [];
        for (let i = 0; i < 10; i++) {
            const id = i;
            const size = Math.random() * 2 + 1;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const delay = Math.random() * 20;
            const animationDuration = Math.random() * 3 + 2;
            meteorsArray.push({ id, size, x, y, delay, animationDuration });
        }
        return meteorsArray;
    }

    // Render stars and meteors
    return <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
        {stars.map(star => (
            <div
                key={star.id} className='star animate-pulse-subtle' style={{
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
                key={meteor.id} className='meteor animate-meteor' style={{
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