import axios from "axios";
import React, { useState } from "react";
import { weatherKey } from "../helper/const";

function WeatherMain() {
  const [searchValue, SetSearchValue] = useState("");
  const [data, SetData] = useState("");

  const onSearchClickHandler = () => {
    if (searchValue) {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${weatherKey}`
        )
        .then(function (response) {
          // handle success
          console.log(response);
          SetData(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    } else {
      alert("Search Value cannot be Empty");
    }
  };
  return (
    <div>
      <form class="form-inline d-flex justify-content-center md-form form-sm mt-0">
        <i class="fas fa-search" aria-hidden="true"></i>
        <input
          class="form-control form-control-sm ml-3 w-75"
          type="text"
          placeholder="Search"
          aria-label="Search"
          value={searchValue}
          onChange={(e) => {
            SetSearchValue(e.target.value);
          }}
        />
         <button
        type="button"
        class="btn btn-primary"
        onClick={() => onSearchClickHandler()}
      >
        Get Current Weather
      </button>
      </form>
     
     {data&& <div class="card" style={{ width: "18rem" }}>
        <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{data.name}</h5>
          <p class="card-text">
           Main:{data.weather[0].main}
          </p>
          <p class="card-text">
          Description:{data.weather[0].description}

          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>}
    </div>
  );
}

export default WeatherMain;
