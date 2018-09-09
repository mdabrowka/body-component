import React from 'react';
import body from '../daysix-react-coding-challenge-assets/body-front.svg';
import bleeding from '../daysix-react-coding-challenge-assets/bleeding.svg';
import bruise from '../daysix-react-coding-challenge-assets/bruise.svg';
import fracture from '../daysix-react-coding-challenge-assets/fracture.svg';
import laceration from '../daysix-react-coding-challenge-assets/laceration.svg';

export const renderFigure = () => {
    return (
        <main>
            <div>
                 <img alt="body" src={body}/>
             </div>
             <div> 
                 <ul id="injuries">
                     <li><img className="injury-type" alt="bleeding" src={bleeding}/></li>
                     <li><img className="injury-type" alt="bruise" src={bruise}/></li>
                     <li><img className="injury-type" alt="fracture" src={fracture}/></li>
                     <li><img className="injury-type" alt="laceration" src={laceration}/></li>
                 </ul>
             </div>
        </main>
         );
    }

export default renderFigure;