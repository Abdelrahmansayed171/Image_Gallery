import React from 'react'
import views from '../assets/views.png';
import downloads from '../assets/downloads.png';
import likes from '../assets/likes.png';

const ImageCard = ({image}) => {
  const tags = image.tags.split(', ')
  return (
    <div className='max-w-xs rounded overflow-hidden shadow-lg'>

          <img src={image.webformatURL} alt='Random Image' className='w-full max-h-96' onLoad={console.log(`Image ${image.id} Loaded `)}/>
          <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-l mb-2">
                Taken by {image.user}
            </div>
            <div className='flex flex-row'>
              <div className='flex flex-row basis-1/3'>
                <img src={views} alt='views icon' className='max-w-6 mx-3'/>
                <span><strong>{image.views}</strong></span>
              </div>
              <div className='flex flex-row basis-1/3'>
                <img src={downloads} alt='views icon' className='max-w-6 mx-3'/>
                <span><strong>{image.downloads}</strong></span>
              </div>
              <div className='flex flex-row basis-1/3'>
                <img src={likes} alt='views icon' className='max-w-6 mx-3'/>
                <span><strong>{image.likes}</strong></span>
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
