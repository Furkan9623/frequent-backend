import { TextField, Box, Button, Typography } from "@mui/material";
import Dropdown from "./DropDown";
import AgeCalculator from "./AgeCalculate";
import RadioButton from "./RadioButton";
import { useState } from "react";
import { ADD_USER_INFO } from "../Api/user-api";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [countryFullName, setCountryFullName] = useState("");
  const [stateFullName, setStateFullName] = useState("");
  const [gender, setGender] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [age, setAge] = useState("");
  const [formInput, setFormInput] = useState({
    first: "",
    last: "",
    email: "",
  });
  const [file, setFiles] = useState("");
  const AlphaCheck = /^[A-Za-z]+$/;
  const EmailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const handleChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  let obj = {
    ...formInput,
    country: countryFullName,
    states: stateFullName,
    city: selectedCity,
    DOB: selectedDate,
    Usergender: gender,
    Userage: age,
  };
  const {
    first,
    last,
    email,
    country,
    states,
    city,
    DOB,
    Usergender,
    Userage,
  } = obj;
  // create form
  const formData = new FormData();
  formData.append("UserImage", file);
  formData.append("User", JSON.stringify(obj));
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (
      !first ||
      !last ||
      !email ||
      !Usergender ||
      !country ||
      !states ||
      !city ||
      !DOB ||
      !Userage
    )
      return alert("Please fill all the details");
    const errors = [];
    if (!Usergender) {
      errors.push("Please select gender");
    }
    if (!AlphaCheck.test(first)) {
      errors.push("First name should be alphabets");
    }
    if (!AlphaCheck.test(last)) {
      errors.push("Last name should be alphabets");
    }
    if (!EmailCheck.test(email)) {
      errors.push("Email is not in a correct format");
    }
    if (!country) {
      errors.push("Please select country");
    }
    if (!states) {
      errors.push("Please select states");
    }
    if (!city) {
      errors.push("Please select city");
    }
    if (!DOB) {
      errors.push("Please select DOB");
    }
    if (Userage < 14) {
      errors.push("Age must be older than 14 years");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    const result = await ADD_USER_INFO(formData);
    console.log(result);
    const error = result?.response?.data?.message;

    return result?.status === 200
      ? (setFormInput(""),
        alert("user added successfull"),
        navigate(`/response/${result?.data?.addUser?._id}`))
      : alert(error);
  };
  return (
    <Box
      sx={{
        width: "30%",
        margin: "auto",
        boxShadow: "0 0 3px grey",
        padding: "2vw",
      }}
      className="box"
    >
      <form
        onSubmit={handleFormSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1vw" }}
      >
        <Typography variant="h5">ADD USER INFORMATION</Typography>
        <TextField
          fullWidth
          label="Enter first name"
          name="first"
          size="small"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Enter last name"
          name="last"
          size="small"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Enter Email"
          name="email"
          size="small"
          onChange={handleChange}
        />
        <Dropdown
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          countryFullName={countryFullName}
          setCountryFullName={setCountryFullName}
          setStateFullName={setStateFullName}
        />
        ;
        <RadioButton setGender={setGender} />
        <AgeCalculator
          age={age}
          setAge={setAge}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <TextField
          type="file"
          fullWidth
          size="small"
          onChange={(e) => setFiles(e.target.files[0])}
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
        >
          SUBMIT
        </Button>
      </form>
    </Box>
  );
};

export default UserForm;
