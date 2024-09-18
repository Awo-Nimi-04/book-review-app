import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import redPinImg from "../assets/images/redPinImg.png";
import { BOOKS_INFO } from "../utilities/Data";
import Backdrop from "../components/Backdrop";
import Modal from "../components/Modal";

const ViewBook = () => {
  const clampRef = useRef();
  const [isClamped, setIsClamped] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const { bookId } = useParams();
  const currentBook = BOOKS_INFO.find((book) => String(book.id) === bookId);

  useEffect(() => {
    if (clampRef)
      setIsClamped(
        clampRef.current.scrollHeight > clampRef.current.clientHeight
      );
  }, []);
  const handleReadMore = () => {
    setShowMore(true);
  };
  const handleReadLess = () => {
    setShowMore(false);
  };
  return (
    <>
      {showMore && <Backdrop onClose={handleReadLess} />}
      <Modal
        header={"Review/Comments"}
        message={currentBook.review}
        footer={"Done"}
        show={showMore}
        onCancel={handleReadLess}
      />
      <div className="w-full flex flex-col justify-center items-center space-y-5">
        <div className="bg-white p-5 rounded-xl shadow-2xl mt-7  w-[70%] lg:w-[50%]">
          <header className="text-center text-2xl mb-2 font-sparky">
            {currentBook.title}
          </header>
          <div className="flex flex-col lg:flex-row justify-evenly items-center">
            <div className="w-[50%] p-3 flex flex-col justify-center mb-2 items-center">
              <div className="p-2 rounded-lg w-48 bg-purple-400 shadow-xl">
                <img src={currentBook.bookCover} />
              </div>
            </div>
            <div className="relative z-10 container flex flex-col lg:w-[60%] mt-2 justify-start lg:border-hidden border-t p-3 bg-amber-200 rounded-lg shadow-xl">
              <img
                className="absolute -top-12 -right-8 md:-right-[3rem] md:-top-[3rem] origin-center rotate-[60deg] w-[40%] md:w-[30%] lg:w-[40%]"
                src={redPinImg}
              />
              <p className="font-bold font-portal">ISBN</p>
              <p className="text-sm mb-2"> {currentBook.ISBN}</p>
              <p className="font-bold font-portal">Author</p>
              <p className="text-sm mb-2"> {currentBook.author}</p>
              <p className="font-bold font-portal">Genre</p>
              <p className="text-sm mb-2"> {currentBook.genre}</p>
              <p className="font-bold font-portal">Review/Comments</p>
              <p
                ref={clampRef}
                className="text-sm line-clamp-2 lg:line-clamp-3"
              >
                {currentBook.review}
              </p>
              {isClamped && (
                <p
                  onClick={handleReadMore}
                  className="text-sm text-blue-500 underline cursor-pointer"
                >
                  Read More
                </p>
              )}
            </div>
          </div>
        </div>
        <footer className="p-3 bg-yellow-200 rounded-full text-blue-600 shadow-2xl font-perfect font-bold">
          Posted by: User {currentBook.creatorID}
        </footer>
      </div>
    </>
  );
};

export default ViewBook;
