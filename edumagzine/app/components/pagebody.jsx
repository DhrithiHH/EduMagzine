// 'use client';
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useRef, useEffect } from "react";

// const latestReleases = [
//   {
//     title: "Julien Baker & TORRES – Send A Prayer My Way",
//     image: "/image1.jpg",
//     link: "#",
//   },
//   {
//     title: "Fontaines D.C. – ROMANCE (Deluxe Edition)",
//     image: "/image2.webp",
//     link: "#",
//   },
//   {
//     title: "Mandy, Indiana – live at St. Laurence’s Church",
//     image: "/image3.png",
//     link: "#",
//   },
//   {
//     title: "Squirrel Flower – Tomorrow’s Fire",
//     image: "/images4.jpeg",
//     link: "#",
//   },
// ];

// const feedCards = [
//   {
//     title: "King Krule – Shhh… Live @ Up the Bracket",
//     image: "/image5.jpg",
//     link: "#",
//   },
//   {
//     title: "Sharon Van Etten returns with emotional new single",
//     image: "/image6.avif",
//     link: "#",
//   },
//   {
//     title: "Big Thief drops surprise EP",
//     image: "/image5.jpg",
//     link: "#",
//   },
//   {
//     title: "Phoebe Bridgers & Friends – Live Collab Set",
//     image: "/image5.webp",
//     link: "#",
//   },
//   {
//     title: "Arctic Monkeys announce 2025 World Tour",
//     image: "/image5.jpg",
//     link: "#",
//   },
// ];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// };

// export default function PageBody() {
//   const featuredRef = useRef(null);
//   const latestRef = useRef(null);
//   const isSyncing = useRef(false);

//   const syncScroll = (source) => {
//     if (isSyncing.current) return;

//     const f = featuredRef.current;
//     const l = latestRef.current;
//     if (!f || !l) return;

//     const sourceEl = source === "featured" ? f : l;
//     const targetEl = source === "featured" ? l : f;

//     const sourceScrollTop = sourceEl.scrollTop;
//     const sourceScrollHeight = sourceEl.scrollHeight - sourceEl.clientHeight;
//     const scrollRatio = sourceScrollTop / sourceScrollHeight;

//     const targetScrollHeight = targetEl.scrollHeight - targetEl.clientHeight;
//     isSyncing.current = true;

//     targetEl.scrollTop = scrollRatio * targetScrollHeight;

//     setTimeout(() => {
//       isSyncing.current = false;
//     }, 10);
//   };

//   return (
//     <div className="w-full min-h-screen bg-white z-20">
//       <div className="relative pt-10 p-6 w-[90vw] max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row gap-10 h-[80vh] overflow-hidden">
//           {/* Featured News */}
//           <div
//             ref={featuredRef}
//             onScroll={() => syncScroll("featured")}
//             className="lg:w-2/3 overflow-y-auto pr-2 custom-scroll"
//           >
//             <motion.h3 className="text-2xl font-bold text-gray-900  pb-2 sticky top-0 bg-white z-10">
//               Featured News
//             </motion.h3>

//             {/* Featured Main */}
//             <motion.div
//               variants={fadeInUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: false, amount: 0.3 }}
//             >
//               <Image
//                 src="/image1.jpg"
//                 alt="Queens of the Stone Age"
//                 width={1200}
//                 height={700}
//                 className="rounded-xl w-full object-cover"
//               />
//               <h2 className="text-3xl font-bold mt-4 text-gray-900">
//                 Queens of the Stone Age – Alive in the Catacombs Screening Events
//               </h2>
//               <p className="mt-2 text-gray-700">
//                 Catch exclusive screenings of the band’s legendary live performance...
//               </p>
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
//               {feedCards.map((feed, index) => (
//                 <motion.div
//                   key={index}
//                   custom={index}
//                   variants={fadeInUp}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: false, amount: 0.3 }}
//                   className="space-y-2"
//                 >
//                   <Image
//                     src={feed.image}
//                     alt={feed.title}
//                     width={600}
//                     height={400}
//                     className="rounded-md w-full h-auto object-cover"
//                   />
//                   <h4 className="font-semibold text-lg text-gray-900">{feed.title}</h4>
//                   <a href={feed.link} className="text-sm text-blue-600 hover:underline">
//                     Read more →
//                   </a>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Latest Releases */}
//           <div
//             ref={latestRef}
//             onScroll={() => syncScroll("latest")}
//             className="lg:w-1/3 overflow-y-auto pl-2 custom-scroll"
//           >
//             <motion.h3 className="text-2xl font-bold text-gray-900  pb-2 sticky top-0 bg-white z-10">
//               Latest Releases
//             </motion.h3>

