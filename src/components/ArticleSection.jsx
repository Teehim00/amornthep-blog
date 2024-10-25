import { blogPosts } from "../data/blogPosts";

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

function ArticleSection() {
  return (
    <>
      <div className="p-4 md:p-10 lg:p-20 w-full">
        <main className="w-full  mx-auto hidden md:block">
          <div>
            <h1 className="text-xl font-bold mb-4 px-4">Latest articles</h1>
            <div className="bg-[#EFEEEB] px-4 py-4 md:py-3 md:rounded-sm flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:justify-between mb-10">
              <div className="flex flex-col space-y-4 md:space-x-4 md:flex-row">
                <button className="px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground font-medium bg-[#DAD6D1]">
                  Highlight
                </button>
                <button className="px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground font-medium bg-[muted]">
                  Cat
                </button>
                <button className="px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground font-medium bg-[muted]">
                  Inspiration
                </button>
                <button className="px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground font-medium bg-[muted]">
                  General
                </button>
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-3 border rounded-sm"
              />
            </div>
          </div>
        </main>
        <section className="w-full sm:w-full mx-auto md:hidden">
          <div>
            <h1 className="text-2xl">Latest articles</h1>
          </div>
          <div className="flex flex-col space-y-4 bg-[#EFEEEB] p-4">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-sm px-4 py-2"
            />
            <h2>Category</h2>
            <input
              type="text"
              placeholder="Category"
              className="border rounded-sm px-4 py-2"
            />
          </div>
        </section>
        <article className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-10 md:px-0 md:py-0">
          <BlogCard
            image={blogPosts[0].image}
            category={blogPosts[0].category}
            title={blogPosts[0].title}
            description={blogPosts[0].description}
            author={blogPosts[0].author}
            date={blogPosts[0].date}
          />
          <BlogCard
            image={blogPosts[1].image}
            category={blogPosts[1].category}
            title={blogPosts[1].title}
            description={blogPosts[1].description}
            author={blogPosts[1].author}
            date={blogPosts[1].date}
          />
          <BlogCard
            image={blogPosts[2].image}
            category={blogPosts[2].category}
            title={blogPosts[2].title}
            description={blogPosts[2].description}
            author={blogPosts[2].author}
            date={blogPosts[2].date}
          />
          <BlogCard
            image={blogPosts[3].image}
            category={blogPosts[3].category}
            title={blogPosts[3].title}
            description={blogPosts[3].description}
            author={blogPosts[3].author}
            date={blogPosts[3].date}
          />
          <BlogCard
            image={blogPosts[4].image}
            category={blogPosts[4].category}
            title={blogPosts[4].title}
            description={blogPosts[4].description}
            author={blogPosts[4].author}
            date={blogPosts[4].date}
          />
          <BlogCard
            image={blogPosts[5].image}
            category={blogPosts[5].category}
            title={blogPosts[5].title}
            description={blogPosts[5].description}
            author={blogPosts[5].author}
            date={blogPosts[5].date}
          />
        </article>
      </div>
    </>
  );
}
export default ArticleSection;
