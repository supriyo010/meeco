import React from "react";
import Block1 from "./home/Block1";
import Block2 from "./home/Block2";
import Block3 from "./home/Block3";
import Block4 from "./home/Block4";
import Block5 from "./home/Block5";
import Carousel from "./Carousel";

import Service from "./Service"; // Note: The `Service` component is imported but not used. You may remove this line if it's unnecessary.
import ChatBot from "react-chatbotify";

const steps = [
  {
    id: '0',
    message: 'hey',
    end: true
  }
];

function Home({ scrollToTop }) {
  return (
    <div
      className="px-[130px] w-full h-max max-[1080px]:px-[20px]"
      style={{
        background: 'linear-gradient(135deg, #5D3FD3, #B19CD9, #ADD8E6, black)',
        minHeight: '100vh' // Ensure the background covers the full viewport height
      }}
    >
      <Carousel scrollToTop={scrollToTop} />
      <Block1 scrollToTop={scrollToTop} />
      <Block2 scrollToTop={scrollToTop} />
      <Block3 />
      <Block4 scrollToTop={scrollToTop} />
      <div>
        <ChatBot steps={steps} />
      </div>
      <Block5 />

    </div>
  );
}

export default Home;
