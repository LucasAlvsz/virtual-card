import api from "./api"

const createCard = data => api.post("/card", data)

const getCard = name => api.get(`/card/${name}`)

export default { createCard, getCard }
