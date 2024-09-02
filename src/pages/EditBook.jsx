import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BOOKS_INFO, BOOK_GENRE } from "../utilities/Data";
import useForm from "../utilities/customHooks/formHook";
import Input from "../components/Input";
import Button from "../components/Button";

const EditBook = () => {
  const { bookId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [formState, handleInputChange, handleSetForm] = useForm(
    {
      title: { value: "", isValid: false },
      author: { value: "", isValid: false },
      genre: { value: "", isValid: false },
      review: { value: "", isValid: false },
    },
    false
  );
  const currentBook = BOOKS_INFO.find((book) => String(book.id) === bookId);
  useEffect(() => {
    if (currentBook) {
      handleSetForm(
        {
          title: { value: currentBook.title, isValid: true },
          author: { value: currentBook.author, isValid: true },
          genre: { value: currentBook.genre, isValid: true },
          review: { value: currentBook.review, isValid: true },
        },
        true
      );
      setIsLoading(false);
    }
  }, [handleSetForm, currentBook]);

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <div className="w-full flex flex flex-col justify-center mt-6 p-2 items-center">
      <form
        className="bg-white border-2 border-blue-700 md:w-[40%] rounded-lg mx-auto p-6 flex flex-col space-y-3"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <span className="my-3" />
        <Input
          id={"title"}
          type={"text"}
          label={"Title"}
          validation={"require"}
          errorText={"This field is required"}
          onInputChange={handleInputChange}
          initialValue={formState.inputs.title.value}
          initialValidity={formState.inputs.title.isValid}
        />
        <span className="my-3" />
        <Input
          id={"author"}
          type={"text"}
          label={"Author"}
          validation={"require"}
          errorText={"This field is required"}
          onInputChange={handleInputChange}
          initialValue={formState.inputs.author.value}
          initialValidity={formState.inputs.author.isValid}
        />
        <span className="my-3" />
        <Input
          id={"genre"}
          type={"select"}
          label={"Genre"}
          validation={"require"}
          errorText={"Please pick a genre"}
          onInputChange={handleInputChange}
          initialValue={formState.inputs.genre.value}
          initialValidity={formState.inputs.genre.isValid}
        >
          {BOOK_GENRE.map((genre, key) => (
            <option key={key}>{genre}</option>
          ))}
          <option>Other</option>
        </Input>
        <span className="my-3" />
        <Input
          id={"review"}
          type={"textarea"}
          label={"Comments"}
          validation={"min_length"}
          errorText={"Please enter a comment (At least 6 characters)"}
          minLength={6}
          onInputChange={handleInputChange}
          initialValue={formState.inputs.review.value}
          initialValidity={formState.inputs.review.isValid}
        />
        <Button
          type={"submit"}
          disabled={!formState.formIsValid}
          styles={
            "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-indigo-800 hover:via-purple-800 hover:to-pink-700 disabled:bg-gradient-to-r w-40 text-white  disabled:from-stone-500 disabled:bg-stone-500 md:text-2xl"
          }
        >
            UPDATE
        </Button>
      </form>
    </div>
  );
};

export default EditBook;
