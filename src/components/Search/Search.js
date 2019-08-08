import React from 'react';
import { DebounceInput } from 'react-debounce-input';
import propTypes from 'prop-types';
import main from './SearchMain.module.scss';
import friends from './FriendsSearch.module.scss';



const Search = ({
                    placeholder,
                    searchQuery,
                    title,
                    emoji,
                    name,
                    title1,
                    emoji1,
                    searchSetQuery,
                }) => {
    let cls;
    if (name === 'friends') {
        cls = friends;
    } else {
        cls = main;
    }
    return (
        <div className={cls.container}>
            <div className={cls.container_title}>
                {title}
                <i className={`${emoji}`} />
            </div>
            <DebounceInput
                type="text"
                placeholder={placeholder}
                className={cls.container_input}
                onChange={e => {
                    searchSetQuery(e.target.value);
                }}
                value={searchQuery}
                minLength={1}
                debounceTimeout={300}
            />
            <div className={cls.container_title1}>
                {title1}
                <i className={`${emoji1}`} />
            </div>
        </div>
    );
};

Search.defaultProps = {
    searchSetQuery: () => {},
};

Search.propTypes = {
    placeholder: propTypes.string.isRequired,
    searchQuery: propTypes.string,
    title: propTypes.string.isRequired,
    emoji: propTypes.string.isRequired,
    title1: propTypes.string.isRequired,
    emoji1: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    searchSetQuery: propTypes.func.isRequired,
};

export default Search;