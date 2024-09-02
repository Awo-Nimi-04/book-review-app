import React, { useState, useContext } from "react";
import Button from "./Button";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { Link } from "react-router-dom";
import { PageContext } from "../context/Context";

const BookCard = ({ id, title, author, BookImg }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { isAuthUser } = useContext(PageContext);
  const [showModal, setShowModal] = useState(false);

  function handleDelete() {
    setShowModal(true);
  }

  function handleCancel() {
    setShowModal(false);
  }
  return (
    <>
      {showModal && <Backdrop onClose={handleCancel} />}
      <Modal
        show={showModal}
        onCancel={handleCancel}
        header={"Are you sure?"}
        message={"Are you sure you want to delete this?"}
        footer={"CancelConfirm"}
      />
      <div className="bg-white flex flex-col items-center rounded-lg shadow-2xl w-[50%] mr-auto ml-auto pt-4 mb-8">
        <header className="font-sparky text-center text-xl p-1 mt-2">
          {title}
        </header>
        <p className="text-[11px] font-paris font-bold mb-2">by {author}</p>
        <div className="w-32 md:w-48  shadow-sm">
          <img src={BookImg} alt="Picture of a place" />
        </div>
        <div className="w-full flex justify-between p-5 border-t-2  border-blue-500 mt-3">
          <Link
            to={`/book/${id}`}
            className={
              "p-1 text-center rounded-lg mx-auto font-sunshine bg-fuchsia-500 shadow-xl hover:bg-fuchsia-800 text-md md:w-20 md:text-2xl text-white"
            }
          >
            VIEW
          </Link>
          {isAuthUser && (
            <>
              <Link
                to={`/edit-book/${id}`}
                className={
                  "p-1 text-center rounded-lg mx-auto font-sunshine bg-orange-300 shadow-xl hover:bg-amber-500 text-md md:w-20 md:text-2xl text-white"
                }
              >
                EDIT
              </Link>
              <Button
                styles={
                  "bg-red-500 shadow-xl hover:bg-red-900 text-md md:w-20 md:text-2xl text-white "
                }
                onClick={handleDelete}
              >
                DELETE
              </Button>
              <button
                onClick={() => setIsLiked((prevState) => !prevState)}
                className={`${
                  isLiked ? "text-rose-400" : "text-white"
                } w-8 ${isLiked ? "hover:text-rose-800" : "hover:text-rose-400"}`}
              >
                <svg
                  stroke={"#000000"}
                  strokeWidth={"20px"}
                  fill="currentColor"
                  fillRule="evenodd"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="-10 -28 510 510"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M340.756,0c-41.496,0-79.589,20.999-104.448,56.875C211.448,20.999,173.355,0,131.954,0C59.171,0,0,65.444,0,145.862
			c0,51.885,22.496,187.107,231.109,323.363l5.199,3.39l5.199-3.39c208.612-136.257,231.109-271.478,231.109-323.363
			C472.615,65.444,413.444,0,340.756,0z"
                      />
                    </g>
                  </g>
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default BookCard;
