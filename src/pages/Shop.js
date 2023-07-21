import ShopCard from "../components/shopCard/Shopcard";
import { cards } from "../helpers/shopCardsList";

const Shop = () => {
    return ( 
        <main className="main">
            <div className="wrapper">

                <div className="big_rect obj-margin-t">
                      <h1 className="block_name">&lt;mental health&gt;</h1>
                      <div className="link_group">
                          <p className="description">новая коллекция прямо из самых темных мест твоего сознания</p>                      </div>
                </div>

                <div className="grid-container">
                    {/* <!-- Ваши карточки товаров, например: --> */}
                    {cards.map((shopcard)=>{
                        return (<ShopCard title={shopcard.title} collection={shopcard.collection} style={shopcard.style} available={shopcard.available} />)
                    })}
                    
                    {/* <!-- ... Добавьте карточки товаров по необходимости ... --> */}
                </div>
            </div>
        </main>
        
    );
}
 
export default Shop;