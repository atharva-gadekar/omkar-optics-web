import { Footer, Navbar } from '../components';
import { Hero, OurPromise, Products, Owner, Testimonials } from '../sections';

const Page = () => (
  <div className="bg-white overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <OurPromise />
    </div>
    <div className="relative">
      <Products />
    </div>
    <div className="relative">
      <Owner />
    </div>
    <div className="relative">
      <Testimonials />
    </div>
    <Footer />
  </div>
);

export default Page;
