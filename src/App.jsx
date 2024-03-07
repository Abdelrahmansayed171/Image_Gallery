import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import views from './assets/views.png';
import downloads from './assets/downloads.png';
import likes from './assets/likes.png';

function App() {
  const [images, setImages] = useState([])
  const [query, setQuery] = useState('')
  const apiKey = import.meta.env.VITE_PIXAPAY_API_KEY;

  // useEffect with no dependencies will run only once at 1st Render
  useEffect( () => {
    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo`)
    .then((res) => res.json())
    .then((data) => {console.log(data.hits); setImages(data.hits)})
    .catch((error) => console.error('Error fetching data:', error))}
    ,[])


  return (
    <>
      
        {images.map((image)=>(
        <div className='max-w-xs rounded overflow-hidden shadow-lg'>

          <img src={image.largeImageURL} alt='Random Image' className='w-full'/>
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
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1' >#Nature</span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1' >#Motivation</span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1' >#Speak</span>
            </div>
          </div>
        </div>
        ))}
        
      
    </>
  )
}

export default App
