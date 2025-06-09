'use client'
import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import Footer from "./components/Footer";
import { useRef } from "react";
import Link from "next/link";

export const SmoothScrollHero = () => {
  return (
    <div className="bg-zinc-950">
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
      >
        {/* <Nav /> */}
        <Hero />
        <Schedule />
        <Footer />

      </ReactLenis>
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
      <SiSpacex className="text-3xl mix-blend-difference" />
      <button
        onClick={() => {
          document.getElementById("launch-schedule")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1 text-xs text-zinc-400"
      >
        LAUNCH SCHEDULE <FiArrowRight />
      </button>
    </nav>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />

      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(/background.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://www.financialexpress.com/wp-content/uploads/2025/03/Google-CEO-Sundar-Pichai.png"
        alt="Sunder Pichai"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="https://e3.365dm.com/21/07/2048x1152/skynews-jeff-bezos-amazon_5437859.jpg"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="https://www.hshairclinic.co.uk/wp-content/uploads/2024/01/Elon-Musk-Viva-Technology-2023-scaled.webp"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Screenshot_2022-03-19_at_3.18._1200x768.png"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Schedule = () => {
  const images = [
    {
      src: "https://www.financialexpress.com/wp-content/uploads/2025/03/Google-CEO-Sundar-Pichai.png",
      alt: "Sunder Pichai",
      name: "Sunder Pichai",
      designation: "CEO, Google",
      slug: "sundar-pichai",
    },
    {
      src: "https://static01.nyt.com/images/2020/05/14/business/14db-newsletter-nadella/merlin_159231594_d04785d4-5c43-44fe-ad72-2a02beaca02a-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
      alt: "Satya Nadella",
      name: "Satya Nadella",
      designation: "CEO, Microsoft",
      slug: "satya-nadella",
    },
    {
      src: "https://c.ndtvimg.com/2020-01/n01kr9so_arvind-krishnaibm-_625x300_31_January_20.jpg",
      alt: "Arvind Krishna",
      name: "Arvind Krishna",
      designation: "CEO, IBM",
      slug: "arvind-krishna",
    },
    {
      src: "https://pbs.twimg.com/media/EDpwo1FXUAEjNBg?format=jpg&name=4096x4096",
      alt: "Shantanu Narayen",
      name: "Shantanu Narayen",
      designation: "CEO, Adobe",
      slug: "shantanu-narayen",
    },
    {
      src: "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/e0bcf2a3-9f82-42b7-aeaf-054d83e84d51/ElonMusk_2017-embed.jpg?quality=82w=640",
      alt: "Elon Musk",
      name: "Elon Musk",
      designation: "CEO, Tesla & SpaceX",
      slug: "elon-musk",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWQXedhTX_2H9nld1ZLcKIJ2GQz4tuF4aRHdUA_59mJCxfdsuYBSiAvuM2veBkaaMUTmw&usqp=CAU",
      alt: "Jeff Bezos",
      name: "Jeff Bezos",
      designation: "Founder, Amazon",
      slug: "jeff-bezos",
    },
    {
      src: "https://grupobcc.com/wp/wp-content/uploads/2015/09/Raghuram-Rajan-speaker-keynote-940x660.jpg",
      alt: "Raghuram Rajan",
      name: "Raghuram Rajan",
      designation: "Former Governor, RBI",
      slug: "raghuram-rajan",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/26/Sachin_Bansal_SB.jpg",
      alt: "Sachin Bansal",
      name: "Sachin Bansal",
      designation: "Founder, Flipkart",
      slug: "sachin-bansal",
    },
    {
      src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Screenshot_2022-03-19_at_3.18._1200x768.png",
      alt: "Narayana Murthy",
      name: "Narayana Murthy",
      designation: "Founder, Infosys",
      slug: "narayana-murthy",
    },
  ];

  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-7xl px-4 py-16 text-white"
    >
      <h2 className="mb-8 text-3xl font-semibold">Frame of Achievers</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map(({ src, alt, name, designation, slug }, index) => (
          <Link href={`/profile/${slug}`} key={index}>
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-50"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{name}</p>
                <p className="text-gray-300 text-sm">{designation}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};





//   return (
//     <motion.div
//       initial={{ y: 48, opacity: 0 }}
//       whileInView={{ y: 0, opacity: 1 }}
//       transition={{ ease: "easeInOut", duration: 0.75 }}
//       className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
//     >
//       <div>
//         <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
//         <p className="text-sm uppercase text-zinc-500">{date}</p>
//       </div>
//       <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
//         <p>{location}</p>
//         <FiMapPin />
//       </div>
//     </motion.div>
//   );
// };