import '../../../files/styles/css/ProductCart.css';
import Price from "../../OfferProduct/Price";
import DeletedPrice from "../../OfferProduct/DeletedPrice";
import BadgeSticky from '../../OfferProduct/BadgeSticky';
import AddToCartButton from '../../Button/AddToCartButton';

export default function ProductCart({title = 'نام  محصول وارد نشده است', img = './not-img.png', percent = 0, price = 0, delPrice = 0}) {
    return(
        <div className="product-cart col-md-6 col-lg-3 p-2 p-lg-3 my-3 mx-auto">
            <a href='#' className="cart-img">
                <img src={img} className='mx-auto d-block' alt="product cart" />
                <BadgeSticky percent={percent}/>
            </a>
            <div className="cart-body">
                <a className='cart-title' href="#">{title}</a>
                <div className='d-flex justify-content-between align-items-end'>
                    <AddToCartButton />
                    <span className='d-inline-flex flex-column text-left'>
                        <DeletedPrice deletedPrice={delPrice} />
                        <Price price={price}/>
                    </span>
                </div>
            </div>
        </div>
    );
}
