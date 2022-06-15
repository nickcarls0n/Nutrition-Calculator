import React from "react";

import "./LabeledInput.scss";

interface LabeledInputProps {
  id: string;
  labelText: string;
  onChange: (e: any) => void;
}

const LabeledInput = (props: LabeledInputProps) => {
  return (
    <div className="label-wrapper">
      <label htmlFor={props.id}>{props.labelText}</label>
      <input type="number" id={props.id} onChange={props.onChange} />
    </div>
  );
};

export default LabeledInput;
