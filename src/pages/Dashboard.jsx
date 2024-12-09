import React, { useEffect, useState } from "react";
import { fetchUserDetails } from "../services/User";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"; // Import useDispatch
import { setUserDetails } from "../store/slices/UserSlice"; // Import the setUser action

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const userDetails  = useSelector((state) => state.auth.user);
  const dispatch = useDispatch(); // Get the dispatch function
  
  useEffect(() => {
    // Get the user ID and token from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    

    if (user && token) {
      fetchUserDetailsInBackground(user.id, token); // Fetch user details
    } else {
      console.error("User or token not found in localStorage");
    }
  }, []);

  /**
   * Fetch user details and store them in localStorage
   * @param {string} userId - The user ID
   * @param {string} token - The access token
   */
  const fetchUserDetailsInBackground = async (userId, token) => {
    try {
      const userProfile = await fetchUserDetails(userId, token);
      dispatch(setUserDetails({ userProfile })); // Dispatch setUser action
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch user details:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome, {userDetails.username}!</h1>
      <p>User details are being fetched and stored in the background.</p>
    </div>
  );
};

export default Dashboard;
