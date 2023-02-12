import React from 'react';
import s from './style.module.scss';
import placeholder from '../../../assets/images/catalogItemPlaceholder.png'
import {Link} from "react-router-dom";

const CatalogItem = () => {
    return (
        <div className={s.catalogItemContainer}>
            <div className={s.imageContainer}>
                <img src={placeholder} alt=""/>
            </div>
            <Link to={'/product'}>
                <div className={s.catalogItemDescription}>
                    <p className={s.catalogItemName}>Худи HUGO Regular Fit</p>
                    <p className={s.catalogItemPrice}>14 000 рублей</p>
                </div>
            </Link>
        </div>
    );
};

export default CatalogItem;
