"use client";  // 이 파일이 클라이언트 컴포넌트임을 명시

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';



import Image from 'next/image';
//이미지 슬라이드 될 이미지들
const images = [
    "/images/aion1.png",
    "/images/aion2.png",
    "/images/aion3.png",
    "/images/aion4.png",
];


const AIPlatformPage: React.FC = () => {
    const swiperRef = useRef<any>(null);

    return (
        <div className="flex flex-col min-h-screen">
            {/*/!* 섹션 1 *!/*/}
            {/*<section className="relative w-full h-screen">*/}
            {/*    <Swiper*/}
            {/*        modules={[Autoplay]}*/}
            {/*        autoplay={{ delay: 6000, disableOnInteraction: false }} // 자동 슬라이드, 3초마다*/}
            {/*        loop={true} // 슬라이드를 무한 루프로 설정*/}
            {/*        className="h-full"*/}
            {/*        ref={swiperRef}*/}
            {/*        allowTouchMove={true} // 터치 슬라이드 활성화*/}
            {/*    >*/}
            {/*        {images.map((src, index) => (*/}
            {/*            <SwiperSlide key={index}>*/}
            {/*                <div className="relative w-full h-full flex items-center justify-center">*/}
            {/*                    <img*/}
            {/*                        src={src}*/}
            {/*                        alt={`Slide ${index}`}*/}
            {/*                        className="object-cover w-full h-full"*/}
            {/*                    />*/}
            {/*                </div>*/}
            {/*            </SwiperSlide>*/}
            {/*        ))}*/}
            {/*    </Swiper>*/}
            {/*</section>*/}

            {/* 섹션 구분선 */}
            <div className="border-t border-gray-300"></div>


            {/* 섹션 2 */}
            <section className="relative w-full h-screen">
                <Image
                    src="/images/aion7.png"  // 섹션 2 이미지 경로
                    alt="Section 2 Image"
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </section>

            {/* 섹션 2 */}
            <section className="relative w-full h-screen">
                <Image
                    src="/images/aion4.png"  // 섹션 2 이미지 경로
                    alt="Section 2 Image"
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </section>

            {/* 섹션 3 */}
            <section className="relative w-full h-screen">
                <Image
                    src="/images/aion5.png"  // 섹션 3 이미지 경로
                    alt="Section 3 Image"
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </section>

            {/* 섹션 4 */}
            <section className="relative w-full h-screen">
                <Image
                    src="/images/aion6.png"  // 섹션 4 이미지 경로
                    alt="Section 4 Image"
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </section>

            <section className="relative w-full h-screen">
                <Image
                    src="/images/aion1.png"  // 섹션 4 이미지 경로
                    alt="Section 4 Image"
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </section>

            <section className="relative w-full h-screen">
                <Image
                    src="/images/aion2.png"  // 섹션 4 이미지 경로
                    alt="Section 4 Image"
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </section>

            <section className="relative w-full h-screen">
                <Image
                    src="/images/aion3.png"  // 섹션 4 이미지 경로
                    alt="Section 4 Image"
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </section>

            {/* 섹션 5 */}
            <section className="relative w-full h-screen">
                <Image
                    src="/images/aion8.png"  // 섹션 4 이미지 경로
                    alt="Section 4 Image"
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </section>

            {/* 섹션 6 */}
            <section className="relative w-full h-screen">
                <Image
                    src="/images/aion9.png"  // 섹션 4 이미지 경로
                    alt="Section 4 Image"
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </section>

            {/* 섹션 7 */}
            <section className="relative w-full h-screen">
                <Image
                    src="/images/aion10.png"  // 섹션 4 이미지 경로
                    alt="Section 4 Image"
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </section>

            {/* 섹션 8*/}
            <section className="relative w-full h-screen">
                <Image
                    src="/images/aion11.png"  // 섹션 4 이미지 경로
                    alt="Section 4 Image"
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </section>

            {/* 섹션 9 */}
            <section className="relative w-full h-screen">
                <Image
                    src="/images/aion12.png"  // 섹션 4 이미지 경로
                    alt="Section 4 Image"
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </section>
            {/* 섹션 9 */}
            <section className="relative w-full h-screen">
                <Image
                    src="/images/aion13.png"  // 섹션 4 이미지 경로
                    alt="Section 4 Image"
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </section>


            {/* 푸터 */}
            <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
                <p>&copy; {new Date().getFullYear()} AI Platform. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AIPlatformPage;
