import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function TitleUpdate() {
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                document.title = 'Six Stars - Trang Chủ';
                break;
            case '/shoes':
                document.title = 'Six Stars - Giày';
                break;
            case '/hat':
                document.title = 'Six Stars - Mũ';
                break;
            case '/clothes':
                document.title = 'Six Stars - Quần Áo';
                break;
            case '/backpack':
                document.title = 'Six Stars - Balo';
                break;
            case '/news':
                document.title = 'Six Stars - Tin Tức';
                break;
            default:
                document.title = 'Six Stars';
                break;
        }
    }, [location]);

    return null; // Component này không cần render gì cả
}

export default TitleUpdate;
