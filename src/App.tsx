import React, { useState } from "react";
import NutritionChart from "./components/NutritionChart";
import LabeledInput from "./components/LabeledInput";
import Radio from "./components/Radio";
import ActivitySlider from "./components/ActivitySlider";

import "./App.scss";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [lbsOrKg, setLbsOrKg] = useState("kg");
  const [inOrCm, setInOrCm] = useState("cm");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [goal, setGoal] = useState(1);
  const [activity, setActivity] = useState(1.2);
  const [bmr, setBmr] = useState(0);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (weight === 0 || height === 0 || age === 0) {
      setError(true);
      return;
    } else {
      setError(false);
      if (lbsOrKg === "lbs") {
        setWeight(weight / 2.205);
      }
      if (inOrCm === "in") {
        setHeight(height * 2.54);
      }

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
    }
    bmrMath!! && setBmr(Math.round(bmrMath));
    return;
  };

  let tdee = Math.round(bmr * activity * goal);
  let protein = Math.round(tdee * 0.35);
  let carbs = Math.round(tdee * 0.4);
  let fats = Math.round(tdee * 0.25);

  return (
    <div className="app-background">
      <div className="container">
        <div className="row">
          <div className="col app-wrapper">
            <h1>Macro Nutrient Calculator</h1>
            <div className="row">
              <div className="col-md-6">
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
                      value="kg"
                      labelText="Kg"
                      onChange={(e) => setLbsOrKg(e.target.value)}
                      checked={lbsOrKg == "kg"}
                    />
                    <Radio
                      id="lb"
                      name="weightRadio"
                      value="lbs"
                      labelText="lb"
                      onChange={(e) => setLbsOrKg(e.target.value)}
                      checked={lbsOrKg == "lbs"}
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
                      value="cm"
                      labelText="cm"
                      onChange={(e) => setInOrCm(e.target.value)}
                      checked={inOrCm == "cm"}
                    />
                    <Radio
                      id="in"
                      name="heightRadio"
                      value="in"
                      labelText="in"
                      onChange={(e) => setInOrCm(e.target.value)}
                      checked={inOrCm == "in"}
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
                      value="male"
                      labelText="Male"
                      onChange={(e) => setGender(e.target.value)}
                      checked={gender == "male"}
                    />
                    <Radio
                      id="female"
                      name="gender"
                      value="female"
                      labelText="Female"
                      onChange={(e) => setGender(e.target.value)}
                      checked={gender == "female"}
                    />
                  </div>

                  <div className="weightGoals">
                    <h4>Weight loss Goals</h4>
                    <div className="d-flex">
                      <Radio
                        id="cut"
                        name="goals"
                        value={0.8}
                        labelText="Cut"
                        onChange={(e) => setGoal(e.target.value)}
                        checked={goal == 0.8}
                      />
                      <Radio
                        id="maintain"
                        name="goals"
                        value={1}
                        labelText="Maintain"
                        onChange={(e) => setGoal(e.target.value)}
                        checked={goal == 1}
                      />
                      <Radio
                        id="gain"
                        name="goals"
                        value={1.15}
                        labelText="Gain"
                        onChange={(e) => setGoal(e.target.value)}
                        checked={goal == 1.15}
                      />
                    </div>
                  </div>

                  <p>
                    <span>Activity Level</span>
                  </p>
                  <ActivitySlider
                    onChange={(e) => setActivity(Number(e.target.value))}
                  />

                  {error == true && (
                    <p className="error">* Please fill out all fields.</p>
                  )}
                  <button type="button" onClick={handleSubmit}>
                    Calculate
                  </button>
                </form>
              </div>

              <div className="col-md-6">
                <p>
                  <span>BMR:</span> {bmr}
                </p>
                <p>
                  <span>TDEE:</span> {tdee}
                </p>
                <p>
                  <span>Calories From Protein:</span> {protein}
                </p>
                <p>
                  <span>Calories From Carbohydrates:</span> {carbs}
                </p>
                <p>
                  <span>Calories From Fat:</span> {fats}
                </p>
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
