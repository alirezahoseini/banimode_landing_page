// Components 
import HeadSection from './components/HeadSection/HeadSection'
import OfferProduct from "./components/OfferProduct/OfferProduct";
import ProductsSection from "./components/ProductsSection/ProductSection";
import PlanSection from "./components/PlanSection/PlanSection";
import SocialSection from "./components/SocialSection/SocialSection";
import OfferCodesSection from "./components/OfferCodesSection/OfferCodesSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='container-fluid px-lg-2'>
      
        <HeadSection />
        <OfferProduct />
        <ProductsSection />
        <PlanSection />
        <SocialSection />
        <OfferCodesSection />
        <Footer />
    </div>
  );
}

export default App;
