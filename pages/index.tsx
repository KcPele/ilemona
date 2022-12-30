import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import {
  Blog,
  Footer,
  Header,
  Navbar,
  Started,
  Usage,
  Welcome,
} from "../components";
import Article from "../components/Article";
const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Usage />
      <Article />
      <Started />
      <Blog />
      <Welcome />
      <Footer />
    </div>
  );
};

export default Home;
