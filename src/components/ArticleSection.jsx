/* eslint-disable react/prop-types */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import axios from "axios";
import { BiSearch } from "react-icons/bi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function BlogCard({
  image,
  category,
  title,
  description,
  author,
  date,
  authorImage,
  postId,
}) {
  return (
    <div className="flex flex-col gap-4">
      <Link to={`/${postId}`} className="relative h-[212px] sm:h-[360px]">
        <img
          className="w-full h-full object-cover rounded-md"
          src={image}
          alt={title}
        />
      </Link>
      <div className="flex flex-col">
        <div className="flex">
          <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
            {category}
          </span>
        </div>
        <Link to={`/${postId}`}>
          <h2 className="font-bold text-xl mb-2 line-clamp-2 hover:underline">
            {title}
          </h2>
        </Link>
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

const ArticleSection = () => {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const [buttonCategories, setButtonCategories] = useState("");
  const [category, setCategory] = useState("Highlight");
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `https://blog-post-project-api.vercel.app/posts`
      );
      setPosts(response.data.posts);
      setAllPosts(response.data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const filteredPosts = allPosts.filter((post) => post.category === category);
    setPosts(filteredPosts.length > 0 ? filteredPosts : allPosts);
  }, [category, allPosts]);

  useEffect(() => {
    if (searchKeyword.length > 0) {
      setIsLoading(true);
      const fetchSuggestions = async () => {
        try {
          const response = await axios.get(
            `https://blog-post-project-api.vercel.app/posts?keyword=${searchKeyword}`
          );
          setSuggestions(response.data.posts); // Set search suggestions
          setIsLoading(false);
        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      };
      fetchSuggestions();
    } else {
      setSuggestions([]); // Clear suggestions if keyword is empty
    }
  }, [searchKeyword]);

  return (
    <>
      <div className="p-4 md:p-10 lg:p-20 w-full">
        <main className="w-full  mx-auto hidden md:block">
          <div>
            <h1 className="text-xl font-bold mb-4 px-4">Latest articles</h1>
            <div className="bg-[#DAD6D1] px-4 py-4 md:py-3 md:rounded-sm flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:justify-between mb-10">
              <div className="flex space-x-4 flex-row">
                <div className="flex space-x-4 flex-row">
                  {categories.map((label) => (
                    <Button
                      key={label}
                      onClick={() => {
                        if (buttonCategories !== label) {
                          setButtonCategories(label);
                          setCategory(label);
                        }
                      }}
                      className={`"px-4 py-3 transition-colors rounded-sm text-sm "
            ${
              buttonCategories === label
                ? "bg-[#DAD6D1] text-[#43403B]"
                : "bg-[#F0F0F0] hover:bg-[#D3D3D3] text-[#43403B]"
            }`}
                    >
                      {label}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="relative w-[300px]">
                <Input
                  type="text"
                  placeholder="Search"
                  className="py-3 rounded-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-muted-foreground"
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  onFocus={() => setShowDropdown(true)}
                  onBlur={() => {
                    setTimeout(() => {
                      setShowDropdown(false);
                    }, 200);
                  }}
                />
                {!isLoading &&
                  showDropdown &&
                  searchKeyword &&
                  suggestions.length > 0 && (
                    <div className="absolute z-10 w-full mt-2 bg-background rounded-sm shadow-lg p-1">
                      {suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          className="text-start px-4 py-2 block w-full text-sm text-foreground hover:bg-[#EFEEEB] hover:text-muted-foreground hover:rounded-sm cursor-pointer"
                          onClick={() => navigate(`/post/${suggestion.id}`)}
                        >
                          {suggestion.title}
                        </button>
                      ))}
                    </div>
                  )}
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
            <Select
              value={category}
              onValueChange={(value) => setCategory(value)}
              className="w-full"
            >
              <SelectTrigger>
                <SelectValue placeholder="Highlight" />
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

        <article className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
          {posts.map((blog, index) => {
            return (
              <BlogCard
                key={index}
                image={blog.image}
                category={blog.category}
                title={blog.title}
                description={blog.description}
                author={blog.author}
                date={new Date(blog.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
                authorImage={blog.authorImage}
                postId={blog.id} // สมมติว่า blog.id คือ ID ของโพสต์
              />
            );
          })}
        </article>
      </div>
    </>
  );
};
export default ArticleSection;
