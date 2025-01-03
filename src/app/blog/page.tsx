import React from 'react'
import Hero from './Hero' // Import the Hero component
import Navbar from '../components/Navbar' // Import the Navbar component
import Footer from '../components/Footer' // Import the Footer component

const BlogPage = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
    </div>
  )
}

export default BlogPage