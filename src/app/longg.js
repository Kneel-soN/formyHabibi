import React from 'react';

const LongG = ({ index }) => (
 <div className={`long-g long-g--${index}`}>
   {Array.from({length: 4}, (_, i) => (
     <div key={i} className={`grow-ans`} style={{ "--d": `${3 + i * 0.2}s` }}>
       <div className={`leaf leaf--${i}`}></div>
     </div>
   ))}
 </div>
);

export default LongG;
