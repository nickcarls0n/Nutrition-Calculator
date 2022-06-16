import React from "react";

import "./Radio.scss";

interface RadioProps {
  id: string;
  name: string;
  value?: string | number;
  labelText: string;
  onChange: (e: any) => void;
  checked?: boolean;
}

const Radio = (props: RadioProps) => {
  return (
    <div className="radio-wrapper">
      <label htmlFor={props.id}>{props.labelText}</label>
      <input
        type="radio"
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        checked={props.checked}
      />
    </div>
  );
};

export default Radio;
