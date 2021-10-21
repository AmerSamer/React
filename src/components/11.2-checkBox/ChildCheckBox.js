import React from "react";

const ChildCheckBox = ({ term, method , defaultChecked}) => {
  return (
    <div>
      <input onClick={() => method(term)} type="checkbox" id={term} name={term} checked={defaultChecked}/>
      <label htmlFor={term}> {term}</label>
    </div>
  );
};

export default ChildCheckBox;
