import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import views from './assets/views.png';
import downloads from './assets/downloads.png';
import likes from './assets/likes.png';

function App() {

  
  return (
    <>

      <div className='max-w-xs rounded overflow-hidden shadow-lg'>
        <img src='https://source.unsplash.com/random' alt='Random Image' className='w-full'/>
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
              Photo By Orca el sayed
          </div>
          <div className='flex flex-row'>
            <div className='flex flex-row basis-1/3'>
              <img src={views} alt='views icon' className='max-w-6 mx-3'/>
              <span><strong>500</strong></span>
            </div>
            <div className='flex flex-row basis-1/3'>
              <img src={downloads} alt='views icon' className='max-w-6 mx-3'/>
              <span><strong>500</strong></span>
            </div>
            <div className='flex flex-row basis-1/3'>
              <img src={likes} alt='views icon' className='max-w-6 mx-3'/>
              <span><strong>500</strong></span>
            </div>
          </div>
          <div className="px-2 py-3">
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1' >#Nature</span>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1' >#Motivation</span>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1' >#Speak</span>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
