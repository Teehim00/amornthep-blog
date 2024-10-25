import { AlignJustify } from "lucide-react";

export function NavBar() {
  return (
    <nav className="flex items-center justify-between py-4 px-8 border-b ">
      <div className="logo text-2xl font-bold">hh.</div>

      <div className="gap-2 hidden md:flex">
        <button className="px-9 py-2 bg-white rounded-full border text-xs mr-3">
          Log in
        </button>
        <button className="px-9 py-2 bg-black text-white rounded-full text-xs">
          Sign up
        </button>
      </div>

      <AlignJustify className="block md:hidden" size={24} color="black" />
    </nav>
  );
}

export function HeroSection() {
  return (
    <main className="h-auto flex justify-center items-center mt-8 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="text-center lg:text-right lg:w-[400px] lg:h-[276px]">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Stay <br />
            Informed, <br />
            Stay Inspired,
          </h1>
          <p className="text-base sm:text-lg">
            Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
            Inspiration and Information.
          </p>
        </div>

        <img
          src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
          alt="Person with a cat"
          className="h-[250px] sm:h-[350px] lg:h-[530px] object-cover rounded-lg shadow-lg lg:w-1/3 mx-4 mb-4 lg:mb-0"
        />

        <div className="text-center lg:text-left lg:w-[400px] lg:h-[284px]">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">-Author</h2>
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Thompson P.</h3>
          <p className="text-sm sm:text-base mb-2">
            I am a pet enthusiast and freelance writer who specializes in animal
            behavior and care. With a deep love for cats, I enjoy sharing
            insights on feline companionship and wellness.
          </p>
          <p className="text-sm sm:text-base">
            When I'm not writing, I spend time volunteering at my local animal
            shelter, helping cats find loving homes.
          </p>
        </div>
      </div>
    </main>
  );
}
