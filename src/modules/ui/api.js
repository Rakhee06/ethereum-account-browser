import axios from 'axios';
import { config } from 'dotenv';
config({path: '../../../.env'});

/**
 *
 * @param address
 * @returns {Promise<AxiosResponse<Object>>} Returns the list of Transaction Details with the given ethereum address
 */

export async function getTxnList(address) {
    return await axios.get(`${process.env.REACT_APP_ETHEREUM_TXN_URL}&address=`+ address +`&page=&offset=10&sort=asc&apikey=${process.env.REACT_APP_API_KEY}`)
        .then(function (response) {
            return response.data.result;
        })
        .catch(function (error){
            return Promise.reject(error);
    })
}

/**
 *
 * @param address
 * @returns {Promise<AxiosResponse<Object>>} Returns Block Details with the given block number
 */

export async function getBlockList(address) {
    return await axios.get(`${process.env.REACT_APP_ETHEREUM_BLOCK_URL}&blockno=`+ address +`&page=1&offset=10&sort=asc&apikey=${process.env.REACT_APP_API_KEY}`)
        .then(function (response) {
            return response.data.result;
        })
        .catch(function (error){
            return Promise.reject(error);
        })
}

/**
 *
 * @param address
 * @returns {Promise<AxiosResponse<Object>>} Returns list of ERC 20 token details with the given ethereum address
 */

export async function getTokenList(address) {
    return await axios.get(`${process.env.REACT_APP_ERC_TOKEN_URL}&address=`+ address +`&sort=asc&apikey=${process.env.REACT_APP_API_KEY}`)
        .then(function (response) {
            return response.data.result;
        })
        .catch(function (error){
            return Promise.reject(error);
        })
}