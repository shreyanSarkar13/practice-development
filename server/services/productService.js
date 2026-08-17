import {getAllProducts} from '../repositories/productRepository.js';

export async function getProducts(){
    return await getAllProducts();
}