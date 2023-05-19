import axios from "axios";

export const performRegister = async ({name, email, password}) => {
    try {
        const response = await axios.post('http://localhost:4003/users', {
            name,
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
        return response;
    } catch (err) {
        console.log(err);
    }
}