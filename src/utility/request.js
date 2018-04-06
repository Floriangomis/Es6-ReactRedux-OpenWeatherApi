import { post, get } from 'axios';

export let postRequest = (data, url, options) => {
    return post(url, data, options);
};

export let getRequest = (url, options) => {
    return get(url, options);
};