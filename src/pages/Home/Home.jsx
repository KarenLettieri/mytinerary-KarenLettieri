import Carousel from "../../components/Carousel/Carousel";
import LayoutMain from "../Layouts/LayoutMain";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <LayoutMain>
        <main className="flex-grow flex flex-col">
          <section className="home-hero">
            <Hero />
          </section>
          <section className="flex justify-center items-center flex-grow">
            <Carousel />
          </section>
        </main>
      </LayoutMain>
    </div>
  );
};

export default Home;
