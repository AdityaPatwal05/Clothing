import React from 'react';

import Shop_Data from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections: Shop_Data
        };
    }

    render() {
        const { collections } = this.state;
        return (
            <div className= 'shop-page'>
                {
                    collections.map(collection => (
                        <CollectionPreview key={collection.id} title = {collection.title} items = {collection.items} />
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;