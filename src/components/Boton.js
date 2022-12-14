import React from "react";

const BotonComponent = ({ infoBoton, handleOnClick }) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-primary text-center"
        onClick={() => {
          handleOnClick();
        }}
      >{infoBoton}</button>
    </div>
  );
};

export default BotonComponent;
