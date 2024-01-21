import React from 'react';
import GrowGrass from './growgrass';

import LongG from './longg';




const Flower = ({ className }) => (
 <div className={className}>
    <div className="flower__leafs flower__leafs--1">
      <div className="flower__leaf flower__leaf--1"></div>
      <div className="flower__leaf flower__leaf--2"></div>
      <div className="flower__leaf flower__leaf--3"></div>
      <div className="flower__leaf flower__leaf--4"></div>
      <div className="flower__white-circle"></div>
      <div className="flower__light flower__light--1"></div>
      <div className="flower__light flower__light--2"></div>
      <div className="flower__light flower__light--3"></div>
      <div className="flower__light flower__light--4"></div>
      <div className="flower__light flower__light--5"></div>
      <div className="flower__light flower__light--6"></div>
      <div className="flower__light flower__light--7"></div>
      <div className="flower__light flower__light--8"></div>
    </div>
    <div className="flower__line">
      <div className="flower__line__leaf flower__line__leaf--1"></div>
      <div className="flower__line__leaf flower__line__leaf--2"></div>
      <div className="flower__line__leaf flower__line__leaf--3"></div>
      <div className="flower__line__leaf flower__line__leaf--4"></div>
      <div className="flower__line__leaf flower__line__leaf--5"></div>
      <div className="flower__line__leaf flower__line__leaf--6"></div>
    </div>



    
 </div>
 
);
const Flowers = () => (

    
    <div className="flowers">

   
       <Flower className="flower flower--1"  />
       <Flower className="flower flower--2" />
       <Flower className="flower flower--3" />
       <GrowGrass className="flower__grass--1" />
       <GrowGrass className=" flower__grass--2" />

       <LongG index={1} />
       <LongG index={2} />
       <LongG index={3} />
       <LongG index={4} />
       <LongG index={5} />
       <LongG index={6} />
       <LongG index={7} />
       <LongG index={8} />
   

       <div className="flower__g-right flower__g-right--2" style={{"--d" :'3.2s'}}>
          
            </div>
            <div className="leaf" style={{"--d" : '3.2s'}}></div>
            <div className="grow-ans" style={{"--d" : '3.2s'}}>

            <div className="flower__g-fr" style={{"--d" :'3.2s'}}>
              <div className="leaf" style={{"--d" : '3.2s'}}></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
            </div>
          </div>

          <div className="grow-ans" style={{"--d" :'1s'}}>
            <div class="flower__g-front" >
              <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
                <div class="flower__g-front__leaf"></div>
              </div>
              <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
                <div class="flower__g-front__leaf"></div>
              </div>
              <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
                <div class="flower__g-front__leaf"></div>
              </div>
              <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
                <div class="flower__g-front__leaf"></div>
              </div>
              <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
                <div class="flower__g-front__leaf"></div>
              </div>
              <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
                <div class="flower__g-front__leaf"></div>
              </div>
              <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
                <div class="flower__g-front__leaf"></div>
              </div>
              <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
                <div class="flower__g-front__leaf"></div>
              </div>
              <div class="flower__g-front__line"></div>
            </div>
          </div>


     
    </div>
    

   );
   

export default Flowers;
