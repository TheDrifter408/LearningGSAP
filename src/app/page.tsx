'use client';
import Banner from './components/Banner';
import Services from './components/Services';
import Container from './components/utils/Container';

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

export default function Home() {

  return (
    <>
     <Banner />
     <section className="bg-services-bg">
      <Container className="grid grid-cols-1 py-10 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <Services serviceItems={services} />
      </Container>
     </section>
    </>
    
  );
}
