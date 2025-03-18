import CardList from "./components/CardList";
import Featured from "./components/Featured";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const cat = searchParams.cat || "";
  const sort = searchParams.sort || "asc";

  return (
    <div className="min-h-screen">
      <main>
        <Featured />
        <CardList page={page} cat={cat} sort={sort} />
      </main>
    </div>
  );
}
