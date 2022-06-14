import React, {useState} from 'react';
import NutritionChart from './components/NutritionChart';

import './App.scss';

function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [lbsOrKg, setLbsOrKg] = useState("");
  const [inOrCm, setInOrCm] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [goal, setGoal] = useState(0);
  const [activity, setActivity] = useState(1.2);
  const [bmr, setBmr] = useState(0)
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if(weight == 0 || height == 0 || age == 0 || gender == "" ) {
      setError(true);
    }else {
      if(lbsOrKg === "lbs") {
        setWeight(weight / 2.205)
      };
      if (inOrCm === "in") {
        setHeight(height * 2.54)
      };
      setError(false);
      calcBmr();
    }
  }

  const calcBmr= () => {
    let bmrMath: number;
    if(gender === "male") {
       bmrMath = 10 * weight + 6.25 * height - 5 * age + 5;
    }if(gender === "female") {
       bmrMath = 10 * weight + 6.25 * height - 5 * age - 161;
    }else {
      setError(true);
    }
    bmrMath!! && setBmr(Math.round(bmrMath))
    return;
  }

  let tdee = Math.round(bmr * activity);
  let protein = Math.round(tdee * 0.35);
  let carbs = Math.round(tdee * 0.4);
  let fats = Math.round(tdee * 0.25);

  console.log(weight, height);
  return (
    <div className="App">
      <h1>Nutrient Calculator</h1>
      <form>
        <label htmlFor="weight">Weight</label>
        <input type="number" id="weight" onChange={(e) => setWeight(Number(e.target.value))}  /><br />
        <div className="weightRadio">
          <label htmlFor="kg">Kg</label>
          <input type="radio" id="kg" name="weightRadio" onChange={() => setLbsOrKg("kg")} checked />
          <label htmlFor="lb">lb</label>
          <input type="radio" id="lb" name="weightRadio" onChange={() => setLbsOrKg("lbs")} />
        </div>
        <label htmlFor="height">Height</label>
        <input type="number" id="height" onChange={(e) => setHeight(Number(e.target.value))} /><br />
        <div className="heightRadio">
          <label htmlFor="cm">cm</label>
          <input type="radio" id="cm" name="heightRadio" onChange={() => setInOrCm("cm")} checked />
          <label htmlFor="in">in</label>
          <input type="radio" id="in" name="heightRadio" onChange={() => setInOrCm("in")} />
        </div>
        <label htmlFor="age">Age</label>
        <input type="number" id="age" onChange={(e) => setAge(Number(e.target.value))} /><br />

        <div className='genderRadio'>
          <label htmlFor="gender">Male</label>
          <input type="radio" id="male" name="gender" onChange={() => setGender("male")} />
          <label htmlFor="female">Female</label>
          <input type="radio" id="female" name="gender" onChange={() => setGender("female")} /><br />
        </div>

        <div className="weightGoals">
          <p>Weight loss Goals</p>
          <label htmlFor="cut">Cut</label>
          <input type="radio" id="cut" name="goals" onChange={() => setGoal(0.2)} />
          <label htmlFor="maintain">Maintain</label>
          <input type="radio" id="maintain" name="goals" onChange={() => setGoal(0)} checked />
          <label htmlFor="gain">Gain</label>
          <input type="radio" id="gain" name="goals" onChange={() => setGoal(0.15)} />
        </div>

        <label htmlFor="activity-level">Activity Level</label>
        <input type="range" id="activity-level" min="1.2" max="1.725" step="0.13" onChange={(e) => setActivity(Number(e.target.value))} />< br/>

        {error == true && <p>Please fill out all fields.</p>}
        <button type="button" onClick={handleSubmit}>Calculate</button>
      </form>

      <p>BMR: {bmr}</p>
      <p>TDEE: {tdee}</p>
      <p>Calories From Protein: {protein}</p>
      <p>Calories From Carbohydrates: {carbs}</p>
      <p>Calories From Fat: {fats}</p>
      <NutritionChart total={tdee} protein={protein} carbs={carbs} fats={fats} />
    </div>
  );
}

export default App;
