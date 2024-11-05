import { Link } from 'react-router-dom';

const Navigate = ({ title, children , to ='' }) => {
    return (
        <Link to={to} className="w-full flex justify-start items-center gap-8 text-[#4f4f4fe7] hover:text-[#000]">
            {children}
            <h1 className="text-[18px] ">{title}</h1>
        </Link>
    );
};

export default Navigate;
