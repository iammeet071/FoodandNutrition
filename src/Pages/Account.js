import React, { useEffect, useState } from "react";
import { auth, provider } from "../firebase";
import axios from "axios";
import Chart from "react-google-charts";
import "../CSS/Account.css";
const Account = () => {
  const [user, setUser] = useState([]);
  const [morn, setMorn] = useState("");
  const [after, setAfter] = useState("");
  const [night, setNight] = useState("");
  const [diet, setDiet] = useState("");
  const calculate = async () => {
    const res1 = await axios.get(
      `https://api.edamam.com/api/food-database/parser?app_id=6e6c9fbe&app_key=e1656d0de2fb26dcea68c71109e77a49&ingr=${morn}`
    );
    const m1 = res1.data.parsed[0].food.nutrients.ENERC_KCAL;
    const res2 = await axios.get(
      `https://api.edamam.com/api/food-database/parser?app_id=6e6c9fbe&app_key=e1656d0de2fb26dcea68c71109e77a49&ingr=${after}`
    );
    const m2 = res2.data.parsed[0].food.nutrients.ENERC_KCAL;
    const res3 = await axios.get(
      `https://api.edamam.com/api/food-database/parser?app_id=6e6c9fbe&app_key=e1656d0de2fb26dcea68c71109e77a49&ingr=${night}`
    );
    const m3 = res3.data.parsed[0].food.nutrients.ENERC_KCAL;
    console.log(m1, m2, m3);
    const total = m1 + m2 + m3;
    const dis = document.getElementById("totalcal");
    const dis2 = document.getElementById("tip");
    let tip = "";
    switch (diet) {
      case "lose":
        if (total > 1000) {
          let temp = total;
          tip = `You need to Reduce your calorie intake by ${temp - 1000} kcal`;
        } else {
          tip = "Your current Diet is great,Keep going";
        }
        break;

      case "gain":
        if (total < 1000) {
          let temp = total;
          tip = `You need to Increase your calorie intake by ${
            1000 - temp
          } kcal `;
        } else {
          tip = "Your current Diet is great,Keep going";
        }
        break;

      default:
        break;
    }
    dis.innerHTML = `${m1}+${m2}+${m3} = ${m1 + m2 + m3} kcal `;
    dis2.innerHTML = `${tip}`;
    const chart = document.getElementById("pichart");
    console.log(total);
    const per = (total * 100) / 2000;
    chart.innerHTML = `<h3>Daily Goal</h3>
        <div class="progress">
            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${per}%" aria-valuenow="75"
                aria-valuemin="0" aria-valuemax="2000"></div>
        </div>`;
      //   const piechart=document.getElementById('piechart');
      //   piechart.innerHTML=` <Chart
      //   width={"500px"}
      //   height={"300px"}
      //   chartType="PieChart"
      //   loader={<div>Loading Chart</div>}
      //   data={[
      //     ["Nutritients", "Kcal"],
      //     ["Morning", ${(m1*100)/2000}],
      //     ["Afternoon", ${(m2*100)/2000}],
      //     ["Evening", ${(m3*100)/2000}],
      //   ]}
      //   options={{
      //     title: "My Daily Calories",
      //   }}
      //   rootProps={{ "data-testid": "1" }}
      // />`
  };
  const changeVal1 = (e) => {
    setMorn(e.target.value);
  };
  const changeVal2 = (e) => {
    setAfter(e.target.value);
  };
  const changeVal3 = (e) => {
    setNight(e.target.value);
  };
  const changeValdrop = (e) => {
    setDiet(e.target.value);
  };
  useEffect(() => {
    let users = auth.currentUser;
    setUser(users);
  }, []);
  return (
    <section className="user-info">
      <h3>User Info</h3>
      <img src={user.photoURL}></img>
      <p>Name: {user.displayName}</p>
      <p>Email: {user.email}</p>
      <label for="diet">Diet Plan:</label>

      <select name="diet" id="diet" value={diet} onChange={changeValdrop}>
        <option value="lose">Weight Loss</option>
        <option value="maintain">Maintain Weight</option>
        <option value="gain">Gain Weight</option>
      </select>
      <div className="container">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Add Morning Meal / Food Item</span>
            <form action="" className="col">
              <div className="row">
                <div className="input-field col s6">
                  <input
                    type="text"
                    placeHolder="Add Item"
                    value={morn}
                    onChange={changeVal1}
                    className="item-name"
                    required
                    autoComplete="off"
                  />
                  <label for="item-name">Meal</label>
                </div>
              </div>
            </form>
          </div>

          <div className="card-content">
            <span className="card-title">Add Afternoon Meal / Food Item</span>
            <form action="" className="col">
              <div className="row">
                <div className="input-field col s6">
                  <input
                    type="text"
                    placeHolder="Add Item"
                    value={after}
                    onChange={changeVal2}
                    className="item-name"
                    required
                    autoComplete="off"
                  />
                  <label for="item-name">Meal</label>
                </div>
              </div>
            </form>
          </div>

          <div className="card-content">
            <span className="card-title">Add Evening Meal / Food Item</span>
            <form action="" className="col">
              <div className="row">
                <div className="input-field col s6">
                  <input
                    type="text"
                    placeHolder="Add Item"
                    value={night}
                    onChange={changeVal3}
                    className="item-name"
                    required
                    autoComplete="off"
                  />
                  <label for="item-name">Meal</label>
                </div>
              </div>
            </form>
          </div>

          <button onClick={calculate} className="logout">
            Calculate
          </button>
        </div>

        <h4 className="center-align">
          Total Calories :{" "}
          <span id="totalcal" className="total-calories">
            0
          </span>{" "}
          <br />
          Tip :{" "}
          <span id="tip" className="total-calories">
            {" "}
          </span>
        </h4>

        <div className="user-track">
          <h1>My Nutrtition Track.</h1>
          <div id="pichart"></div>
          {/* <div id="piechart">

          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Account;
