import { useState } from "react";

function LogoFilter() {
    const [isOpen, setIsOpen] = useState(true);
    const [selectValue, setSelectValue] = useState('default');

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (value) => {
        setSelectValue(value);
    };

    const listFilterLogo = [
        { id: 'active-1', selectValue: 'active-1', name: 'New York Yankees (NY)' },
        { id: 'active-2', selectValue: 'active-2', name: 'New York Yankees (NY) -2' },
        { id: 'active-3', selectValue: 'active-3', name: 'New York Yankees (NY) - 3' },
    ];

    return (
        <>
            <div>
                <div className="flex justify-between items-center">
                    <h1 className="text-[1.5rem] tracking-wider uppercase">Logo</h1>
                    <i
                        className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'} cursor-pointer pr-2`}
                        onClick={toggleSidebar}
                    ></i>
                </div>

                <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <ul className="space-y-2 pt-2">
                        {listFilterLogo.map((item) => (
                            <li key={item.id} className="flex gap-4 items-center">
                                <input
                                    type="radio"
                                    name="sort"
                                    id={item.id}
                                    className="peer hidden"
                                    checked={selectValue === item.selectValue}
                                    onChange={() => handleChange(item.selectValue)}
                                />
                                <label
                                    htmlFor={item.id}
                                    className={`flex items-center gap-2 cursor-pointer ${
                                        selectValue === item.selectValue ? 'text-[#660000]' : 'text-black'
                                    }`}
                                >
                                    <span
                                        className={`block w-4 h-4 border rounded-full ${
                                            selectValue === item.selectValue ? 'bg-[#660000] border-transparent' : 'border-[#660000]'
                                        } peer-checked:bg-[#660000]`}
                                    ></span>
                                    {item.name}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default LogoFilter;
