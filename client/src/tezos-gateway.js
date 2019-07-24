import Sotez from 'sotez';

const sotez = new Sotez('http://155.133.129.136:8732', 'main', 'alpha');
const BLOCK_ID = 'head';

export const getContractCode = async  (address) => {
  const res = await sotez.query(`/chains/main/blocks/${BLOCK_ID}/context/contracts/${address}/balance`);
  console.log(res);
};