import {Link} from "react-router-dom";

const CartsData = ({carts}) => {

    return (
        <>
            {
                carts.map((cart) => {
                    const {_id, name, products, userIds} = cart;
                    const usersCount = userIds.length || 1;
                    const totalValue = products ? products
                        .map((product) => parseFloat(product.value))
                        .reduce((acc, curr) => acc + curr, 0) : 0;

                    return (
                        <tr key={_id}>
                            <td><Link to={`/cart/${_id}`}>{name}</Link></td>
                            <td><Link to={`/cart/${_id}`}>{usersCount}</Link></td>
                            <td><Link to={`/cart/${_id}`}>{`R$${totalValue}`}</Link></td>
                        </tr>
                    )
                })
            }
        </>
    )
}
export default CartsData;