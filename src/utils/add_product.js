import axios from "axios";

export const addProduct = async ({id, name, value}) => {
    try {
        const token = sessionStorage.getItem('Access-Token');
        let userId = token ? JSON.parse(atob(token.split('.')[1]))?.id : null;
        const data = {
            bill: {
                name,
                value,
                userId
            }
        }
        const response = await axios.put(`http://localhost:4003/carts/${id}/add_product`, data, {
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