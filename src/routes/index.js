// Public
import Unauthorized from '../pages/Unauthorized/Unauthorized';
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
import Order from '../pages/Order/Order';
import Cart from '../pages/Cart/Cart';
import OrderSuccess from '../pages/Order/OrderSuccess';
import OrderDetails from '../pages/OrderDetails/OrderDetails';
// Private
import Home2 from '../pages/Home2/Home2';
import ListProduct from '../pages/Admin/Products/ListProduct/ListProduct';
import EditProduct from '../pages/Admin/Products/EditProduct/EditProduct';
import AddProduct from '../pages/Admin/Products/AddProduct/AddProduct';
import SoftDelete from '../pages/Admin/Products/SoftDelete/SoftDelete';
import AddCategory from '../pages/Admin/Category/AddCategory/AddCategory';
import EditCategory from '../pages/Admin/Category/EditCategory/EditCategory';
import ListCategory from '../pages/Admin/Category/ListCategory/ListCategory';
import SoftDeleteCategory from '../pages/Admin/Category/SoftDeleteCategory/SoftDeleteCategory';



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
    { path: '/cart', element: Cart },
    { path: '/checkout', element: Order, layout: null },
    { path: '/order-success/:orderId', element: OrderSuccess, layout: null },
    { path: '/orderDetails/:id', element: OrderDetails },
    { path: '/unauthorized', element: Unauthorized, layout: null }
];

const routerPrivate = [
    { path: '/system/admin', element: Home2 },
    { path: '/system/admin/products', element: ListProduct },
    { path: `/system/admin/products/edit/:id`, element: EditProduct },
    { path: `/system/admin/products/add-product`, element: AddProduct },
    { path: `/system/admin/products/trash-product`, element: SoftDelete },
    { path: '/system/admin/category', element: ListCategory },
    { path: `/system/admin/category/edit/:id`, element: EditCategory },
    { path: `/system/admin/category/add-category`, element: AddCategory },
    {
        path: `/system/admin/category/trash-category`,
        element: SoftDeleteCategory,
    },
];

export { routerPulic, routerPrivate };
