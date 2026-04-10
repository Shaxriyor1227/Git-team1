import React from 'react'
import "./About2.css"
import img1 from "../../assets/img90.png"

const About2 = () => {
  return (
    <div>
      <div className="container">
        <div className="about">
            <div className="us">
                <h1>About us</h1>
            </div>
            <div className="station">
                <p>Gym24 is a leading fitness center located near Grushevka metro station, offering over 1500 sq. m of space dedicated to top-of-the-line workout equipment from leading brands such as Hammer Strength, Life Fitness, and TechnoGym. </p>
                <p className='with'>With affordable membership options, Gym24 is accessible to everyone who wants to reach their fitness goals, whether it's building strength, increasing endurance, or losing weight.</p>
                <p>Certified trainers at Gym24 provide expert guidance and support to develop personalized workout plans tailored to each individual's needs and goals. </p>
            </div>
        </div>
        <div className="img">
            <img src={img1} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About2
