import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

export default function MouseTracker() {
 const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

 const handleMouseMove = (event) => {
    setMousePos({ x: event.clientX, y: event.clientY });
 };

 useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
 }, []);

 return (
    <div style={{ 
      position: 'fixed', 
      top: `${mousePos.y}px`, 
      left: `${mousePos.x+20}px`, 
      pointerEvents: 'none',
      right: '100' ,
      color: 'pink',
      fontFamily: 'cursive' // Set the font to Arial
    }}>

<Typewriter
  options={{
    strings: ['I love you Stacey','My Love', 'My Habibi','My Sugarplum', 'My Honeybunch','My Pumpkin', 'My Sweetie-pie'],
    autoStart: true,
    loop: true,
    delay: 10,
    deleteSpeed:10
  }}
/>
    </div>
 );
};
