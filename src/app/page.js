
'use client'
import React from 'react';
import Flower from './flowers';
import MouseTracker from './mousetrack'; // Import the MouseTracker component

const Night = () => <div className="night"></div>;

export default function Home() {
 return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Night/>  
        <Flower />

      </main>
      <MouseTracker /> 
    </div>
 );
}
