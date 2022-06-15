import React from "react";

import "./ActivitySlider.scss";

interface ActivitySliderProps {
  onChange: (e: any) => void;
}

const ActivitySlider = (props: ActivitySliderProps) => {
  return (
    <div className="slider-wrapper">
      <label htmlFor="activity-level">Sedentary</label>
      <label className="float-end" htmlFor="activity-level">
        Very Active
      </label>
      <input
        type="range"
        id="activity-level"
        min="1.2"
        max="1.725"
        step="0.13"
        onChange={props.onChange}
      />
    </div>
  );
};

export default ActivitySlider;
