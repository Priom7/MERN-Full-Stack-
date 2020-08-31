import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../hooks/http-hook";
import Table from "../Table";
import Pagination from "../Pagination/Pagination";
import Loading from "../../LoadingDataComponent/Loading";
import ErrorData from "../../LoadingDataComponent/ErrorData";

function Data() {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [placePerPage] = useState(5);
  const {
    isLoading,
    isError,
    sendRequest,
    clearError,
  } = useHttpClient();
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/places`
        );

        setLoadedPlaces(responseData.places);
      } catch (err) {}
    };
    fetchPlaces();
  }, [sendRequest]);

  if (!isLoading && loadedPlaces) {
    const indexOfLastPlace = currentPage * placePerPage;
    const indexOfFirstPlace =
      indexOfLastPlace - placePerPage;
    var currentPlaces = loadedPlaces.slice(
      indexOfFirstPlace,
      indexOfLastPlace
    );
  }

  //Change page

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      {loadedPlaces.length === 0 && (
        <span>No Data Available</span>
      )}
      {isLoading && <Loading></Loading>}
      {isError && (
        <ErrorData
          onClick={clearError}
          errorMessage={isError}
        ></ErrorData>
      )}
      {!isLoading && loadedPlaces && (
        <>
          <Pagination
            placesPerPage={placePerPage}
            totalPlaces={loadedPlaces.length}
            paginate={paginate}
          ></Pagination>

          <Table
            places={currentPlaces}
            loading={isLoading}
          ></Table>
        </>
      )}
    </div>
  );
}

export default Data;
