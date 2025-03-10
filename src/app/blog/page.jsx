import CardList from "../components/CardList";
import Menu from "../components/Menu";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold my-10">{`${cat} Blog`}</h1>
      <div className="flex gap-[50px]">
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
