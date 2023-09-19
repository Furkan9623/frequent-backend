import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function Dropdown({
  selectedCity,
  setSelectedCity,
  countryFullName,
  setCountryFullName,
  stateFullName,
  setStateFullName,
}) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  // const [selectedCity, setSelectedCity] = useState("");
  // const [countryFullName, setCountryFullName] = useState("");
  // const [stateFullName, setStateFullName] = useState("");
  // useEffect(() => {
  //   console.log(selectedCountry);
  //   console.log(selectedState);
  //   console.log(selectedCity);
  //   console.log("country", countryFullName);
  //   console.log("state", stateFullName);
  // }, [selectedCountry, selectedState, selectedCity]);

  const handleCountryChange = (event) => {
    const countryCode = event.target.value;
    setSelectedCountry(countryCode);
    const selectedCountry = Country.getCountryByCode(countryCode);
    setCountryFullName(selectedCountry?.name);
    setSelectedState("");
    setSelectedCity("");
  };

  const handleStateChange = (event) => {
    const stateCode = event.target.value;
    const getState = State.getStateByCodeAndCountry(stateCode, selectedCountry);
    setSelectedState(stateCode);
    setStateFullName(getState?.name);
    setSelectedCity("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1vw" }}>
      <FormControl fullWidth sx={{ textAlign: "left" }} size="small">
        <InputLabel>Select Country</InputLabel>
        <Select
          value={selectedCountry}
          onChange={handleCountryChange}
          label="Select Country"
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 300,
              },
            },
          }}
        >
          {Country.getAllCountries().map((country) => (
            <MenuItem key={country.isoCode} value={country.isoCode}>
              {country.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ textAlign: "left" }} size="small">
        <InputLabel>Select State</InputLabel>
        <Select
          label="Select State"
          value={selectedState}
          onChange={handleStateChange}
          disabled={!selectedCountry}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 300,
              },
            },
          }}
        >
          {State.getStatesOfCountry(selectedCountry).map((state) => {
            return (
              <MenuItem key={state.isoCode} value={state.isoCode}>
                {state.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ textAlign: "left" }} size="small">
        <InputLabel>Select City</InputLabel>
        <Select
          label="Select City"
          sx={{ textAlign: "left" }}
          value={selectedCity}
          onChange={(event) => setSelectedCity(event.target.value)}
          disabled={!selectedState}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 300,
              },
            },
          }}
        >
          {City.getCitiesOfState(selectedCountry, selectedState).map((city) => (
            <MenuItem key={city.id} value={city.name}>
              {city.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
