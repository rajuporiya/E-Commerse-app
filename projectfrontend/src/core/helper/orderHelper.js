const { API } = require("../../backend");


export const createOrder = (userId, token, orderData) => {
    return fetch(`${API}/order/create/${userId}`, {
        method: "POST",
        headers:{
            Accept: "application/jsaon",
            "Content-Type": "application/jsaon",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({order: orderData})

    }).then(response => {return response.json()})
    .catch(err => console.log(err))
}