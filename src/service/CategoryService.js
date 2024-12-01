import api from "../http/api";

export const getAllCategory = async (data) => {
    const res = await api.get('/category/', data)
    return res.data
}
