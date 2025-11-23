import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
const MONTHS = [
  {
    month: "1st",
    date: "30 Sept 2024",
    img: "/Images/m1.jpg",
    title: "Her First Month",
    text: "She smiled more this month and started recognizing familiar faces.",
  },
  {
    month: "2nd",
    date: "30 Oct 2024",
    img: "/Images/m2.jpg",
    title: "Getting Cuter",
    text: "Her tiny giggles and soft coos filled the entire home with joy.",
  },
  {
    month: "3rd",
    date: "30 Nov 2024",
    img: "/Images/m3.jpg",
    title: "Little Princess",
    text: "She started lifting her head and observing the world with sparkling eyes.",
  },
  {
    month: "4th",
    date: "30 Dec 2024",
    img: "/Images/m4.jpg",
    title: "Festive Baby",
    text: "More playful, more active — and her smile became even more magical.",
  },
  {
    month: "5th",
    date: "30 Jan 2025",
    img: "/Images/m5.jpg",
    title: "Halfway to Cute Chaos",
    text: "She started rolling more, playing more, and loving everyone’s attention.",
  },
  {
    month: "6th",
    date: "28 Feb 2025",
    img: "/Images/m6.jpg",
    title: "Half-Year Princess",
    text: "She sat with support, laughed loudly, and showed her adorable personality.",
  },
  {
    month: "7th",
    date: "30 Mar 2025",
    img: "/Images/m7.jpg",
    title: "Curious Baby",
    text: "She explored everything around her with tiny hands full of curiosity.",
  },
  {
    month: "8th",
    date: "30 Apr 2025",
    img: "/Images/mm8.jpg",
    title: "Crawling Explorer",
    text: "This month was full of crawling, reaching, grabbing — pure discovery!",
  },
  {
    month: "9th",
    date: "30 May 2025",
    img: "/Images/m9.jpg",
    title: "Standing Tall",
    text: "She started pulling herself up and stood with support—little champion!",
  },
  {
    month: "10th",
    date: "30 Jun 2025",
    img: "/Images/m10.jpg",
    title: "Playful Angel",
    text: "She loved clapping, waving, and playing peek-a-boo all day long.",
  },
  {
    month: "11th",
    date: "30 Jul 2025",
    img: "/Images/g4.jpg",
    title: "Almost One!",
    text: "She became more expressive, playful, and attached to her favorite toys.",
  },
  {
    month: "12th",
    date: "30 Aug 2025",
    img: "/Images/m12.jpg",
    title: "One Year Old",
    text: "Our little princess is now ONE—full of joy, energy and endless cuteness!",
  },
];

// ---------- Customize these assets and data ----------
const ASSETS = {
  heroImage: "/Images/hero-pic.jpg",

  gallery: [
    {
      src: "/Images/g1.jpg",
      title: "Cute sona",
      caption: "Her sweetest smile ever",
    },
    { src: "/Images/g5.jpg", title: "cute smile", caption: "Having fun & joy" },
    {
      src: "/Images/g3.jpg",
      title: "Little Princess",
      caption: "Adorable moment",
    },
    { src: "/Images/g4.jpg", title: "Masti time", caption: "Pure innocence" },
  ],

  videos: [
    { src: "/Images/video1.mp4", caption: "Little Princess sona" },
    { src: "/Images/video2.mp4", caption: "Baby's cute dance" },
  ],

  // ⭐ Birthday Photos (Only for 1st Birthday Section)
  birthdayPhotos: [
    "/Images/birthday 1.jpg",
    "/Images/birthday 2.jpg",
    "/Images/birthday 3.jpg",
  ],

  // ⭐ Birthday Videos
  birthdayVideos: [
    { src: "/Images/birthday-video1.mp4", caption: "Cake Cutting" },
    { src: "/Images/birthday-video2.mp4", caption: "Masti Dance" },
    { src: "/Images/birthday-video3.mp4", caption: "sunder khand" },
  ],
};

