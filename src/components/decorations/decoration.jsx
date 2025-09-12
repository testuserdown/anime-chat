import "./decorations.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { heros } from "../../mocks/ai";
import { useNavigate } from "react-router-dom";

// import required modules
import { Pagination, Navigation, EffectCards } from "swiper/modules";

const ENV = window.__ENV || {};
const siteTitle = ENV.SITE_TITLE || "Anime Legends";

export default function AISwiper() {
  const navigate = useNavigate();
  return (
    <div className="ai-swiper frame gradient-bg">
      <h1 className="w100 df jcc chat-title">{siteTitle}</h1>
      <h2 className="w100 df jcc">Select to talk to your favorite character</h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        navigation={true}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 120,
          modifier: -5,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCards, Pagination, Navigation]}
      >
        {heros.map((hero, index) => (
          <SwiperSlide
            className="swiper-slide"
            key={index}
            onClick={() => navigate(`/chat/${index}`)}
          >
            <figure className="frame">
              <img src={hero.img} alt="hero" />
              <span className="corner-right-bottom"></span>
              <span className="corner-left-bottom"></span>
            </figure>
            <h1 className="w100 p-r">
              {hero.name}
              <i>
                {/* <img src={fire} alt="fire" className="fire-effect" /> */}
              </i>
            </h1>
            <span className="w100 df fdc aic">
              <strong>ABOUT:</strong> <br />
              {hero.description}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
      <span className="corner-right-bottom"></span>
      <span className="corner-left-bottom"></span>
    </div>
  );
}
