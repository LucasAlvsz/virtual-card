import api from "./api"

const createCard = data => api.post("/cards", data)

const getCard = name => api.get(`/cards/${name}`)

export { createCard, getCard }