const BABY = {
  name: "Shreeja Nigam",
  nickname: "sona",
  dob: "10-09-2024", // DD-MM-YYYY

  birthPlace: {
    hospital: "Sarthak Hospital",
    city: "Satna",
    doctor: "(Doctor Name)",
  },

  parents: {
    mother: "Supriya Nigam",
    father: "Nirmal Nigam",
  },

  grandparents: {
    maternal: ["(Nana)", "(Nani)"],
    paternal: ["(Dada)", "(Dadi)"],
  },
};

const PARTY = [
  {
    src: "/Images/fu1.jpg",
    title: "Mama Marrige",
    date: "07 february 2025",
    address: "Katni",
  },
  {
    src: "/Images/fu2.jpg",
    title: "Birthday Function",
    date: "20 July 2024",
    address: "Royal Banquet, Ahmedabad",
  },
  {
    src: "/Images/f2.jpg",
    title: "Family Get-Together",
    date: "08 October 2024",
    address: "Green Leaf Resort, Surat",
  },
  {
    src: "/Images/fu3.jpg",
    title: "New Year Celebration",
    date: "31 December 2024",
    address: "Home Sweet Home ❤️",
  },
];

// ⭐⭐⭐ FULL BIRTH FORMAT — Day + Date + Time ⭐⭐⭐
const formatFullBirth = (dobString) => {
  const [day, month, year] = dobString.split("-");

  // ⭐ Change birth time here ⭐
  const iso = `${year}-${month}-${day}T15:50:00`; // 3:50 PM

  const d = new Date(iso);

  const dayName = d.toLocaleDateString("en-US", { weekday: "long" });
  const fullDate = d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const time = d.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return { dayName, fullDate, time };
};

const birth = formatFullBirth(BABY.dob);

