import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import SingleUserInfo from "./components/singleUserInfo";
import Spinner from "./components/Spinner";
import { useState } from "react";
function App() {
  const [loading, setLoading] = useState(false);
  const loadingStatus = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Navbar loadingStatus={loadingStatus} />
      {/* <Spinner /> */}
      <Routes>
        <Route path="/" element={loading ? <Spinner /> : <UserForm />} />
        <Route
          path="/response/:id"
          element={
            <SingleUserInfo
              loading={loading}
              setLoading={setLoading}
              loadingStatus={loadingStatus}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
