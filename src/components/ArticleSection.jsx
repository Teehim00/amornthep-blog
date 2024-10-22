import { blogPosts } from "../data/blogPosts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BiSearch } from "react-icons/bi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function BlogCard({
  image,
  category,
  title,
  description,
  author,
  date,
  authorImage,
}) {
  return (
    <div className="flex flex-col gap-4">
      <a href="#" className="relative h-[212px] sm:h-[360px]">
        <img
          className="w-full h-full object-cover rounded-md"
          src={image}
          alt={title}
        />
      </a>
      <div className="flex flex-col">
        <div className="flex">
          <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
            {category}
          </span>
        </div>
        <a href="#">
          <h2 className="font-bold text-xl mb-2 line-clamp-2 hover:underline">
            {title}
          </h2>
        </a>
        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
          {description}
        </p>
        <div className="flex items-center text-sm">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src={authorImage}
            alt={author}
          />
          <span>{author}</span>
          <span className="mx-2 text-gray-300">|</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}

const categories = ["Highlight", "Cat", "Inspiration", "General"];

function ArticleSection() {
  return (
    <>
      <div className="p-4 md:p-10 lg:p-20 w-full">
        <main className="w-full  mx-auto hidden md:block">
          <div>
            <h1 className="text-xl font-bold mb-4 px-4">Latest articles</h1>
            <div className="bg-[#EFEEEB] px-4 py-4 md:py-3 md:rounded-sm flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:justify-between mb-10">
              <div className="flex space-x-4 flex-row">
                <div className="flex space-x-4 flex-row">
                  {categories.map((label, index) => (
                    <Button
                      key={index}
                      className="px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground bg-[#EFEEEB] hover:bg-[#ffffff]"
                    >
                      {label}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="relative w-[300px]">
                <Input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-3 pr-10 border rounded-sm w-full"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <BiSearch className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </main>

        <section className="w-full sm:w-full mx-auto md:hidden bg-[#EFEEEB]">
          <div>
            <h1 className="text-2xl px-4">Latest articles</h1>
          </div>
          <div className="relative px-4 py-3">
            <Input
              type="text"
              placeholder="Search..."
              className="border rounded-sm w-full"
            />
            <div className="absolute inset-y-0 right-5 flex items-center pr-3">
              <BiSearch className="text-gray-400" />
            </div>
          </div>

          <div className="flex flex-col px-4 py-3 pl-3 pr-3">
            <Select className="w-full">
              <SelectTrigger>
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => {
                  return (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        </section>

        <article className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-10 md:px-0 md:py-0">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              category={post.category}
              title={post.title}
              description={post.description}
              author={post.author}
              date={post.date}
            />
          ))}
        </article>
      </div>
    </>
  );
}
export default ArticleSection;
