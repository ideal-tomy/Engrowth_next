'use client'; // app routerでは必須

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // コアCSSのみ

export default function SwiperSamplePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Swiper Basic Test</h1>
      {isClient ? (
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          style={{ border: '2px solid blue', height: '200px' }} // 確認のため枠線と高さを指定
        >
          <SwiperSlide style={{ background: '#eee', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Slide 1</SwiperSlide>
          <SwiperSlide style={{ background: '#ddd', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Slide 2</SwiperSlide>
          <SwiperSlide style={{ background: '#ccc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Slide 3</SwiperSlide>
        </Swiper>
      ) : (
        <p>Loading Swiper...</p>
      )}
    </div>
  );
} 