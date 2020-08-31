import React from "react";

function ErrorData({ errorMessage }) {
  return (
    <div>
      <span>Error : {errorMessage}</span>
    </div>
  );
}

export default ErrorData;
