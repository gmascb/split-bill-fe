import axios from "axios";

export const postCart = async (name) => {
    try {
        const token = sessionStorage.getItem('Access-Token');
        let id = token ? JSON.parse(atob(token.split('.')[1]))?.id : null;
        const response = await axios.post('http://localhost:4003/carts', {
            name,
            userId: id
        }, {
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        if (response.status !== 201) {
            console.log(response.data);
        }
        return response;
    } catch (err) {
        console.log(err);
    }
}