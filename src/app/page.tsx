
import React from 'react';
// import LandingPage from './Components/Header' // Uncomment if LandingPage is needed
import Categories from './components/Categories';
import Header from './components/Header';
import Navbar from './components/Navbar';
import FromMenu from './components/FromMenu';
import ChefGrid from './components/chefGrid';
import Labelpic from './components/labelpic';
import SevenHero from './components/Testimonial';
import BlogPost from './components/BlogPost';

const Home = () => {
  return (
    <div>
      {/* Navbar component to display navigation menu */}
      <Navbar/>
      
      {/* Header component for the top section of the page */}
      <Header/>
      
      {/* Categories component to display various categories */}
      <Categories/>
      
      {/* FromMenu component to show the menu section */}
      <FromMenu/>
      
      {/* Cheefs component to display chef-related content */}
      {/* <Cheefs/> */}
      
      {/* ChefGrid component to display chef images in a grid layout */}
      <ChefGrid/>

      {/* FromMenu component to show the menu section */}
      {/* <FromMenu/> */}
      
      {/* SevenHero component to display testimonials */}
      <SevenHero/>
      
      {/* Labelpic component for showcasing images or promotional content */}
      <Labelpic/>
      
      {/* BlogPost component to display blog posts */}
      <BlogPost/>
      
      {/* Footer component to display the footer of the page */}
      {/* <Footer/> */}
    </div>
  );
}

export default Home;
