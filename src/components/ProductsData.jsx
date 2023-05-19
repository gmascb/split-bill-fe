import {RemoveProduct} from "./RemoveProduct";

const ProductsData = ({products}) => {

    return (
        <>
            {
                products.map((product) => {
                    const {name, value, userId, userName} = product;

                    return (
                        <tr key={`${name}-${userId}`}>
                            <td>{name}</td>
                            <td>R${value}</td>
                            <td>{userName}</td>
                            <td><RemoveProduct name={name} value={value} userId={userId}/></td>
                        </tr>
                    )
                })
            }
        </>
    )
}
export default ProductsData;