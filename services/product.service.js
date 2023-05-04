import {apiUrl} from '../next.config';
import { fetchWrapper } from '../helpers/fetch-wrapper';

export const productService = {
    getAll
}

const baseUrl = `http://127.0.0.1:8000/api/products`;

function getAll(){
    return fetchWrapper.get(baseUrl);
}