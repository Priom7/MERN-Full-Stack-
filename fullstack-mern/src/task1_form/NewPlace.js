import React from "react";
import { useHistory } from "react-router-dom";
import Input from "./FormElements/Input";
import { useForm } from "../hooks/form-hook";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../utils/validator.js";
import { useHttpClient } from "../hooks/http-hook";
import ImageUpload from "./FormElements/ImageUpload";
import DropDown from "./FormElements/DropDown";
import CheckBox from "./FormElements/CheckBox";
import Button from "./FormElements/Button";
import "./NewPlace.css";
import Loading from "../LoadingDataComponent/Loading";
import ErrorData from "../LoadingDataComponent/ErrorData";
const NewPlace = () => {
  const {
    isLoading,
    isError,
    clearError,
  } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },

      description: {
        value: "",
        isValid: false,
      },

      choice: {
        value: "Dhaka",
        isValid: true,
      },
      check: {
        value: "Not Visited",
        isValid: true,
      },
      image: {
        value: null,
        isValid: false,
      },
    },
    false
  );

  const createHistory = useHistory();

  const placeSubmitHandler = async (event) => {
    event.preventDefault();
    // send data to

    try {
      let formData = new FormData();
      formData.append(
        "title",
        formState.inputs.title.value
      );
      formData.append(
        "description",
        formState.inputs.description.value
      );
      formData.append(
        "check",
        formState.inputs.check.value
      );
      formData.append(
        "choice",
        formState.inputs.choice.value
      );
      formData.append(
        "image",
        formState.inputs.image.value
      );

      let response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/places`,
        {
          method: "POST",
          body: formData,
        }
      );
      console.log(response);
      createHistory.push("/table");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {isLoading && <Loading></Loading>}
      {isError && (
        <ErrorData
          onClick={clearError}
          errorMessage={isError}
        ></ErrorData>
      )}
      <form
        className='place-form'
        onSubmit={placeSubmitHandler}
        id='form'
      >
        <Input
          id='title'
          name='title'
          element='input'
          type='text'
          label='Place Title'
          validators={[VALIDATOR_REQUIRE()]}
          errorText='Please Enter a valid Title. (Required)'
          onInput={inputHandler}
        ></Input>

        <Input
          id='description'
          name='description'
          element='textarea'
          type='text'
          label='Place Description'
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText='Please Enter a valid description (at lest 5 characters).'
          onInput={inputHandler}
        ></Input>

        <DropDown
          name='choice'
          id='choice'
          label='Division'
          onInput={inputHandler}
        ></DropDown>

        <CheckBox
          name='check'
          id='check'
          label='Visited'
          onInput={inputHandler}
        ></CheckBox>

        <ImageUpload
          center
          name='image'
          id='image'
          onInput={inputHandler}
          errorText='Please provide an image...'
        ></ImageUpload>

        <Button type='submit' disabled={!formState.isValid}>
          Add Place
        </Button>
      </form>
    </>
  );
};

export default NewPlace;
