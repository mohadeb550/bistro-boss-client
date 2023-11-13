import { LineWave } from "react-loader-spinner";
import Banner from "../Components/Banner";
import Category from "../Components/Category";
import FeaturedSection from "../Components/FeaturedSection";
import MenuCategory from "../Components/Shared/MenuCategory";
import Testimonials from "../Components/Testimonials";
import { Helmet } from 'react-helmet-async';
import useMenu from "../Hooks/useMenu";
import SectionHeading from "../Components/Shared/SectionHeading";


export default function Home() {

  
  const { menus, isLoading } = useMenu();

  if( isLoading ){return  <LineWave
      height="100"
      width="100"
      color="#4fa94d"
      ariaLabel="line-wave"
      wrapperStyle={{}}
      wrapperClass="w-20 md:w-24 relative left-2/4"
      visible={true}
      firstLineColor=""
      middleLineColor=""
      lastLineColor=""
    />}

  const popular = menus.filter(menu => menu.category === 'popular');
  

  return (
    < >
    <Helmet>
      <title> Bistro Boss / Home</title>
    </Helmet>

    <Banner/>
    <Category/>
    <SectionHeading heading={'POPULAR ITEMS'} subHeading={'checkout our popular items'} />
    <MenuCategory items={popular} buttonText={'View Full Menu'} />
    <FeaturedSection/>
    <Testimonials/>
    </>
  )
}
