import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const RootLayer = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1>Welcome to the Root Layer</h1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayer;