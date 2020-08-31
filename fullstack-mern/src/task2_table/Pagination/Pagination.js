import React from "react";
import "./Pagination.css";
import Button from "../../task1_form/FormElements/Button";
const Pagination = ({
  placesPerPage,
  totalPlaces,
  paginate,
}) => {
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(totalPlaces / placesPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  return (
    <nav className='pagination'>
      <ul className='pagination__ul'>
        {pageNumbers.map((num) => (
          <li key={num} className='pagination__item'>
            <Button
              onClick={() => paginate(num)}
              className='pagination__link'
            >
              {num}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
