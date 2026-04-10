import React from 'react'
import "./About.css"
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"
import icon4 from "../../assets/icon4.png"

const About = () => {
  return (
    <div className='container'>
        <h1>Reasons to join</h1>
        <div className="list">
            <div className="item1">
                <div className="item1-1">
                <img src={icon1} alt="Icon 1" />
                <h1>15000 sq.m.</h1>
                <p>A spacious area for your business needs</p>
                </div>
                <div className="item1-2">
                    <img src={icon2} alt="Icon 2" />
                    <h1>4 fitness zones</h1>
                    <p>From cardio to functional and cycle. Separate area for boxing and mixed martial arts</p>
                </div>
            </div>
            <div className="item2">
                <div className="item2-1">
                    <img src={icon3} alt="Icon 3" />
                    <h1>More than 200 equipment</h1>
                    <p>No queues at the simulators. Premium equipment from LifeStyle, Hammer Strength, TechnoGym.</p>
                </div>
                <div className="item2-2">
                    <img src={icon4} alt="Icon 4" />
                    <h1>Round-the-clock operation</h1>
                    <p>The gym is open 24 hours a day, also works on all holidays and weekends</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About