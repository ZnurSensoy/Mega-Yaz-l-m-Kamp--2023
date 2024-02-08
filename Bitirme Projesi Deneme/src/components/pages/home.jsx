import { useEffect, useState } from "react";
import Background from "../Background/Background";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import React from "react";

const Home = () => {
  let heroData = [
    { text1: "Meram belediyesi ile", text2: "kendini keşfet" },
    { text1: "Meram belediyesi ile", text2: "kendini keşfet" },
    { text1: "Meram belediyesi ile", text2: "kendini keşfet" },
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);
  }, []);

  return (
    <div>
      <React.Fragment>
        {" "}
        <Background playStatus={playStatus} heroCount={heroCount} />
        <Navbar />
        <Hero
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
        />
      </React.Fragment>
    </div>
  );
};

export default Home;