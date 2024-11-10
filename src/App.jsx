import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import AdminLayout from './layouts/AdminLayout/AdminLayout';
import { Fragment } from 'react'; // thẻ chỉ để chứa
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routerPulic, routerPrivate } from './routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TitleUpdate from './component/TitleUpdate/TitleUpdate';
function App() {
    return (
        <>
            <Router>
                {/* <DefaultLayout /> */}
                <TitleUpdate />

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
                                    // <PrivateRoute
                                    //     allowedRoles={['admin', 'manager']}
                                    // >
                                    <Layout>
                                        <Page />
                                    </Layout>
                                    // </PrivateRoute>
                                }
                            />
                        );
                    })}
                </Routes>

                <Routes>
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
                        );
                    })}
                </Routes>
                <ToastContainer />
            </Router>
        </>
    );
}

export default App;
