import DefaultLayout from './component/DefaultLayout/DefaultLayout';
import { Fragment } from 'react'; // thẻ chỉ để chứa
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routerPulic, routerPrivate } from './routes';


// import { Provider } from 'react-redux';


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
                    
                </Router>
            {/* </Provider> */}
        </>
    );
}

export default App;
