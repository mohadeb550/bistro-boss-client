import { useState } from "react";
import Cover from "../Components/Shared/Cover";
import ourShopImg from '../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../Hooks/useMenu";
import { LineWave } from "react-loader-spinner";
import OrderTab from "../Components/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


export default function OurShop() {

  const { menus, isLoading } = useMenu();
  // const [ tabIndex , setTabIndex ] = useState(0)
  const { category } = useParams();

  const categories = ['salad', 'pizza','soup','dessert','drinks']
  const currentIndex = categories.indexOf(category);
  
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

const drinks = menus.filter(menu => menu.category === 'drinks');
const desserts = menus.filter(menu => menu.category === 'dessert');
const pizzas = menus.filter(menu => menu.category === 'pizza');
const salads = menus.filter(menu => menu.category === 'salad');
const soup = menus.filter(menu => menu.category === 'soup');


  return (
    <>
     <Helmet>
      <title> Bistro Boss / Our Shop </title>
    </Helmet>

    <Cover img={ourShopImg} title={'Our Shop'} subTitle={'Would you like to try a dish?'} />

    <Tabs defaultIndex={currentIndex} >
    <TabList>
      <Tab> SALADS</Tab>
     <Tab> PIZZA </Tab>
     <Tab> SOUPS </Tab>
     <Tab> DESSERTS </Tab>
     <Tab> DRINKS </Tab>
    </TabList>


    <TabPanel><OrderTab items={salads} /></TabPanel>
    <TabPanel><OrderTab items={pizzas} /></TabPanel>
    <TabPanel><OrderTab items={soup} /></TabPanel>
    <TabPanel><OrderTab items={desserts} /></TabPanel>
    <TabPanel><OrderTab items={drinks} /></TabPanel>

    </Tabs>
    </>
  )
}
