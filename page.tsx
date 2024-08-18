"use client";

import Image from "next/image";
import ImagesHeros from "../images/heros.svg";
import ImagesLightLeft from "../images/light-left.svg";
import ImageLightRight from "../images/light-right.svg";
import ImagesNewsLeft from "../images/news-left.png";
import ImageBoxMaps from "../images/maps.png";
import ImagesNewsCard from "../images/newsCard.png"
import { useEffect, useRef, useState } from "react";
import Icon1 from "../images/work/icon1.svg";
import Icon2 from "../images/work/icon2.svg";
import Icon3 from "../images/work/icon3.svg";
import Icon4 from "../images/work/icon4.svg";
import iconReactJs from "../images/experience/iconReactJS.svg";
import iconTailwinds from "../images/experience/iconTailwinds.svg";
import ImageTestimonial from "../images/testimonial.png";

import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import Autoplay from 'embla-carousel-autoplay';
import ImagesBg from '../images/backgroundFooter.svg';

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, TextPlugin);

export default function Home() {
  const [getIndex, setIndex] = useState(1);
  const boxRef1 = useRef<HTMLDivElement | null>(null);
  const boxRef2 = useRef<HTMLDivElement | null>(null);
  const boxRef3 = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const boxLight1 = useRef<HTMLDivElement | null>(null);
  const buttonHeros = useRef<HTMLButtonElement | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRef1 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(boxRef1.current, {
      y: 100,
      ease: "power4.out",
      delay: 0,
      skewY: 7,
      duration: 1.5,
      opacity: 0,
      stagger: {
        amount: 0.3
      }
    });

    tl.to(boxRef1.current, {
      y: 0,
      ease: 'power2.out',
      delay: 0,
      opacity: 1,
      duration: 1.5,
      skewY: 0,
      stagger: {
        amount: 0.3
      }
    });

    tl.from(boxRef2.current, {
      y: 100,
      ease: "power4.out",
      delay: -2.5,
      duration: 1.5,
      skewY: 7,
      opacity: 0,
      stagger: {
        amount: 0.3
      }
    });

    tl.to(boxRef2.current, {
      y: 0,
      ease: 'power2.out',
      delay: 0,
      opacity: 1,
      duration: 1.5,
      skewY: 0,
      stagger: {
        amount: 0.3
      }
    });

    tl.from(boxRef3.current, {
      y: 100,
      ease: "power4.out",
      delay: -3.5,
      duration: 1.5,
      skewY: 7,
      opacity: 0,
      stagger: {
        amount: 0.3
      }
    });

    tl.to(boxRef3.current, {
      y: 0,
      ease: 'power2.out',
      delay: 0,
      opacity: 1,
      duration: 1.5,
      skewY: 0,
      stagger: {
        amount: 0.3
      }
    });


    tl.to(textRef.current, {
      opacity: 1,
      delay: -6,
      duration: 5,
      text: 'Dynamic Web Magic with Next.js',
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });


    tl.from(buttonHeros.current, {
      opacity: 0,
      y: 40,
      duration: 1.5,
      delay: -5,
    });

    tl.to(buttonHeros.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      delay: 0,
    });

    window.addEventListener("mousemove", (e) => {
      gsap.to(cursorRef.current, {
        duration: 0.1,
        overwrite: "auto",
        x: e.clientX,
        y: e.clientY,
        stagger: 0.1,
        ease: "none",
        onUpdate: () => {
          console.log('Cursor X:', e.clientX, 'Cursor Y:', e.clientY);
        }
      });
      
      gsap.to(cursorRef.current, {
        ease: 'none',
        duration: 0.1,
        overwrite: "auto",
        stagger: 0.1,
        onUpdate: () => {
          console.log('Cursor X:', e.clientX, 'Cursor Y:', e.clientY);
        }
      });
    });

  });
  const functionSetIndex = (index: number) => {
    setIndex(index);
  }
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
    },
    // [Autoplay()],
    [
      AutoScroll({ playOnInit: true })
    ]
  );

  const recentProjects = [
    {
      icon: [
        iconReactJs,
        iconTailwinds,
        iconTailwinds,
        iconTailwinds

      ],
      title: "3D Solar System Planets to Explore",
      desctription: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      image: ImagesNewsCard,
      link: "https://google.com"
    },
    {
      icon: [
        iconReactJs
      ],
      title: "Yoom - Video Conferencing App",
      desctription: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      image: ImagesNewsCard,
      link: "https://google.com"
    },
    {
      icon: [
        iconReactJs
      ],
      title: "Yoom - Video Conferencing App",
      desctription: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      image: ImagesNewsCard,
      link: "https://google.com"
    },
    {
      icon: [
        iconReactJs
      ],
      title: "Yoom - Video Conferencing App",
      desctription: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      image: ImagesNewsCard,
      link: "https://google.com"
    }
  ]
  const experience = [
    {
      title: 'Frontend Engineer Intern',
      description: 'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
      link: Icon1,
    },
    {
      title: 'Frontend Engineer Intern',
      description: 'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
      link: Icon2,
    },
    {
      title: 'Frontend Engineer Intern',
      description: 'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
      link: Icon3,
    },
    {
      title: 'Frontend Engineer Intern',
      description: 'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
      link: Icon4,
    }
  ]

  const approch = [
    {
      id: 1,
      title: 'Development & Progress Update',
      description: 'Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.',
    },
    {
      id: 2,
      title: 'Development & Progress Update',
      description: 'Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.',
    },
    {
      id: 3,
      title: 'Development & Progress Update',
      description: 'Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.',
    }
  ]

  return (
    <>


      <div className="cursorBlur" ref={cursorRef}></div>

      <header className="absolute top-[50px] w-full flex justify-center">
        <menu className="px-[50px] py-6 bg-gradient-to-r from-bgLinearPrimary to-bgLinearSecondary border-2 border-opacity-[16%] rounded-xl border-ColorLinePrimary">
          <ul className="flex">
            <li className="px-4">About</li>
            <li className="px-4">Project</li>
            <li className="px-4">Testimonials</li>
            <li className="px-4">Contact</li>
          </ul>
        </menu>
      </header>
      <main>
        <section className="h-screen min-h-[800px] overflow-hidden relative" id="heros">
          <div ref={boxLight1} className="absolute top-0 left-0 z-10">
            <Image src={ImagesLightLeft} alt="light-left" />
          </div>
          
          <Image src={ImagesLightLeft} alt="light-right" className="absolute top-0 right-0 z-10" style={{ transform: "scaleX(-1)" }} />
          <Image src={ImagesHeros} alt="heros" className="absolute top-[-400px] left-0 w-full" width={1920} height={1080} />
          <div className="container h-full flex flex-col items-center justify-center relative z-10">
            <div className="mb-[52px]">
              <div className="overflow-hidden">
                <p className="text-base text-center tracking-[10px] uppercase font-default h-6" ref={textRef}></p>
              </div>
              <div className="pt-[25px] pb-[27px]">
                <div className="overflow-hidden pb-2.5">
                  <h1 className="text-7xl font-bold text-center" ref={boxRef1}>Transforming Concepts into</h1>
                </div>
                <div className="overflow-hidden">
                  <h1 className="text-7xl font-bold text-center" ref={boxRef2}>Seamless <span className="text-ColorPrimary">User Experiences</span></h1>
                </div>
              </div>

              <div className="overflow-hidden">
                <h3 className="text-2xl text-center font-thin" ref={boxRef3}>Hi! I’m Rizwan Gustama, a Frontend Engineer based in Indonesia</h3>
              </div>

            </div>
            <button ref={buttonHeros} className="btn-primary border-2 border-ColorLinePrimary border-opacity-[16%] rounded-[14px]">See my work
              <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.292893 11.7929C-0.0976311 12.1834 -0.0976311 12.8166 0.292893 13.2071C0.683418 13.5976 1.31658 13.5976 1.70711 13.2071L0.292893 11.7929ZM13 1.5C13 0.947716 12.5523 0.5 12 0.5L3 0.5C2.44771 0.5 2 0.947716 2 1.5C2 2.05229 2.44771 2.5 3 2.5H11V10.5C11 11.0523 11.4477 11.5 12 11.5C12.5523 11.5 13 11.0523 13 10.5L13 1.5ZM1.70711 13.2071L12.7071 2.20711L11.2929 0.792894L0.292893 11.7929L1.70711 13.2071Z" fill="white" />
              </svg>
            </button>
          </div>
        </section>

        <section className="">
          <div className="container">
            <div className="flex gap-8">
              <div className="w-7/12 relative border-2 border-ColorLinePrimary border-opacity-[16%] rounded-3xl overflow-hidden">
                <Image src={ImagesNewsLeft} alt="news-left" />
                <div className="absolute bottom-0 left-0 px-10 py-16">
                  <h3 className="text-[32px] z-10 w-[367px] font-bold leading-tight">
                    I prioritize client collaboration, fostering open communication
                  </h3>
                </div>
              </div>
              <div className="w-6/12 flex flex-col gap-8">
                <div className="h-1/2 relative border-2 border-ColorLinePrimary border-opacity-[16%] rounded-3xl">
                  {/* <Image src={ImageBoxMaps} alt="box-maps" /> */}
                  <div className="absolute top-0 left-0 px-10 py-9">
                    <h3 className="text-[32px] z-10 font-bold leading-tight">I’m very flexible with time zone communications</h3>
                  </div>
                </div>
                <div className="h-1/2 flex items-center border-2 border-ColorLinePrimary border-opacity-[16%] rounded-3xl">
                  <div className="px-10">
                    <p className="text-sm mb-3">I constantly try to improve</p>
                    <h3 className="text-[32px] font-bold">My tech stack</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-[100px]">
          <div className="container">
            <h2 className="text-5xl text-white font-bold text-center mb-12">A small selection of <span className="text-[#CBACF9]">recent projects</span></h2>
            <div className="grid grid-cols-2 gap-x-10 gap-y-9">
              {recentProjects.map((project, index) => (
                <div key={index} className="border border-[#363749] border-opacity-[48%] px-6 py-9 rounded-[23px] flex flex-col gap-9 backgroundGradient">
                  <Image alt="imagesCard" width={367} height={240} className="w-full rounded-[14px] overflow-hidden" src={ImagesNewsCard} />
                  <div>
                    <div className="flex flex-col mb-[24px]">
                      <h3 className="text-white font-bold text-[32px] mb-[18px]">{project.title}</h3>
                      <p className="text-[#BEC1DD] text-[20px]">{project.desctription}</p>
                    </div>
                    <div className="flex flex-row justify-between">
                      <div className="flex relative">
                        {project.icon.map((icon, index) => (
                          <div className="w-[50px] h-[50px] border border-[#66699C] border-opacity-[43%]  rounded-full flex relative z-0 justify-center items-center backgroundIcon" style={{ left: `${index === 0 ? 0 : index * 10 * -1}px`, zIndex: `${index}` }}>
                            <Image src={icon} alt="icon" />
                          </div>
                        ))}
                      </div>
                      <a href="#" className="text-[#CBACF9] font-medium text-[20px] flex items-center gap-2.5">
                        Check Live Site
                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.292893 11.7929C-0.0976311 12.1834 -0.0976311 12.8166 0.292893 13.2071C0.683418 13.5976 1.31658 13.5976 1.70711 13.2071L0.292893 11.7929ZM13 1.5C13 0.947715 12.5523 0.5 12 0.5L3 0.500001C2.44771 0.5 2 0.947716 2 1.5C2 2.05228 2.44772 2.5 3 2.5L11 2.5L11 10.5C11 11.0523 11.4477 11.5 12 11.5C12.5523 11.5 13 11.0523 13 10.5L13 1.5ZM1.70711 13.2071L12.7071 2.20711L11.2929 0.792894L0.292893 11.7929L1.70711 13.2071Z" fill="#CBACF9" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-[150px] relative">
          <div className="h-full w-full absolute top-0 left-0 z-10"></div>
          <div className="max-w-[2400px] mx-auto">
            <div className="container">
              <h2 className="text-center text-5xl font-bold mb-[60px]">Kind words from <span className="text-[#CBACF9]">satisfied clients</span></h2>
            </div>

            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                <div className="embla__slide">
                  <div className="embla__slide__inner backgroundCardWork flex flex-col gap-8">
                    <p className="font-normal text-[20px]">Collaborating with John was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. John's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, John is the ideal partner.</p>
                    <div className="flex gap-2.5">
                      <Image src={ImageTestimonial} alt="imagesCard" width={50} height={50} />
                      <div>
                        <h4 className="text-lg font-semibold">Michael Johnson</h4>
                        <p className="jabatan">Director of AlphaStream Technologies</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="embla__slide">
                  <div className="embla__slide__inner backgroundCardWork flex flex-col gap-8">
                    <p className="font-normal text-[20px]">Collaborating with John was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. John's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, John is the ideal partner.</p>
                    <div className="flex gap-2.5">
                      <Image src={ImageTestimonial} alt="imagesCard" width={50} height={50} />
                      <div>
                        <h4 className="text-lg font-semibold">Michael Johnson</h4>
                        <p className="jabatan">Director of AlphaStream Technologies</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="embla__slide">
                  <div className="embla__slide__inner backgroundCardWork flex flex-col gap-8">
                    <p className="font-normal text-[20px]">Collaborating with John was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. John's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, John is the ideal partner.</p>
                    <div className="flex gap-2.5">
                      <Image src={ImageTestimonial} alt="imagesCard" width={50} height={50} />
                      <div>
                        <h4 className="text-lg font-semibold">Michael Johnson</h4>
                        <p className="jabatan">Director of AlphaStream Technologies</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="embla__slide">
                  <div className="embla__slide__inner backgroundCardWork flex flex-col gap-8">
                    <p className="font-normal text-[20px]">Collaborating with John was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. John's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, John is the ideal partner.</p>
                    <div className="flex gap-2.5">
                      <Image src={ImageTestimonial} alt="imagesCard" width={50} height={50} />
                      <div>
                        <h4 className="text-lg font-semibold">Michael Johnson</h4>
                        <p className="jabatan">Director of AlphaStream Technologies</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="embla__slide">
                  <div className="embla__slide__inner backgroundCardWork flex flex-col gap-8">
                    <p className="font-normal text-[20px]">Collaborating with John was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. John's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, John is the ideal partner.</p>
                    <div className="flex gap-2.5">
                      <Image src={ImageTestimonial} alt="imagesCard" width={50} height={50} />
                      <div>
                        <h4 className="text-lg font-semibold">Michael Johnson</h4>
                        <p className="jabatan">Director of AlphaStream Technologies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container mt-[70px]">
              <div className="flex justify-around">
                <div>
                  <svg width="197" height="38" viewBox="0 0 197 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M66.0245 12.2999C66.9559 12.3017 67.8744 12.5172 68.7095 12.9297C69.5445 13.3422 70.2738 13.9407 70.8411 14.6792C70.8612 14.706 70.8866 14.7283 70.9157 14.7449C70.9448 14.7615 70.9769 14.7719 71.0102 14.7756C71.0435 14.7793 71.0772 14.7761 71.1092 14.7662C71.1412 14.7563 71.1708 14.74 71.1963 14.7183L73.2245 13.1025C73.2504 13.0818 73.272 13.0561 73.2881 13.0271C73.3041 12.998 73.3142 12.966 73.3178 12.933C73.3214 12.9 73.3185 12.8666 73.3092 12.8348C73.2999 12.8029 73.2844 12.7732 73.2636 12.7474C72.4003 11.6273 71.2913 10.7205 70.022 10.0968C68.7527 9.47308 67.3571 9.14915 65.9428 9.14998C60.6467 9.14998 56.3522 13.7133 56.3522 19.3242C56.3522 24.9351 60.6609 29.4984 65.9428 29.4984C67.3569 29.5032 68.753 29.1813 70.0222 28.5579C71.2915 27.9346 72.3995 27.0265 73.26 25.9046C73.2816 25.8789 73.2977 25.8491 73.3072 25.817C73.3168 25.7848 73.3197 25.7511 73.3157 25.7178C73.3117 25.6845 73.3009 25.6524 73.284 25.6235C73.2671 25.5945 73.2444 25.5693 73.2174 25.5495L71.1927 23.9514C71.1669 23.9306 71.1371 23.9151 71.1053 23.9058C71.0734 23.8965 71.04 23.8936 71.007 23.8972C70.974 23.9008 70.942 23.911 70.913 23.927C70.8839 23.943 70.8582 23.9646 70.8375 23.9905C70.2673 24.7242 69.5377 25.3187 68.7039 25.7291C67.8701 26.1394 66.9538 26.3549 66.0245 26.3592C62.4049 26.3592 59.5739 23.2696 59.5739 19.3313C59.5739 15.393 62.4049 12.2999 66.0245 12.2999Z" fill="white" />
                    <path d="M75.8776 8.57097H78.4209C78.4878 8.57097 78.5519 8.59753 78.5992 8.64482C78.6465 8.6921 78.6731 8.75623 78.6731 8.82311V28.9869C78.6731 29.0528 78.6469 29.1161 78.6003 29.1627C78.5536 29.2093 78.4904 29.2355 78.4245 29.2355H75.8812C75.8143 29.2355 75.7502 29.2089 75.7029 29.1616C75.6556 29.1144 75.629 29.0502 75.629 28.9833V8.82311C75.6285 8.79016 75.6346 8.75746 75.6469 8.72688C75.6592 8.69631 75.6774 8.66849 75.7005 8.64503C75.7237 8.62157 75.7513 8.60294 75.7817 8.59022C75.8121 8.57751 75.8447 8.57097 75.8776 8.57097Z" fill="white" />
                    <path d="M87.3399 15.5456C83.969 15.5456 80.559 17.932 80.559 22.4953C80.559 26.5046 83.4753 29.5303 87.3399 29.5303C91.2045 29.5303 94.1492 26.5046 94.1492 22.4953C94.1492 18.486 91.2223 15.5456 87.3399 15.5456ZM91.0802 22.4953C91.0802 24.8107 89.4711 26.5579 87.3399 26.5579C85.2087 26.5579 83.6316 24.8107 83.6316 22.4953C83.6316 20.1799 85.2264 18.5179 87.3399 18.5179C89.4534 18.5179 91.0802 20.2261 91.0802 22.4953Z" fill="white" />
                    <path d="M107.857 15.8366H105.314C105.281 15.8361 105.248 15.8422 105.217 15.8545C105.187 15.8668 105.159 15.885 105.135 15.9082C105.112 15.9313 105.093 15.9588 105.081 15.9892C105.068 16.0196 105.061 16.0523 105.061 16.0852V22.8325C105.061 25.4675 103.243 26.4015 101.683 26.4015C100.305 26.4015 98.9162 25.361 98.9162 23.0349V16.0852C98.9162 16.0523 98.9097 16.0196 98.897 15.9892C98.8843 15.9588 98.8656 15.9313 98.8422 15.9082C98.8187 15.885 98.7909 15.8668 98.7603 15.8545C98.7297 15.8422 98.697 15.8361 98.664 15.8366H96.1208C96.0548 15.8366 95.9916 15.8628 95.945 15.9094C95.8983 15.956 95.8721 16.0193 95.8721 16.0852V23.3652C95.8721 27.3603 97.6801 29.5585 100.966 29.5585C102.159 29.5585 104.092 28.8731 104.816 27.3603L105.061 27.41V28.9868C105.061 29.0536 105.088 29.1178 105.135 29.165C105.182 29.2123 105.247 29.2389 105.314 29.2389H107.857C107.924 29.2389 107.988 29.2123 108.035 29.165C108.082 29.1178 108.109 29.0536 108.109 28.9868V16.0852C108.109 16.0523 108.102 16.0196 108.09 15.9892C108.077 15.9588 108.058 15.9313 108.035 15.9082C108.011 15.885 107.984 15.8668 107.953 15.8545C107.922 15.8422 107.89 15.8361 107.857 15.8366Z" fill="white" />
                    <path d="M123.475 8.57097H120.929C120.896 8.57097 120.863 8.57751 120.833 8.59022C120.802 8.60294 120.775 8.62157 120.751 8.64503C120.728 8.66849 120.71 8.69631 120.698 8.72688C120.686 8.75746 120.679 8.79016 120.68 8.82311V17.8361L120.524 17.5875C119.749 16.341 118.083 15.5349 116.279 15.5349C113.167 15.5349 110.02 17.932 110.02 22.513C110.02 26.5082 112.723 29.5196 116.304 29.5196C117.668 29.5196 119.589 28.9727 120.524 27.4386L120.68 27.1829V28.9869C120.679 29.0198 120.686 29.0526 120.698 29.0831C120.71 29.1137 120.728 29.1415 120.751 29.165C120.775 29.1884 120.802 29.2071 120.833 29.2198C120.863 29.2325 120.896 29.239 120.929 29.239H123.475C123.508 29.239 123.541 29.2325 123.571 29.2198C123.602 29.2071 123.629 29.1884 123.652 29.165C123.676 29.1415 123.694 29.1137 123.706 29.0831C123.718 29.0526 123.725 29.0198 123.724 28.9869V8.82311C123.725 8.79016 123.718 8.75746 123.706 8.72688C123.694 8.69631 123.676 8.66849 123.652 8.64503C123.629 8.62157 123.602 8.60294 123.571 8.59022C123.541 8.57751 123.508 8.57097 123.475 8.57097ZM120.634 22.4953C120.651 23.0115 120.565 23.526 120.382 24.009C120.199 24.492 119.922 24.9339 119.567 25.3091C119.211 25.6842 118.785 25.9853 118.313 26.1948C117.841 26.4042 117.332 26.518 116.815 26.5295C114.734 26.5295 113.103 24.7539 113.103 22.4953C113.103 20.2367 114.734 18.5179 116.815 18.5179C117.847 18.544 118.826 18.9768 119.539 19.7219C120.253 20.4671 120.642 21.464 120.623 22.4953H120.634Z" fill="white" />
                    <path d="M127.286 15.8366H129.83C129.896 15.8366 129.959 15.8628 130.006 15.9094C130.052 15.956 130.078 16.0192 130.078 16.0852V28.9867C130.078 29.0527 130.052 29.1159 130.006 29.1625C129.959 29.2091 129.896 29.2353 129.83 29.2353H127.286C127.22 29.2353 127.155 29.2088 127.108 29.1615C127.061 29.1142 127.034 29.0501 127.034 28.9832V16.0852C127.035 16.0189 127.062 15.9557 127.109 15.9092C127.157 15.8627 127.22 15.8366 127.286 15.8366Z" fill="white" />
                    <path d="M128.569 8.97973C128.305 8.97406 128.043 9.02103 127.798 9.11789C127.554 9.21475 127.33 9.35955 127.142 9.5438C126.954 9.72804 126.804 9.94802 126.702 10.1908C126.6 10.4336 126.548 10.6944 126.548 10.9578C126.553 11.4883 126.769 11.995 127.148 12.3665C127.527 12.7381 128.038 12.9441 128.569 12.9393C128.83 12.9426 129.09 12.8937 129.333 12.7955C129.575 12.6972 129.796 12.5515 129.981 12.367C130.167 12.1825 130.314 11.9628 130.413 11.7208C130.513 11.4788 130.563 11.2194 130.561 10.9578C130.566 10.6956 130.517 10.4352 130.418 10.1923C130.32 9.94943 130.173 9.72899 129.987 9.54425C129.801 9.35951 129.579 9.21427 129.335 9.11726C129.092 9.02025 128.831 8.97347 128.569 8.97973Z" fill="white" />
                    <path d="M140.554 15.5456C139.438 15.5456 137.456 16.1457 136.7 17.7438L136.455 17.6941V16.0854C136.455 16.0524 136.448 16.0198 136.435 15.9894C136.423 15.959 136.404 15.9314 136.381 15.9083C136.357 15.8852 136.329 15.867 136.299 15.8547C136.268 15.8424 136.235 15.8363 136.202 15.8368H133.659C133.593 15.8368 133.53 15.863 133.483 15.9096C133.437 15.9562 133.411 16.0194 133.411 16.0854V28.9869C133.41 29.0199 133.416 29.0526 133.428 29.0831C133.441 29.1137 133.459 29.1415 133.482 29.165C133.505 29.1885 133.533 29.2071 133.563 29.2198C133.594 29.2325 133.626 29.2391 133.659 29.2391H136.202C136.269 29.2391 136.334 29.2125 136.381 29.1652C136.428 29.1179 136.455 29.0538 136.455 28.9869V22.2396C136.455 19.6259 138.273 18.6884 139.833 18.6884C141.211 18.6884 142.6 19.7218 142.6 22.0265V28.9869C142.6 29.0538 142.626 29.1179 142.674 29.1652C142.721 29.2125 142.785 29.2391 142.852 29.2391H145.402C145.469 29.2391 145.533 29.2125 145.581 29.1652C145.628 29.1179 145.654 29.0538 145.654 28.9869V21.7105C145.647 17.7367 143.836 15.5456 140.554 15.5456Z" fill="white" />
                    <path d="M160.846 15.8371H158.303C158.27 15.8366 158.238 15.8427 158.207 15.855C158.176 15.8673 158.149 15.8855 158.125 15.9086C158.102 15.9318 158.083 15.9593 158.07 15.9897C158.058 16.0201 158.051 16.0527 158.051 16.0857V17.8613L157.898 17.6127C157.12 16.3662 155.454 15.5601 153.636 15.5601C150.528 15.5601 147.377 17.9572 147.377 22.5382C147.377 26.5334 150.08 29.5448 153.664 29.5448C155.025 29.5448 156.946 28.9979 157.884 27.4638L158.037 27.2081V28.9872C158.037 29.0541 158.063 29.1182 158.111 29.1655C158.158 29.2128 158.222 29.2394 158.289 29.2394H160.832C160.865 29.2394 160.898 29.2328 160.928 29.2201C160.959 29.2074 160.986 29.1888 161.009 29.1653C161.032 29.1419 161.051 29.114 161.063 29.0835C161.075 29.0529 161.081 29.0202 161.081 28.9872V16.0857C161.081 16.0221 161.057 15.961 161.013 15.9147C160.97 15.8685 160.91 15.8407 160.846 15.8371ZM158.005 22.4956C158.022 23.0128 157.936 23.5281 157.752 24.0118C157.568 24.4955 157.29 24.9378 156.934 25.3131C156.578 25.6884 156.15 25.9893 155.677 26.1981C155.203 26.407 154.693 26.5197 154.176 26.5298C152.094 26.5298 150.467 24.7542 150.467 22.4956C150.467 20.2371 152.094 18.5183 154.176 18.5183C155.21 18.5406 156.192 18.9718 156.909 19.7174C157.625 20.4629 158.017 21.462 157.998 22.4956H158.005Z" fill="white" />
                    <path d="M172.451 15.8827C171.871 15.6477 171.251 15.5271 170.625 15.5276C168.934 15.5276 167.705 16.5396 167.073 18.4573L166.846 18.4253V16.0851C166.846 16.0521 166.839 16.0195 166.826 15.9891C166.814 15.9587 166.795 15.9312 166.772 15.908C166.748 15.8849 166.72 15.8667 166.69 15.8544C166.659 15.8421 166.627 15.836 166.594 15.8365H164.05C164.017 15.836 163.985 15.8421 163.954 15.8544C163.923 15.8667 163.896 15.8849 163.872 15.908C163.849 15.9312 163.83 15.9587 163.817 15.9891C163.805 16.0195 163.798 16.0521 163.798 16.0851V28.9867C163.798 29.0535 163.825 29.1177 163.872 29.1649C163.919 29.2122 163.983 29.2388 164.05 29.2388H166.622C166.655 29.2388 166.688 29.2322 166.718 29.2195C166.748 29.2068 166.776 29.1882 166.799 29.1647C166.822 29.1413 166.84 29.1134 166.853 29.0829C166.865 29.0523 166.871 29.0196 166.871 28.9867V24.5831C166.871 19.3274 168.97 18.5461 170.224 18.5461C170.753 18.5474 171.276 18.6562 171.762 18.8657C171.796 18.8815 171.833 18.8898 171.87 18.8898C171.908 18.8898 171.945 18.8815 171.978 18.8657C172.011 18.8485 172.039 18.8243 172.062 18.7949C172.084 18.7654 172.099 18.7313 172.106 18.6952L172.611 16.1703C172.623 16.1112 172.614 16.0496 172.584 15.9968C172.555 15.944 172.508 15.9035 172.451 15.8827Z" fill="white" />
                    <path d="M186.564 15.9467C186.541 15.9122 186.51 15.884 186.473 15.8647C186.436 15.8455 186.395 15.8358 186.354 15.8366H183.615C183.565 15.8372 183.516 15.8526 183.474 15.8811C183.432 15.9095 183.4 15.9496 183.381 15.9964L180.067 24.5833L176.721 15.9964C176.702 15.9496 176.67 15.9095 176.628 15.8811C176.586 15.8526 176.537 15.8372 176.486 15.8366H173.694C173.654 15.8364 173.613 15.8463 173.577 15.8656C173.542 15.8848 173.511 15.9127 173.488 15.9467C173.465 15.9807 173.451 16.0199 173.446 16.0608C173.442 16.1017 173.448 16.143 173.464 16.1811L178.436 28.3902L175.691 35.5246C175.673 35.5633 175.666 35.6058 175.67 35.6481C175.673 35.6903 175.687 35.7311 175.71 35.7665C175.734 35.8019 175.766 35.8308 175.803 35.8506C175.841 35.8704 175.883 35.8804 175.925 35.8797H178.589C178.639 35.8799 178.688 35.8647 178.73 35.8361C178.771 35.8075 178.803 35.767 178.82 35.7199L186.585 16.1882C186.603 16.1496 186.61 16.107 186.606 16.0646C186.602 16.0223 186.588 15.9817 186.564 15.9467Z" fill="white" />
                    <path d="M43.7815 11.4828C42.8625 8.60181 41.056 6.08501 38.6203 4.29215C36.1846 2.49928 33.2443 1.52212 30.2197 1.50033C27.6625 1.48567 25.1497 2.16788 22.9511 3.47368C20.7526 4.77947 18.9515 6.65948 17.7413 8.91171C15.5172 9.3102 13.4783 10.408 11.9214 12.0452C10.3646 13.6824 9.37094 15.7737 9.08521 18.0146C8.79948 20.2555 9.23656 22.5291 10.3328 24.5044C11.4291 26.4798 13.1273 28.0538 15.1803 28.9974L15.4467 29.1181H15.4645V26.0996C14.0561 25.2353 12.9535 23.952 12.3113 22.4297C11.6691 20.9074 11.5194 19.2224 11.8833 17.6108C12.2471 15.9992 13.1062 14.5418 14.3402 13.4428C15.5742 12.3439 17.1212 11.6585 18.7643 11.4828L19.5103 11.4047L19.8371 10.7335C20.7649 8.76756 22.2349 7.10731 24.0741 5.94791C25.9133 4.78852 28.0454 4.17816 30.2197 4.1886C32.8105 4.20687 35.3208 5.09061 37.3514 6.69929C39.3821 8.30796 40.8164 10.5492 41.4265 13.0666L41.6822 14.0823H42.7478C44.4657 14.1175 46.1016 14.8229 47.3063 16.0478C48.5109 17.2727 49.1887 18.92 49.1948 20.6378C49.1948 23.1414 47.7491 25.1905 45.2875 26.2274V29.0897L45.4651 29.0329C49.4221 27.7367 51.8802 24.5193 51.8802 20.6378C51.8639 18.3913 51.0348 16.2265 49.5461 14.5437C48.0574 12.8608 46.0097 11.7735 43.7815 11.4828Z" fill="#3847BE" />
                    <path d="M25.0122 28.7706L25.6019 29.3601C25.6178 29.3765 25.6286 29.3972 25.6329 29.4196C25.6373 29.442 25.635 29.4652 25.6263 29.4864C25.6176 29.5075 25.6029 29.5256 25.5841 29.5385C25.5652 29.5514 25.543 29.5585 25.5202 29.559H20.867C20.3018 29.559 19.7597 29.3345 19.36 28.9349C18.9603 28.5353 18.7358 27.9934 18.7358 27.4283V18.394C18.7358 18.3629 18.7234 18.3331 18.7014 18.3111C18.6794 18.2891 18.6496 18.2768 18.6185 18.2768H17.624C17.6008 18.277 17.5781 18.2704 17.5587 18.2578C17.5394 18.2451 17.5241 18.227 17.515 18.2058C17.5059 18.1845 17.5033 18.161 17.5075 18.1383C17.5117 18.1155 17.5226 18.0945 17.5387 18.0779L21.4886 14.129C21.4995 14.1179 21.5125 14.1091 21.5268 14.1031C21.5412 14.0971 21.5565 14.0941 21.5721 14.0941C21.5876 14.0941 21.603 14.0971 21.6173 14.1031C21.6317 14.1091 21.6446 14.1179 21.6556 14.129L25.6019 18.0779C25.6178 18.0943 25.6286 18.115 25.6329 18.1374C25.6373 18.1598 25.635 18.183 25.6263 18.2041C25.6176 18.2253 25.6029 18.2434 25.5841 18.2563C25.5652 18.2692 25.543 18.2763 25.5202 18.2768H24.5114C24.48 18.2768 24.4498 18.289 24.4272 18.3109C24.4047 18.3328 24.3916 18.3626 24.3906 18.394V27.272C24.3921 27.834 24.6155 28.3726 25.0122 28.7706Z" fill="#3847BE" />
                    <path d="M33.7396 28.7701L34.3328 29.3596C34.3489 29.3762 34.3598 29.3972 34.364 29.42C34.3682 29.4427 34.3656 29.4662 34.3565 29.4875C34.3474 29.5087 34.3322 29.5268 34.3128 29.5395C34.2934 29.5521 34.2707 29.5587 34.2476 29.5585H29.605C29.0398 29.5585 28.4977 29.334 28.098 28.9344C27.6983 28.5348 27.4738 27.9929 27.4738 27.4278V20.6769C27.4738 20.6455 27.4616 20.6153 27.4397 20.5928C27.4178 20.5702 27.388 20.5571 27.3566 20.5562H26.3513C26.3285 20.5557 26.3063 20.5486 26.2874 20.5357C26.2686 20.5228 26.2539 20.5046 26.2452 20.4835C26.2366 20.4624 26.2342 20.4392 26.2386 20.4168C26.2429 20.3943 26.2537 20.3737 26.2696 20.3573L30.216 16.4154C30.2269 16.4044 30.2399 16.3956 30.2542 16.3896C30.2685 16.3836 30.2839 16.3805 30.2994 16.3805C30.315 16.3805 30.3304 16.3836 30.3447 16.3896C30.359 16.3956 30.372 16.4044 30.3829 16.4154L34.3328 20.3502C34.3489 20.3668 34.3598 20.3878 34.364 20.4105C34.3682 20.4333 34.3656 20.4568 34.3565 20.478C34.3474 20.4993 34.3322 20.5174 34.3128 20.53C34.2934 20.5427 34.2707 20.5493 34.2476 20.5491H33.2388C33.2074 20.55 33.1775 20.5631 33.1557 20.5857C33.1338 20.6082 33.1215 20.6384 33.1216 20.6698V27.2715C33.122 27.8329 33.3441 28.3715 33.7396 28.7701Z" fill="#3847BE" />
                    <path d="M42.4706 28.7701L43.0603 29.3596C43.0762 29.376 43.087 29.3967 43.0913 29.4191C43.0957 29.4415 43.0933 29.4647 43.0847 29.4859C43.076 29.507 43.0613 29.5251 43.0425 29.538C43.0236 29.5509 43.0014 29.5581 42.9786 29.5585H38.3218C37.7566 29.5585 37.2145 29.334 36.8148 28.9344C36.4151 28.5348 36.1906 27.9929 36.1906 27.4278V22.9426C36.1906 22.9115 36.1782 22.8817 36.1563 22.8597C36.1343 22.8378 36.1045 22.8254 36.0734 22.8254H35.0788C35.0552 22.8257 35.0321 22.8188 35.0125 22.8057C34.9929 22.7926 34.9777 22.7739 34.9688 22.7521C34.96 22.7302 34.958 22.7062 34.963 22.6832C34.9681 22.6601 34.9799 22.6392 34.9971 22.623L38.947 18.6776C38.9576 18.6666 38.9703 18.6579 38.9843 18.652C38.9984 18.646 39.0134 18.643 39.0287 18.643C39.0439 18.643 39.059 18.646 39.0731 18.652C39.0871 18.6579 39.0998 18.6666 39.1104 18.6776L43.0603 22.623C43.0774 22.6392 43.0893 22.6601 43.0943 22.6832C43.0994 22.7062 43.0973 22.7302 43.0885 22.7521C43.0797 22.7739 43.0645 22.7926 43.0449 22.8057C43.0253 22.8188 43.0022 22.8257 42.9786 22.8254H41.9662C41.9351 22.8254 41.9053 22.8378 41.8834 22.8597C41.8614 22.8817 41.849 22.9115 41.849 22.9426V27.2715C41.8504 27.8335 42.0739 28.3721 42.4706 28.7701Z" fill="#3847BE" />
                  </svg>
                </div>

                <div>
                  <svg width="212" height="40" viewBox="0 0 212 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M65.8897 30.6819C69.0056 30.6819 70.5779 29.0729 71.2631 27.9772H71.5718C71.7074 29.1409 72.5297 30.2366 74.1381 30.2366H77.1833V26.812H76.3971C75.8489 26.812 75.5748 26.5041 75.5748 26.0256V12.2954H71.5358V14.487H71.2285C70.4423 13.3912 68.7993 11.8502 65.7873 11.8502C60.9966 11.8502 57.4365 15.8212 57.4365 21.2653C57.4365 26.7094 61.0644 30.6819 65.8897 30.6819ZM66.6081 26.7788C63.7677 26.7788 61.5448 24.6899 61.5448 21.3C61.5448 17.978 63.6999 15.72 66.5749 15.72C69.3128 15.72 71.605 17.7395 71.605 21.3C71.605 24.3473 69.6533 26.7788 66.6081 26.7788ZM79.5692 37.1942H83.6068V27.9772H83.9141C84.6671 29.0729 86.2755 30.6819 89.4592 30.6819C94.2498 30.6819 97.7408 26.6414 97.7408 21.2653C97.7408 15.8559 94.0104 11.8502 89.1851 11.8502C86.1053 11.8502 84.5979 13.5271 83.8795 14.4523H83.5722V12.2954H79.5678L79.5692 37.1942ZM88.6038 26.8814C85.8312 26.8814 83.5376 24.8272 83.5376 21.2653C83.5376 18.218 85.4893 15.6507 88.5345 15.6507C91.3763 15.6507 93.5993 17.8769 93.5993 21.2653C93.5993 24.5873 91.4441 26.8814 88.6038 26.8814ZM99.8252 37.1942H103.864V27.9772H104.172C104.925 29.0729 106.533 30.6819 109.715 30.6819C114.506 30.6819 117.664 26.6414 117.664 21.2653C117.664 15.8559 114.266 11.8502 109.441 11.8502C106.361 11.8502 104.855 13.5271 104.137 14.4523H103.828V12.2954H99.8252V37.1942ZM108.86 26.8814C106.087 26.8814 103.795 24.8272 103.795 21.2653C103.795 18.218 105.745 15.6507 108.791 15.6507C111.632 15.6507 113.857 17.8769 113.857 21.2653C113.857 24.5873 111.7 26.8814 108.86 26.8814ZM123.004 30.653H128.718L131.969 16.5802H132.175L135.425 30.653H141.108L145.656 12.7118H141.586L138.335 26.8193H138.026L134.776 12.7103H129.403L126.117 26.8193H125.81L122.593 12.7103H118.28L123.004 30.653ZM147.703 30.653H151.742V21.7857C151.742 18.3958 153.314 16.307 156.258 16.307H158.037V12.2665H156.703C154.409 12.2665 152.664 13.8422 151.98 15.3485H151.706V12.7118H147.703V30.653ZM178.078 30.653H181.227V27.0578H178.113C176.881 27.0578 176.367 26.5099 176.367 25.2436V16.2723H181.432V12.7118H176.367V7.67825H172.535V12.7118H169.181V16.2723H172.295V25.2783C172.295 29.0787 174.587 30.653 178.078 30.653ZM192.061 30.6819C195.791 30.6819 199.077 28.8315 200.24 25.1019L196.544 24.21C195.893 26.1962 194.012 27.224 192.027 27.224C189.083 27.224 187.133 25.3057 187.098 22.2931H200.685V21.1627C200.685 15.8212 197.366 11.8502 191.89 11.8502C187.064 11.8502 182.924 15.6507 182.924 21.3C182.924 26.7788 186.585 30.6819 192.061 30.6819ZM187.133 19.3485C187.372 17.1916 189.323 15.376 191.89 15.376C194.354 15.376 196.374 16.917 196.579 19.3485H187.133Z" fill="#EDEDF0" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M167.384 30.6528H163.345V16.2721H160.198V12.7116H167.384V30.6528Z" fill="#EDEDF0" />
                    <path d="M165.066 10.2207C166.538 10.2207 167.633 9.12493 167.633 7.68658C167.633 6.28436 166.538 5.18716 165.066 5.18716C163.594 5.18716 162.499 6.28291 162.499 7.68802C162.499 9.12493 163.594 10.2207 165.066 10.2207Z" fill="#EDEDF0" />
                    <path d="M45.5297 26.254V34.1729H25.78C20.0258 34.1729 15.0015 30.9883 12.314 26.254C11.1249 24.1556 10.426 21.8143 10.27 19.4063L10.27 17.2668C10.3401 16.1679 10.5243 15.0792 10.8196 14.0186C12.666 7.36887 18.6655 2.50013 25.7786 2.50013C32.896 2.50013 38.8941 7.37176 40.7391 14.0171H32.2945C30.9097 11.8502 28.5093 10.4176 25.78 10.4176C23.0508 10.4176 20.6518 11.8502 19.2656 14.0171C18.8371 14.6844 18.5113 15.4124 18.2991 16.1768C18.1046 16.8801 18.0066 17.6067 18.0077 18.3365C18.0045 19.4116 18.2189 20.4761 18.6379 21.4657C19.0569 22.4554 19.6719 23.3496 20.4456 24.0943C21.877 25.4802 23.7897 26.2546 25.78 26.254H45.5297Z" fill="#FD366E" />
                    <path d="M45.5297 16.1753V24.0942H31.113C31.887 23.3496 32.5022 22.4555 32.9215 21.4658C33.3407 20.4762 33.5554 19.4116 33.5524 18.3365C33.5531 17.6066 33.4545 16.88 33.2595 16.1768L45.5297 16.1753Z" fill="#FD366E" />
                  </svg>

                </div>

                <div>
                  <svg width="174" height="36" viewBox="0 0 174 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2001_4121)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M72.8503 21.7138C73.2146 20.7864 73.3975 19.7103 73.3975 18.487C73.3975 17.2632 73.2117 16.1873 72.8396 15.2595C72.4678 14.3313 71.9579 13.551 71.3107 12.9186C70.6633 12.2862 69.9057 11.8121 69.0382 11.4958C68.1701 11.1792 67.2473 11.0208 66.2697 11.0208C65.3191 11.0208 64.4132 11.1792 63.5528 11.4958C62.6915 11.8121 61.9337 12.2862 61.28 12.9186C60.6257 13.551 60.1054 14.3313 59.7199 15.2595C59.3343 16.1873 59.1413 17.2632 59.1413 18.487C59.1413 19.7103 59.3276 20.7864 59.6995 21.7138C60.0715 22.6421 60.5806 23.419 61.2283 24.0441C61.8754 24.6702 62.6333 25.1407 63.5011 25.4568C64.3689 25.7734 65.2915 25.9315 66.2697 25.9315C67.2747 25.9315 68.2152 25.7734 69.0896 25.4568C69.9641 25.1407 70.7185 24.6702 71.352 24.0441C71.9853 23.419 72.4849 22.6421 72.8503 21.7138ZM62.726 20.3839C62.5538 19.8202 62.4679 19.1877 62.4679 18.487C62.4679 17.7995 62.5538 17.1705 62.726 16.5996C62.8982 16.0292 63.1463 15.5413 63.4701 15.1359C63.7932 14.7301 64.1896 14.4138 64.6582 14.1868C65.1261 13.9602 65.6632 13.8468 66.2697 13.8468C66.8617 13.8468 67.3955 13.9567 67.8711 14.1768C68.3457 14.3962 68.7456 14.7093 69.0689 15.1148C69.3924 15.5209 69.6408 16.0084 69.813 16.5788C69.9852 17.1495 70.0713 17.7854 70.0713 18.487C70.0713 19.1877 69.9852 19.8202 69.813 20.3839C69.6408 20.9479 69.3924 21.4324 69.0689 21.8378C68.7456 22.2438 68.3457 22.5561 67.8711 22.7759C67.3955 22.9965 66.8617 23.1067 66.2697 23.1067C65.6632 23.1067 65.1261 22.9965 64.6582 22.7759C64.1896 22.5561 63.7932 22.2438 63.4701 21.8378C63.1463 21.4324 62.8982 20.9479 62.726 20.3839Z" fill="white" />
                      <path d="M81.5022 23.1888C81.9567 23.1888 82.3319 23.1513 82.6281 23.0752C82.9242 22.9999 83.1619 22.897 83.3408 22.7655C83.5196 22.6354 83.6438 22.4809 83.7129 22.3021C83.7819 22.1236 83.8162 21.924 83.8162 21.704C83.8162 21.2368 83.5956 20.8479 83.155 20.5389C82.7141 20.2293 81.9567 19.8962 80.8824 19.5381C80.4139 19.3737 79.9455 19.1842 79.4772 18.9714C79.009 18.7586 78.5888 18.4904 78.217 18.1671C77.8455 17.8442 77.5422 17.4523 77.3081 16.9912C77.0738 16.531 76.9568 15.971 76.9568 15.3109C76.9568 14.6508 77.0808 14.0562 77.3286 13.527C77.5768 12.9976 77.9279 12.5477 78.3826 12.176C78.837 11.8046 79.3877 11.52 80.0351 11.3202C80.6826 11.1212 81.4124 11.0208 82.2253 11.0208C83.1893 11.0208 84.0229 11.1246 84.7255 11.3305C85.4275 11.5367 86.0062 11.7639 86.4607 12.0114L85.5312 14.5479C85.1314 14.3417 84.687 14.1594 84.1985 14.0011C83.7094 13.8433 83.1206 13.7638 82.4321 13.7638C81.6605 13.7638 81.106 13.8711 80.7686 14.0839C80.4312 14.2969 80.2622 14.6237 80.2622 15.0632C80.2622 15.3248 80.3246 15.545 80.4485 15.7233C80.5722 15.902 80.7481 16.0635 80.9752 16.208C81.2025 16.3521 81.4643 16.4831 81.7607 16.5996C82.0562 16.7167 82.3836 16.8366 82.7421 16.9603C83.4855 17.2358 84.1329 17.5071 84.6842 17.7752C85.2348 18.0434 85.693 18.3563 86.0582 18.7136C86.4228 19.0709 86.6949 19.4905 86.8743 19.9718C87.0529 20.4533 87.1427 21.0373 87.1427 21.7242C87.1427 23.0579 86.6742 24.0926 85.7375 24.8278C84.8008 25.5638 83.389 25.9317 81.5022 25.9317C80.8687 25.9317 80.2968 25.8937 79.7872 25.8181C79.2776 25.742 78.8267 25.6494 78.4341 25.5396C78.0417 25.4297 77.7039 25.3129 77.4214 25.1893C77.1392 25.0653 76.9017 24.9487 76.7086 24.8382L77.6181 22.2814C78.0445 22.5155 78.5715 22.7248 79.1988 22.91C79.8251 23.0959 80.5933 23.1888 81.5022 23.1888Z" fill="white" />
                      <path d="M101.342 11.3515V14.0945H97.0241V25.6428H93.8012V14.0945H89.4826V11.3515H101.342Z" fill="white" />
                      <path d="M104.922 25.6431H108.146V11.3515H104.922V25.6431Z" fill="white" />
                      <path d="M122.573 25.6428C121.65 24.0069 120.652 22.3917 119.578 20.7964C118.502 19.2015 117.359 17.6962 116.148 16.28V25.6428H112.966V11.3515H115.59C116.044 11.8048 116.547 12.3617 117.098 13.0218C117.649 13.6819 118.209 14.3866 118.782 15.1358C119.353 15.885 119.921 16.6618 120.486 17.4658C121.051 18.27 121.581 19.0432 122.077 19.7857V11.3515H125.28V25.6428H122.573Z" fill="white" />
                      <path d="M137.083 13.8263C135.582 13.8263 134.497 14.2421 133.829 15.0738C133.16 15.9058 132.827 17.043 132.827 18.4871C132.827 19.1876 132.909 19.824 133.074 20.3944C133.24 20.9645 133.488 21.4559 133.818 21.8686C134.149 22.2812 134.562 22.601 135.058 22.8279C135.554 23.0546 136.132 23.168 136.793 23.168C137.151 23.168 137.458 23.161 137.713 23.1475C137.968 23.134 138.191 23.1065 138.384 23.065V18.0952H141.608V25.1686C141.222 25.3201 140.603 25.4813 139.748 25.6528C138.894 25.8244 137.84 25.911 136.587 25.911C135.513 25.911 134.538 25.7457 133.664 25.4161C132.788 25.0857 132.041 24.6049 131.422 23.9722C130.803 23.3401 130.324 22.563 129.986 21.6419C129.648 20.7214 129.48 19.6695 129.48 18.4871C129.48 17.2907 129.666 16.2322 130.038 15.3108C130.41 14.39 130.918 13.6092 131.567 12.9701C132.214 12.3309 132.974 11.8463 133.85 11.5165C134.724 11.1863 135.657 11.0208 136.648 11.0208C137.324 11.0208 137.933 11.066 138.477 11.1551C139.021 11.2448 139.489 11.3478 139.882 11.4648C140.274 11.5813 140.599 11.7016 140.853 11.8256C141.109 11.9493 141.29 12.0459 141.401 12.1145L140.471 14.692C140.031 14.4584 139.523 14.256 138.953 14.0838C138.381 13.9119 137.758 13.8263 137.083 13.8263Z" fill="white" />
                      <path d="M146.117 25.6428V11.3515H155.787V14.053H149.341V16.8573H155.064V19.4973H149.341V22.9413H156.262V25.6428H146.117Z" fill="white" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M169.284 12.3306C168.141 11.5674 166.495 11.1861 164.346 11.1861C163.754 11.1861 163.082 11.2135 162.332 11.2689C161.582 11.3234 160.854 11.4203 160.153 11.557V25.6426H163.375V20.4246H164.966C165.243 20.7551 165.519 21.1227 165.796 21.5287C166.072 21.9342 166.354 22.3633 166.636 22.8172C166.92 23.271 167.195 23.7388 167.466 24.2198C167.734 24.7011 168.001 25.1752 168.264 25.6426H171.866C171.619 25.1204 171.351 24.5877 171.061 24.0442C170.772 23.5015 170.473 22.9793 170.162 22.4775C169.853 21.9757 169.538 21.4944 169.222 21.0336C168.905 20.5731 168.603 20.1642 168.313 19.8064C169.182 19.4494 169.845 18.9574 170.307 18.3322C170.769 17.7067 170.999 16.8915 170.999 15.8883C170.999 14.2794 170.427 13.0937 169.284 12.3306ZM163.902 13.9496C164.088 13.9361 164.298 13.9291 164.532 13.9291C165.565 13.9291 166.347 14.077 166.877 14.3721C167.408 14.6685 167.673 15.1662 167.673 15.8675C167.673 16.5965 167.412 17.1124 166.888 17.4144C166.364 17.7171 165.497 17.8676 164.285 17.8676H163.375V13.9908C163.541 13.9776 163.716 13.9637 163.902 13.9496Z" fill="white" />
                      <path d="M51.5929 11.4671H54.8354V25.7081H51.5929V19.6665H46.1474V25.7081H42.9048V11.4671H46.1474V16.9125H51.5929V11.4671Z" fill="white" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7766 1.5V11.6843L29.0765 16.4963V5.69396L20.7766 1.5ZM-0.192034 1.5005V17.482H26.8016L18.5887 13.0071L7.88984 13.0019V5.80147L-0.192034 1.5005ZM20.7766 31.2177V24.0793L9.99528 24.0718C10.0053 24.1194 1.646 19.5255 1.646 19.5255L29.0763 19.6539V35.6351L20.7766 31.2177ZM-0.192034 20.7741L-0.192322 31.2177L7.88984 35.4114V25.4723L-0.192034 20.7741Z" fill="#6741C9" />
                    </g>
                    <defs>
                      <clipPath id="clip0_2001_4121">
                        <rect width="173" height="35" fill="white" transform="translate(0.0391235 0.5)" />
                      </clipPath>
                    </defs>
                  </svg>

                </div>

                <div>
                  <svg width="199" height="38" viewBox="0 0 199 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M85.0592 28.9609L85.6187 28.217C85.9917 28.031 85.9917 27.659 85.9917 27.287C85.9917 26.915 85.9917 26.543 85.4322 26.171C85.2457 25.799 84.8728 25.613 84.3133 25.427C82.4853 25.0273 80.6801 24.5306 78.9052 23.939L76.8538 22.637C76.1079 22.2651 75.7349 21.7071 75.3619 21.1491L74.8025 18.9171C74.8025 17.9871 74.9889 17.2431 75.3619 16.6851C75.7349 15.9412 76.2944 15.1972 77.0403 14.8252C77.5998 14.2672 78.5322 13.7092 79.2781 13.5232C81.0315 12.928 82.9329 12.928 84.6863 13.5232C85.4322 13.5232 86.1782 13.8952 86.9241 14.4532L88.416 15.9412C88.9755 16.4992 89.1619 17.2431 89.3484 17.8011L85.4322 18.9171C85.4322 18.3591 84.8728 17.8011 84.3133 17.4291C83.6677 16.9462 82.8825 16.6851 82.0755 16.6851C81.3093 16.5969 80.5337 16.7258 79.8376 17.0571L79.0917 17.8011L78.7187 18.7311L79.0917 19.6611L80.0241 20.4051L81.143 20.7771L82.2619 21.1491L85.9917 22.2651L88.416 23.567C88.9755 24.125 89.3484 24.683 89.5349 25.427C89.9079 25.799 89.9079 26.543 89.9079 27.287C89.9079 28.217 89.9079 29.1469 89.3484 29.7049C88.9755 30.4489 88.416 31.1929 87.6701 31.7509C86.9241 32.3089 85.9917 32.8669 85.0592 33.0529C84.1268 33.4249 83.0079 33.6109 81.889 33.6109C80.0241 33.6109 78.5322 33.2389 77.0403 32.3089C75.7349 31.3789 74.8025 30.4489 74.243 28.9609L77.9727 27.473C78.3457 28.403 78.9052 28.9609 79.6511 29.3329C80.2106 29.7049 81.143 29.8909 82.0755 29.8909C83.1944 29.8909 83.9403 29.5189 84.8728 28.9609H85.0592ZM103.708 33.0529L100.165 33.7969C99.0458 33.7969 98.1133 33.7969 97.1809 33.2389C96.2485 32.8669 95.5025 32.1229 94.943 31.1929C94.3836 30.2629 94.1971 28.7749 94.1971 26.915V17.6151H90.6538V13.3372H91.5863C92.7052 13.3372 93.8241 13.1512 94.3836 12.0352C94.7566 11.6632 94.7566 11.1052 94.7566 9.80326V8.31529H98.4863V13.3372H102.589V17.8011H98.2998V29.1469L99.2322 30.0769L100.724 30.2629H102.962L103.708 33.0529ZM116.762 17.0571L116.203 16.6851H115.27L114.711 16.4992C113.148 16.4671 111.627 16.9951 110.421 17.9871L109.303 19.4751C108.93 20.0331 108.93 20.7771 108.93 21.3351V33.7969H104.64V13.3372H107.997L108.743 15.7552C109.303 14.8252 110.048 14.2672 110.981 13.8952C112.066 13.2962 113.284 12.9766 114.524 12.9652L117.694 13.3372L116.576 17.0571H116.762ZM127.392 33.6109C125.335 33.6053 123.325 33.0049 121.603 31.8825C119.882 30.76 118.524 29.1637 117.694 27.287C117.135 25.985 116.762 24.683 116.762 23.195C116.764 21.191 117.346 19.2301 118.437 17.5476C119.529 15.865 121.084 14.5323 122.916 13.7092C125.369 12.7263 128.109 12.7263 130.562 13.7092C131.681 14.0812 132.8 14.8252 133.546 15.7552C134.478 16.6851 135.224 17.9871 135.597 19.4751C136.157 21.1491 136.343 22.823 136.343 25.055H121.238C121.238 25.799 121.611 26.357 122.17 26.915C122.976 28.1661 124.148 29.1401 125.527 29.7049L127.951 30.0769C129.889 30.0794 131.755 29.3482 133.173 28.031L135.784 30.4489C134.699 31.4291 133.432 32.1874 132.054 32.6809C130.749 33.2389 129.07 33.6109 127.392 33.6109ZM126.646 16.4992C126.086 16.4992 125.34 16.4992 124.781 16.8711C123.587 17.4094 122.604 18.3244 121.984 19.4751C121.611 20.0331 121.238 20.7771 121.238 21.3351H131.867C131.867 20.7771 131.867 20.2191 131.494 19.4751C131.071 18.5176 130.358 17.7161 129.455 17.1825C128.552 16.649 127.505 16.41 126.459 16.4992H126.646ZM158.349 13.3372V33.6109H154.992L154.246 30.8209C153.686 31.7509 152.754 32.4949 151.635 32.8669C150.516 33.4249 149.397 33.6109 148.278 33.6109C146.926 33.6374 145.583 33.387 144.332 32.8751C143.081 32.3632 141.949 31.6008 141.005 30.6349C139.046 28.6515 137.948 25.9791 137.948 23.195C137.948 20.411 139.046 17.7386 141.005 15.7552C141.962 14.8065 143.097 14.0553 144.345 13.5446C145.593 13.034 146.929 12.7739 148.278 12.7792C149.397 12.7792 150.516 13.1512 151.449 13.5232C152.568 13.8952 153.5 14.6392 154.246 15.3832L154.992 13.3372H158.535H158.349ZM148.278 30.0769L150.516 29.5189C151.262 29.1469 152.008 28.5889 152.381 28.031C153.594 26.7125 154.26 24.9843 154.246 23.195C154.225 21.4123 153.564 19.6962 152.381 18.3591C152.008 17.8011 151.262 17.2431 150.516 16.8711C149.792 16.5109 148.994 16.3234 148.185 16.3234C147.376 16.3234 146.578 16.5109 145.854 16.8711L143.989 18.3591C142.776 19.6775 142.11 21.4057 142.124 23.195C142.145 24.9778 142.807 26.6939 143.989 28.031L145.854 29.5189C146.6 29.8909 147.346 30.0769 148.278 30.0769ZM165.622 33.6109H161.519V13.1512H164.689L165.622 15.0112C165.995 14.4532 166.741 13.8952 167.486 13.5232C168.046 13.1512 168.978 12.7792 169.911 12.7792C171.552 12.8034 173.134 13.3951 174.386 14.4532L175.692 15.9412C176.065 15.1972 176.811 14.4532 177.743 13.7092C178.682 13.0879 179.787 12.7638 180.914 12.7792L183.338 13.1512C184.248 13.4441 185.085 13.9275 185.792 14.569C186.5 15.2106 187.062 15.9954 187.441 16.8711C187.814 17.9871 188 19.4751 188 21.1491V33.6109H184.27V21.1491C184.27 19.2891 183.711 18.1731 182.965 17.4291C182.405 16.8711 181.286 16.4992 180.168 16.4992C179.235 16.4992 178.303 16.8711 177.743 17.6151C177.184 18.3591 176.811 19.4751 176.811 21.1491V33.6109H172.895V21.1491C172.895 19.2891 172.522 18.1731 171.776 17.4291C171.03 16.8711 170.097 16.4992 168.978 16.4992C168.046 16.4992 167.3 16.8711 166.74 17.4291C165.995 18.1731 165.622 19.1031 165.622 20.4051V33.4249V33.6109Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50.2995 13.3977L69.7506 12.0755C71.0598 12.0755 71.9949 13.3977 71.2468 14.3421L57.5937 33.2301C57.2196 33.4189 56.8455 33.7967 56.2845 33.7967H25.6116C25.379 33.7683 25.1563 33.6851 24.9614 33.5539C24.7665 33.4226 24.6048 33.247 24.4894 33.0412L10.8363 14.3421C10.0881 13.3977 10.8363 11.8867 12.1455 12.0755L31.5965 13.3977L39.8258 4.33148C40.3869 3.57596 41.6961 3.57596 42.0702 4.33148L50.2995 13.2088V13.3977ZM54.4142 30.7746L41.6961 26.0526V30.7746H54.4142ZM40.1999 30.7746V26.0526L27.4819 30.7746H40.3869H40.1999ZM38.7037 25.1082L25.7986 29.8302L16.4471 16.6087L38.8907 24.9194L38.7037 25.1082ZM43.1924 25.1082L56.2845 29.8302L65.6359 16.6087L43.1924 24.9194V25.1082ZM40.1999 23.975V8.29795L29.7262 20.0085L40.1999 23.7861V23.975ZM41.6961 23.975V8.29795L52.3568 20.0085L41.6961 23.7861V23.975ZM26.5467 18.8752L28.9781 16.2309L17.0082 15.4754L26.5467 18.8752ZM55.3493 18.8752L52.9179 16.2309L64.7008 15.4754L55.3493 18.8752Z" fill="#006CFF" />
                  </svg>

                </div>

                <div>
                  <svg width="174" height="40" viewBox="0 0 174 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M53.268 16.7909C52.1645 16.0381 49.2658 15.7166 47.1586 16.2924C47.0455 14.1648 45.9622 12.3716 43.9822 10.8069L43.2495 10.3084L42.761 11.0565C41.8008 12.5337 41.3959 14.5026 41.5391 16.2924C41.6522 17.3952 42.0303 18.6344 42.761 19.5337C40.0182 21.1465 37.4894 20.7803 26.2919 20.7803H9.00383C8.95364 23.3433 9.35981 28.2728 12.4526 32.2859C12.7945 32.7294 13.1686 33.1581 13.5754 33.5711C16.0901 36.1233 19.8895 37.9952 25.5706 38C34.2381 38.0081 41.6636 33.2591 46.181 21.778C47.6672 21.8024 51.5911 22.0479 53.5115 18.2871C53.5584 18.224 54 17.2901 54 17.2901L53.268 16.7916V16.7909ZM20.2863 14.4476H15.425V19.375H20.2863V14.4476ZM26.5663 14.4476H21.7049V19.375H26.5663V14.4476ZM32.8469 14.4476H27.9855V19.375H32.8469V14.4476ZM39.1275 14.4476H34.2662V19.375H39.1275V14.4476ZM14.0057 14.4476H9.14435V19.375H14.0057V14.4476ZM20.2863 8.22415H15.425V13.1515H20.2863V8.22415ZM26.5663 8.22415H21.7049V13.1515H26.5663V8.22415ZM32.8469 8.22415H27.9855V13.1515H32.8469V8.22415ZM32.8469 2H27.9855V6.92737H32.8469V2Z" fill="#1D63ED" />
                    <path d="M164.998 30.4384C164.998 31.7229 164 32.7315 162.702 32.7315C161.405 32.7315 160.393 31.7229 160.393 30.4384C160.393 29.1538 161.417 28.173 162.702 28.173C163.987 28.173 164.998 29.1816 164.998 30.4384ZM160.967 30.4384C160.967 31.4469 161.705 32.2479 162.716 32.2479C163.727 32.2479 164.425 31.4469 164.425 30.4526C164.425 29.4583 163.7 28.6288 162.704 28.6288C161.707 28.6288 160.968 29.4441 160.968 30.4384H160.967ZM162.348 31.6266H161.829V29.3613C162.033 29.3199 162.32 29.2921 162.689 29.2921C163.113 29.2921 163.303 29.3613 163.468 29.4583C163.591 29.5546 163.687 29.7343 163.687 29.9554C163.687 30.2044 163.495 30.3977 163.223 30.4804V30.5082C163.44 30.5903 163.564 30.7564 163.632 31.0603C163.7 31.4055 163.741 31.5439 163.797 31.6266H163.236C163.168 31.5439 163.126 31.337 163.059 31.0739C163.018 30.8256 162.881 30.7151 162.594 30.7151H162.348V31.6273V31.6266ZM162.361 30.342H162.606C162.893 30.342 163.126 30.2457 163.126 30.0111C163.126 29.8035 162.976 29.6645 162.647 29.6645C162.511 29.6645 162.415 29.6787 162.361 29.6937V30.342Z" fill="white" />
                    <path d="M76.9482 7.51243C76.6268 7.19501 76.241 7.03359 75.7787 7.03359C75.3164 7.03359 74.9192 7.19501 74.6099 7.51243C74.2999 7.82984 74.1482 8.23678 74.1482 8.72172V16.8198C72.5581 15.4912 70.723 14.8211 68.6356 14.8211C66.2094 14.8211 64.1348 15.7069 62.4157 17.4845C60.6967 19.2561 59.8433 21.3993 59.8433 23.9128C59.8433 26.4263 60.7028 28.5635 62.4157 30.3411C64.1348 32.1127 66.204 33.0045 68.6356 33.0045C71.0672 33.0045 73.1136 32.1188 74.8554 30.3411C76.5745 28.5872 77.4279 26.4447 77.4279 23.9128V8.72172C77.4279 8.23678 77.2702 7.82984 76.9482 7.51243ZM73.7155 26.1035V26.1157C73.429 26.8041 73.0371 27.4084 72.5406 27.9232C72.0441 28.4441 71.459 28.851 70.7927 29.1562C70.1204 29.4614 69.4072 29.6113 68.6416 29.6113C67.8761 29.6113 67.1454 29.4614 66.4731 29.1562C65.8008 28.851 65.2217 28.4441 64.7312 27.9293C64.2401 27.4145 63.8489 26.8102 63.5624 26.1218C63.2759 25.4273 63.1297 24.6914 63.1297 23.9128C63.1297 23.1342 63.2759 22.3983 63.5624 21.7038C63.8489 21.0093 64.2408 20.4111 64.7312 19.8963C65.2224 19.3815 65.8068 18.9746 66.4731 18.6694C67.1454 18.3642 67.8647 18.2143 68.6416 18.2143C69.4186 18.2143 70.1204 18.3642 70.7927 18.6694C71.4651 18.9746 72.0441 19.3815 72.5406 19.9024C73.0371 20.4233 73.429 21.0276 73.7155 21.7099C74.002 22.3983 74.1482 23.1288 74.1482 23.9067C74.1482 24.6846 74.002 25.4212 73.7155 26.1035Z" fill="white" />
                    <path d="M149.588 20.4237C149.161 19.3459 148.511 18.3706 147.658 17.4964L147.646 17.4903C145.91 15.7187 143.834 14.8269 141.427 14.8269C139.019 14.8269 136.925 15.7126 135.206 17.4903C133.487 19.2618 132.634 21.4051 132.634 23.9186C132.634 26.4321 133.494 28.5692 135.206 30.3469C136.925 32.1184 138.995 33.0103 141.427 33.0103C143.635 33.0103 145.547 32.2744 147.173 30.802C147.487 30.4669 147.646 30.06 147.646 29.5866C147.646 29.1132 147.495 28.6947 147.184 28.3773C146.875 28.0599 146.483 27.8985 146.015 27.8985C145.607 27.9107 145.244 28.0484 144.934 28.3237C144.443 28.7544 143.911 29.084 143.333 29.2997C142.754 29.5154 142.122 29.6232 141.433 29.6232C140.825 29.6232 140.24 29.5276 139.685 29.3302C139.129 29.1329 138.61 28.8629 138.148 28.5102C137.679 28.1569 137.277 27.7384 136.932 27.2413C136.587 26.7502 136.324 26.2056 136.149 25.6074H148.583C149.044 25.6074 149.43 25.446 149.752 25.1286C150.074 24.8111 150.232 24.4042 150.232 23.9193C150.232 22.6625 150.014 21.4953 149.589 20.4237H149.588ZM136.136 22.2311C136.306 21.6384 136.563 21.0937 136.908 20.5973C137.253 20.1062 137.662 19.6817 138.129 19.3283C138.603 18.9749 139.117 18.7057 139.684 18.5083C140.25 18.3109 140.829 18.2153 141.427 18.2153C142.024 18.2153 142.601 18.3109 143.162 18.5083C143.723 18.7057 144.239 18.9749 144.7 19.3283C145.168 19.6817 145.577 20.1001 145.921 20.5973C146.272 21.0883 146.536 21.6329 146.717 22.2311H136.135H136.136Z" fill="white" />
                    <path d="M164.868 15.9639C164.576 15.6709 164.207 15.443 163.763 15.2755C163.319 15.1079 162.834 14.994 162.302 14.9282C161.776 14.8624 161.278 14.8326 160.817 14.8326C159.77 14.8326 158.788 15.0062 157.865 15.3534C156.941 15.7007 156.088 16.1972 155.304 16.8435V16.5207C155.304 16.0541 155.146 15.6587 154.824 15.3297C154.504 15.0008 154.123 14.8332 153.674 14.8332C153.224 14.8332 152.826 15.0008 152.505 15.3297C152.183 15.6587 152.025 16.0602 152.025 16.5207V31.3232C152.025 31.7898 152.183 32.1852 152.505 32.5141C152.826 32.8431 153.211 33.0106 153.674 33.0106C154.136 33.0106 154.509 32.8431 154.824 32.5141C155.146 32.1852 155.304 31.7837 155.304 31.3232V23.9189C155.304 23.1287 155.45 22.3867 155.737 21.6922C156.023 20.9977 156.415 20.3995 156.912 19.8847C157.41 19.37 157.994 18.963 158.66 18.6693C159.332 18.3702 160.046 18.2203 160.812 18.2203C161.578 18.2203 162.302 18.358 162.963 18.6273C163.226 18.7473 163.454 18.807 163.653 18.807C163.881 18.807 164.097 18.765 164.296 18.6754C164.494 18.5859 164.67 18.4659 164.816 18.3106C164.963 18.1552 165.079 17.9755 165.167 17.7659C165.255 17.5625 165.302 17.3407 165.302 17.1013C165.302 16.6346 165.155 16.2575 164.863 15.9639H164.869H164.868Z" fill="white" />
                    <path d="M96.2271 20.4295C95.8003 19.3579 95.1629 18.3765 94.3041 17.4907C92.5683 15.7192 90.493 14.8273 88.0842 14.8273C85.6755 14.8273 83.5834 15.7131 81.8644 17.4907C80.1454 19.2623 79.2926 21.4055 79.2926 23.919C79.2926 26.4326 80.1521 28.5697 81.8644 30.3473C83.5834 32.1189 85.6527 33.0108 88.0842 33.0108C90.5158 33.0108 92.5623 32.125 94.3041 30.3473C96.0231 28.5934 96.8766 26.4509 96.8766 23.919C96.8645 22.6623 96.6484 21.5011 96.2277 20.4295H96.2271ZM93.1641 26.1036V26.1158C92.8776 26.8042 92.4858 27.4085 91.9893 27.9233C91.4927 28.4442 90.9077 28.8511 90.2414 29.1564C89.5751 29.4616 88.8558 29.6114 88.0903 29.6114C87.3247 29.6114 86.594 29.4616 85.9217 29.1564C85.2494 28.8511 84.6704 28.4442 84.1799 27.9294C83.6887 27.4146 83.2976 26.8103 83.0111 26.1219C82.7246 25.4274 82.5783 24.6915 82.5783 23.9129C82.5783 23.1343 82.7246 22.3984 83.0111 21.7039C83.2976 21.0094 83.6894 20.4112 84.1799 19.8964C84.671 19.3816 85.2554 18.9747 85.9217 18.6695C86.594 18.3643 87.3133 18.2144 88.0903 18.2144C88.8673 18.2144 89.5691 18.3643 90.2414 18.6695C90.9137 18.9747 91.4927 19.3816 91.9893 19.9025C92.4858 20.4234 92.8776 21.0277 93.1641 21.71C93.4506 22.3984 93.5969 23.1289 93.5969 23.9068C93.5969 24.6848 93.4506 25.4213 93.1641 26.1036Z" fill="white" />
                    <path d="M131.394 16.5148C131.394 16.2876 131.347 16.0719 131.26 15.8684C131.172 15.665 131.055 15.4798 130.909 15.3238C130.763 15.1685 130.588 15.0423 130.389 14.9589C130.191 14.8755 129.974 14.8273 129.746 14.8273C129.419 14.8273 129.126 14.9114 128.869 15.0851L119.481 21.4001V8.73408C119.481 8.25525 119.324 7.85441 119.002 7.52479C118.681 7.19584 118.301 7.02832 117.851 7.02832C117.401 7.02832 117.003 7.19584 116.681 7.52479C116.36 7.85373 116.202 8.25525 116.202 8.73408V31.2996C116.202 31.7662 116.36 32.1678 116.681 32.5028C117.003 32.8378 117.389 33.0054 117.851 33.0054C118.313 33.0054 118.687 32.8378 119.002 32.5028C119.324 32.1678 119.481 31.7662 119.481 31.2996V25.4397L121.399 24.1409L128.653 32.5625C128.946 32.8555 129.314 32.9993 129.752 32.9993C129.981 32.9993 130.197 32.9572 130.395 32.8677C130.594 32.7836 130.77 32.6581 130.915 32.5028C131.061 32.3475 131.178 32.1678 131.266 31.9582C131.354 31.7547 131.4 31.5329 131.4 31.3118C131.4 30.8689 131.249 30.4735 130.944 30.1269L124.192 22.2682L130.768 17.8509C131.189 17.5579 131.394 17.1089 131.394 16.5039V16.5161L131.394 16.5148Z" fill="white" />
                    <path d="M103.599 19.8848C104.101 19.37 104.686 18.9631 105.359 18.6694C106.031 18.3703 106.744 18.2204 107.51 18.2204C108.2 18.2204 108.837 18.3404 109.427 18.5792C110.012 18.8186 110.573 19.172 111.105 19.6325C111.42 19.8895 111.777 20.0211 112.174 20.0211C112.648 20.0211 113.034 19.8597 113.344 19.5362C113.654 19.2126 113.806 18.8057 113.806 18.3208C113.806 17.8358 113.618 17.3868 113.239 17.0403C111.625 15.5678 109.714 14.8313 107.51 14.8313C105.084 14.8313 103.009 15.717 101.29 17.4947C99.571 19.2662 98.7182 21.4094 98.7182 23.923C98.7182 26.4365 99.5777 28.5736 101.29 30.3513C103.009 32.1228 105.078 33.0147 107.51 33.0147C109.708 33.0147 111.619 32.2788 113.239 30.8057C113.583 30.4469 113.759 30.0339 113.759 29.555C113.759 29.0762 113.607 28.6632 113.298 28.3458C112.988 28.0283 112.596 27.8669 112.129 27.8669C111.732 27.8791 111.386 27.9985 111.094 28.2257C110.568 28.6923 110.019 29.0396 109.428 29.2729C108.844 29.5062 108.206 29.6202 107.511 29.6202C106.745 29.6202 106.032 29.4703 105.359 29.1712C104.687 28.8721 104.103 28.4651 103.599 27.9564C103.097 27.4478 102.699 26.8374 102.413 26.149C102.126 25.4544 101.98 24.7125 101.98 23.9223C101.98 23.1322 102.126 22.3902 102.413 21.6957C102.699 21.0012 103.096 20.4029 103.599 19.8882V19.8821L103.599 19.8848Z" fill="white" />
                  </svg>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-[70px]">
          <div className="container">
            <h2 className="text-5xl font-bold text-white text-center mb-[70px]">My <span className="text-[#CBACF9]">work experince</span></h2>
            <div className="grid grid-cols-2 gap-x-[40px] gap-y-[30px]">
              {experience.map((x, index) => (
                <div className="flex flex-row items-center gap-[30px] border border-[#363749] py-[46px] px-[55px] rounded-[23px] relative overflow-hidden backgroundCardWork">
                  <span className="h-[5px] bg-[#161935] w-full absolute top-0 left-0"></span>
                  <Image src={x.link} alt={x.title} />
                  <div className="flex flex-col gap-3">
                    <h4 className="text-white text-[28px] font-bold">{x.title}</h4>
                    <p className="text-[#BEC1DD] text-[16px]">{x.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-[60px]">
          <div className="container">
            <h3 className="text-5xl font-bold text-white text-center mb-[60px]">My <span className="text-ColorPrimary">approach</span></h3>
            <div className="grid grid-cols-3 gap-x-[40px] gap-y-[30px] h-[680px]">
              {approch.map((x, index) => (
                <div className="border border-[#363749] border-opacity-[49%] py-[46px] px-[24px] rounded-[23px] flex justify-center items-center relative backgroundCardWork ">
                  <span style={getIndex !== index ? { display: "block" } : { display: "none" }} className="absolute left-[-17px] top-[-17px]"><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.2">
                      <path d="M39.8906 23C39.8906 23.2859 39.777 23.5602 39.5749 23.7624C39.3727 23.9645 39.0984 24.0781 38.8125 24.0781H24.0781V38.8125C24.0781 39.0984 23.9645 39.3727 23.7624 39.5749C23.5602 39.777 23.2859 39.8906 23 39.8906C22.7141 39.8906 22.4398 39.777 22.2377 39.5749C22.0355 39.3727 21.9219 39.0984 21.9219 38.8125V24.0781H7.1875C6.90156 24.0781 6.62734 23.9645 6.42515 23.7624C6.22296 23.5602 6.10938 23.2859 6.10938 23C6.10938 22.7141 6.22296 22.4398 6.42515 22.2377C6.62734 22.0355 6.90156 21.9219 7.1875 21.9219H21.9219V7.1875C21.9219 6.90156 22.0355 6.62734 22.2377 6.42515C22.4398 6.22296 22.7141 6.10938 23 6.10938C23.2859 6.10938 23.5602 6.22296 23.7624 6.42515C23.9645 6.62734 24.0781 6.90156 24.0781 7.1875V21.9219H38.8125C39.0984 21.9219 39.3727 22.0355 39.5749 22.2377C39.777 22.4398 39.8906 22.7141 39.8906 23Z" fill="#E4ECFF" />
                    </g>
                  </svg>
                  </span>

                  <span style={getIndex !== index ? { display: "block" } : { display: "none" }} className="absolute left-[-17px] bottom-[-17px]"><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.2">
                      <path d="M39.8906 23C39.8906 23.2859 39.777 23.5602 39.5749 23.7624C39.3727 23.9645 39.0984 24.0781 38.8125 24.0781H24.0781V38.8125C24.0781 39.0984 23.9645 39.3727 23.7624 39.5749C23.5602 39.777 23.2859 39.8906 23 39.8906C22.7141 39.8906 22.4398 39.777 22.2377 39.5749C22.0355 39.3727 21.9219 39.0984 21.9219 38.8125V24.0781H7.1875C6.90156 24.0781 6.62734 23.9645 6.42515 23.7624C6.22296 23.5602 6.10938 23.2859 6.10938 23C6.10938 22.7141 6.22296 22.4398 6.42515 22.2377C6.62734 22.0355 6.90156 21.9219 7.1875 21.9219H21.9219V7.1875C21.9219 6.90156 22.0355 6.62734 22.2377 6.42515C22.4398 6.22296 22.7141 6.10938 23 6.10938C23.2859 6.10938 23.5602 6.22296 23.7624 6.42515C23.9645 6.62734 24.0781 6.90156 24.0781 7.1875V21.9219H38.8125C39.0984 21.9219 39.3727 22.0355 39.5749 22.2377C39.777 22.4398 39.8906 22.7141 39.8906 23Z" fill="#E4ECFF" />
                    </g>
                  </svg>
                  </span>

                  <span style={getIndex !== index ? { display: "block" } : { display: "none" }} className="absolute right-[-17px] bottom-[-17px]"><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.2">
                      <path d="M39.8906 23C39.8906 23.2859 39.777 23.5602 39.5749 23.7624C39.3727 23.9645 39.0984 24.0781 38.8125 24.0781H24.0781V38.8125C24.0781 39.0984 23.9645 39.3727 23.7624 39.5749C23.5602 39.777 23.2859 39.8906 23 39.8906C22.7141 39.8906 22.4398 39.777 22.2377 39.5749C22.0355 39.3727 21.9219 39.0984 21.9219 38.8125V24.0781H7.1875C6.90156 24.0781 6.62734 23.9645 6.42515 23.7624C6.22296 23.5602 6.10938 23.2859 6.10938 23C6.10938 22.7141 6.22296 22.4398 6.42515 22.2377C6.62734 22.0355 6.90156 21.9219 7.1875 21.9219H21.9219V7.1875C21.9219 6.90156 22.0355 6.62734 22.2377 6.42515C22.4398 6.22296 22.7141 6.10938 23 6.10938C23.2859 6.10938 23.5602 6.22296 23.7624 6.42515C23.9645 6.62734 24.0781 6.90156 24.0781 7.1875V21.9219H38.8125C39.0984 21.9219 39.3727 22.0355 39.5749 22.2377C39.777 22.4398 39.8906 22.7141 39.8906 23Z" fill="#E4ECFF" />
                    </g>
                  </svg>
                  </span>

                  <span style={getIndex !== index ? { display: "block" } : { display: "none" }} className="absolute right-[-17px] top-[-17px]"><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.2">
                      <path d="M39.8906 23C39.8906 23.2859 39.777 23.5602 39.5749 23.7624C39.3727 23.9645 39.0984 24.0781 38.8125 24.0781H24.0781V38.8125C24.0781 39.0984 23.9645 39.3727 23.7624 39.5749C23.5602 39.777 23.2859 39.8906 23 39.8906C22.7141 39.8906 22.4398 39.777 22.2377 39.5749C22.0355 39.3727 21.9219 39.0984 21.9219 38.8125V24.0781H7.1875C6.90156 24.0781 6.62734 23.9645 6.42515 23.7624C6.22296 23.5602 6.10938 23.2859 6.10938 23C6.10938 22.7141 6.22296 22.4398 6.42515 22.2377C6.62734 22.0355 6.90156 21.9219 7.1875 21.9219H21.9219V7.1875C21.9219 6.90156 22.0355 6.62734 22.2377 6.42515C22.4398 6.22296 22.7141 6.10938 23 6.10938C23.2859 6.10938 23.5602 6.22296 23.7624 6.42515C23.9645 6.62734 24.0781 6.90156 24.0781 7.1875V21.9219H38.8125C39.0984 21.9219 39.3727 22.0355 39.5749 22.2377C39.777 22.4398 39.8906 22.7141 39.8906 23Z" fill="#E4ECFF" />
                    </g>
                  </svg>
                  </span>

                  <div className="flex flex-col gap-[18px]">
                    <div className="flex flex-col gap-[18px]">
                      <button className="btn-primary rounded-[11px] border cursor-pointer border-[#363749] border-opacity-[49%] mx-auto" style={getIndex === index ? { paddingTop: 12 + "px", paddingBottom: 12 + "px", paddingRight: 20 + "px", paddingLeft: 20 + "px" } : {}} onClick={() => functionSetIndex(index)}>
                        <p className="text-ColorPrimary text-3xl font-bold cursor-pointer" style={getIndex !== index ? { fontSize: 32 + "px" } : { fontSize: 24 + "px" }}>
                          Phase {index + 1}
                        </p>
                      </button>
                      <h3 className="text-white text-[32px] font-bold text-center leading-tight" style={getIndex === index ? { display: "block" } : { display: "none" }}>Development & Progress Update</h3>
                    </div>
                    <p className="text-white text-center text-base font-normal" style={getIndex === index ? { display: "block" } : { display: "none" }}>Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-[222.65px] relative z-20">
          <div className="container">
            <div className="flex flex-col gap-5 mb-8">
              <h2 className="text-center font-bold text-5xl text-white">
                Ready to take <span className="text-[#CBACF9]">your</span> digital <br /> presence to the next level?
              </h2>
              <p className="text-sm text-[#C1C2D3] font-normal text-center">
                Reach out to me today and let's discuss how I can help you achieve your goals.
              </p>
            </div>

            <button className="btn-primary border-2 mx-auto border-ColorLinePrimary border-opacity-[16%] rounded-[14px]">See my work
              <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.292893 11.7929C-0.0976311 12.1834 -0.0976311 12.8166 0.292893 13.2071C0.683418 13.5976 1.31658 13.5976 1.70711 13.2071L0.292893 11.7929ZM13 1.5C13 0.947716 12.5523 0.5 12 0.5L3 0.5C2.44771 0.5 2 0.947716 2 1.5C2 2.05229 2.44771 2.5 3 2.5H11V10.5C11 11.0523 11.4477 11.5 12 11.5C12.5523 11.5 13 11.0523 13 10.5L13 1.5ZM1.70711 13.2071L12.7071 2.20711L11.2929 0.792894L0.292893 11.7929L1.70711 13.2071Z" fill="white" />
              </svg>
            </button>

          </div>
        </section>

        <footer className="pb-[50px] relative">
          <Image src={ImagesBg} alt="alt" className="absolute left-1/2 -translate-x-1/2 bottom-0" height={1112.65} />
          <div className="container flex justify-between relative z-10">
            <div><p>Copyright ©2024 John Doe</p></div>
            <div className="flex flex-row gap-[16px]">

              <div className="w-[40px] h-[40px] border border-[#363749] flex justify-center items-center border-opacity-[48%] backgroundCardWork rounded-lg">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_2001_354)">
                    <g clip-path="url(#clip1_2001_354)">
                      <path d="M12.9339 9.70933C12.6331 9.70933 12.3352 9.76859 12.0572 9.88372C11.7792 9.99885 11.5267 10.1676 11.3139 10.3803C11.1012 10.5931 10.9324 10.8456 10.8173 11.1236C10.7022 11.4016 10.6429 11.6995 10.6429 12.0003C10.6429 12.3012 10.7022 12.5991 10.8173 12.8771C10.9324 13.155 11.1012 13.4076 11.3139 13.6203C11.5267 13.833 11.7792 14.0018 12.0572 14.1169C12.3352 14.2321 12.6331 14.2913 12.9339 14.2913C13.5415 14.2913 14.1243 14.05 14.5539 13.6203C14.9835 13.1907 15.2249 12.6079 15.2249 12.0003C15.2249 11.3927 14.9835 10.81 14.5539 10.3803C14.1243 9.9507 13.5415 9.70933 12.9339 9.70933ZM12.9339 8.18133C13.4407 8.17313 13.9441 8.26586 14.4146 8.45413C14.8852 8.6424 15.3136 8.92243 15.6749 9.27792C16.0362 9.6334 16.3231 10.0572 16.519 10.5247C16.7149 10.9922 16.8157 11.494 16.8157 12.0008C16.8157 12.5077 16.7149 13.0095 16.519 13.4769C16.3231 13.9444 16.0362 14.3683 15.6749 14.7237C15.3136 15.0792 14.8852 15.3593 14.4146 15.5475C13.9441 15.7358 13.4407 15.8285 12.9339 15.8203C11.9208 15.8203 10.9492 15.4179 10.2328 14.7015C9.51639 13.9851 9.11392 13.0135 9.11392 12.0003C9.11392 10.9872 9.51639 10.0156 10.2328 9.29918C10.9492 8.58279 11.9208 8.18133 12.9339 8.18133ZM17.8989 7.99033C17.9031 8.11827 17.8814 8.24575 17.8353 8.36517C17.7892 8.48459 17.7196 8.59353 17.6305 8.6855C17.5415 8.77747 17.4349 8.8506 17.317 8.90055C17.1991 8.95049 17.0724 8.97623 16.9444 8.97623C16.8164 8.97623 16.6897 8.95049 16.5718 8.90055C16.454 8.8506 16.3473 8.77747 16.2583 8.6855C16.1693 8.59353 16.0996 8.48459 16.0535 8.36517C16.0074 8.24575 15.9858 8.11827 15.9899 7.99033C15.9899 7.73705 16.0905 7.49414 16.2696 7.31504C16.4487 7.13594 16.6916 7.03533 16.9449 7.03533C17.1982 7.03533 17.4411 7.13594 17.6202 7.31504C17.7993 7.49414 17.8989 7.73705 17.8989 7.99033ZM12.9339 5.89033C11.0439 5.89033 10.7359 5.89433 9.85692 5.93333C9.25692 5.96233 8.85592 6.04233 8.48292 6.18733C8.15192 6.31533 7.91292 6.46933 7.65792 6.72433C7.41792 6.95533 7.23492 7.23733 7.11992 7.54933C6.97492 7.92333 6.89492 8.32433 6.86692 8.92333C6.82692 9.76633 6.82292 10.0613 6.82292 12.0003C6.82292 13.8903 6.82792 14.1993 6.86692 15.0783C6.89592 15.6763 6.97592 16.0783 7.11992 16.4513C7.24992 16.7833 7.40292 17.0223 7.65692 17.2763C7.91392 17.5323 8.15292 17.6863 8.48192 17.8133C8.85892 17.9593 9.26092 18.0403 9.85692 18.0673C10.6999 18.1073 10.9949 18.1113 12.9339 18.1113C14.8239 18.1113 15.1329 18.1063 16.0119 18.0673C16.6089 18.0393 17.0119 17.9593 17.3849 17.8143C17.7149 17.6853 17.9559 17.5323 18.2099 17.2783C18.4669 17.0203 18.6199 16.7813 18.7469 16.4533C18.8929 16.0763 18.9739 15.6733 19.0009 15.0783C19.0409 14.2353 19.0449 13.9403 19.0449 12.0003C19.0449 10.1103 19.0399 9.80233 19.0009 8.92333C18.9729 8.32533 18.8929 7.92233 18.7469 7.54933C18.6318 7.23765 18.4483 6.95574 18.2099 6.72433C17.979 6.48503 17.697 6.3011 17.3849 6.18633C17.0109 6.04133 16.6089 5.96133 16.0119 5.93333C15.1689 5.89333 14.8739 5.89033 12.9339 5.89033ZM12.9339 4.36133C15.0099 4.36133 15.2689 4.36933 16.0829 4.40733C16.8969 4.44533 17.4499 4.57333 17.9379 4.76233C18.4419 4.95633 18.8669 5.21933 19.2909 5.64333C19.6799 6.02533 19.9809 6.48733 20.1719 6.99733C20.3609 7.48333 20.4889 8.03733 20.5269 8.85133C20.5629 9.66633 20.5729 9.92533 20.5729 12.0013C20.5729 14.0763 20.5649 14.3353 20.5269 15.1493C20.4889 15.9633 20.3609 16.5163 20.1719 17.0043C19.9809 17.5143 19.6799 17.9763 19.2919 18.3573C18.9098 18.7457 18.4478 19.0463 17.9379 19.2383C17.4509 19.4273 16.8959 19.5553 16.0829 19.5933C15.2689 19.6293 15.0099 19.6393 12.9339 19.6393C10.8589 19.6393 10.5999 19.6313 9.78492 19.5933C8.97192 19.5553 8.41792 19.4273 7.93092 19.2383C7.42083 19.0472 6.95871 18.7469 6.57692 18.3583C6.18864 17.9763 5.88833 17.5143 5.69692 17.0043C5.50692 16.5173 5.37892 15.9623 5.34092 15.1493C5.30492 14.3353 5.29492 14.0763 5.29492 12.0003C5.29492 9.92533 5.30292 9.66633 5.34092 8.85133C5.37892 8.03733 5.50692 7.48433 5.69592 6.99733C5.88792 6.48733 6.18792 6.02533 6.57692 5.64333C6.95879 5.25489 7.42089 4.95456 7.93092 4.76333C8.41792 4.57333 8.97092 4.44533 9.78492 4.40733C10.5999 4.37133 10.8589 4.36133 12.9349 4.36133H12.9339Z" fill="white" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_2001_354">
                      <rect width="24" height="24" fill="white" transform="translate(0.934082)" />
                    </clipPath>
                    <clipPath id="clip1_2001_354">
                      <rect width="24" height="24" fill="white" transform="translate(0.934082)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="w-[40px] h-[40px] border border-[#363749] flex justify-center items-center border-opacity-[48%] backgroundCardWork rounded-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_4022_15)">
                    <g clip-path="url(#clip1_4022_15)">
                      <path d="M14.5199 7.07325C13.9395 7.07342 13.3823 7.3014 12.9683 7.70816C12.5543 8.11491 12.3164 8.66793 12.3059 9.24825L12.2839 10.4513C12.2828 10.5159 12.268 10.5797 12.2405 10.6382C12.2129 10.6967 12.1733 10.7488 12.1241 10.7908C12.075 10.8329 12.0174 10.8641 11.9553 10.8822C11.8933 10.9004 11.828 10.9052 11.7639 10.8963L10.5719 10.7343C9.00293 10.5203 7.49993 9.79725 6.05793 8.59625C5.60093 11.1243 6.49293 12.8763 8.64193 14.2273L9.97593 15.0663C10.0391 15.1063 10.0915 15.1612 10.1287 15.2262C10.1659 15.2911 10.1866 15.3641 10.1892 15.4389C10.1917 15.5137 10.176 15.5879 10.1434 15.6553C10.1108 15.7226 10.0622 15.7809 10.0019 15.8253L8.78593 16.7133C9.50993 16.7583 10.1959 16.7263 10.7659 16.6133C14.3699 15.8933 16.7659 13.1823 16.7659 8.70825C16.7659 8.34325 15.9929 7.07325 14.5199 7.07325ZM10.7779 9.21925C10.7912 8.48292 11.0215 7.76688 11.4398 7.16078C11.8582 6.55468 12.446 6.08545 13.1297 5.81185C13.8135 5.53824 14.5627 5.47242 15.2837 5.62262C16.0047 5.77282 16.6653 6.13237 17.1829 6.65625C17.7259 6.65325 18.1879 6.79025 19.2219 6.16425C18.9659 7.41625 18.8399 7.96025 18.2939 8.70825C18.2939 14.5463 14.7059 17.3843 11.0659 18.1113C8.56893 18.6093 4.93893 17.7913 3.89893 16.7053C4.42893 16.6633 6.58293 16.4323 7.82893 15.5213C6.77493 14.8263 2.58193 12.3593 5.33693 5.72525C6.63093 7.23525 7.94193 8.26425 9.27093 8.80925C10.1559 9.17225 10.3729 9.16425 10.7779 9.22025V9.21925Z" fill="white" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_4022_15">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_4022_15">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="w-[40px] h-[40px] border border-[#363749] flex justify-center items-center border-opacity-[48%] backgroundCardWork rounded-lg">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_4022_23)">
                    <path d="M9 0C6.61305 0 4.32387 0.948211 2.63604 2.63604C0.948211 4.32387 0 6.61305 0 9C0 11.3869 0.948211 13.6761 2.63604 15.364C4.32387 17.0518 6.61305 18 9 18C11.3869 18 13.6761 17.0518 15.364 15.364C17.0518 13.6761 18 11.3869 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948211 11.3869 0 9 0ZM11.3723 16.3373H11.3025C11.2501 16.3402 11.1977 16.3324 11.1484 16.3144C11.0991 16.2963 11.0541 16.2684 11.016 16.2322C10.9808 16.1951 10.9534 16.1512 10.9354 16.1033C10.9174 16.0554 10.9091 16.0044 10.911 15.9532V14.8987C10.9155 14.5485 10.9185 14.1937 10.9185 13.8367C10.9173 13.5757 10.8791 13.3161 10.8052 13.0657C10.7352 12.8126 10.5942 12.5849 10.3987 12.4095C10.9215 12.359 11.4354 12.2403 11.9272 12.0563C12.3422 11.8985 12.7175 11.6517 13.0267 11.3333C13.332 11.013 13.5592 10.626 13.6905 10.2037C13.8502 9.68664 13.9261 9.14734 13.9155 8.60625C13.9184 8.22846 13.8523 7.8533 13.7205 7.49925C13.5865 7.1424 13.384 6.81524 13.1243 6.53625C13.1803 6.39554 13.2211 6.24919 13.2457 6.09975C13.2705 5.94975 13.2833 5.79825 13.2833 5.64675C13.2833 5.45175 13.2608 5.25675 13.2158 5.067C13.1749 4.87238 13.1195 4.68109 13.05 4.49475C13.0235 4.48441 12.9952 4.47931 12.9667 4.47975H12.8843C12.7118 4.48125 12.5422 4.50975 12.3787 4.563C12.1986 4.61557 12.0225 4.68073 11.8515 4.758C11.6815 4.83421 11.516 4.9201 11.3557 5.01525C11.1945 5.1105 11.052 5.202 10.926 5.28675C9.66429 4.9351 8.33046 4.9351 7.06875 5.28675C6.92804 5.19268 6.785 5.10215 6.63975 5.01525C6.47727 4.91931 6.30894 4.83364 6.13575 4.75875C5.96525 4.67892 5.78838 4.61344 5.607 4.563C5.44672 4.51005 5.27928 4.48198 5.1105 4.47975H5.028C4.99979 4.47935 4.97177 4.48445 4.9455 4.49475C4.87505 4.68135 4.81741 4.87255 4.773 5.067C4.7325 5.2575 4.713 5.45175 4.71225 5.64675C4.71225 5.79825 4.725 5.94975 4.7505 6.09975C4.77525 6.249 4.815 6.39525 4.8705 6.53625C4.61144 6.81561 4.40964 7.14303 4.2765 7.5C4.14396 7.85393 4.07711 8.22907 4.07925 8.607C4.06876 9.14518 4.14266 9.68169 4.29825 10.197C4.434 10.6192 4.6605 11.007 4.96125 11.334C5.2725 11.6505 5.6475 11.8965 6.06075 12.057C6.5505 12.2445 7.0635 12.3645 7.5855 12.414C7.43975 12.5461 7.32413 12.708 7.2465 12.8887C7.17265 13.0675 7.12223 13.2551 7.0965 13.4468C6.82131 13.5785 6.52035 13.6477 6.21525 13.6492C5.93191 13.6606 5.65226 13.5818 5.4165 13.4243C5.19033 13.2566 4.99879 13.0468 4.8525 12.8063C4.78703 12.7052 4.71381 12.6094 4.6335 12.5198C4.54878 12.4254 4.45537 12.3393 4.3545 12.2625C4.25508 12.1882 4.1461 12.1277 4.0305 12.0825C3.91676 12.0326 3.79394 12.0068 3.66975 12.0068C3.63975 12.0075 3.60975 12.0105 3.57975 12.0142C3.53878 12.0141 3.49796 12.0192 3.45825 12.0292C3.42335 12.0384 3.39034 12.0536 3.36075 12.0743C3.3473 12.0817 3.33604 12.0925 3.32814 12.1057C3.32024 12.1189 3.31596 12.1339 3.31575 12.1492C3.3189 12.1853 3.32994 12.2203 3.34808 12.2517C3.36622 12.283 3.39103 12.31 3.42075 12.3307C3.4905 12.3862 3.54825 12.429 3.59475 12.459L3.61725 12.4747C3.717 12.552 3.813 12.6352 3.90375 12.7245C3.98775 12.798 4.0635 12.8812 4.12875 12.972C4.19625 13.0612 4.25475 13.1565 4.302 13.2578C4.35675 13.3583 4.4145 13.4737 4.47525 13.605C4.61625 13.9605 4.86675 14.2612 5.19075 14.4637C5.5305 14.646 5.9115 14.7367 6.29775 14.727C6.42825 14.727 6.5595 14.7195 6.68925 14.7045C6.81825 14.6835 6.9465 14.6617 7.0755 14.6362V15.9435C7.07783 15.9962 7.06902 16.0488 7.04963 16.0979C7.03025 16.147 7.00073 16.1914 6.963 16.2283C6.92527 16.2651 6.88018 16.2936 6.83068 16.3119C6.78119 16.3302 6.72839 16.3378 6.67575 16.3342H6.62925C4.88028 15.7692 3.3905 14.5984 2.42818 13.0325C1.46585 11.4666 1.09422 9.60852 1.38021 7.79293C1.6662 5.97735 2.59101 4.32353 3.9881 3.12927C5.3852 1.93501 7.16278 1.2788 9.00075 1.2788C10.8387 1.2788 12.6163 1.93501 14.0134 3.12927C15.4105 4.32353 16.3353 5.97735 16.6213 7.79293C16.9073 9.60852 16.5356 11.4666 15.5733 13.0325C14.611 14.5984 13.1212 15.7692 11.3723 16.3342V16.3373Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4022_23">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="w-[40px] h-[40px] border border-[#363749] flex justify-center items-center border-opacity-[48%] backgroundCardWork rounded-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_4022_29)">
                    <g clip-path="url(#clip1_4022_29)">
                      <path d="M8.37404 16.9596L8.92704 17.2836C10.2101 18.0299 11.7208 18.2837 13.1773 17.9976C14.6337 17.7116 15.9363 16.9052 16.8417 15.7291C17.7472 14.553 18.1936 13.0876 18.0977 11.6064C18.0018 10.1252 17.3702 8.7296 16.3206 7.68006C15.2711 6.63053 13.8754 5.99885 12.3943 5.90296C10.9131 5.80707 9.44768 6.25353 8.27158 7.15898C7.09548 8.06443 6.28913 9.36697 6.00306 10.8234C5.717 12.2799 5.97078 13.7906 6.71704 15.0736L7.04004 15.6266L6.54004 17.4606L8.37404 16.9606V16.9596ZM4.36404 19.6396L5.39704 15.8436C4.46371 14.2399 4.14603 12.3513 4.50331 10.5304C4.8606 8.7096 5.86842 7.08106 7.33858 5.94893C8.80874 4.8168 10.6407 4.25848 12.4924 4.37824C14.3441 4.498 16.0889 5.28765 17.401 6.59973C18.713 7.9118 19.5027 9.6566 19.6224 11.5083C19.7422 13.36 19.1839 15.1919 18.0518 16.6621C16.9196 18.1323 15.2911 19.1401 13.4702 19.4974C11.6494 19.8547 9.76078 19.537 8.15704 18.6036L4.36404 19.6396ZM9.24404 8.41565C9.3462 8.40815 9.44874 8.40715 9.55104 8.41265L9.67504 8.42465C9.79604 8.43865 9.93004 8.51265 9.97504 8.61465C10.203 9.13165 10.425 9.65165 10.638 10.1736C10.686 10.2896 10.658 10.4386 10.568 10.5836C10.505 10.6816 10.438 10.7766 10.366 10.8676C10.28 10.9776 10.094 11.1816 10.094 11.1816C10.094 11.1816 10.019 11.2716 10.048 11.3836C10.058 11.4266 10.094 11.4886 10.126 11.5406L10.171 11.6136C10.366 11.9396 10.629 12.2706 10.95 12.5816C11.041 12.6706 11.13 12.7616 11.227 12.8466C11.5849 13.1621 11.9898 13.4199 12.427 13.6106L12.43 13.6116C12.495 13.6396 12.528 13.6556 12.623 13.6956C12.67 13.7156 12.719 13.7326 12.769 13.7456C12.8203 13.7586 12.8742 13.7561 12.924 13.7385C12.9738 13.7209 13.0173 13.6889 13.049 13.6466C13.602 12.9766 13.653 12.9336 13.657 12.9336V12.9346C13.6956 12.8989 13.7413 12.8717 13.7911 12.855C13.8409 12.8383 13.8937 12.8324 13.946 12.8376C13.9924 12.8397 14.0381 12.8498 14.081 12.8676C14.487 13.0536 15.151 13.3436 15.151 13.3436L15.595 13.5436C15.67 13.5786 15.738 13.6636 15.74 13.7456C15.743 13.7956 15.748 13.8786 15.73 14.0306C15.7081 14.223 15.66 14.4114 15.587 14.5906C15.5462 14.6753 15.4922 14.753 15.427 14.8206C15.3496 14.9016 15.265 14.9752 15.174 15.0406C15.1428 15.0643 15.1112 15.0873 15.079 15.1096C14.984 15.1696 14.886 15.2256 14.786 15.2776C14.5895 15.3821 14.3724 15.4422 14.15 15.4536C14.008 15.4606 13.867 15.4716 13.725 15.4636L13.291 15.3976C12.2051 15.1119 11.2008 14.5767 10.358 13.8346C10.185 13.6826 10.026 13.5196 9.86204 13.3566C9.18204 12.6806 8.66904 11.9506 8.35704 11.2616C8.19746 10.9235 8.11124 10.5555 8.10404 10.1816C8.10126 9.71829 8.25291 9.26722 8.53504 8.89965C8.59104 8.82765 8.64404 8.75265 8.73504 8.66665C8.8008 8.59802 8.87627 8.53939 8.95904 8.49265C9.04753 8.44807 9.14414 8.42188 9.24304 8.41565H9.24404Z" fill="white" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_4022_29">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_4022_29">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="w-[40px] h-[40px] border border-[#363749] flex justify-center items-center border-opacity-[48%] backgroundCardWork rounded-lg">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_4022_37)">
                    <path d="M5.62527 14.8711H3.16434V6.92578H5.62527V14.8711ZM5.87082 4.39439C5.87082 3.59885 5.22537 2.95312 4.43024 2.95312C3.63208 2.95312 2.98828 3.59885 2.98828 4.39439C2.98828 5.19022 3.63208 5.83594 4.43024 5.83594C5.22537 5.83594 5.87082 5.19022 5.87082 4.39439ZM14.8359 10.4999C14.8359 8.36705 14.3854 6.78516 11.8938 6.78516C10.6966 6.78516 9.89291 7.38391 9.56483 8.00656H9.5625V6.92578H7.17188V14.8711H9.5625V10.9262C9.5625 9.89305 9.82549 8.8922 11.1061 8.8922C12.3692 8.8922 12.4102 10.0736 12.4102 10.9918V14.8711H14.8359V10.4999ZM18 15.8906V2.10938C18 0.946198 17.0538 0 15.8906 0H2.10938C0.946198 0 0 0.946198 0 2.10938V15.8906C0 17.0538 0.946198 18 2.10938 18H15.8906C17.0538 18 18 17.0538 18 15.8906ZM15.8906 1.40625C16.2783 1.40625 16.5938 1.72169 16.5938 2.10938V15.8906C16.5938 16.2783 16.2783 16.5938 15.8906 16.5938H2.10938C1.72169 16.5938 1.40625 16.2783 1.40625 15.8906V2.10938C1.40625 1.72169 1.72169 1.40625 2.10938 1.40625H15.8906Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4022_37">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
