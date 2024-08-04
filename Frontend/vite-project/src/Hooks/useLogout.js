import { useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import React from "react";
import axios from "axios";

const useLogout = () => {
	const [loading, setLoading] = useState(false);
	const { authuser, setAuthUser } = React.useContext(AuthContext);

	const logout = async () => {
		setLoading(true);
		try {
			await axios.post('http://localhost:8000/api/auth/logout', {withCredentials: true});
			localStorage.removeItem("chat-user");
			setAuthUser(null);
            toast.success("Logged out successfully");
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, logout };
};
export default useLogout;