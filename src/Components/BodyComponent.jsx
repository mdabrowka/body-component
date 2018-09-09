import React, { Component } from 'react';
import ReactSVG from 'react-svg'
import bodyImage from '../daysix-react-coding-challenge-assets/body-front.svg';
import bleeding from '../daysix-react-coding-challenge-assets/bleeding.svg';
import bruise from '../daysix-react-coding-challenge-assets/bruise.svg';
import fracture from '../daysix-react-coding-challenge-assets/fracture.svg';
import laceration from '../daysix-react-coding-challenge-assets/laceration.svg';
import './BodyComponent.css';

export class BodyComponent extends Component {

    // handleInjected = (svg) => {
    //     var head = 
    // }

    render() {
       return (
       <main>
           <div>
               <ReactSVG
               alt="bodyImage"
               src={bodyImage}
               onInjected={svg => {
                const head = svg.getElementById("head");
                head.addEventListener('click', () => {
                    const path = head.getElementsByTagName("path")[0];
                    console.log('logging path', path);
                })
                console.log('head', head)
              }}/>
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
        )
    }
}

export default BodyComponent;

