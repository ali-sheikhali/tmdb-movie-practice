import React from 'react'
import HeroHeader from '../components/HeroHeader'
import TrendingMovies from '../components/api/TrendingMovies'

function Home() {
  return (
    <div>
      <HeroHeader />
      <TrendingMovies />
    </div>
  )
}

export default Home