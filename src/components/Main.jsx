import React from 'react'
import Hero from '../bodyChildComponents/Hero';
import EditorPicks from '../bodyChildComponents/EditorPicks';
import BestSellerProducts from '../bodyChildComponents/BestSellerProducts';
import Banner from '../bodyChildComponents/Banner';
import FeaturedPosts from '../bodyChildComponents/FeaturedPosts';

function Main() {
  return (
    <main>
      <Hero/>
      <EditorPicks/>
      <BestSellerProducts/>
      <Hero/>
      <Banner/>
      <FeaturedPosts/>
    </main>
  )
}

export default Main