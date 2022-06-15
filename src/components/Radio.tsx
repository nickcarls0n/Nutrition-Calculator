import React from "react";

import "./Radio.scss";

interface RadioProps {
  id: string;
  name: string;
  labelText: string;
  onChange: (e: any) => void;
}

const Radio = (props: RadioProps) => {
  return (
    <div className="radio-wrapper">
      <label htmlFor={props.id}>{props.labelText}</label>
      <input
        type="radio"
        id={props.id}
        name={props.name}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Radio;
