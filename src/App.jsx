import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { Fragment } from 'react'; // thẻ chỉ để chứa
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routerPulic } from './routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';

function App() {
    return (
        <>
            {/* <Provider store={store}>  */}
            {/* cung cấp stor cho toàn bộ ứng dụng */}
            <Router>
                {/* <DefaultLayout /> */}

                <Routes>
                    {routerPulic.map((route, index) => {
                        const Page = route.element;

                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>

                {/* <Routes>
                        {routerPrivate.map((route, index) => {
                            const Page = route.element;

                            let Layout = AdminLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            )
                        })}
                    </Routes> */}
                <ToastContainer />
            </Router>
            {/* </Provider> */}
        </>
    );
}

export default App;
