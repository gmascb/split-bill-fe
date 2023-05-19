import axios from "axios";

export const performLogin = async ({email, password}) => {
    try {
        const response = await axios.post('http://localhost:5000/auth', {
            email,
            password
        }, {
            headers: {
                "Content-Type": 'application/json'
            }
        });
        if (response.status !== 200) {
            console.log(response.data);
        }
        sessionStorage.setItem('Access-Token', response?.data);
        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
}