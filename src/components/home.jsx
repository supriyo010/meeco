import React from "react";
import Block1 from "./home/Block1";
import Block2 from "./home/Block2";
import Block3 from "./home/Block3";
import Block4 from "./home/Block4";
import Block5 from "./home/Block5";
import Carousel from "./Carousel";
import Service from "./Service";
import ChatBot from "react-chatbotify";


function Home({ scrollToTop }) {
  return (
    <div className="px-[130px] w-full h-max max-[1080px]:px-[20px]">
      <Carousel scrollToTop={scrollToTop}/>
      <Block1 scrollToTop={scrollToTop} />
      
      <Block2 scrollToTop={scrollToTop} />
      <Block3 />

      <Block4 scrollToTop={scrollToTop} />
      <ChatBot/>
      <Block5 />

    </div>
  );
}

export default Home;
