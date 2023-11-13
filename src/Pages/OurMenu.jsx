import { Helmet } from "react-helmet-async";
import Cover from "../Components/Shared/Cover";
import menuImg from '../assets/menu/banner3.jpg'
import dessertImg from '../assets/menu/dessert-bg.jpeg'
import SectionHeading from "../Components/Shared/SectionHeading";
import useMenu from "../Hooks/useMenu";
import { LineWave } from "react-loader-spinner";
import MenuCategory from "../Components/Shared/MenuCategory";



export default function OurMenu() {

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

    const offered = menus.filter(menu => menu.category === 'offered');
    const desserts = menus.filter(menu => menu.category === 'dessert');
    const pizzas = menus.filter(menu => menu.category === 'pizza');
    const salads = menus.filter(menu => menu.category === 'salad');
    const soup = menus.filter(menu => menu.category === 'soup');

  return (
    <div >
    <Helmet>
      <title> Bistro Boss / Our menu</title>
    </Helmet>
    <Cover img={menuImg} title={'Our Menu'} subTitle={'Would you like to try a dish?'}  />

    {/* main section start */}

    <SectionHeading heading={'TODAYS OFFER'} subHeading={'Do not miss'} />
    <MenuCategory items={offered}  buttonText={'ORDER YOUR FAVOURITE FOOD'}/>
    <button className="bg-orange-600 p-4"> Click </button>
   
    <Cover img={dessertImg} title={'DESSERTS'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
    <MenuCategory items={desserts}  buttonText={'ORDER YOUR FAVOURITE FOOD'}/>

    <Cover img={dessertImg} title={'PIZZA'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
    <MenuCategory items={pizzas} buttonText={'ORDER YOUR FAVOURITE FOOD'} />

    <Cover img={dessertImg} title={'SALADS'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
    <MenuCategory items={salads}  buttonText={'ORDER YOUR FAVOURITE FOOD'}/>

    <Cover img={dessertImg} title={'SOUP'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
    <MenuCategory items={soup} buttonText={'ORDER YOUR FAVOURITE FOOD'} />
   
    </div>
  )
}