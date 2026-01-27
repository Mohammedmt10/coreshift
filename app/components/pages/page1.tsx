import { HeroSection } from '../heroSection'
import { NavBar } from '../navBar'

export const Page1 = () => {
  return (
    <div>
        <div className='flex justify-center'>
            <NavBar />
        </div>
        <HeroSection />
    </div>
  )
}
