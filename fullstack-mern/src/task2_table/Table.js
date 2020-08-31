import React from "react";
import "./Table.css";
import Button from "../task1_form/FormElements/Button";
const Table = ({ places, loading }) => {
  return (
    <React.Fragment>
      {loading && <span>Loading....</span>}
      {!loading && places && (
        <div className='table'>
          <table>
            <tbody>
              <tr>
                <td>Image</td>
                <td>ID</td>
                <td>Title</td>
                <td>Description</td>
                <td>Visited</td>
                <td>Division</td>
                <td>Update</td>
              </tr>
              {places.map((place) => (
                <tr key={place.id} className='table__col'>
                  <td className='table__row'>
                    <img
                      key={place.id}
                      alt='item'
                      className='table__image'
                      src={`${process.env.REACT_APP_ASSET_URL}/${place.image}`}
                    ></img>
                  </td>
                  <td>{place.id}</td>
                  <td>{place.title}</td>
                  <td>{place.description}</td>
                  <td>{place.check}</td>
                  <td>{place.choice}</td>
                  <td>
                    <Button to={`/places/${place.id}`}>
                      EDIT
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </React.Fragment>
  );
};

export default Table;
