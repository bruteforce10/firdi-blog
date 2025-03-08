import CardList from "./components/CardList";
import CategoryList from "./components/CategoryList";
import Featured from "./components/Featured";
import Menu from "./components/Menu";



export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="container">
        <Featured />
        <CategoryList />
        <div className="flex gap-[50px]">
          <CardList />
          <Menu />
        </div>
      </main>
    </div>
  );
}
