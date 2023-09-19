import { TextField, Box } from "@mui/material";
import Dropdown from "./DropDown";

const UserForm = () => {
  return (
    <Box sx={{ width: "30%", margin: "auto" }}>
      <form>
        <TextField />
        <TextField />
        <TextField />
        <Dropdown />;
      </form>
    </Box>
  );
};

export default UserForm;
