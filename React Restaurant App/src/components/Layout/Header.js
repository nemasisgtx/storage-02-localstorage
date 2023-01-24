import mealsImage from '../../assets/Main Header Img.jpg';
import { Fragment } from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>
                   Super Meals
                </h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
            <img src={mealsImage} alt="meals" />
            </div>
        </Fragment>
    );
}
export default Header;