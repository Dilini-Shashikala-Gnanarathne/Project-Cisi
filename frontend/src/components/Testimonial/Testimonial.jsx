import React, { useState } from 'react';
import patientAvatar from '../../assets/images/patient-avatar.png';
import { HiStar } from 'react-icons/hi';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Muhibur Rahman',
      rating: 5,
      feedback: "I have taken medical services from them. They treat so well and they are providing the best medical services.",
    },
    {
      name: 'Muhibur ',
      rating: 4,
      feedback: "I have taken medical services from them. They treat so well and they are providing the best medical services.",
    },
    {
      name: 'Muhibur Rahman',
      rating: 5,
      feedback: "I have taken medical services from them. They treat so well and they are providing the best medical services.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className='mt-[30px] lg:mt-[55px] flex flex-wrap'>
   <div className="testimonial-box py-[30px] px-5 hover:rounded-8 hover:bg-primaryColor hover:border-none">
        <div className="flex items-center gap-[13px] ">
          <img src={patientAvatar} alt="Patient Avatar" />
          <div>
            <h4 className="text-[18px] leading-[30px] font-semibold">{testimonials[currentIndex].name}</h4>
            <div className="flex items-center gap-[2px]">
              {[...Array(testimonials[currentIndex].rating)].map((_, index) => (
                <HiStar key={index} className='text-yellowColor w-[18px] h-5' />
              ))}
            </div>
          </div>
        </div>
        <p className='text-[14px] leading-7 mt-4 text-textColor font-[400] w-[250px] '>
          "{testimonials[currentIndex].feedback}"
        </p>
      </div><div className="testimonial-box py-[30px] px-5 hover:rounded-8 hover:bg-primaryColor hover:border-none">
        <div className="flex items-center gap-[13px] ">
          <img src={patientAvatar} alt="Patient Avatar" />
          <div>
            <h4 className="text-[18px] leading-[30px] font-semibold">{testimonials[currentIndex].name}</h4>
            <div className="flex items-center gap-[2px]">
              {[...Array(testimonials[currentIndex].rating)].map((_, index) => (
                <HiStar key={index} className='text-yellowColor w-[18px] h-5' />
              ))}
            </div>
          </div>
        </div>
        <p className='text-[14px] leading-7 mt-4 text-textColor font-[400] w-[250px] '>
          "{testimonials[currentIndex].feedback}"
        </p>
      </div><div className="testimonial-box py-[30px] px-5 hover:rounded-8 hover:bg-primaryColor hover:border-none">
        <div className="flex items-center gap-[13px] ">
          <img src={patientAvatar} alt="Patient Avatar" />
          <div>
            <h4 className="text-[18px] leading-[30px] font-semibold">{testimonials[currentIndex].name}</h4>
            <div className="flex items-center gap-[2px]">
              {[...Array(testimonials[currentIndex].rating)].map((_, index) => (
                <HiStar key={index} className='text-yellowColor w-[18px] h-5' />
              ))}
            </div>
          </div>
        </div>
        <p className='text-[14px] leading-7 mt-4 text-textColor font-[400] w-[250px] '>
          "{testimonials[currentIndex].feedback}"
        </p>
      </div>
      <div className="testimonial-box py-[30px] px-5 hover:rounded-8 hover:bg-primaryColor hover:border-none">
        <div className="flex items-center gap-[13px] ">
          <img src={patientAvatar} alt="Patient Avatar" />
          <div>
            <h4 className="text-[18px] leading-[30px] font-semibold">{testimonials[currentIndex].name}</h4>
            <div className="flex items-center gap-[2px]">
              {[...Array(testimonials[currentIndex].rating)].map((_, index) => (
                <HiStar key={index} className='text-yellowColor w-[18px] h-5' />
              ))}
            </div>
          </div>
        </div>
        <p className='text-[14px] leading-7 mt-4 text-textColor font-[400] w-[250px] '>
          "{testimonials[currentIndex].feedback}"
        </p>
      </div>


      <div className="flex justify-between mt-4 w-full">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Testimonial;
















// import React from 'react';
// // import { Pagination } from 'swiper';
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import 'swiper/css';
// // import 'swiper/css/pagination';
// // import patientAvatar from '../../assets/images/patient-avatar.png';
// // import {HiStar} from 'react-icons/hi'
// const Testimonial = () => {
//   return (
//     <div className='mt-[30px] lg:mt-[55px]'>
//         hi
//         {/* <Swiper
//   modules={[Pagination]}
//   spaceBetween={30}
//   slidesPerView={1}
//   pagination={{ clickable: true }}
//   breakpoints={{
//     640: {
//       slidesPerView: 1,
//       spaceBetween: 0,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     1024: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//   }}
// >


//         <SwiperSlide>
//           <div className="py-[30px] px-5 rounded-3">
//             <div className="flex items-center gap-[13px]">
//               <img src={patientAvatar} alt="Patient Avatar" />
//               <div>
//                 <h4 className="text-[18px] leading-[30px] font-semibold">Muhibur Rahman</h4>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper> */}
//     </div>
//   );
// };

// export default Testimonial;
