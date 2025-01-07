import Chooseiteam from "@/chooseiteam";
import Foodyproduct from "@/components/foodyproduct";

import Crockery from "@/crockery";
import Foody from "@/foody";
import Iteam from "@/iteam"
import Navbar from "@/navbar";
export default function Home(){
  return(
    <>
  <Navbar />
    <Foody />
    <Chooseiteam />
    <Crockery />
    <Foodyproduct />
    <Iteam />
    </>
  )
}