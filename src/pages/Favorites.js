import ShopCard from '../components/shopCard/Shopcard';
const Favorites = ({ products, favorites, toggleFavorite }) => {
  const favoriteProducts = products.filter((product) => favorites.includes(product.objectID));

  return (
    <div className="wrapper">
      {favoriteProducts.length !== 0 ? (
        <section className="intro obj-margin-min">
          {/* <!-- заголовок и подзаголовок --> */}
          <div className="wrapper">
            <div className="wrapper obj-margin-mi">
              <h1 className="title">{/* it's &lt;wear&gt; for u */}а у тебя хороший вкус!</h1>
              {/* <p1 className="subtitle smooth-underline">смотореть каталог \\ новую коллекцию</p1> */}
            </div>
            <div className="grid-container">
              {/* <!-- Ваши карточки товаров, например: --> */}
              {favoriteProducts.map((product) => {
                return (
                  <ShopCard
                    key={product.objectID}
                    product={product}
                    isFavorite={favorites.includes(product.objectID)}
                    onToggleFavorite={() => toggleFavorite(product.objectID)}
                    {...product}
                  />
                );
              })}

              {/* <!-- ... Добавьте карточки товаров по необходимости ... --> */}
            </div>
          </div>
        </section>
      ) : (
        <section className="intro obj-margin-min">
          {/* <!-- заголовок и подзаголовок --> */}
          <div className="wrapper">
            <div className="wrapper obj-margin-mi">
              <h1 className="title">
                {/* it's &lt;wear&gt; for u */}
                пополни свой вишлист
              </h1>
              <p1 className="subtitle smooth-underline">смотореть каталог \\ новую коллекцию</p1>
            </div>

            <div className="big_rect">
              <h1 className="block_name">&lt;mental health&gt;</h1>
              <div className="link_group">
                <p className="description">
                  новая коллекция прямо из самых темных мест твоего сознания
                </p>
                <a href="#!" className="smooth-underline">
                  перейти в раздел
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Favorites;
