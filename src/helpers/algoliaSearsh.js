import algoliasearch from 'algoliasearch/lite';

const appId = 'AQCFIGANQA';
const apiKey = '18c24a2c19cc75a5fd9d4e3a4615439d';
const indexName = 'health';

const client = algoliasearch(appId, apiKey);
const index = client.initIndex(indexName);

export default index;
