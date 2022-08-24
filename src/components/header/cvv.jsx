import React from 'react';
import CV from '../../assets/CV.pdf';

const cvv = () => {
  return (
    <div className='cvv'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default cvv