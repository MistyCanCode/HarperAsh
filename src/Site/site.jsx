// components

import Navbar from '../Navbar/navbar';
import Home from '../Home/home';
import Stylists from '../Stylists/stylists';
import Inspiration from '../Inspiration/inspiration';
import Pricing from '../Pricing/pricing';
import Appointments from '../Appointments/appointments';
import Footer from '../Footer/footer';

const Site = () => {

    return (
        <>
            <Navbar />
            <Home />
            <Stylists />
            <Inspiration />
            <Pricing />
            <Appointments />
            <Footer />
        </>
    )
}
export default Site