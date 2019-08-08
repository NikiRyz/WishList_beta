import React from 'react'
import cls from './MyWishList.module.scss'
import Pending from "./PendingWishList/PendingWishlist"
import HeaderMain from "../../containers/HeaderMain";
import Search from "../../containers/Search"



class MyWishList extends React.Component {

    render() {

        return (
            <div>
                < HeaderMain />
                <Search
                    placeholder="Введите название товара"
                    name="main"
                    emoji="em em-heart_eyes"
                    title="Wishlist"
                    emoji1="em em-star2"
                    title1="Популярное"
                    // searchSetQuery={search}
                />
                <div className={cls.wishlist}>
                    < Pending/>
                </div>
            </div>

        )
    }
}

export default MyWishList;

