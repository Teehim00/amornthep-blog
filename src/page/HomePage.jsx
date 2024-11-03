import { NavBar, HeroSection } from "../components/NavBar";
import ArticlesSection from "../components/ArticleSection";
import { Footer } from "../components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow">
        <HeroSection />
        <ArticlesSection />
      </div>
      <Footer />
    </div>
  );
}
