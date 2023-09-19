import { TextField, Box, Typography } from "@mui/material";
import React, { useState } from "react";

function AgeCalculator({ age, setAge, selectedDate, setSelectedDate }) {
  const calculateAge = (dateString) => {
    const birthDate = new Date(dateString);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = Math.floor(
      ageInMilliseconds / (365 * 24 * 60 * 60 * 1000)
    );
    return ageInYears;
  };

  const checkAgeOlder14Years = (dateString) => {
    const birthDate = new Date(dateString);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = Math.floor(
      ageInMilliseconds / (365 * 24 * 60 * 60 * 1000)
    );
    return ageInYears >= 14;
  };
  const [dateError, setDateError] = useState("");
  const handleDateChange = (event) => {
    const dateValue = event.target.value;
    if (checkAgeOlder14Years(dateValue)) {
      setSelectedDate(dateValue);
      const age = calculateAge(dateValue);
      setAge(age);
      setDateError("");
    } else {
      setSelectedDate("");
      setAge("");
      setDateError("Date must be older than 14 years");
    }
  };

  const handleAgeChange = (event) => {
    const ageValue = event.target.value;
    if (ageValue >= 0) {
      setAge(ageValue);
    } else {
      setAge("");
    }
  };

  return (
    <Box style={{ display: "flex", flexDirection: "column", gap: "1vw" }}>
      <TextField
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        fullWidth
        size="small"
        error={!!dateError}
        helperText={dateError}
      />
      <TextField
        type="number"
        label="Enter Age"
        value={age}
        size="small"
        onChange={handleAgeChange}
        fullWidth
        inputProps={{ min: 0 }}
      />
    </Box>
  );
}

export default AgeCalculator;
