import axios from "axios";

export const getBalance = async () => {
    try {
        const token = sessionStorage.getItem('Access-Token');
        let id = token ? JSON.parse(atob(token.split('.')[1]))?.id : null;
        const response = await axios.get(`http://localhost:4003/carts/balance?userId=${id}`, {
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        if (response.status !== 200) {
            console.log(response.data);
        }
        return response?.data?.total || 0;
    } catch (err) {
        console.log(err);
    }
}