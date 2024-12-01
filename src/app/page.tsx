'use client';
import Banner from './components/Banner';
import Services from './components/Services';
import Container from './components/utils/Container';
import Header from './components/Header';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { ScrollSmoother } from "gsap/all";
import { ScrollToPlugin } from "gsap/all";
import useDeviceType from "./components/hooks/useDeviceType";
import useSmoothScroll from "./components/hooks/useSmoothScroll";

const services = [
  {
      id:1,
      imgSrc:"/static/InteriorSolutions.svg",
      title:"interior solutions"
  },
  {
      id:2,
      imgSrc:"/static/propertySolutions.svg",
      title:"re-sale property"
  },
  {
      id:3,
      imgSrc:"/static/buildingConstructions.svg",
      title:"building constructions"
  },
  {
      id:4,
      imgSrc:"/static/renovationsModifications.svg",
      title:"renovations and modifications"
  },
  {
      id:5,
      imgSrc:"/static/legalLogistics.svg",
      title:"legal and logistics services"
  },{
      id:6,
      imgSrc:"/static/consultancyService.svg",
      title:"Design consultancy service"
  },
]

gsap.registerPlugin(ScrollTrigger,ScrollSmoother,ScrollToPlugin);



export default function Home() {

  return (
     <div className="app">
     <Header />
     <Banner />
     <section className="bg-services-bg">
      <Container className="grid grid-cols-1 py-10 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <Services serviceItems={services} />
      </Container>
     </section>
     </div>
  );
}
