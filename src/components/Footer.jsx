import { Linkedin, Github, Inbox } from "lucide-react";
import { Link } from 'react-router-dom';
export function Footer() {
  return (
    <footer className="bg-[#EFEEEB] p-8 flex flex-col space-y-4 justify-center items-center md:flex-row md:space-y-0 md:justify-between md:items-center">
      <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6">
        <span className="font-medium">Get in touch</span>
        <div className="flex space-x-4">
          <Linkedin
            size={24}
            className="flex justify-center items-center bg-slate-500 rounded-full w-10 h-10 text-white"
          />
          <Github
            size={24}
            className="flex justify-center items-center bg-slate-500 rounded-full w-10 h-10 text-white"
          />
          <Inbox
            size={24}
            className="flex justify-center items-center bg-slate-500 rounded-full w-10 h-10 text-white"
          />
          <span className="sr-only">Email</span>
        </div>
      </div>
      <Link to="/" className="text-center md:text-left">
        Home page
      </Link>
    </footer>
  );
}
