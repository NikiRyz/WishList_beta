import React from 'react'
import propTypes from 'prop-types'
import cls from './Wishlistitem.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGift} from "@fortawesome/free-solid-svg-icons/faGift";

class Wishlistitem extends React.Component {
    static propTypes = {
        name: propTypes.string.isRequired,
        price: propTypes.string.isRequired,
        description: propTypes.string.isRequired,
        img: propTypes.object.isRequired,
    }
    onClick = () => {

        this.props.onClick(this.props.key)
    };

    render() {
        return (
            <div className={cls.item}>
                <img src={this.props.img} alt="wishlist_item"/>
                <div className={cls.item_name}>{this.props.name}

                </div>
                <div className={cls.item_price}>{this.props.price}</div>
                <div className={cls.item_description}>{this.props.description}</div>
                <button  data-tooltip="Добавить в избранное" className={`${cls.item_favorites}`} onClick={this.onClick}>
                    В избранное
                </button>

            </div>
        )
    }
}

export default Wishlistitem