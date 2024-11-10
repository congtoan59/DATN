// Public
import Home from '../pages/Home/Home';
import Shoes from '../pages/Products/Shoes/Shoes';
import Hat from '../pages/Products/Hat/Hat';
import Clothes from '../pages/Products/Clothes/Clothes';
import Backpack from '../pages/Products/Backpack/Backpack';
import News from '../pages/News/News';
import SidebarLayout from '../layouts/SidebarLayout/SidebarLayout';
import AccountLayout from '../layouts/AccountLayout/AccountLayout';
import SignUp from '../pages/SignUp/SignUp';
import SignIn from '../pages/Signin/Signin';
import ResetPwd from '../pages/ForgotPassword/ResetPwd/ResetPwd';
import VerifyCode from '../pages/ForgotPassword/VerifyCode/VerifyCode';
import NewPwd from '../pages/ForgotPassword/NewPwd/NewPwd';
import Profile from '../pages/Profile/Profile';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
// Private
import Home2 from '../pages/Home2/Home2';
import ListProduct from '../pages/Admin/Products/ListProduct/ListProduct';
import EditProduct from '../pages/Admin/Products/EditProduct/EditProduct';
import AddProduct from '../pages/Admin/Products/AddProduct/AddProduct';
import SoftDelete from '../pages/Admin/Products/SoftDelete/SoftDelete';

const routerPulic = [
    { path: '/', element: Home },
    { path: '/shoes', element: Shoes, layout: SidebarLayout },
    { path: '/hat', element: Hat },
    { path: '/clothes', element: Clothes },
    { path: '/backpack', element: Backpack, layout: SidebarLayout },
    { path: '/news', element: News },
    { path: '/profile', element: Profile },
    { path: '/sign-in', element: SignIn, layout: AccountLayout },
    { path: '/sign-up', element: SignUp, layout: AccountLayout },
    { path: '/resetPwd', element: ResetPwd, layout: AccountLayout },
    { path: '/verifyCode', element: VerifyCode, layout: AccountLayout },
    { path: '/newPwd', element: NewPwd, layout: AccountLayout },
    { path: '/productDetail/:id', element: ProductDetail },
];

const routerPrivate = [
    { path: '/system/admin', element: Home2 },
    { path: '/system/admin/products', element: ListProduct },
    { path: `/system/admin/products/edit/:id`, element: EditProduct },
    { path: `/system/admin/products/add-product`, element: AddProduct },
    { path: `/system/admin/products/trash-product`, element: SoftDelete },
];

export { routerPulic, routerPrivate };
