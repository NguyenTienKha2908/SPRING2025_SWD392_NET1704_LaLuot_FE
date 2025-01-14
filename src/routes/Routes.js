
import MainLayout from '../layout/MainLayout';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import SignUp from '../pages/signup/SignUp';
import routesConfig from './../config/Config';
const publicRoutes = [
    {
        path: routesConfig.home,
        conponent:Home,
        layout: MainLayout
    },
    {
        path: routesConfig.login,
        conponent:Login,        
    },
    {
        path: routesConfig.signup,
        conponent:SignUp,        
    },

]
export default publicRoutes;