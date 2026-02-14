import React, { useEffect } from 'react'
import Slider from '../Components/Main/Slider'
import Banner from '../Components/Main/Banner'

const Movies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
     <div className='pt-20 bg-black'>
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Banner/>
     </div>
  )
}

export default Movies
