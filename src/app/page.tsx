
import Chooseiteam from "@/chooseiteam";
import Crockery from "@/crockery";
import Foody from "@/foody";
import Hero from "@/herosection";
import Navbar from "@/navbar";


export default function Home(){
  return(
    <><Navbar />
    <Hero />
    <Foody />
    <Chooseiteam />
    <Crockery />
    
    </>
  )
}