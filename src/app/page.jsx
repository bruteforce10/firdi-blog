import CardList from "./components/CardList";
import CategoryList from "./components/CategoryList";
import Featured from "./components/Featured";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Featured />
        <CategoryList />
        <div>
          <CardList />
          <Menu />
        </div>
      </main>
    </div>
  );
}
