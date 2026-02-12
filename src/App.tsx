import RSVPForm from './components/RSVPForm'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import InformationSection from './components/InformationSection'
import OurStory from './components/OurStory'
import DressCode from './components/DressCode'
import DefisPhotos from './components/Defisphotos'
import CountDouwn from './components/CountDown'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <InformationSection />
      <OurStory />
      <DressCode />
      <RSVPForm />
      <CountDouwn />
      <DefisPhotos />
    </>
  )
}

export default App