export default function HomeSection({ babyName }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-blue-50 text-gray-800 antialiased">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-pink-50/70 via-white/70 to-pink-50/70 backdrop-blur-xl border-b border-pink-200 shadow-[0_4px_20px_rgba(255,182,193,0.25)] transition-all">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* LOGO + TITLE */}
          <div className="flex items-center gap-4 group">
            {/* BIG LOGO + GLOW EFFECT */}
            <div
              className="
          h-16 w-16
          md:h-12 md:w-12
          max-md:h-16 max-md:w-16
          rounded-full overflow-hidden
          border-2 border-pink-400
          shadow-xl shadow-pink-200
          relative
        "
            >
              <img
                src="/Images/logo.jpg"
                alt="baby-logo"
                className="object-cover w-full h-full group-hover:scale-110 transition-all duration-300"
              />

              {/* SHINE EFFECT */}
              <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
            </div>

            <div>
              <div className="font-extrabold text-xl text-pink-600 group-hover:text-pink-700 transition">
                {babyName}
              </div>
              <div className="text-xs text-gray-500 -mt-0.5">
                A year of tiny wonders ✨
              </div>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { link: "#timeline", label: "Timeline" },
              { link: "#gallery", label: "Gallery" },
              { link: "#family", label: "Family" },
              { link: "#events", label: "Events" },
              { link: "#functions", label: "Functions" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="relative text-sm font-medium text-gray-700 hover:text-pink-600 transition"
              >
                {item.label}

                {/* UNDERLINE ANIMATION */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-pink-500 rounded-full transition-all duration-300 hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-pink-100 transition"
          >
            {open ? (
              <X className="text-pink-600" />
            ) : (
              <Menu className="text-pink-600" />
            )}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {open && (
          <div className="md:hidden animate-slideDown bg-white/95 backdrop-blur-xl shadow-lg border-b border-pink-200">
            <ul className="flex flex-col px-6 py-4 space-y-4 text-gray-700 text-sm">
              <li>
                <a href="#timeline" className="block hover:text-pink-600">
                  Timeline
                </a>
              </li>
              <li>
                <a href="#gallery" className="block hover:text-pink-600">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#family" className="block hover:text-pink-600">
                  Family
                </a>
              </li>
              <li>
                <a href="#events" className="block hover:text-pink-600">
                  Events
                </a>
              </li>
              <li>
                <a href="#functions" className="block hover:text-pink-600">
                  Functions
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* HERO */}
      <header className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-yellow-50">
        {/* FLOATING SHAPES */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-32 -right-10 w-56 h-56 bg-yellow-200/40 rounded-full blur-3xl animate-ping"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-purple-200/40 rounded-full blur-2xl animate-bounce"></div>

        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, type: "spring" }}
            className="flex-1"
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
            >
              Celebrating{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600">
                {BABY.name}
              </span>{" "}
              First Year 🎉
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              className="mt-4 text-lg text-gray-700 leading-relaxed"
            >
              From the first cry at{" "}
              <span className="text-pink-600 font-bold">
                {BABY.birthPlace.hospital}
              </span>{" "}
              to the first birthday — every tiny moment lives here forever.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="mt-5"
            >
              <span className="inline-block bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 px-5 py-2 rounded-full font-semibold shadow-md border border-pink-200">
                Born on {birth.dayName}, {birth.fullDate} at {birth.time}
              </span>
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              className="mt-8 flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="#timeline"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition"
              >
                View Timeline
              </a>

              <a
                href="#gallery"
                className="px-6 py-3 rounded-full border border-pink-300 text-pink-600 font-medium bg-white/70 backdrop-blur hover:bg-white hover:scale-105 transition shadow"
              >
                See Photos
              </a>
            </motion.div>

            <p className="mt-6 text-sm text-gray-500">
              <strong className="text-pink-600">Parents:</strong>{" "}
              {BABY.parents.mother} & {BABY.parents.father}
            </p>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, type: "spring" }}
            className="flex-1 w-full max-w-xl relative"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="rounded-[2.2rem] overflow-hidden shadow-2xl border-[10px] border-white bg-white"
            >
              <img
                src={ASSETS.heroImage}
                alt="hero"
                className="w-full h-[28rem] object-contain bg-white rounded-3xl"
              />
            </motion.div>

            {/* Glow behind image */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-pink-300/40 blur-3xl rounded-full"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-yellow-300/40 blur-2xl rounded-full"></div>
          </motion.div>
        </div>
      </header>

      {/* FIRST BIRTHDAY */}
      <section
        id="first-birthday"
        className="py-20 bg-gradient-to-b from-yellow-50 via-white to-pink-50"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-center 
             bg-gradient-to-r from-pink-500 via-pink-400 to-yellow-500 
             text-transparent bg-clip-text drop-shadow-md"
          >
            🎂 Sheeja’s Magical{" "}
            <span className="text-yellow-600 underline decoration-pink-400 decoration-4 underline-offset-4">
              1st Birthday
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-gray-700 mt-4 max-w-2xl mx-auto text-lg
             leading-relaxed"
          >
            A year full of laughter, cuddles and love.
            <span className="text-pink-600 font-semibold drop-shadow">
              {" "}
              Our little princess turns ONE!
            </span>
          </motion.p>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 25px rgba(255,105,180,0.25)",
            }}
            className="mt-10 bg-white rounded-3xl shadow-xl p-6 
             border border-pink-200 
             relative overflow-hidden"
          >
            {/* SIDE DECOR BORDER */}
            <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-pink-400 to-yellow-400"></div>

            {/* TOP BAR */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 to-pink-400"></div>

            {/* TITLE */}
            <h3
              className="text-3xl font-extrabold text-transparent bg-clip-text 
                 bg-gradient-to-r from-pink-500 to-yellow-500 drop-shadow-sm"
            >
              Birthday Celebration Details 🎉
            </h3>

            {/* DETAILS — ALL IN ONE ROW */}
            <div className="mt-6 flex flex-wrap items-center gap-8 text-gray-700 text-lg">
              {/* DATE */}
              <div className="hover:translate-y-1 transition-all">
                <strong className="text-pink-600">📅 Date:</strong>
                <span className="ml-1 font-medium">
                  August 30, 2025 (Saturday)
                </span>
              </div>

              {/* TIME */}
              <div className="hover:translate-y-1 transition-all">
                <strong className="text-yellow-600">⏰ Time:</strong>
                <span className="ml-1 font-medium">7:00 PM Onwards</span>
              </div>

              {/* VENUE */}
              <div className="hover:translate-y-1 transition-all">
                <strong className="text-pink-600">📍 Venue:</strong>
                <span className="ml-1 font-medium">Singoudi (KATNI)</span>
              </div>
            </div>
          </motion.div>

          {/* 4 photos */}
          {/* 4 photos — Separate Birthday Photos */}

          <h3 className="text-2xl font-semibold text-center mt-16">
            <span className="px-4 py-1 rounded-xl bg-gradient-to-r from-pink-400 to-yellow-400 text-white shadow-md">
              Birthday Images
            </span>
          </h3>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ASSETS.birthdayPhotos.map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl overflow-hidden shadow-lg border border-pink-100"
              >
                <img
                  src={src}
                  alt="birthday"
                  className="w-full h-96 object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Videos — Separate Birthday Videos */}
          <h3 className="text-2xl font-semibold text-center mt-16">
            <span className="px-4 py-1 rounded-xl bg-gradient-to-r from-pink-400 to-yellow-400 text-white shadow-md">
              Birthday Videos
            </span>
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {ASSETS.birthdayVideos.map((v, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-xl overflow-hidden border border-pink-100"
              >
                <video
                  controls
                  className="w-full h-[500px] object-cover" // ⬅️ height बढ़ाई (h-64 → h-96)
                >
                  <source src={v.src} type="video/mp4" />
                </video>

                <div className="p-3 font-semibold text-center">{v.caption}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      {/* EVENTS: ANNAPRASHAN ONLY */}
      <section id="events" className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-center bg-clip-text text-transparent 
                 bg-gradient-to-r from-pink-600 via-pink-400 to-yellow-500 mb-4"
          >
            🌾 Annaprashan — The First Taste of Blessings
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-center text-gray-700 max-w-3xl leading-relaxed"
          >
            A tender ceremony where family gathered to bless our little one —
            nana-nani’s warm hands, mama’s loving smile, and a home filled with
            rice, blessings and laughter. Cherished pictures and candid videos
            capture the tiny first taste and the big family love.
          </motion.p>
        </div>

        {/* CARD + MEDIA LAYOUT */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* LEFT INFO CARD */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="relative p-6 bg-white/75 backdrop-blur-md rounded-3xl shadow-2xl 
                 border border-pink-100 overflow-hidden"
          >
            <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-pink-400 to-yellow-400"></div>
            <div
              className="absolute -top-6 right-6 w-36 h-36 rounded-full bg-gradient-to-tr 
                      from-yellow-200 to-pink-300 opacity-40 blur-2xl pointer-events-none"
            ></div>

            <h3 className="text-2xl font-bold text-pink-600 mb-2">
              Annaprashan Highlights
            </h3>
            <p className="text-gray-700 mb-4">
              Family blessings, first spoonful, and tiny smiles — a day full of
              ritual, love and emotion. Nana-Nani offered blessings while Mama
              and the family took turns to make this moment unforgettable.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-pink-500 text-xl">👵🏼</span>
                <div>
                  <div className="font-semibold">Nana & Nani</div>
                  <div className="text-sm">
                    Traditional blessings and the sweetest cuddles.
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl">🤱</span>
                <div>
                  <div className="font-semibold">Mama</div>
                  <div className="text-sm">
                    Prepared the ceremony with love and warm smiles.
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* RIGHT MEDIA GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* PHOTO 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ rotate: -2, scale: 1.04, translateY: -6 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl overflow-hidden border-4 border-white shadow-2xl"
            >
              <img
                src="/Images/a1.jpg"
                className="w-full h-96 object-cover"
                alt="annapra1"
              />
            </motion.div>

            {/* PHOTO 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ rotate: 2, scale: 1.04, translateY: -6 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl overflow-hidden border-4 border-white shadow-2xl"
            >
              <img
                src="/Images/a2.jpg"
                className="w-full h-96 object-cover"
                alt="annapra2"
              />
            </motion.div>

            {/* VIDEO 1 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl overflow-hidden bg-black"
            >
              <video controls className="w-full h-56 object-cover">
                <source src="/Images/a3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>

            {/* VIDEO 2 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl overflow-hidden bg-black"
            >
              <video controls className="w-full h-56 object-cover">
                <source src="/Images/a4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAMILY */}
      <section id="family" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-center
        bg-clip-text text-transparent bg-gradient-to-r
        from-pink-600 via-rose-400 to-yellow-500 tracking-wide"
          >
            Mommy & Daddy — The Pillars of Love 💖
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed"
          >
            The two hearts who hold her tiny world together. Their love and
            blessings make every moment magical. ✨
          </motion.p>

          {/* CARDS */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* MOTHER CARD */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-pink-200 hover:border-pink-400 hover:shadow-2xl"
            >
              <img
                src="/Images/f1.jpg"
                alt="Mother"
                className="w-full h-[500px] md:h-[600px] object-contain group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-5 text-center">
                <h3 className="text-2xl font-extrabold text-pink-600 drop-shadow-sm tracking-wide">
                  {BABY.parents.mother}
                </h3>
                <p className="text-gray-700 text-sm font-semibold uppercase tracking-wider mt-1">
                  Mother
                </p>
              </div>
            </motion.div>

            {/* FATHER CARD */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-pink-200 hover:border-yellow-400 hover:shadow-2xl"
            >
              <img
                src="/Images/f2.jpg"
                alt="Father"
                className="w-full h-[500px] md:h-[600px] object-contain group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-5 text-center">
                <h3 className="text-2xl font-extrabold text-pink-600 drop-shadow-sm tracking-wide">
                  {BABY.parents.father}
                </h3>
                <p className="text-gray-700 text-sm font-semibold uppercase tracking-wider mt-1">
                  Father
                </p>
              </div>
            </motion.div>

            {/* MOM + DAD TOGETHER CARD */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-rose-300 hover:border-purple-400 hover:shadow-2xl"
            >
              <img
                src="/Images/f4.jpg"
                alt="Mom Dad Together"
                className="w-full h-[500px] md:h-[600px] object-contain group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-5 text-center">
                <h3 className="text-2xl font-black text-pink-600 tracking-widest drop-shadow">
                  Together Forever 💞
                </h3>
                <p className="text-gray-700 text-sm mt-2 tracking-wide">
                  A home built on love, care & warmth — the heart of our little
                  world. ✨
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="max-w-6xl mx-auto px-6 py-16">
        <h2
          className="text-4xl font-extrabold text-center 
             bg-gradient-to-r from-pink-600 via-pink-400 to-yellow-500
             text-transparent bg-clip-text drop-shadow-md tracking-wide"
        >
          Monthly{" "}
          <span className="text-pink-500 underline decoration-yellow-400 decoration-4 underline-offset-4">
            Memories
          </span>
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MONTHS.map((m) => (
            <motion.article
              key={m.month}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden 
                 border-l-4 border-pink-400 hover:shadow-2xl 
                 hover:border-pink-500 transition-all"
            >
              {/* IMAGE BOX */}
              <div className="relative h-60 overflow-hidden">
                <motion.img
                  src={m.img}
                  alt={`month-${m.month}`}
                  className="object-cover w-full h-full"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.4 }}
                />

                {/* MONTH NAME & DATE */}
                <div
                  className="absolute top-3 left-3 bg-white/80 backdrop-blur-md 
                        px-4 py-2 rounded-xl shadow text-sm font-semibold border border-pink-200"
                >
                  <p className="text-pink-600 text-base leading-tight">
                    {m.month} Month
                  </p>
                  <p className="text-gray-700 text-xs font-medium">{m.date}</p>
                </div>
              </div>

              {/* TEXT SECTION */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-pink-600">{m.title}</h3>

                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {m.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* function  */}
      <section
        id="functions"
        className="relative bg-gradient-to-b from-white via-rose-50 to-pink-100 py-20 overflow-hidden"
      >
        {/* Background Floating Blobs */}
        <div className="absolute top-0 left-0 w-44 h-44 bg-pink-300/30 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-52 h-52 bg-yellow-300/30 blur-3xl rounded-full animate-bounce"></div>

        <div className="relative max-w-6xl mx-auto px-6 z-10">
          {/* MAIN HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold text-center text-rose-600 drop-shadow-sm"
          >
            Family Functions & Celebrations 🎊
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center text-gray-600 max-w-2xl mx-auto mt-3"
          >
            Special days filled with love, fun, and togetherness — captured
            forever 💖
          </motion.p>

          {/* CARD GRID — 4 IMAGES */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PARTY.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.05, translateY: -8 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl
                     border border-rose-200 hover:border-rose-400 
                     hover:shadow-2xl transition-all duration-500"
              >
                {/* Shine Effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent 
                     via-white/20 to-transparent translate-x-[-100%]
                     group-hover:translate-x-[100%] duration-[1500ms]"
                ></div>

                {/* IMAGE */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
                />

                {/* INFO TEXT */}
                <div className="p-4 text-center">
                  {/* <h3 className="text-lg font-bold text-pink-600">
                    {item.title}
                  </h3> */}
                  {/* <p className="text-sm text-gray-600 mt-1">📅 {item.date}</p>
                  <p className="text-sm text-gray-600">📍 {item.address}</p> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="relative bg-gradient-to-b from-white via-pink-50 to-rose-50 py-20 overflow-hidden"
      >
        {/* Floating background shapes */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-pink-300/30 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-yellow-300/30 blur-3xl rounded-full animate-ping"></div>

        <div className="relative max-w-6xl mx-auto px-6 z-10">
          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold text-center text-pink-700 drop-shadow-sm"
          >
            Gallery & Videos ✨
          </motion.h2>

          {/* 4 IMAGES GRID */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ASSETS.gallery.slice(0, 4).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.07 }}
                className="group relative bg-white rounded-2xl shadow-xl border border-pink-200 overflow-hidden hover:shadow-2xl hover:border-pink-400 transition"
              >
                {/* Shine animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] duration-[1.4s]"></div>

                {/* IMAGE */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-62 object-cover group-hover:scale-110 transition duration-700"
                />

                {/* TITLE + CAPTION */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-pink-600">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* VIDEOS SECTION — ONLY 2 VIDEOS */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mt-16 text-pink-600"
          >
            Moments 🎥
          </motion.h3>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {ASSETS.videos.slice(0, 2).map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: i * 0.3 }}
                whileHover={{ scale: 1.04 }}
                className="rounded-2xl overflow-hidden shadow-xl border border-pink-200 bg-white hover:border-pink-500 transition flex flex-col h-full"
              >
                {/* VIDEO */}
                <div className="relative flex-1">
                  <video
                    controls
                    className="w-full h-[500px] object-cover rounded-t-2xl"
                  >
                    <source src={v.src} type="video/mp4" />
                  </video>
                </div>

                {/* CAPTION */}
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-pink-600">
                    {v.caption}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Special moment captured forever 💖
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-pink-50 via-white to-yellow-50 py-12 border-t border-pink-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* BABY NAME + NICKNAME */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center shadow-sm">
              <svg
                className="w-7 h-7 text-pink-500 animate-pulse"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 21s-7.5-4.35-10-7.1C-1.1 10.6 3 5 7 7c2 .9 3 3.5 5 4 2-0.5 3-3.1 5-4 4-2 8.1 3.6 5 6.9C19.5 16.65 12 21 12 21z" />
              </svg>
            </div>

            <h3 className="text-2xl font-extrabold text-pink-600">
              {BABY.name}
              <span className="text-gray-500 text-base font-medium">
                {" "}
                ({BABY.nickname})
              </span>
            </h3>

            <p className="text-gray-600 max-w-lg leading-relaxed text-sm">
              Our little sunshine, our sweetest joy — Sona, your tiny giggles
              and sparkling eyes brighten every heartbeat.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="mt-6 border-t border-pink-100 w-2/3 mx-auto"></div>

          {/* COPYRIGHT LINE */}
          <p className="text-sm text-gray-500 mt-4">
            © {new Date().getFullYear()} {BABY.name}. Built with infinite love
            by Family 💖
          </p>

          {/* SMALL NOTE */}
          <p className="text-xs text-gray-400 mt-2">
            These memories are precious — kept safe with love.
          </p>
        </div>
      </footer>
    </div>
  );
}
