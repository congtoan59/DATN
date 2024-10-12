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

// Private
import Home2 from '../pages/Home2/Home2';

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
];

const routerPrivate = [{ path: '/home2', element: Home2 }];

export { routerPulic, routerPrivate };
