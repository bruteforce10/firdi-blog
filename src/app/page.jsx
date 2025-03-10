import CardList from "./components/CardList";
import CategoryList from "./components/CategoryList";
import Featured from "./components/Featured";
import Menu from "./components/Menu";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className="min-h-screen">
      <main className="container">
        <Featured />
        <CategoryList />
        <div className="flex gap-[50px]">
          <CardList page={page} />
          <Menu />
        </div>
      </main>
    </div>
  );
}
