import axios from 'axios';

export const getAllTodos = () => {
    return axios.get('http://localhost:4000/')
        .then((results) => {
            return results.data;
        })
}

export const getTodos = (category) => {
    return axios.get(`http://localhost:4000/${category}`)
    .then((results) => {
        return results.data;
    })
}

export const getTodo = (id) => {
    return axios.get(`http://localhost:4000/update/${id}`)
    .then((result) => {
        return result.data;
    })
}

export const createTodo = (todo) => {
    return axios.post('http://localhost:4000/', todo)
        .then((result) => {
            console.log(result);
        })
}

export const updateTodo = (todo, id) => {
    return axios.post(`http://localhost:4000/update/${id}`, todo)
        .then((result) => {
            console.log(result);
        })
}

export const deleteTodo = (id) => {
    return axios.post(`http://localhost:4000/delete/${id}`)
        .then((result) => {
            console.log(result);
        })
}

export const finishTodo = (id) => {
    return axios.get(`http://localhost:4000/finish/${id}`)
        .then((result) => {
            console.log(result);
        })
}