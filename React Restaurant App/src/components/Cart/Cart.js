import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart=(props)=>{

    const cartItems = 
    return(
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={onClose}>Close</button>
            </div>
        </Modal>
    );
}
export default Cart;