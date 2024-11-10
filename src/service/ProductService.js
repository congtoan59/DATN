import api from "../http/api"


export const getAllProduct = async (data) => {
    const res = await api.get('/product',data)
    return res.data
}

export const deleteProduct = async (id) => {
    try {
        const res = await api.delete(`/product/delete-product/${id}`)
    return res.data
    } catch (error) {
        console.log('Lỗi khi xóa sản phẩm' , error);
    }
}

export const updateProduct = async (id ,data) => {
    try {
        const res = await api.put(`/product/update-product/${id}` ,data)
        return res.data
    } catch (error) {
        console.log('Lỗi khi sửa sản phẩm' , error);
        
    }
}
export const createProduct = async (values) => {
    try {
        const res = await api.post(`/product/create` , values)
        return res
    } catch (error) {
        console.log('error' , error);
        
    }
}

export const softDeleteProduct = async (id) => {
    try {
        const res = await api.put(`/product/soft-delete/${id}`)
        return res.data
    } catch (error) {
        console.log('Xóa mềm lỗi :  ' ,error);
        
    }
}

export const getDeletedProducts = async () => {
    try {
        const res = await api.get('/product/deleted');
        return res.data;
    } catch (error) {
        console.log('Lỗi khi lấy danh sách sản phẩm đã xóa', error);
        throw error;
    }
}

export const restoreProduct = async (id) => {
    try {
        const res = await api.put(`/product/restore/${id}`);
        return res.data;
    } catch (error) {
        console.log('Lỗi khi khôi phục sản phẩm', error);
        throw error;
    }
}
export const getProductsByCategory = async (categoryName) => {
    try {
        const res = await api.get (`product/category/${categoryName}`)
        return res.data
    } catch (error) {
        console.log('Lỗi khi get sản phẩm' , error);
        throw error
    }
}