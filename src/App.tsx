import React, { useState } from "react";
import NutritionChart from "./components/NutritionChart";
import LabeledInput from "./components/LabeledInput";
import Radio from "./components/Radio";
import ActivitySlider from "./components/ActivitySlider";

import "./App.scss";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [lbsOrKg, setLbsOrKg] = useState("");
  const [inOrCm, setInOrCm] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [goal, setGoal] = useState(0);
  const [activity, setActivity] = useState(1.2);
  const [bmr, setBmr] = useState(0);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (weight == 0 || height == 0 || age == 0) {
      setError(true);
    } else {
      if (lbsOrKg === "lbs") {
        setWeight(weight / 2.205);
      }
      if (inOrCm === "in") {
        setHeight(height * 2.54);
      }
      setError(false);
      calcBmr();
    }
  };

  const calcBmr = () => {
    let bmrMath: number;
    if (gender === "male") {
      bmrMath = 10 * weight + 6.25 * height - 5 * age + 5;
    }
    if (gender === "female") {
      bmrMath = 10 * weight + 6.25 * height - 5 * age - 161;
    } else {
      setError(true);
    }
    bmrMath!! && setBmr(Math.round(bmrMath));
    return;
  };

  let tdee = Math.round(bmr * activity);
  let protein = Math.round(tdee * 0.35);
  let carbs = Math.round(tdee * 0.4);
  let fats = Math.round(tdee * 0.25);

  console.log(weight, height);
  return (
    <div className="app-background">
      <div className="container">
        <div className="row">
          <div className="col app-wrapper">
            <h1>Nutrient Calculator</h1>
            <div className="row">
              <div className="col-6">
                <form>
                  <h4>Enter Your Information</h4>
                  <LabeledInput
                    id="weight"
                    labelText="Weight"
                    onChange={(e) => setWeight(Number(e.target.value))}
                  />
                  <div className="d-flex">
                    <Radio
                      id="kg"
                      name="weightRadio"
                      labelText="Kg"
                      onChange={() => setLbsOrKg("kg")}
                    />
                    <Radio
                      id="lb"
                      name="weightRadio"
                      labelText="lb"
                      onChange={() => setLbsOrKg("lbs")}
                    />
                  </div>

                  <LabeledInput
                    id="height"
                    labelText="Height"
                    onChange={(e) => setHeight(Number(e.target.value))}
                  />

                  <div className="d-flex">
                    <Radio
                      id="cm"
                      name="heightRadio"
                      labelText="cm"
                      onChange={() => setInOrCm("cm")}
                    />
                    <Radio
                      id="in"
                      name="heightRadio"
                      labelText="in"
                      onChange={() => setInOrCm("in")}
                    />
                  </div>

                  <LabeledInput
                    id="age"
                    labelText="Age"
                    onChange={(e) => setAge(Number(e.target.value))}
                  />

                  <div className="d-flex">
                    <Radio
                      id="male"
                      name="gender"
                      labelText="Male"
                      onChange={() => setGender("male")}
                    />
                    <Radio
                      id="female"
                      name="gender"
                      labelText="Female"
                      onChange={() => setGender("female")}
                    />
                  </div>

                  <div className="weightGoals">
                    <h4>Weight loss Goals</h4>
                    <div className="d-flex">
                      <Radio
                        id="cut"
                        name="goals"
                        labelText="Cut"
                        onChange={() => setGoal(0.2)}
                      />
                      <Radio
                        id="maintain"
                        name="goals"
                        labelText="Maintain"
                        onChange={() => setGoal(0)}
                      />
                      <Radio
                        id="gain"
                        name="goals"
                        labelText="Gain"
                        onChange={() => setGoal(0.15)}
                      />
                    </div>
                  </div>

                  <p>Activity Level</p>
                  <ActivitySlider
                    onChange={(e) => setActivity(Number(e.target.value))}
                  />

                  {error == true && <p>Please fill out all fields.</p>}
                  <button type="button" onClick={handleSubmit}>
                    Calculate
                  </button>
                </form>
              </div>
              <div className="col-6">
                <p>BMR: {bmr}</p>
                <p>TDEE: {tdee}</p>
                <p>Calories From Protein: {protein}</p>
                <p>Calories From Carbohydrates: {carbs}</p>
                <p>Calories From Fat: {fats}</p>
                <NutritionChart
                  total={tdee}
                  protein={protein}
                  carbs={carbs}
                  fats={fats}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
