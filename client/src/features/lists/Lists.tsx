import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { EffectCoverflow } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

function Lists(): JSX.Element {
  const lists = useSelector((store: RootState) => store.lists.lists);
  // const [activeSlideId, setActiveSlideId] = useState<string | number>('');
const navigate = useNavigate()
// console.log(activeSlideId);

  // const handleSlideChange = (swiper:typeof Swiper):void => {
  //   const activeSlide = lists[swiper];
  //   if (activeSlide) {
  //     setActiveSlideId(String(activeSlide.id));
  //   }
  // };

  return (
    <div className="swiper-lists">
      <button type="button" className="addList-btn" onClick={() => navigate('/lists/create')}>
      ➕
      </button>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        // onSlideChange={() => handleSlideChange(Swiper)}
        className="my-swiper"
        modules={[EffectCoverflow]}
        effect="coverflow"
        coverflowEffect={{
          scale: 0.5,
          rotate: 0,
          depth: 100,
        }}
      >
        {lists.map((list) => (
          <SwiperSlide key={list.id}>
            <div>
              <button
                type="button"
                aria-label={`Add list ${list.fullName}`}
                style={{
                    marginTop: '50px',
                  backgroundColor: `${list.color}`,
                  borderRadius: '50%',
                  width: '130px',
                  height: '130px',
                }}
                onClick={() => navigate(`/lists/${list.id}`)}
              />
            </div>
            <p>{list.fullName}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Lists;
