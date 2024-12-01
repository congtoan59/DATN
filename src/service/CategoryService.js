import api from '../http/api';

export const getAllCategory = async (data) => {
    const res = await api.get('/category/', data);
    return res.data;
};
export const deleteCategory = async (id) => {
    try {
        const res = await api.delete(`/category/delete-category/${id}`);
        return res.data;
    } catch (error) {
        console.log('Lỗi khi xóa danh mục', error);
    }
};

export const updateCategory = async (id, data) => {
    try {
        const res = await api.put(`/category/update-category/${id}`, data);
        return res.data;
    } catch (error) {
        console.log('Lỗi khi sửa danh mục', error);
    }
};
export const createCategory = async (values) => {
    try {
        const res = await api.post(`/category/create`, values);
        return res;
    } catch (error) {
        console.log('error', error);
    }
};

export const softDeleteCategory = async (id) => {
    try {
        const res = await api.put(`/category/soft-delete/${id}`);
        return res.data;
    } catch (error) {
        console.log('Xóa mềm lỗi :  ', error);
    }
};

export const getDeletedPCategory = async () => {
    try {
        const res = await api.get('/category/deleted');
        return res.data;
    } catch (error) {
        console.log('Lỗi khi lấy danh sách danh mục đã xóa', error);
        throw error;
    }
};

export const restoreCategory = async (id) => {
    try {
        const res = await api.put(`/category/restore/${id}`);
        return res.data;
    } catch (error) {
        console.log('Lỗi khi khôi phục danh mục', error);
        throw error;
    }
};
