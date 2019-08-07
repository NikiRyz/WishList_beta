import React from 'react'
import PropTypes from 'prop-types'
import cls from './Wishlistitem.module.scss'


class Wishlistitem extends React.Component {

    static propTypes = {
        img_url: PropTypes.string,
        product_name: PropTypes.string,
        price: PropTypes.number,

    };

    render() {
        const {img_url, product_name, price, addToWish} = this.props;

        return (
            < div className={cls.item} >
                    <img src={img_url} alt="wishlist_item"/>
                    <div className={cls.item_title}>{product_name}</div>
                    <div className={cls.item_price}>{`${price} ₽`}</div>

                    <button className={cls.item_favorites} onClick={addToWish.bind(this, this.props)}>
                        Добавить в избранное
                    </button>
             </div>
        )
    }
}

export default Wishlistitem;