import React, { useState } from "react";
const CheckBox = (props) => {
  const [state, setState] = useState(false);
  const [recommended, setIsRecommended] = useState(
    "Visited"
  );

  const handleChange = ({ target }) => {
    setState(target?.checked);
    if (!target?.checked) {
      setIsRecommended("Visited");
    } else {
      setIsRecommended("Not Visited");
    }
    props.onInput(props.id, recommended, true);
  };

  return (
    <div>
      {props.label} :{" "}
      <input
        name='check'
        type='checkbox'
        checked={state}
        onChange={handleChange}
      />
    </div>
  );
};
export default CheckBox;
