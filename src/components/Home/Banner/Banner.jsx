import "./Banner.scss";
import BannerImg from "../../../assets/download (2) (1).png"
const Banner = () => {
    return <div className="hero-banner">
<div className="content">
    <div className="text-content">
        <h1>Dignizant Vehicle buy and sell.</h1>
        <p>
            Buy Cars, Bikes and trucks, Cycles.
        </p>
        <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
        </div>
    </div>
    <img className="banner-img" src={BannerImg} alt=""/>
</div>
    </div>;
};

export default Banner;
