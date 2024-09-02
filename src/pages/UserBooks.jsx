import React, { useEffect, useRef, useState, } from "react";
import { useParams } from "react-router-dom";
import BookCard from "../components/BookCard";
import { BOOKS_INFO } from "../utilities/Data";

const UserBooks = () => {
  const { uid } = useParams();
  const displayedPlaces = BOOKS_INFO.filter(
    (book) => String(book.creatorID) === uid
  );

  return displayedPlaces.length > 0 ? (
    <div className="mt-8 p-4">
      {displayedPlaces.map((book, index) => {
        return <BookCard key={index} id={book.id} author={book.author} title={book.title} BookImg={book.bookCover}/>;
      })}
    </div>
  ) : (
    <p className="text-center">Loading ...</p>
  );
};

export default UserBooks;
