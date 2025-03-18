import Card from "./Card";
import PaginationSection from "./Pagination";
import OptionSelect from "./atoms/card-list/option";

const getData = async (page, cat, sort, getData) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${
      cat || ""
    }&sort=${sort}&getData=${getData}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const CardList = async ({ page, cat, sort }) => {
  const { posts, count } = await getData(page, cat, sort, "data-pagination");

  const POST_PER_PAGE = 6;

  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;

  return (
    <div className="container mx-auto px-4 mt-8 lg:mt-12 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-medium ">Recent blog posts</h1>
        <p className="text-gray-500">
          Here are the latest blog posts from our community.
        </p>
      </div>
      <div className="flex md:justify-between items-center">
        <OptionSelect />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.length > 0 ? (
          posts?.map((item) => <Card item={item} key={item._id} />)
        ) : (
          <p>tidak ada blog</p>
        )}
      </div>
      <PaginationSection page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
};

export default CardList;
