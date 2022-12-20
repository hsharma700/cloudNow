import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import './Home.scss'
import Main1 from './main1/Main1'
import Main2 from './main2/Main2'
import Main3 from './main3/Main3'
import Main4 from './main4/Main4'
import Main5 from './main5/Main5'
import Main6 from './main6/Main6'
function Home() {
  return (
    <div className='home'>
        <Header/>
        <Main1/>
        <Main2/>
        <Main3/>
        <Main4/>
        <Main5/>
        <Main6/>
        <Footer/>
    </div>
  )
}

export default Home