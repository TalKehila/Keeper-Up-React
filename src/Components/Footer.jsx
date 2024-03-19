import React from 'react'

const Footer = () => {
    const currentDate= new Date;
    const currentYear= currentDate.getFullYear();
  return (
    <div className='footer'>    
        <p> {currentYear} </p> 
              
    </div>
  )
}

export default Footer