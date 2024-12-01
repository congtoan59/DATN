import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as UserService from '../../service/UserService'
import { decodeToken } from '../../helper';

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials, { rejectWithValue }) => {
    try {
        const res = await UserService.loginUser(credentials)
        const decodedToken = decodeToken(res.access_token);
        return {
            ...res , 
            decodedUser :decodedToken
        }; 
    } catch (error) {
        return rejectWithValue(error.res);
    }
});

export const refreshToken = createAsyncThunk('auth/refreshToken', async (_, { getState, rejectWithValue }) => {
    try {
        const { refreshToken } = getState().auth;
        const res = await UserService.refreshToken({ refresh_token: refreshToken });
        console.log('res' , res)
        return res;
    } catch (error) {
        return rejectWithValue(error.response);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        decodedUser: null,
        accessToken: null,
        refreshToken: null,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.accessToken = null;
            state.refreshToken = null;
        },
        updateAccessToken: (state, action) => {
            state.accessToken = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.decodedUser = action.payload.decodedUser;
                state.accessToken = action.payload.access_token;
                state.refreshToken = action.payload.refresh_token;

                localStorage.setItem('accessToken', action.payload.access_token);
                localStorage.setItem('refreshToken', action.payload.refresh_token);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { logout, updateAccessToken } = authSlice.actions;
export default authSlice.reducer;
