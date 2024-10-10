// Public
import Home from "../pages/Home/Home";
import Shoes from "../pages/Products/Shoes/Shoes";
import Hat from "../pages/Products/Hat/Hat";
import Clothes from "../pages/Products/Clothes/Clothes";
import Backpack from "../pages/Products/Backpack/Backpack";
import News from "../pages/News/News";
// import ProductDetail from "../pages/ProductDetail/components/ProductDetail";

//layouts
import SidebarLayout from '../layouts/SidebarLayout/SidebarLayout'

// Private
import Home2 from "../pages/Home2/Home2";



const routerPulic = [
    {path: '/' , element : Home},
    {path: '/shoes' , element : Shoes , layout: SidebarLayout} ,
    {path: '/hat' , element : Hat},
    {path: '/clothes' , element : Clothes},
    {path: '/backpack' , element : Backpack ,layout: SidebarLayout},
    {path: '/news' , element : News },
    // {path: '/productDetail/:id' , element : ProductDetail },


];

const routerPrivate =[
    {path: '/home2', element :Home2},
];


export {routerPulic , routerPrivate}