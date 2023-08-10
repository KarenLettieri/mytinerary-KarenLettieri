import Carousel from "../../components/Carousel/Carousel";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <main className="flex-grow flex flex-col">
        <section className="home-hero">
          <Hero />
        </section>
        <section className="flex justify-center items-center flex-grow">
          <Carousel />
        </section>
      </main>
    </div>
  );
};

export default Home;
