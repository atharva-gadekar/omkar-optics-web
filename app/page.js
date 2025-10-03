import { Footer, Navbar } from '../components';
import { Hero, OurPromise, WhyChooseUs, Products, Services, Owner, Testimonials } from '../sections';

const Page = () => (
  <div className="bg-white overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative mt-8">
      <OurPromise />
    </div>
    <div className="relative mt-8">
      <WhyChooseUs />
    </div>
    <div className="relative mt-8">
      <Products />
    </div>
    <div className="relative mt-8">
      <Services />
    </div>
    <div className="relative mt-8">
      <Owner />
    </div>
    <div className="relative mt-8">
      <Testimonials />
    </div>
    <Footer />
  </div>
);

export default Page;
