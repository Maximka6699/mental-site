// React.useEffect(() => {
//   // Функция для получения данных от Solr
//   const fetchDataFromSolr = async () => {
//     try {
//       const response = await axios.get('http://localhost:8983/solr/men/select', {
//         params: {
//           fq: [
//             `${filterAvi===0 ? '' : `aviName: "${aviNames[filterAvi]}"` }`,
//             `${filterCol===0 ? '' : `collection: "${collectionNames[filterCol]}"` }`,
//             `${filterSize===0? '' : `size: "${sizeNames[filterSize]}"` }`,
//             `${filterType===0? '' : `type: "${typeNames[filterType]}"` }`
//           ],
//           'q.op': 'OR',
//           'q': '*:*',
//           'rows': "30",
//         }
//       });

//       setClothes(response.data.response.docs);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   fetchDataFromSolr();
//   console.log(clothes)
//   console.log(aviNames[filterAvi], collectionNames[filterCol], sizeNames[filterSize], typeNames[filterType]);
// }, [filterType, filterAvi, filterSize, filterCol]); // Выполняется только один раз при загрузке компонента

// function getCommonElements(arr1, arr2, arr3, arr4) {
//   // Создаем новый массив с элементами из первого массива
//   const commonElements = arr1.filter((item) => {
//     // Проверяем, есть ли элемент в каждом из оставшихся массивов
//     return arr2.includes(item) && arr3.includes(item) && arr4.includes(item);
//   });

//   return commonElements;
// }

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// СОРТИРОВКА ПО КОЛЛЕКЦИИ НАЧАЛО

// React.useEffect(() => {
//   fetch(
//     `https://64bd46e92320b36433c78fb7.mockapi.io/clothes?${
//       filterCol === 0 ? '' : `collection=${collectionNames[filterCol]}`
//     }`,
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((arr) => {
//       setArr1(arr);
//     });
// }, [filterCol]);

// СОРТИРОВКА ПО КОЛЛЕКЦИИ КОНЕЦ

// СОРТИРОВКА ПО ТИПУ НАЧАЛО

// React.useEffect(() => {
//   fetch(
//     `https://64bd46e92320b36433c78fb7.mockapi.io/clothes?${
//       filterType === 0 ? '' : `type=${typeNames[filterType]}`
//     }`,
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((arr) => {
//       setArr2(arr);
//     });
// }, [filterType]);

// СОРТИРОВКА ПО ТИПУ КОНЕЦ

// СОРТИРОВКА ПОНАЛИЧИЮ НАЧАЛО

// React.useEffect(() => {
//   fetch(
//     `https://64bd46e92320b36433c78fb7.mockapi.io/clothes?${
//       filterAvi === 0 ? '' : `aviName=${aviNames[filterAvi]}`
//     }`,
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((arr) => {
//       setArr3(arr);
//     });
// }, [filterAvi]);

// СОРТИРОВКА ПОНАЛИЧИЮ КОНЕЦ

// СОРТИРОВКА ПО РАЗМЕРУ НАЧАЛО

// React.useEffect(() => {
//   fetch(
//     `https://64bd46e92320b36433c78fb7.mockapi.io/clothes?${
//       filterSize === 0 ? '' : `size=${sizeNames[filterSize]}`
//     }`,
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((arr) => {
//       setArr4(arr);
//     });
// }, [filterSize]);

// СОРТИРОВКА ПО РАЗМЕРУ КОНЕЦ

// setClothes(findCommonElements(arr1, arr2, arr3, arr4));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// React.useEffect(() => {
//   fetch(
//     `https://64bd46e92320b36433c78fb7.mockapi.io/clothes?${
//       filterCol === 0 ? '' : `collection=${collectionNames[filterCol]}`
//     }`,
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((arr) => {
//       setArr1(arr);
//     });

//   fetch(
//     `https://64bd46e92320b36433c78fb7.mockapi.io/clothes?${
//       filterType === 0 ? '' : `type=${typeNames[filterType]}`
//     }`,
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((arr) => {
//       setArr2(arr);
//     });

//   fetch(
//     `https://64bd46e92320b36433c78fb7.mockapi.io/clothes?${
//       filterAvi === 0 ? '' : `aviName=${aviNames[filterAvi]}`
//     }`,
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((arr) => {
//       setArr3(arr);
//     });

//   fetch(
//     `https://64bd46e92320b36433c78fb7.mockapi.io/clothes?${
//       filterSize === 0 ? '' : `size=${sizeNames[filterSize]}`
//     }`,
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((arr) => {
//       setArr4(arr);
//     });

//   setClothes(findCommonElements(arr1, arr2, arr3, arr4));
// }, [filterCol, filterAvi, filterSize, filterType]);

// React.useEffect(() => {
//   fetch(
//     `https://64bd46e92320b36433c78fb7.mockapi.io/clothes?${
//       filterCol === 0 ? '' : `collection=${collectionNames[filterCol]}`
//     }`,
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((arr) => {
//       setClothes(arr);
//     });
// }, [filterCol]);

// React.useEffect(() => {
//   fetch(
//     `https://64bd46e92320b36433c78fb7.mockapi.io/clothes?${
//       filterType === 0 ? '' : `type=${typeNames[filterType]}`
//     }`,
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((arr) => {
//       setClothes(arr);
//     });
// }, [filterType]);
