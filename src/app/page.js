import Topnav from "./Components/topnav";
import Middlenav from "./Components/middlenav";
import BottomNavbar from "./Components/bottomnav";
import Carousel from "./Components/carousel";
import PadCarousel from "./Components/padCarousel";
import Dapper from "./Components/dapper";
import TopCarousel from "./Components/topOffers";
import Condom from "./Components/condom";
import Footer from "./Components/footer";
import Category from "./Components/category";


export default function Page(){
   return(
     <div>
        {/* Here Topnav implemented  */}
          <Topnav/>
        {/* Here Middlenav implemented  */}
          <Middlenav/>
        {/* Here Bottomnav implemented  */}
          <BottomNavbar/>
        {/* Here Carousel implemented  */}
          <Carousel/>
        {/* Here category implemented  */}
          <Category/>
        {/* Here padCarousel implemented  */}
          <PadCarousel/>
        {/* Here Dapper implemented  */}
          <Dapper/>
        {/* Here Dapper implemented  */}
          <TopCarousel/>      
        {/* Here Condom implemented  */}
          <Condom/>
        {/* Here Footer implemented  */}
          <Footer/>  

     </div>
   )
}