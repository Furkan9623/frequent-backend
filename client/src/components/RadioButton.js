import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function RadioButton({ gender, setGender }) {
  //   const [gender, setGender] = useState("");
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div style={{ marginTop: "-2.8vw" }}>
      <RadioGroup
        name="gender"
        value={gender}
        onChange={handleGenderChange}
        required
      >
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
      </RadioGroup>
    </div>
  );
}

export default RadioButton;