//             {latestReleases.map((release, index) => (
//               <motion.div
//                 key={index}
//                 custom={index}
//                 variants={fadeInUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: false, amount: 0.3 }}
//                 className="space-y-1"
//               >
//                 <Image
//                   src={release.image}
//                   alt={release.title}
//                   width={400}
//                   height={300}
//                   className="rounded-md w-full h-auto object-cover"
//                 />
//                 <p className="font-semibold text-gray-900">{release.title}</p>
//                 <a href={release.link} className="text-sm text-blue-600 hover:underline">
//                   Learn more →
//                 </a>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

const latestReleases = [
  {
    title: "Julien Baker & TORRES – Send A Prayer My Way",
    image: "/image1.jpg",
    slug: "julien-baker-torres-send-a-prayer-my-way",
  },
  {
    title: "Fontaines D.C. – ROMANCE (Deluxe Edition)",
    image: "/image2.webp",
    slug: "fontaines-dc-romance-deluxe-edition",
  },
  {
    title: "Mandy, Indiana – live at St. Laurence’s Church",
    image: "/image3.png",
    slug: "mandy-indiana-live-at-st-laurences-church",
  },
  {
    title: "Squirrel Flower – Tomorrow’s Fire",
    image: "/images4.jpeg",
    slug: "squirrel-flower-tomorrows-fire",
  },
];

const feedCards = [
  {
    title: "King Krule – Shhh… Live @ Up the Bracket",
    image: "/image5.jpg",
    slug: "king-krule-shhh-live-up-the-bracket",
  },
  {
    title: "Sharon Van Etten returns with emotional new single",
    image: "/image6.avif",
    slug: "sharon-van-etten-emotional-new-single",
  },
  {
    title: "Big Thief drops surprise EP",
    image: "/image5.jpg",
    slug: "big-thief-surprise-ep",
  },
  {
    title: "Phoebe Bridgers & Friends – Live Collab Set",
    image: "/image5.webp",
    slug: "phoebe-bridgers-friends-live-collab",
  },
  {
    title: "Arctic Monkeys announce 2025 World Tour",
    image: "/image5.jpg",
    slug: "arctic-monkeys-2025-world-tour",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function PageBody() {
  const featuredRef = useRef(null);
  const latestRef = useRef(null);
  const isSyncing = useRef(false);

  const syncScroll = (source) => {
    if (isSyncing.current) return;

    const f = featuredRef.current;
    const l = latestRef.current;
    if (!f || !l) return;

    const sourceEl = source === "featured" ? f : l;
    const targetEl = source === "featured" ? l : f;

    const sourceScrollTop = sourceEl.scrollTop;
    const sourceScrollHeight = sourceEl.scrollHeight - sourceEl.clientHeight;
    const scrollRatio = sourceScrollTop / sourceScrollHeight;

    const targetScrollHeight = targetEl.scrollHeight - targetEl.clientHeight;
    isSyncing.current = true;

    targetEl.scrollTop = scrollRatio * targetScrollHeight;

    setTimeout(() => {
      isSyncing.current = false;
    }, 10);
  };

  return (
    <div className="w-full min-h-screen bg-white z-20">
      <div className="relative pt-10 p-6 w-[90vw] max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 h-[80vh] overflow-hidden">
          {/* Featured News */}
          <div
            ref={featuredRef}
            onScroll={() => syncScroll("featured")}
            className="lg:w-2/3 overflow-y-auto pr-2 custom-scroll"
          >
            <motion.h3 className="text-2xl font-bold text-gray-900 pb-2 sticky top-0 bg-white z-10">
              Featured News
            </motion.h3>

            {/* Featured Main */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <Image
                src="/image1.jpg"
                alt="Queens of the Stone Age"
                width={1200}
                height={700}
                className="rounded-xl w-full object-cover"
              />
              <h2 className="text-3xl font-bold mt-4 text-gray-900">
                Queens of the Stone Age – Alive in the Catacombs Screening Events
              </h2>
              <p className="mt-2 text-gray-700">
                Catch exclusive screenings of the band’s legendary live performance...
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {feedCards.map((feed, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  className="space-y-2"
                >
                  <Image
                    src={feed.image}
                    alt={feed.title}
                    width={600}
                    height={400}
                    className="rounded-md w-full h-auto object-cover"
                  />
                  <h4 className="font-semibold text-lg text-gray-900">
                    {feed.title}
                  </h4>
                  <Link
                    href={`/home/${feed.slug}`}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Read more →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Latest Releases */}
          <div
            ref={latestRef}
            onScroll={() => syncScroll("latest")}
            className="lg:w-1/3 overflow-y-auto pl-2 custom-scroll"
          >
            <motion.h3 className="text-2xl font-bold text-gray-900 pb-2 sticky top-0 bg-white z-10">
              Latest Releases
            </motion.h3>

            {latestReleases.map((release, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="space-y-1"
              >
                <Image
                  src={release.image}
                  alt={release.title}
                  width={400}
                  height={300}
                  className="rounded-md w-full h-auto object-cover"
                />
                <p className="font-semibold text-gray-900">{release.title}</p>
                <Link
                  href={`/home/${release.slug}`}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
