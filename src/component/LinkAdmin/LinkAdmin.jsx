import { Link, useLocation } from 'react-router-dom';
function LinkAdmin({ route = '', title = '', icon: IconComponent }) {
    const location = useLocation();
    const isActive = location.pathname === `/${route}`;
    return (
        <div className="flex gap-4 items-center">
            {IconComponent && <IconComponent />}
            <Link
                to={`/system/admin${route}`}
                className={`text-black font-light ${
                    isActive ? 'font-bold text-black' : 'font-medium'
                }`}
            >
                {title}
            </Link>
        </div>
    );
}

export default LinkAdmin;
