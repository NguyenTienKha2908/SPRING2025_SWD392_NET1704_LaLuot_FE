import {Route, Routes, BrowserRouter as Router} from "react-router"
import publicRoutes from './routes/Routes';
import { Fragment } from "react";
import WelcomeLayout from "./layout/WelcomeLayout";

const App = () => {
  return (
    <Router>
        <Routes>
            {
                publicRoutes.map((item,index) => {
                    let Layout = WelcomeLayout;
                    if (item.layout) {
                        Layout = item.layout;
                    } else if (item.layout === null) {
                        Layout = Fragment;
                    }
                    const Page = item.conponent;
                    return (
                        <Route
                            key={index}
                            path={item.path}
                            element={
                                <Layout>
                                    <Page/>
                                </Layout>
                            }
                        />
                    )
                })
            }
        </Routes>
    </Router>
  );
};

export default App;
