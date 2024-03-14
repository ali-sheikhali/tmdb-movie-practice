import React, { useState } from "react";
import Sign from "../components/login&sign/Sign";
import Login from "../components/login&sign/Login";

function LoginSignin() {
  const [showLogin, setShowLogin] = useState(false);
  const handleToggle = () => {
    setShowLogin(!showLogin);
  };
  return (
    <div className="fade-animation">
      <div>
        {showLogin ? (
          <Login toggle={handleToggle} />
        ) : (
          <Sign toggle={handleToggle} />
        )}
      </div>
    </div>
  );
}

export default LoginSignin;
