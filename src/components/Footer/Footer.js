import '../../files/styles/css/Footer.css';
//Components
import Title from "../Title/Title";
import FooterOption from './FooterOption';

export default function Footer() {
    return(
        <footer>
            <div className="row m-0 p-0">
                <FooterOption />
                <FooterOption />
                <FooterOption />
                <FooterOption />
            </div>
            <div className="row p-0 m-0">
                <div className="col-12 p-0 m-0 mt-5 my-3">
                    <Title />
                </div>
                <div className="col-md-8 col-lg-9 p-0 m-0">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.
                </div>
                <div className="col-md-4 col-lg-3 p-0 m-0">
                    <div className="row m-0 p-0 w-100  mt-4 mt-md-0 text-center">
                        <div className="col-6 m-0 p-0">
                            <img src="./img/enamad.png" className='img-fluid' alt="اینماد" />
                        </div>
                        <div className="col-6 m-0 p-0">
                            <img src="./img/samandehi.png" className='img-fluid' alt="ساماندهی" />
                        </div>
                    </div>
                </div>
                <div className="copy font-m text-gray-dark col-12 my-5 text-center">
                    تمام حقوق برای این وبسایت محفوظ است.
                </div>
            </div>
        </footer>
    );
}