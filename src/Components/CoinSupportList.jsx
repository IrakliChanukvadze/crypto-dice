import React, { useContext, useEffect, useState } from "react";
import {
  Slider,
  Slide,
  CarouselProvider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Context } from "../Context/Context";

const CoinSupportList = () => {
  const { trendingCoins } = useContext(Context);
  const [num, setNum] = useState(Math.floor(window.innerWidth / 190));

  useEffect(() => {
    const resizeListener = () => {
      if (window.innerWidth > 1279) {
        setNum(8);
      } else if (window.innerWidth > 1279) {
        setNum(6);
      } else if (window.innerWidth > 639) {
        setNum(4);
      } else {
        setNum(2);
      }
    };
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  console.log(num);
  return (
    <div className="w-full bg-[#272727] py-10">
      <div className="py-10 flex flex-col sm:flex-row sm:gap-[9px] m-auto items-center justify-center">
        <h2 className="text-white text-5xl text-center">WE SUPPORT</h2>
        <h2 className="text-white text-5xl text-center">ALL KIND</h2>
      </div>

      <div className="h-36">
        <CarouselProvider
          naturalSlideHeight={10}
          naturalSlideWidth={10}
          totalSlides={10}
          visibleSlides={num}
          isPlaying={true}
          interval={1500}
        >
          <Slider>
            {trendingCoins?.map((item) => (
              <Slide key={item.id}>
                <div className="flex items-center justify-center py-6">
                  <img src={item.image} className="w-24 h-24 " />
                </div>
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default CoinSupportList;
