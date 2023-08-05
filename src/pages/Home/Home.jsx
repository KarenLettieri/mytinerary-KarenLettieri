import Carousel from "../../components/Carousel/Carousel";
import LayoutMain from "../Layouts/LayoutMain";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <LayoutMain>
      <main className="flex-grow-1 d-flex flex-column">
        <section className="home-hero">
          <Hero />
        </section>
        <section className="flex justify-center items-center min-h-screen">
          <Carousel />
        </section>
      </main>
    </LayoutMain>
  );
};

export default Home;
