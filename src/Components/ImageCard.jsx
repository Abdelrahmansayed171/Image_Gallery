import React, { useEffect, useState } from 'react'
import views from '../assets/views.png';
import downloads from '../assets/downloads.png';
import likes from '../assets/likes.png';

const ImageCard = ({image}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const tags = image.tags.split(', ')
  const formatter = (num) =>{
    if(num >= 1000000) return ((num / 1000000.0).toFixed(1) +'M')
    if(num >= 1000) return ((num / 1000.0).toFixed(1) + 'K')
    return num
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log(window.innerWidth)
    };
  
    window.addEventListener('resize', handleResize);
  
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures that this effect runs only once after the initial render
  
  return (
    <div className='max-w-xs rounded overflow-hidden shadow-lg'>
          {
            <img src={image.webformatURL} alt='Random Image' loading="lazy" className='w-full max-h-96 ' />
          }
          <div className="px-3 py-4">
            <div className="font-bold text-purple-500 text-l mb-2">
                Taken by {image.user}
            </div>
            <div className={`flex ${windowWidth > 1280 ? 'flex-row' : 'flex-col'}`}>
              <div className='flex flex-row basis-1/3'>
                <img src={views} alt='views icon' className='max-w-6 mx-2'/>
                <span><strong>{formatter(image.views)}</strong></span>
              </div>
              <div className='flex flex-row basis-1/3'>
                <img src={downloads} alt='views icon' className='max-w-6 mx-1'/>
                <span><strong>{formatter(image.downloads)}</strong></span>
              </div>
              <div className='flex flex-row basis-1/3'>
                <img src={likes} alt='views icon' className='max-w-6 mx-1'/>
                <span><strong>{formatter(image.likes)}</strong></span>
              </div>
            </div>
            <div className="px-2 py-3">
              {tags.map((tag, i)=>(
              <span key={i} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1' >#{tag}</span>
              ))}
              
            </div>
          </div>
    </div>
  )
}

export default ImageCard
