import React from 'react';

import SHOP_DATA from './shop.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collectons: SHOP_DATA
        }
    }


    render() {
        const {collectons} = this.state;
        return (
            <div className='shop-page'>
               {
                   collectons.map(({ id, ...otherCollectionProps }) => (
                       <CollectionPreview key={id} {...otherCollectionProps} />
                   ))
               }
            </div>
        )
    }
}


export default ShopPage;