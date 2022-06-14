import React, {useState} from 'react';

import './App.scss';

function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("")
  const [activity, setActivity] = useState(1.2);
  const [bmr, setBmr] = useState(0)
  const [error, setError] = useState(Boolean);

  const handleSubmit = () => {
    if(weight == 0 || height == 0 || age == 0 || gender == "" ) {
      setError(true);
    }else {
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
    bmrMath!! && setBmr(bmrMath)
    return;
  }

  let tdee = bmr * activity;

  console.log(weight, height, age, gender);
  return (
    <div className="App">
      <h1>Nutrient Calculator</h1>
      <label htmlFor="weight">Weight</label>
      <input type="number" id="weight" onChange={(e) => setWeight(Number(e.target.value))}  /><br />
      <label htmlFor="height">Height</label>
      <input type="number" id="height" onChange={(e) => setHeight(Number(e.target.value))} /><br />
      <label htmlFor="age">Age</label>
      <input type="number" id="age" onChange={(e) => setAge(Number(e.target.value))} /><br />
      <label htmlFor="gender">male</label>
      <input type="radio" id="male" name="gender" onChange={(e) => setGender("male")} />
      <label htmlFor="female">female</label>
      <input type="radio" id="female" name="gender" onChange={(e) => setGender("female")} /><br />
      <label htmlFor="activity-level">Activity Level</label>
      <input type="range" id="activity-level" min="1.2" max="1.725" step="0.13" onChange={(e) => setActivity(Number(e.target.value))} />< br/>
      {error != true && <p>Please fill out all fields.</p>}
      <button type="button" onClick={handleSubmit}>Calculate</button>  

      <p>BMR: {bmr}</p>
      <p>TDEE: {tdee}</p>
      <p>Calories From Protein: {tdee * 0.35}</p>
      <p>Calories From Carbohydrates: {tdee * 0.4}</p>
      <p>Calories From Fat: {tdee * 0.25}</p>

    </div>
  );
}

export default App;
