import Image from 'next/image'
import Services from '@/components/Services/Services'
import Landing from '@/components/Landing/Landing'
import PricingTable from '@/components/Plan/Plan'
import Footer from '@/components/Footer/Footer'
export default function Home() {
  return (
   <>
   <Landing/>

    <PricingTable/>
    <Footer/>
    </>
  )
}
