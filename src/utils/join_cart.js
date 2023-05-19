import axios from "axios";

export const performJoinCart = async (id) => {
    try {
        const token = sessionStorage.getItem('Access-Token');
        let userId = token ? JSON.parse(atob(token.split('.')[1]))?.id : null;
        const response = await axios.put(`http://localhost:4003/carts/${id}`, { userId }, {
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${token}`
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