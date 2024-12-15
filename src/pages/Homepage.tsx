import Hero from '@/components/main/Hero'
import About from '@/components/main/About'
import { FloatingEmojis } from './Page404'
const Homepage = () => {
  return (
    <div>
      <Hero />
      <About />
      <FloatingEmojis />
    </div>
  )
}

export default Homepage
