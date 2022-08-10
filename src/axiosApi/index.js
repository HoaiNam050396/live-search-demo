import axios from "axios"

export default axios.create({
    get: (url, param) => {
        axios.get(`${url}/${param}`, {
            headers: {
                'Content-Type': 'application/json'
              }
        })
        .then(res => res.data)
        .catch(error => console.log(error))
    },
    post: (url, param) => {
        axios.post(`${url}/${param}`, {
            headers: {
                'Content-Type': 'application/json'
              }
        })
        .then(res => res.data)
        .catch(error => console.log(error))
    }
})
