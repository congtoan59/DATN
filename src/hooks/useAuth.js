import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const checkAuth = async () => {
            try {
                const token = localStorage.getItem('accessToken');

                if (token) {
                    const response = await axios.post('http://localhost:3001/api/user/verify', null, {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    console.log('response', response);

                    setUser(response.data.user);
                }
            } catch (error) {
                console.log(error);

                localStorage.removeItem('token');
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);


    return { user, loading, isAuthenticated: !!user };
};