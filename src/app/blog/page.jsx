import CardList from "../components/CardList";
import Menu from "../components/Menu";

const BlogPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold my-10">Blog</h1>
      <div className="flex gap-[50px]">
          <CardList />
          <Menu />
        </div>
    </div>
  );
};

export default BlogPage;