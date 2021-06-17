import Nav from "../components/share/Nav";
import SearchAndIntroduce from "../components/home/SearchAndIntroduce";
import '../api/auth'
export default function Home() {
  
  return (
    <div className>
      <Nav />
      <SearchAndIntroduce />
      <div className="divide"></div>
    </div>
  );
}
