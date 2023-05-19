import axios from "axios";
import jwtDecode from "jwt-decode";

export const performGoogleLogin = async (googleToken) => {
    try {
        const userObject = jwtDecode(googleToken);
        const {name, email, picture} = userObject;
        const response = await axios.post('http://localhost:5000/auth/google', { user: { name, email, picture} });
        if (response.status !== 200) {
            console.log(response.data);
        }
        sessionStorage.setItem('Access-Token', response?.data);
        return response;
    } catch (err) {
        console.log(err);
    }
}