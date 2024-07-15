import algoliasearch from 'algoliasearch/lite';

const appId = 'AQCFIGANQA';
const apiKey = '948b24517f5cd4b00dd2b2fd65383573';
const indexName = 'clients_data';

const client = algoliasearch(appId, apiKey);
const index = client.initIndex(indexName);

export const validatePromoCode = async (promoCode) => {
  const validPromoCodes = ['PROMO123', 'PROMO456']; // Пример списка промокодов
  return validPromoCodes.includes(promoCode);
};

export const saveOrderToAlgolia = async (orderData) => {
  //   const formattedData = {
  //     email: `${orderData.email}`,
  //     phone: `${orderData.phone}`,
  //     address: `${orderData.address}`,
  //     promoCode: `${orderData.promoCode}`,
  //   };

  const formattedData = {
    email: orderData.email,
    phone: orderData.phone,
    address: orderData.address,
    promoCode: orderData.promoCode,
  };
  try {
    const { objectID } = await index.saveObject(formattedData);
    console.log('Order saved with objectID:', objectID);
  } catch (error) {
    console.error('Error saving order to Algolia:', error);
  }
};
