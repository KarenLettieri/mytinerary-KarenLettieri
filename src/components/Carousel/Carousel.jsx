import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [counter, setCounter] = useState(0);
  const [slides, setSlides] = useState([]);

  const prev = () => {
    if (counter === 0) {
      setCounter(slides.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  const next = () => {
    if (counter === slides.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  useEffect(() => {
    const cities = [
      {
        name: "Cancun, Mexico",
        image: "images/cancun.jpg",
      },
      {
        name: "Dublin, Ireland",
        image: `images/dublin.jpg`,
      },
      {
        name: "India, India",
        image: `images/india.jpg`,
      },
      {
        name: "Jujuy, Argentina",
        image: `images/jujuy.jpg`,
      },
      {
        name: "Rosario, Argentina",
        image: `images/rosario.jpg`,
      },
      {
        name: "Mykonos, Greece",
        image: `images/mykonos.jpg`,
      },
      {
        name: "Bangkok, Thailand",
        image: `images/tailandia.jpg`,
      },
      {
        name: "Tenerife, Spain",
        image: `images/tenerife.jpg`,
      },
      {
        name: "Tokyo, Japan",
        image: `images/tokyo.jpg`,
      },
      {
        name: "Cairo, Egypt",
        image: `images/egipto.jpg`,
      },
      {
        name: "Amsterdam, Netherlands",
        image: `images/amsterdam.jpg`,
      },
      {
        name: "Zurich, Switzerland",
        image: `images/suiza.jpg`,
      },
    ];

    const totalSlides = [];
    for (let i = 0; i < cities.length; i += 4) {
      totalSlides.push(cities.slice(i, i + 4));
    }

    setSlides(totalSlides);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div className="carousel-container md:max-w-xl mx-auto">
      <h2 className="my-14 text-3xl font-bold text-center text-gray-900 md:text-4xl lg:text-5xl ">
        Popular{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          MyTineraries{" "}
        </span>
      </h2>
      <div className="relative">
        <button
          style={{ left: "-30px" }}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-10 bg-secondary hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
          onClick={prev}
        >
          {"<"}
        </button>

        <div className="grid grid-cols-2 gap-4">
          {slides.length > 0 ? (
            slides[counter].map((city) => (
              <div
                key={city.name}
                className="cursor-pointer transform transition-all ease-in-out duration-300 hover:scale-125 hover:z-10 "
              >
                <img
                  className="w-48 h-44 object-cover rounded-md shadow-xl cursor-pointer m-2 "
                  src={city.image}
                  alt={city.name}
                />
                <p className="text-center me-6 text-sm ">{city.name}</p>
              </div>
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </div>

        <button
          style={{ right: "-30px" }}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-10 bg-secondary hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
          onClick={next}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
