import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CarItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if(totalQuantity === 0){
        return (
            <div>
                <h1>No se encuentran Items en el Carrito</h1>
                <Link to ='/' className='Option'>Productos</Link>
            </div>
        )
    }


    return(
        <div>
            {cart.map(p=> <CarItem key = {p.id} {...p}/>)}
            <h3>Total : ${total}</h3>
            <button onClick={()=> clearCart()} className='Button'>Limpiar Carrito</button>
            <Link to ='/checkout' className='Option'>Checkout</Link>
        </div>
    )
}

export default Cart