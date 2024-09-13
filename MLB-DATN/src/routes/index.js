import Home from "../pages/Home/Home";
import Home2 from "../pages/Home2/Home2";



const routerPulic = [
    {path: '/' , element : Home},
];

const routerPrivate =[
    {path: '/home2', element :Home2},
];


export {routerPulic , routerPrivate}