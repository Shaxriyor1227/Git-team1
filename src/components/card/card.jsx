import React from 'react'
import './card.css'

const Card = () => {
  const cardData = [
    { pass: 'Pass Trial', price: '$ 0', desc1: 'Access to the gym from 8:00 to 14:00', desc2: 'The trainer on duty will introduce you to the gym' },
    { pass: 'Pass Basic', price: '$ 10', desc1: 'Full access to the gym 24/7', desc2: 'Personal trainer sessions included' },
    { pass: 'Pass Standard', price: '$ 20', desc1: 'Full access plus sauna', desc2: 'Nutrition consultation' },
    { pass: 'Pass Premium', price: '$ 30', desc1: 'All facilities + pool', desc2: 'Unlimited classes' },
    { pass: 'Pass VIP', price: '$ 50', desc1: 'VIP lounge access', desc2: 'Private locker and shower' },
    { pass: 'Pass Ultimate', price: '$ 100', desc1: 'Everything included', desc2: 'Spa and massage' }
  ];

  return (
    <div>
       <div className="card">
        <div className="card-container">
            <div className="title">
            <h1 className="card-title">Gym Membership</h1>
            </div>
         <div className="cards-container">
           {cardData.map((item, index) => (
             <div key={index} className="cards">
                <h3 className='Pass'>{item.pass}</h3>
                <h2 className='Prise'>{item.price}</h2>
                <p className='Description'>{item.desc1}</p>
                <p className='Description1'>{item.desc2}</p>
                <button className='btn1'>Buy</button>
             </div>
           ))}
         </div>
        </div>
       </div>
       
    </div>
  )
}

export default Card