"use client";

import { useState } from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={roboto.className}>
      <header className="flex justify-between p-5 px-16">
        <div className="hidden md:flex">
          <p>Phone Number: 956 742 455 678</p>
          <div className="h-full mx-5 w-[1px] bg-black"></div>
          <p>Email:info@ddsgnr.com</p>
        </div>
        <div className="hidden md:flex">
          <FaFacebook className="m-1" size={20} />
          <FaInstagram className="m-1" size={20} />
          <FaTwitter className="m-1" size={20} />
          <FaLinkedin className="m-1" size={20} />
        </div>
      </header>
      <nav className="flex justify-around py-1  md:p-6 items-center">
        <div>
          <Image src="/logoweb.png" width={131} height={41} alt="Logo" />
        </div>
        <button
          className="text-3xl md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row items-center md:space-x-8 text-base font-medium`}
        >
          <li>
            <a href="#home" className="block px-4 py-2 md:py-0">
              Home
            </a>
          </li>
          <li>
            <a href="#courses" className="block px-4 py-2 md:py-0">
              Courses
            </a>
          </li>
          <li>
            <a href="#services" className="block px-4 py-2 md:py-0">
              Services
            </a>
          </li>
          <li>
            <a href="#achievement" className="block px-4 py-2 md:py-0">
              Achievement
            </a>
          </li>
          <li>
            <a href="#about" className="block px-4 py-2 md:py-0">
              About Us
            </a>
          </li>
          <li>
            <a href="#testimonial" className="block px-4 py-2 md:py-0">
              Testimonial
            </a>
          </li>
        </ul>

        <div className="hidden md:flex">
          <button className="border-2 p-2 border-black rounded px-4 mx-2">
            Login
          </button>
          <button className="py-2 bg-black text-white rounded px-4 mx-2">
            Sign Up
          </button>
        </div>
      </nav>
      <hr className="border-2 border-gray-800 my-3 md:hidden " />
      <main>
        <section
          id="home"
          className="md:flex md:justify-between items-center py-20  md:py-8"
        >
          <div className="w-full md:w-[500px] mx-2 md:mx-28">
            <div className="w-[380px] md:w-[500px] mx-4">
              <h1 className="text-[40px] md:text-6xl font-bold">
                Learn new skills online with ease
              </h1>
              <p className="text-lg md:text-xl w-full md:w-[400px] my-8">
                Discover a wide range of courses covering a variety of subjects,
                taught by expert instructors.
              </p>
            </div>
            <div className="flex mx-5 my-8">
              <button className="py-3 bg-black text-white rounded-md px-4 w-full md:w-auto">
                Start Learning Now
              </button>
              <button className="border-2 py-3 border-black rounded-md px-4 mx-2 w-full md:w-auto">
                Explore Courses
              </button>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <Image src="/man.jpg" width={640} height={900} alt="Picture" />
          </div>
        </section>

        <section
          id="services"
          className="md:flex hidden justify-between px-5 py-7 md:p-24 items-center"
        >
          <h1 className="text-xl font-bold w-[320px]">
            Trusted by 2000+ companies worldwide.
          </h1>
          <div id="logos" className="flex gap-y-6">
            <Image src="/logo1.png" width={120} height={50} alt="Logo" />
            <Image src="/logo2.png" width={120} height={50} alt="Logo" />
            <Image src="/logo3.png" width={120} height={50} alt="Logo" />
            <Image src="/logo4.png" width={120} height={50} alt="Logo" />
            <Image src="/logo5.png" width={120} height={50} alt="Logo" />
            <Image src="/logo6.png" width={120} height={50} alt="Logo" />
          </div>
        </section>
        <section
          id="services"
          className="md:hidden px-5 py-7 items-center"
        >
          <h1 className="text-xl font-bold w-[380px]">
          Trusted by the world&apos;s best companies [social proof to build credibility]
          </h1>
          <div id="logos" className="flex gap-6 my-5">
            <Image src="/logo1.png" width={120} height={50} alt="Logo" />
            <Image src="/logo2.png" width={120} height={50} alt="Logo" />
            <Image src="/logo3.png" width={120} height={50} alt="Logo" />
          </div>
        </section>
        <section className="flex px-5 md:px-0 flex-col justify-center py-40">
          <div
            id="categoryheading"
            className="flex text-center flex-col justify-center items-center"
          >
            <div className="text-3xl md:text-5xl font-black">
              Explore Courses By Category
            </div>
            <div className="p-4 mt-4">
              Discover a wide range of courses covering a variety of subjects,
              taught by expert instructors.
            </div>
          </div>
          <div id="category" className="md:flex justify-around">
            <div
              id="row1"
              className="flex flex-col items-center md:my-10 md:items-start"
            >
              <div className="flex items-center my-10">
                <Image src="/icons/pen.png" width={32} height={32} alt="Logo" />
                <div className="mx-6 text-center md:text-left">
                  <p className="my-1 font-bold">Design & Development</p>
                  <p>50+ Courses Available</p>
                </div>
              </div>
              <div className="flex items-center my-10">
                <Image
                  src="/icons/microphone.png"
                  width={32}
                  height={32}
                  alt="Logo"
                />
                <div className="mx-6 text-center md:text-left">
                  <p className="my-1 font-bold">Communication</p>
                  <p>50+ Courses Available</p>
                </div>
              </div>
              <div className="flex items-center my-10">
                <Image
                  src="/icons/briefcase.png"
                  width={32}
                  height={32}
                  alt="Logo"
                />
                <div className="mx-6 text-center md:text-left">
                  <p className="my-1 font-bold">Business</p>
                  <p>50+ Courses Available</p>
                </div>
              </div>
            </div>
            <div id="row2" className="hidden md:block">
              <div className="flex items-center my-20">
                <Image
                  src="/icons/volume.png"
                  width={32}
                  height={32}
                  alt="Logo"
                />
                <div className="mx-16">
                  <p className="my-1 font-bold">Marketing</p>
                  <p>50+ Courses Available</p>
                </div>
              </div>
              <div className="flex items-center my-20">
                <Image
                  src="/icons/link.png"
                  width={32}
                  height={32}
                  alt="Logo"
                />
                <div className="mx-16">
                  <p className="my-1 font-bold">Digital Marketing</p>
                  <p>50+ Courses Available</p>
                </div>
              </div>
              <div className="flex items-center my-20">
                <Image
                  src="/icons/book.png"
                  width={32}
                  height={32}
                  alt="Logo"
                />
                <div className="mx-16">
                  <p className="my-1 font-bold">Finance</p>
                  <p>50+ Courses Available</p>
                </div>
              </div>
            </div>
            <div id="row3" className="hidden md:block">
              <div className="flex items-center my-20">
                <Image
                  src="/icons/group.png"
                  width={32}
                  height={32}
                  alt="Logo"
                />
                <div className="mx-16">
                  <p className="my-1 font-bold">Development</p>
                  <p>50+ Courses Available</p>
                </div>
              </div>
              <div className="flex items-center my-20">
                <Image
                  src="/icons/arrow.png"
                  width={32}
                  height={32}
                  alt="Logo"
                />
                <div className="mx-16">
                  <p className="my-1 font-bold">Self Development</p>
                  <p>50+ Courses Available</p>
                </div>
              </div>
              <div className="flex items-center my-20">
                <Image
                  src="/icons/book1.png"
                  width={32}
                  height={32}
                  alt="Logo"
                />
                <div className="mx-16">
                  <p className="my-1 font-bold">Consulting</p>
                  <p>50+ Courses Available</p>
                </div>
              </div>
            </div>
          </div>

          <button className="border-2 py-3 border-black rounded-md px-4 my-6 md:my-0 w-[155px] mx-auto">
            View All Courses
          </button>
        </section>
        <section id="achievement" className="p-14 md:p-24 py-20">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-black text-center py-4">
              Our Achievements
            </h1>
            <p className="text-base md:text-lg text-center my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              libero excepturi debitis, tempora consectetur veniam aliquid.
            </p>
            <div className="md:flex gap-56 my-7">
              <div className="flex justify-center items-center text-center gap-32 md:gap-56">
                <div>
                  <h1 className="text-2xl md:text-5xl font-black  py-2">
                    +200
                  </h1>
                  <p className="text-lg my-2">Courses</p>
                </div>
                <div>
                  <h1 className=" text-2xl md:text-5xl font-black text-center py-2">
                    50K
                  </h1>
                  <p className="text-lg text-center my-2">Mentors</p>
                </div>
              </div>
              <div className="flex justify-center gap-32 md:gap-56">
                <div>
                  <h1 className="text-2xl md:text-5xl font-black text-center py-2">
                    370k
                  </h1>
                  <p className="text-lg text-center my-2">Students</p>
                </div>
                <div>
                  <h1 className=" text-2xl md:text-5xl font-black text-center py-2">
                    100+
                  </h1>
                  <p className="text-lg text-center my-2">Recognition</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="courses" className="my-24">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-black text-center py-4">Courses</h1>
            <p className="text-lg text-center my-3">
              Your Ultimate Guide to learning
            </p>
            <div className="flex my-10 gap-7 justify-center font-medium">
              <p>Popular</p>
              <p>Recommended</p>
              <p>Best Price</p>
            </div>
            <div
              id="r1"
              className="md:mx-0 mx-5 md:rounded-none rounded grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
              <div id="card1" className="">
                <div className="my-6">
                  <Image
                    src="/courses/course1.png"
                    width={416}
                    height={300}
                    alt="course"
                  />
                </div>
                <div className="flex flex-wrap  justify-between">
                  <p className="font-semibold text-sm">Design</p>
                  <div className="flex gap-2 ">
                    <Image
                      src="/courses/star.png"
                      width={24}
                      height={24}
                      alt="star"
                    />
                    <p className="font-semibold text-sm">5.0</p>
                  </div>
                </div>
                <h1 className=" text-2xl font-bold py-2">UX/UI Design 201</h1>
                <p className="text-base w-[382px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <div className="flex items-center my-8">
                  <button className="border-2 py-2 border-black rounded-md px-4">
                    Enroll Now
                  </button>
                  <p className="font-semibold text-sm mx-8">$400</p>
                </div>
              </div>
              <div id="card2" className="">
                <div className="my-6">
                  <Image
                    src="/courses/course2.png"
                    width={416}
                    height={300}
                    alt="course"
                  />
                </div>
                <div className="flex flex-wrap  justify-between">
                  <p className="font-semibold text-sm">Programing</p>
                  <div className="flex gap-2 ">
                    <Image
                      src="/courses/star.png"
                      width={24}
                      height={24}
                      alt="star"
                    />
                    <p className="font-semibold text-sm">5.0</p>
                  </div>
                </div>
                <h1 className=" text-2xl font-bold py-2">
                  Introduction To Python
                </h1>
                <p className="text-base w-[382px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <div className="flex items-center my-8">
                  <button className="border-2 py-2 border-black rounded-md px-4">
                    Enroll Now
                  </button>
                  <p className="font-semibold text-sm mx-8">$400</p>
                </div>
              </div>
              <div id="card3" className="">
                <div className="my-6">
                  <Image
                    src="/courses/course3.png"
                    width={416}
                    height={300}
                    alt="course"
                  />
                </div>
                <div className="flex flex-wrap justify-between">
                  <p className="font-semibold text-sm">Business</p>
                  <div className="flex gap-2 ">
                    <Image
                      src="/courses/star.png"
                      width={24}
                      height={24}
                      alt="star"
                    />
                    <p className="font-semibold text-sm">5.0</p>
                  </div>
                </div>
                <h1 className=" text-2xl font-bold py-2">
                  Data Analysis For Beginners
                </h1>
                <p className="text-base w-[382px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <div className="flex items-center my-8">
                  <button className="border-2 py-2 border-black rounded-md px-4">
                    Enroll Now
                  </button>
                  <p className="font-semibold text-sm mx-8">$400</p>
                </div>
              </div>
            </div>
            <div
              id="r2"
              className="md:mx-0 mx-5 my-9 grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
              <div id="card4" className="">
                <div className="my-6">
                  <Image
                    src="/courses/course4.png"
                    width={416}
                    height={300}
                    alt="course"
                  />
                </div>
                <div className="flex flex-wrap  justify-between">
                  <p className="font-semibold text-sm">Art</p>
                  <div className="flex gap-2 ">
                    <Image
                      src="/courses/star.png"
                      width={24}
                      height={24}
                      alt="star"
                    />
                    <p className="font-semibold text-sm">5.0</p>
                  </div>
                </div>
                <h1 className=" text-2xl font-bold py-2">Art Specialization</h1>
                <p className="text-base w-[382px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <div className="flex items-center my-8">
                  <button className="border-2 py-2 border-black rounded-md px-4">
                    Enroll Now
                  </button>
                  <p className="font-semibold text-sm mx-8">$400</p>
                </div>
              </div>
              <div id="card5" className="">
                <div className="my-6">
                  <Image
                    src="/courses/course5.png"
                    width={416}
                    height={300}
                    alt="course"
                  />
                </div>
                <div className="flex flex-wrap  justify-between">
                  <p className="font-semibold text-sm">Law</p>
                  <div className="flex gap-2 ">
                    <Image
                      src="/courses/star.png"
                      width={24}
                      height={24}
                      alt="star"
                    />
                    <p className="font-semibold text-sm">5.0</p>
                  </div>
                </div>
                <h1 className=" text-2xl font-bold py-2">Rule Of Law</h1>
                <p className="text-base w-[382px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <div className="flex items-center my-8">
                  <button className="border-2 py-2 border-black rounded-md px-4">
                    Enroll Now
                  </button>
                  <p className="font-semibold text-sm mx-8">$400</p>
                </div>
              </div>
              <div id="card6" className="">
                <div className="my-6">
                  <Image
                    src="/courses/course6.png"
                    width={416}
                    height={300}
                    alt="course"
                  />
                </div>
                <div className="flex flex-wrap  justify-between">
                  <p className="font-semibold text-sm">Tech</p>
                  <div className="flex gap-2 ">
                    <Image
                      src="/courses/star.png"
                      width={24}
                      height={24}
                      alt="star"
                    />
                    <p className="font-semibold text-sm">5.0</p>
                  </div>
                </div>
                <h1 className=" text-2xl font-bold py-2">
                  Introduction To webflow
                </h1>
                <p className="text-base w-[382px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <div className="flex items-center my-8">
                  <button className="border-2 py-2 border-black rounded-md px-4">
                    Enroll Now
                  </button>
                  <p className="font-semibold text-sm mx-8">$400</p>
                </div>
              </div>
            </div>
            <button className="border-2 py-2 border-black rounded-md px-4 w-[155px] m-auto">
              View All Courses
            </button>
          </div>
        </section>
        <section id="about">
          <div className="container mx-auto p-4 pt-12">
            <h1 className="text-4xl font-black text-center mb-8">Our team</h1>
            <p className="text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div id="team" className="md:flex justify-around">
            <div id="col1">
              <div className="flex flex-col items-center my-20">
                <Image src="/team/man1.png" width={80} height={80} alt="man" />
                <div className="mx-16 my-6 text-center">
                  <p className="my-1 font-bold">James Nduku</p>
                  <p>Marketing Coordinator</p>
                </div>
                <div className="flex gap-4 items-center">
                  <Image
                    src="/team/linkedin.png"
                    width={24}
                    height={24}
                    alt="icon"
                  />
                  <Image
                    src="/team/twitter.png"
                    width={18}
                    height={18}
                    alt="icon"
                  />
                  <Image
                    src="/team/vector.png"
                    width={18}
                    height={18}
                    alt="icon"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center my-20">
                <Image src="/team/man2.png" width={80} height={80} alt="man" />
                <div className="mx-16 my-6 text-center">
                  <p className="my-1 font-bold">Erick Kipkemboi</p>
                  <p>Web Designer</p>
                </div>
                <div className="flex gap-4 items-center">
                  <Image
                    src="/team/linkedin.png"
                    width={24}
                    height={24}
                    alt="icon"
                  />
                  <Image
                    src="/team/twitter.png"
                    width={18}
                    height={18}
                    alt="icon"
                  />
                  <Image
                    src="/team/vector.png"
                    width={18}
                    height={18}
                    alt="icon"
                  />
                </div>
              </div>
            </div>
            <div id="col2">
              <div className="flex flex-col items-center my-20">
                <Image src="/team/man2.png" width={80} height={80} alt="man" />
                <div className="mx-16 my-6 text-center">
                  <p className="my-1 font-bold">Joseph Munyambui</p>
                  <p>Nursing Assistant</p>
                </div>
                <div className="flex gap-4 items-center">
                  <Image
                    src="/team/linkedin.png"
                    width={24}
                    height={24}
                    alt="icon"
                  />
                  <Image
                    src="/team/twitter.png"
                    width={18}
                    height={18}
                    alt="icon"
                  />
                  <Image
                    src="/team/vector.png"
                    width={18}
                    height={18}
                    alt="icon"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center my-20">
                <Image src="/team/man3.png" width={80} height={80} alt="man" />
                <div className="mx-16 my-6 text-center">
                  <p className="my-1 font-bold">Stephen Kerubo</p>
                  <p>President Of Sales</p>
                </div>
                <div className="flex gap-4 items-center">
                  <Image
                    src="/team/linkedin.png"
                    width={24}
                    height={24}
                    alt="icon"
                  />
                  <Image
                    src="/team/twitter.png"
                    width={18}
                    height={18}
                    alt="icon"
                  />
                  <Image
                    src="/team/vector.png"
                    width={18}
                    height={18}
                    alt="icon"
                  />
                </div>
              </div>
            </div>
            <div id="col3">
              <div className="flex flex-col items-center my-20">
                <Image src="/team/man3.png" width={80} height={80} alt="man" />
                <div className="mx-16 my-6 text-center">
                  <p className="my-1 font-bold">Joseph Ngumbau</p>
                  <p>Medical Assistant</p>
                </div>
                <div className="flex gap-4 items-center">
                  <Image
                    src="/team/linkedin.png"
                    width={24}
                    height={24}
                    alt="icon"
                  />
                  <Image
                    src="/team/twitter.png"
                    width={18}
                    height={18}
                    alt="icon"
                  />
                  <Image
                    src="/team/vector.png"
                    width={18}
                    height={18}
                    alt="icon"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center my-20">
                <Image src="/team/man5.png" width={80} height={80} alt="man" />
                <div className="mx-16 my-6 text-center">
                  <p className="my-1 font-bold">John Leboo</p>
                  <p>Dog Trainer</p>
                </div>
                <div className="flex gap-4 items-center">
                  <Image
                    src="/team/linkedin.png"
                    width={24}
                    height={24}
                    alt="icon"
                  />
                  <Image
                    src="/team/twitter.png"
                    width={18}
                    height={18}
                    alt="icon"
                  />
                  <Image
                    src="/team/vector.png"
                    width={18}
                    height={18}
                    alt="icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="testimonial"
          className="px-20 py-32 flex flex-col items-center justify-center"
        >
          <div>
            <div className="text-center md:text-left">
              <h1 className="hidden md:block text-5xl font-black my-5">
                Customer testominials
              </h1>
              <h1 className="text-4xl md:hidden font-black my-5">
                What Our Students Say
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div id="cards" className="my-14 hidden md:flex gap-7">
              <div
                id="card1"
                className="border-black border-2 px-7 py-4 w-[362px] "
              >
                <Image
                  src="/stars.png"
                  width={116}
                  height={19}
                  alt="stars"
                  className="my-5"
                />
                <p className="my-5">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.&quot;
                </p>
                <div className="flex items-center gap-5 my-5">
                  <Image
                    className="rounded-full"
                    src="/team/man1.png"
                    width={56}
                    height={56}
                    alt="man"
                  />
                  <div>
                    <h1 className="font-semibold text-base">James Nduku</h1>
                    <p>Software Developer</p>
                  </div>
                </div>
              </div>
              <div
                id="card2"
                className="border-black border-2 px-7 py-4 w-[362px] "
              >
                <Image
                  src="/stars.png"
                  width={116}
                  height={19}
                  alt="stars"
                  className="my-5"
                />
                <p className="my-5">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.&quot;
                </p>
                <div className="flex items-center gap-5 my-5">
                  <Image
                    className="rounded-full"
                    src="/team/man2.png"
                    width={56}
                    height={56}
                    alt="man"
                  />
                  <div>
                    <h1 className="font-semibold text-base">Erick Kipkemboi</h1>
                    <p>Scrum Master</p>
                  </div>
                </div>
              </div>
              <div
                id="card3"
                className="border-black border-2 px-7 py-4 w-[362px] "
              >
                <Image
                  src="/stars.png"
                  width={116}
                  height={19}
                  alt="stars"
                  className="my-5"
                />
                <p className="my-5">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.&quot;
                </p>
                <div className="flex items-center gap-5 my-5">
                  <Image
                    className="rounded-full"
                    src="/team/man3.png"
                    width={56}
                    height={56}
                    alt="man"
                  />
                  <div>
                    <h1 className="font-semibold text-base">Stephen Kerubo</h1>
                    <p>UI/UX Designer</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="card" className="mx-5 md:hidden my-12">
              <div
                id="card"
                className="border-black border-2 px-7 py-4 w-[362px] "
              >
                <Image
                  src="/stars.png"
                  width={116}
                  height={19}
                  alt="stars"
                  className="my-5"
                />
                <p className="my-5">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.&quot;
                </p>
                <div className="flex items-center gap-5 my-5">
                  <Image
                    className="rounded-full"
                    src="/team/man1.png"
                    width={56}
                    height={56}
                    alt="man"
                  />
                  <div>
                    <h1 className="font-semibold text-base">James Nduku</h1>
                    <p>Software Developer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between md:mx-0 mx-2">
              <Image
                src="/testimonials/dots.png"
                width={72}
                height={8}
                alt="dots"
              />
              <Image
                src="/testimonials/buttons.png"
                width={111}
                height={48}
                alt="buttons"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="px-5 md:px-32 py-20 md:py-52">
        <div className="md:flex justify-between items-center">
          <div className="items-center text-center md:text-left md-items-left">
            <h1 className="font-semibold my-3  md:my-0">
              Subscribe to our newsletter
            </h1>
            <p className="mx-5 md:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <div className="items-center md:items-left flex md:flex-row flex-col">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="py-3 px-2 w-full md:mx-0 md:w-[265px] md:my-0 my-3 border-black text-black border-2 md:border-[1px] rounded"
              />
              <button className="py-3 w-full md:w-[99px] text-center md:px-1 border-black border-2 md:border-[1px] rounded md:mx-3">
                Subscribe
              </button>
            </div>
            <p className="my-3 text-center md:text-left text-xs">
              By subscribing you agree to with our Privacy Policy
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between md:items-start items-center text-center md:text-left my-20">
          <Image src="/logoweb.png" width={130} height={40} alt="logo" className="md:my-0 my-4"/>
          <div className="flex md:my-0 my-4 flex-col gap-4">
            <h1 className="font-bold my-2 md:my-1">Courses</h1>
            <p>Business</p>
            <p>Development</p>
            <p>Technology</p>
            <p>Design</p>
            <p>Programming</p>
          </div>
          <div className="flex md:my-0 my-4 flex-col gap-4">
            <h1 className="font-bold my-2 md:my-1">Resources</h1>
            <p>Career</p>
            <p>Resume</p>
            <p>Learning</p>
            <p>Interview Preparation</p>
            <p>Jobs</p>
          </div>
          <div className="flex md:my-0 my-4 flex-col gap-4">
            <h1 className="font-bold my-2 md:my-1">About Us</h1>
            <p>Contact</p>
            <p>Help/Support</p>
            <p>FAQ</p>
            <p>Terms and Conditions</p>
            <p>Partners</p>
          </div>
        </div>

        <hr className="border-[1px] border-gray-800" />
        <div className="md:flex text-center md:text-left justify-between my-7">
          <div className="md:flex gap-6 text-sm text-center md:text-left">
            <div className="md:my-0 my-3">
              <p>2023 Ddsgnr. All right reserved.</p>
            </div>
            <div className="flex md:my-0 my-2 md:gap-2 justify-around">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Cookies Settings</p>
            </div>
          </div>
          <div className="flex gap-5 md:gap-4 md:my-0 my-5 justify-center">
            <FaFacebook size={20} />
            <FaInstagram size={20} />
            <FaTwitter size={20} />
            <FaLinkedin size={20} />
          </div>
        </div>
      </footer>
    </div>
  );
}
