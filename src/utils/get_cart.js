import axios from "axios";

export const getCart = async (id) => {
    try {
        const token = sessionStorage.getItem('Access-Token');
        const response = await axios.get(`http://localhost:4003/carts/${id}`, {
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        if (response.status !== 200) {
            console.log(response.data);
        }
        return response?.data;
    } catch (err) {
        console.log(err);
    }
}