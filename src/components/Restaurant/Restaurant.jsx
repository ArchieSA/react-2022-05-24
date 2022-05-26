import React from 'react';
import Menu from '../Menu/Menu';
import ListComments from '../ListComments/ListComments';

export const Restaurant = ({ restaurantName, listProducts, listComments }) => {
    return (
        <div>
            {restaurantName || 'unknown restaurant'}

            <Menu listNameProducts = {listProducts}/>

            <ListComments listTextComments = {listComments}/>
        </div>
    );
}