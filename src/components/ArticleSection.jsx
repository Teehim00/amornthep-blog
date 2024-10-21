function ArticleSection() {
  return (
    <>
      <main className="p-10 w-full max-w-[1200px] mx-auto hidden md:block">
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
    </>
  );
}
export default ArticleSection;