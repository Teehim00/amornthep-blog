import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <HeroSection />
    </>
  );
}

function NavBar() {
  return (
    <navbar className="flex items-center justify-between py-4 px-8 border-b ">
      <div className="logo text-2xl font-bold ">hh.</div>
      <div className="gap-2">
        <button className="px-9 py-2 bg-white rounded-full border text-xs mr-3">
          Log in
        </button>
        <button className="px-9 py-2 bg-black text-white rounded-full text-xs gap-6">
          Sign up
        </button>
      </div>
    </navbar>
  );
}

function HeroSection() {
  return (
    <main className="h-[529px] flex justify-center items-center mt-8" >
    <div className="flex flex-col lg:flex-row justify-center items-center">
      <div className="h-[276px] items-end text-center lg:text-right lg:w-[400px]">
        <h1 className="text-5xl font-bold mb-4">
          Stay <br/>
          Informed, <br />
          Stay Inspired,
        </h1>
        <p className="text-lg">
          Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
          Inspiration and Information.
        </p>
      </div>
      <img
        src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
        alt="Person with a cat"
        className="h-[530px] object-cover rounded-lg shadow-lg lg:w-1/3 mx-4 mb-8 lg:mb-0"
      />
        <div className="h-[284px] items-end text-center lg:text-left lg:w-[400px]">
      <h2 className="text-xl font-semibold mb-2">-Author</h2>
      <h3 className="text-2xl font-bold mb-4">Thompson P.</h3>
      <p>
        I am a pet enthusiast and freelance writer who specializes in animal
        behavior and care. With a deep love for cats, I enjoy sharing
        insights on feline companionship and wellness.
      </p>
      <p>
        When I&apos;m not writing, I spend time volunteering at my local
        animal shelter, helping cats find loving homes.
      </p>
    </div>
  </div>
</main>
  );
}
export default App;
