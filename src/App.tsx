import RSVPForm from './components/RSVPForm'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import InformationSection from './components/InformationSection'
import OurStory from './components/OurStory'
import DressCode from './components/DressCode'
import DefisPhotos from './components/Defisphotos'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <InformationSection />
      <OurStory />
      <DressCode />
      <RSVPForm />
      <DefisPhotos />
    </>
  )
}

export default App