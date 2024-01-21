import React from 'react';

function GrowGrass({ className }) {
    return (
        <div className={`growing-grass`}>
            <div className={`flower__grass ${className}`}>
                <div className="flower__grass--top"></div>
                <div className="flower__grass--bottom"></div>
                <div className="flower__grass__leaf flower__grass__leaf--1"></div>
                <div className="flower__grass__leaf flower__grass__leaf--2"></div>
                <div className="flower__grass__leaf flower__grass__leaf--3"></div>
                <div className="flower__grass__leaf flower__grass__leaf--4"></div>
                <div className="flower__grass__leaf flower__grass__leaf--5"></div>
                <div className="flower__grass__leaf flower__grass__leaf--6"></div>
                <div className="flower__grass__leaf flower__grass__leaf--7"></div>
                <div className="flower__grass__leaf flower__grass__leaf--8"></div>
                <div className="flower__grass__overlay"></div>
            </div>
        </div>
    );
}

export default GrowGrass;
