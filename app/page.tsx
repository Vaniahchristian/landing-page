import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Categories from '@/components/Categories'
import WhyDirtTrails from '@/components/WhyDirtTrails'
import Sustainability from '@/components/Sustainability'
import ForOperators from '@/components/ForOperators'
import Partners from '@/components/Partners'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <HowItWorks />
      <Categories />
      <WhyDirtTrails />
      <Sustainability />
      <ForOperators />
      <Partners />
      <Footer />
    </main>
  )
}
