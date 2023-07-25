import Filter from "../components/Filter/Filter";
import ShopCard from "../components/shopCard/Shopcard";
import { cards } from "../helpers/shopCardsList";
import React from "react";

const Shop = ({item, type, onClickType, avi, onClickAvi, size, onClickSize, collection, onClickCol}) => {

    return ( 
        <main className="main">
            <div className="wrapper">

                <div className="big_rect obj-margin-t">
                      <h1 className="block_name">&lt;mental health&gt;</h1>
                      <div className="link_group">
                          <p className="description">новая коллекция прямо из самых темных мест твоего сознания</p>                      </div>
                </div>

                <Filter 
                    type={type}
                    onClickType = {onClickType}
                    avi={avi}
                    onClickAvi = {onClickAvi}
                    size={size}
                    onClickSize = {onClickSize}
                    collection={collection}
                    onClickCol = {onClickCol}
                />

                <div className="grid-container">
                    {/* <!-- Ваши карточки товаров, например: --> */}
                    {item.map((shopcard)=>{
                        return (<ShopCard key={shopcard.id} {... shopcard}/>)
                    })}
                    
                    {/* <!-- ... Добавьте карточки товаров по необходимости ... --> */}
                </div>
            </div>
        </main>
        
    );
}
 
export default Shop;