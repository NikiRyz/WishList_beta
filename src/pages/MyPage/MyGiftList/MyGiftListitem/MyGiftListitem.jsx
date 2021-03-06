import React from 'react'
import propTypes from 'prop-types'
import cls from './MyGiftListitem.module.scss'


class Wishlistitem extends React.Component {
    static propTypes = {
        name: propTypes.string.isRequired,
        price: propTypes.string.isRequired,
        description: propTypes.string.isRequired,
        img: propTypes.string.isRequired,
    };
    onClick = () => {

        this.props.onClick(this.props.key)
    };

    render() {
        return (
            <div className={cls.item}>
                <img src={this.props.img}/>
                <div className={cls.item_name}>{this.props.name}</div>
                <div className={cls.item_price}>{this.props.price}</div>
                <div className={cls.item_description}>{this.props.description}</div>
                <button className={`${cls.item_favorites}`} onClick={this.onClick}>
                    Не подарю <i className="em em-disappointed_relieved"></i>
                </button>
                <div className={cls.item_user} data-tooltip={`Этот подарок для пользователя ${this.props.fio}`}>

                </div>
            </div>
        )
    }
}

export default Wishlistitem