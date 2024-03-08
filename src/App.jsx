import { useEffect, useState, useTransition } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ImageCard from './Components/ImageCard';

function App() {
  const [images, setImages] = useState([])
  const [query, setQuery] = useState('')
  const apiKey = import.meta.env.VITE_PIXAPAY_API_KEY;
  
  const [loading, startTransition] = useTransition()

  // useEffect with no dependencies will run only once at 1st Render
  useEffect( () => {
    startTransition(() => {
      setLoading(true)
      setTimeout(()=>{
        fetch(`https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo`)
        .then((res) => res.json())
        .then((data) => setImages(data.hits))
        .catch((error) => console.error('Error fetching data:', error))
      },2000)
      
      setLoading(false)
    })}
    ,[])


  return (
    <div className='container mx-auto'>
      <div className='grid-cols-4 grid gap-5'>
        { loading 
            ? <h1>"Loading"</h1> 
            : images.map((image)=>( 
                <ImageCard key={image.id} image={image}/>
        ))}
      </div>
        
    </div>
  )
}

export default App
