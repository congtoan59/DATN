import api from '../http/api'
export const resigterUser = async (data) => {
    const res = await api.post('/user/sign-up',data)

    return res.data
}

export const loginUser = async (data) => {
    const res = await api.post('/user/sign-in',data)
    
    return res
}

export const refreshAccessToken  = async (data) => {
    const res = await api.post('user/refresh-token' , data)
    return res
}