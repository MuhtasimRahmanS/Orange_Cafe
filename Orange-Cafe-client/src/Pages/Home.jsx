import { Helmet } from "react-helmet";
import AboutUs from "../Components/AboutUs";
import Banner from "../Components/Banner";
import OurTeam from "../Components/OurTeam";
import TopFoods from "../Components/TopFoods";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home-Orange-Cafe</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Banner></Banner>
      <TopFoods></TopFoods>
      <AboutUs></AboutUs>
      <OurTeam></OurTeam>
    </div>
  );
};

export default Home;
