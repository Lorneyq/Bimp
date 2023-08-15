import { useEffect, useRef } from 'react';
import styles from './Carousel.module.scss';

import { FreeMode, Keyboard, Mousewheel, Scrollbar } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import MetricUtils from '../../../utils/MetricUtils';

const Carousel = props => {
  const { hourlyData, icons, nowHours } = props;

  const swiperRef = useRef(null);
  const toSlide = nowHours - 1;

  useEffect(() => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideTo(toSlide);
    }
  }, [nowHours]);

  const { degrees, speed } = MetricUtils();

  return (
    <div className={`${styles.Carousel} dark:bg-white/20`}>
      <Swiper
        ref={swiperRef}
        modules={[Scrollbar, Mousewheel, Keyboard, FreeMode]}
        spaceBetween={15}
        slidesPerView={3}
        speed={500}
        scrollbar={{ draggable: true }}
        freeMode
        mousewheel
        keyboard
      >
        {hourlyData?.map(hourData => (
          <SwiperSlide
            key={hourData.time}
            className={`${styles.card} dark:bg-dark`}
            title={hourData.condition}
          >
            <span className={styles.temperature}>
              {hourData.temperature}
              {degrees}
            </span>
            <img
              className={styles.icon}
              src={icons?.[hourData.icon]}
              alt={hourData.condition}
            />
            <span className={styles.windSpeed}>
              {hourData.windSpeed}
              {speed}
            </span>
            <span className={`${styles.time} dark:text-white/60`}>
              {hourData.time}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
