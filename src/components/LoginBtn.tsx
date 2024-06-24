"use client";

import { useState } from "react";
import { useAuth } from "@/components/AuthContext";

interface LoginBtnProps {
  textSize: string;
}

export default function LoginBtn({ textSize }: LoginBtnProps) {
  const [showForm, setShowForm] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false);
  const { isLoggedIn, login, logout } = useAuth();

  const handleButtonClick = () => {
    if (isLoggedIn) {
      logout();
    } else {
      setShowForm(!showForm);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = { username, password };

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        if (result.message === "Login successful" || result.success) {
          console.log("Login successful", result);
          setShowForm(false);
          setIsPasswordIncorrect(false);
          login(username); // Pass the username to the login function
        }
      } else if (
        response.status === 401 &&
        result.error === "Incorrect password"
      ) {
        console.error("Incorrect password");
        setIsPasswordIncorrect(true);
      } else {
        console.error("Error:", result.error);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <>
      <button
        id="joinButton"
        className={`bg-[#00FF57] rounded-lg text-black p-0.5 font-bebas px-2 ${textSize}`}
        onClick={handleButtonClick}
      >
        {isLoggedIn ? "LOG OUT" : "JOIN NOW"}
      </button>
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className=" p-8 border border-[#00FF57] border-opacity-25 rounded-lg shadow-lg z-50 bg-[#17181C]">
            <h2 className="text-white text-2xl mb-4">Sign Up / Login</h2>
            <form onSubmit={handleSubmit} className="">
              <div className="mb-4">
                <label
                  className="block text-[#00FF57] text-sm  mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="font-Oswald font-bold shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  maxLength={15}
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="text-[#00FF57] block  text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className={`font-Oswald font-bold shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    isPasswordIncorrect ? "border-red-500" : ""
                  }`}
                  id="password"
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {isPasswordIncorrect && (
                  <p className="text-red-500 text-xs italic">
                    Incorrect password. Please try again.
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-[#00FF57] hover:bg-green-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign Up / Login
                </button>
                <button
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  onClick={() => setShowForm(false)}
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
