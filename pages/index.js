import { useCookies } from "react-cookie";
import Nav from "../components/share/Nav";
import SearchAndIntroduce from "../components/home/SearchAndIntroduce";
import "../api/auth";
import { parseCookies } from "../helper";
import { checkUserExist } from "../api/auth";
export const getServerSideProps = async (ctx) => {
  const data = parseCookies(ctx.req);
  let isUserExist = await checkUserExist(data.id);
  if (ctx.res) {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      ctx.res.writeHead(301, { Location: "/" });
      ctx.res.end();
    }
  }
  const posts = [];
  if (!isUserExist) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  } else {
    return {
      props: {
        data: isUserExist,
      },
    };
  }
};

export default function Home(props) {
  const [cookies, setCookie] = useCookies("id");

  return (
    <div className>
      <Nav {...props} />
      <SearchAndIntroduce />
      <div className="divide"></div>
    </div>
  );
}
