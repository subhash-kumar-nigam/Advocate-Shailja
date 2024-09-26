import React from 'react'
import Slider from '../../components/Slider'
import Focussector from '../../components/Focussector'
import Marquee from '../../components/Marquee'
import JoinNow from '../../components/JoinNow'
import Why_choose_us from '../about/Why_choose_us'
import FullScreenVideo from '../../components/FullScreenVideo'
import NewsUpdate from '../../components/NewsUpdate'
import OtherSector from '../about/OtherSector'
import OurPArtners from '../about/OurPArtners'
import GalleryHome from '../media/GalleryHome'
import ContactHome from '../contact/ContactHome'
const Home = () => {
  return (
    <div>
      <Slider />
      <Marquee />
      <Focussector />
      <OtherSector />
      <JoinNow />
      <Why_choose_us />
      {/* <FullScreenVideo /> */}
      <NewsUpdate />   
      <OurPArtners />
      <GalleryHome />
      <ContactHome />
    </div>
  )
}

export default Home
