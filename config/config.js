import {ConfigApi} from '../Config/ConfigApi'

console.log('ConfigApi333........', ConfigApi);
export const ToFormData = (obj) => {
    let formdata = new FormData();
    for (let key in obj) {
        formdata.append(key, obj[key]);
    }
    return formdata;
};

export const add_to_cart = async (requestObj, params) => {
    // cart.php
    // console.log('requestObj, params........', requestObj, params);
    let url = `${ConfigApi.baseUrl}/${params}`;
    let requestOptions = {
        method: "POST",
        body: ToFormData(requestObj),
    };
    let response = await fetch(url, requestOptions);
    // return;
    // console.log('...........await response.text().......', await response.text());
    // return
    return await response.json();
};