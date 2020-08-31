import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Input from "../task1_form/FormElements/Input";
import { useHttpClient } from "../hooks/http-hook";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../utils/validator.js";
import Button from "../task1_form/FormElements/Button";
import { useForm } from "../hooks/form-hook";
import DropDown from "../task1_form/FormElements/DropDown";
import CheckBox from "../task1_form/FormElements/CheckBox";
import Loading from "../LoadingDataComponent/Loading";
import ErrorData from "../LoadingDataComponent/ErrorData";

const UpdatePlace = () => {
  const {
    isLoading,
    isError,
    sendRequest,
    clearError,
  } = useHttpClient();
  const [loadedPlace, setLoadedPlace] = useState();
  const placeId = useParams().placeId;
  const placeUpdateHistory = useHistory();

  const [formState, inputHandler, setFormData] = useForm(
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

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/places/${placeId}`
        );
        setLoadedPlace(responseData.place);

        setFormData(
          {
            title: {
              value: responseData.place.title,
              isValid: true,
            },
            description: {
              value: responseData.place.description,
              isValid: true,
            },
            check: {
              value: responseData.place.check,
              isValid: true,
            },
            choice: {
              value: responseData.place.choice,
              isValid: true,
            },
          },
          true
        );
      } catch (err) {}
    };
    fetchPlace();
  }, [sendRequest, placeId, setFormData]);

  const placeUpdateSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/places/${placeId}`,
        "PATCH",
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
          check: formState.inputs.check.value,
          choice: formState.inputs.choice.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      placeUpdateHistory.push("/table");
    } catch (err) {}
  };

  return (
    <React.Fragment>
      {isLoading && <Loading></Loading>}
      {isError && (
        <ErrorData
          onClick={clearError}
          errorMessage={isError}
        ></ErrorData>
      )}
      {!isLoading && loadedPlace && (
        <form
          className='place-form'
          onSubmit={placeUpdateSubmitHandler}
        >
          <Input
            id='title'
            element='input'
            type='text'
            label='Title'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Please Enter a valid Title.'
            onInput={inputHandler}
            initialValue={loadedPlace.title}
            initialValid={true}
          ></Input>

          <Input
            id='description'
            element='textarea'
            type='text'
            label='Description'
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText='Please Enter a valid description (at lest 5 characters).'
            onInput={inputHandler}
            initialValue={loadedPlace.description}
            initialValid={true}
          ></Input>

          <DropDown
            name='choice'
            id='choice'
            label='Division'
            onInput={inputHandler}
            initialValue={loadedPlace.choice}
            initialValid={true}
          ></DropDown>

          <CheckBox
            name='check'
            id='check'
            label='Visited'
            onInput={inputHandler}
            initialValue={loadedPlace.check}
            initialValid={true}
          ></CheckBox>

          <Button
            type='submit'
            disabled={!formState.isValid}
          >
            Update Place
          </Button>
        </form>
      )}
    </React.Fragment>
  );
};

export default UpdatePlace;
