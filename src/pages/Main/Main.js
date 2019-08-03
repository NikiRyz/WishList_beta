import React from 'react';
import HeaderMain from "../../containers/HeaderMain";
import Search from "../../containers/Search"
import WishlistMain from "../../containers/WishListMain"



class WishList extends React.Component {
    render() {
        return (
            <div>
                < HeaderMain />
                <Search
                    placeholder="Введите название товара"
                    name="main"
                    emoji="em em-star-struck"
                    title="Wishlist"
                    // searchSetQuery={search}
                />
                <WishlistMain/>

            </div>
        );
    }
}

export default WishList