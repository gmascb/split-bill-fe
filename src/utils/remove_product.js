import axios from "axios";

export const removeProduct = async (props) => {
    try {
        const token = sessionStorage.getItem('Access-Token');
        const id = props.id;
        const data = {
            bill: {
                name: props.name,
                value: props.value,
                userId: props.userId
            }
        }
        const response = await axios.put(`http://localhost:4003/carts/${id}/remove_product`, data, {
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