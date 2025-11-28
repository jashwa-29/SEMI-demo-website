import AboutSemiSection from '../Components/AboutSemiSection'
import BecomeSemiMemberSection from '../Components/BecomeSemiMemberSection'
import HeroSlider from '../Components/HeroSlider'
import HomeNewsEducationSection from '../Components/HomeNewsEducationSection'
import PresidentsMessage from '../Components/PresidentsMessage'

const Home = () => {
  return (
   <main>
   <HeroSlider />
   <PresidentsMessage/>
   <AboutSemiSection/>
   <HomeNewsEducationSection/>
   <BecomeSemiMemberSection/>
   </main>
  )
}

export default Home