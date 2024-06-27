import React, { useEffect, useState } from "react";
import exp from "./images/imageImport";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import "./gallery.css"; // Make sure to import your CSS file

function Gallery() {
  const [imagesPerRow, setImagesPerRow] = useState(4);
  const [rows, setRows] = useState(4);
  const [page, setPage] = useState(1);
  const [active, setActive] = useState({});
  const [modalImage, setModalImage] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  function ori() {
    if (window.innerWidth < 768) {
      setRows(8);
      setImagesPerRow(2);
    } else {
      setRows(4);
      setImagesPerRow(4);
    }
  }

  useEffect(() => {
    function handleResize() {
      ori();
    }

    function handleLoad() {
      ori();
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  const openModal = (image) => {
    setScrollPosition(window.scrollY);
    setModalImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = "auto";
    window.scrollTo(0, scrollPosition);
  };

  return (
    <div className="gallery-container">
      <div className="flex flex-row justify-start gap-[20px] pb-[30px]">
        <div className="h1">Photo</div>
        <div className="h2">Gallery</div>
      </div>

      <div className="gallery">
        {Object.keys(exp.images).map((imageName, index) => {
          if (
            index >= rows * imagesPerRow * (page - 1) &&
            index < rows * imagesPerRow * page
          )
            return (
              <div className="gallery-item" key={index} onClick={() => openModal(exp.images[imageName])}>
                <img
                  src={exp.images[imageName]}
                  alt={imageName}
                  className="w-full h-full object-cover"
                />
              </div>
            );
        })}
      </div>

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <img src={modalImage} alt="Full view" />
          <button className="modal-close" onClick={closeModal}>
            &times;
          </button>
        </div>
      )}

      <div className="w-full h-max flex flex-row justify-start items-center gap-[30px] ">
        <div className="flex flex-row w-max gap-8 items-center">
          <div className="pagiD">{page < 10 ? `0${page}` : `${page}`}</div>
          <div className="h-[44px] w-[2px] skew-x-[135deg] bg-[#bdbdbd]"></div>
          <div className="pagi">
            {Math.ceil(Object.keys(exp.images).length / (rows * imagesPerRow)) <
            10
              ? `0${Math.ceil(
                  Object.keys(exp.images).length / (rows * imagesPerRow)
                )}`
              : `${Math.ceil(
                  Object.keys(exp.images).length / (rows * imagesPerRow)
                )}`}
          </div>
        </div>
        <div className="flex flex-row justify-start items-center flex-grow">
          <button
            className="w-[53px] h-[53px] border border-[#d4d4d4] hover:bg-[#F9F9F9] an mr-[23px] flex items-center justify-center group"
            onClick={() => {
              setPage((cur) => {
                if (cur <= 1) {
                  return Math.ceil(
                    Object.keys(exp.images).length / (rows * imagesPerRow)
                  );
                }
                return cur - 1;
              });
            }}
          >
            <LuMoveLeft className="text-[#333333] group-hover:-translate-x-1 an" />
          </button>
          <button
            className="w-[53px] h-[53px] border border-[#d4d4d4] hover:bg-[#F9F9F9] an flex items-center justify-center group"
            onClick={() => {
              setPage((cur) => {
                if (
                  cur >=
                  Math.ceil(
                    Object.keys(exp.images).length / (rows * imagesPerRow)
                  )
                ) {
                  return 1;
                }
                return cur + 1;
              });
            }}
          >
            <LuMoveRight className="text-[#333333] group-hover:translate-x-1 an" />
          </button>
          <div className="h-[1px] flex-grow bg-[#d4d4d4]"></div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
