import axios from "axios";

export const getCartsList = async () => {
    try {
        const token = sessionStorage.getItem('Access-Token');
        let id = token ? JSON.parse(atob(token.split('.')[1]))?.id : null;
        const response = await axios.get(`http://localhost:4003/carts?userId=${id}`, {
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        if (response.status !== 200) {
            console.log(response.data);
        }
        return response?.data || [];
    } catch (err) {
        console.log(err);
    }
}