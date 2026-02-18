import RSVPForm from './components/RSVPForm'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import InformationSection from './components/InformationSection'
import OurStory from './components/OurStory'
import DressCode from './components/DressCode'
import DefisPhotos from './components/Defisphotos'
import CountDouwn from './components/CountDown'
import Reveal from './components/Reveal'

function App() {
  return (
    <>
      <Navbar />
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <InformationSection />
      </Reveal>
      <Reveal>
        <OurStory />
      </Reveal>
      <Reveal>
        <DressCode />
      </Reveal>
      <Reveal>
        <RSVPForm />
      </Reveal>
      <Reveal>
        <CountDouwn />
      </Reveal>
      <Reveal>
        <DefisPhotos />
      </Reveal>
    </>
  )
}

export default App