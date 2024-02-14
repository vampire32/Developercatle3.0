import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Components/Navbar";
import Link from "next/link";
import HeroSection from "@/Components/HeroSection";
import GallerySection from "@/Components/GallerySection";
import OurTeam from "@/Components/OurTeam";
import Testimonial from "@/Components/Testimonial";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-main">
        <Navbar />
        <HeroSection />
      </div>

      <main className="grid gap-4 lg:gap-8 flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Services
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We offer a wide range of services to meet your business needs.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Web Development</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Create stunning websites and web applications with our
                  expertise in frontend and backend development.
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Mobile App Development</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Build feature-rich and scalable mobile apps for iOS and
                  Android platforms.
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Digital Marketing</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Reach your audience with our digital marketing strategies
                  including SEO, social media, and content marketing.
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Blockchain Solutions</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Explore the potential of blockchain technology with our secure
                  and innovative solutions.
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Artificial Intelligence</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Leverage AI to automate processes, gain insights, and deliver
                  intelligent solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
       <GallerySection/>
        <OurTeam/>
        <Testimonial/>
      </main>
      <Footer/>
    </>
  );
}
