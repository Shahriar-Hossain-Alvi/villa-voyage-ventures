// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const HomeBanner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='h-48 md:h-96 lg:h-96 w-full
                    ' src="https://i.ibb.co/rQMwhFg/Secluded-Mountain-Chalet.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-48 md:h-96 lg:h-96 w-full
                    ' src="https://i.ibb.co/BCkR16J/roadside-Motel.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-48 md:h-96 lg:h-96 w-full
                    ' src="https://i.ibb.co/3kQm3QJ/tropical-Resort.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-48 md:h-96 lg:h-96 w-full
                    ' src="https://i.ibb.co/DYrSsS0/mountain-Cabin.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-48 md:h-96 lg:h-96 w-full
                    ' src="https://i.ibb.co/nBFR08D/forest-Lodge.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-48 md:h-96 lg:h-96 w-full
                    ' src="https://i.ibb.co/Lk1rd17/Charming-Countryside-Guesthouse.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-48 md:h-96 lg:h-96 w-full
                    ' src="https://i.ibb.co/fQm5sHM/City-Center-Boutique-Hotel.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-48 md:h-96 lg:h-96 w-full
                    ' src="https://i.ibb.co/Vx8bymc/Ski-Resort-Retreat.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-48 md:h-96 lg:h-96 w-full
                    ' src="https://i.ibb.co/q1HG3ys/Seaside-Bedand-Breakfast.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-48 md:h-96 lg:h-96 w-full
                    ' src="https://i.ibb.co/7gcCs83/Luxury-Island-Resort.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-48 md:h-96 lg:h-96 w-full
                    ' src="https://i.ibb.co/tB9Gss4/Historic-Downtown-Hotel.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-48 md:h-96 lg:h-96 w-full
                    ' src="https://i.ibb.co/rQMwhFg/Secluded-Mountain-Chalet.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default HomeBanner;