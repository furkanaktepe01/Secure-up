import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js';
import { WEB3STORAGE_TOKEN } from "./API_Token";

export const chunkSize = 1000000;

const makeStorageClient = () => { 
  return new Web3Storage({ token: WEB3STORAGE_TOKEN });  
}

export const storeFiles = async (files) => {       

  const client = makeStorageClient();

  const cid = await client.put(files);
  
  return cid;
}

export const linkify = (cid, no) => {

  return `https://${cid}.ipfs.w3s.link${ no ? `/${no}.json` : "" }`;
}

