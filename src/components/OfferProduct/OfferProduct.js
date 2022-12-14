// Styles
import '../../files/styles/css/OfferProduct.css'
// Components 
import Title from "../Title/Title";
import SecondTitle from "../Title/SecondTitle";
import Button from "../Button/Button";
import Price from "./Price";
import Badge from "./Badge";
import DeletedPrice from "./DeletedPrice";
import Description from "./Description";
import OfferImageRight from "./OfferImages/OfferImageRight";


function OfferProduct() {
  return (
    <div className='offer-product mb-5'>
        <div className="row mx-0 px-0 mt-5 pt-4 px-1 px-lg-0">
            <div className="col-12 p-0 d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between">
                <div>
                    <Title title="پیشنهاد شگفت انگیز"/>
                    <SecondTitle title='هر ساعت یک محصول با تخفیف باورنکردنی'/>
                </div>
                <div>
                    <span className='end-badge'>تمام شد!</span>
                </div>
            </div>
            <div className="row mx-0 px-0 w-100 mt-5">
                {/* Offer Product Image  */}
                <OfferImageRight />
                {/* Offer Product Info */}
                <div className="col-lg-6 p-0 m-0 offer-product-info mt-5 mt-lg-0 d-inline-flex flex-column justify-content-center">
                    <h4 className='font-weight-bold mt-5 mt-lg-0'>کت تک مردانه ال سی من</h4>
                    <div className="price my-4">
                        <div className='d-flex align-items-center'>
                            <DeletedPrice deletedPrice='3,670,000'/>
                            <Badge percent='18'/>
                        </div>
                        <Price price='2,936,000'/>
                    </div>
                    <Description description='تهیه شده از بهترین پارچه های ایتالیایی' />
                    <Description description="مناسب برای مهمانی رسمی و نیمه رسمی"  />
                    <div className='mt-4'>
                        <Button title='خرید کنید' iconName='bag-2'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default OfferProduct;