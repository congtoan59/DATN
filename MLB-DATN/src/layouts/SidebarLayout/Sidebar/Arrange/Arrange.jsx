import { useState } from 'react';

function Arrange() {
    const [isOpen, setIsOpen] = useState(true);
    const [selectValue, setSelectValue] = useState('default');

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (value) => {
        setSelectValue(value);
    };
    const sortOptions = [
        { id: 'default', value: 'default', label: 'Mặc định' },
        { id: 'az', value: 'az', label: 'Tên A-Z' },
        { id: 'za', value: 'za', label: 'Tên Z-A' },
        { id: 'lowToHigh', value: 'lowToHigh', label: 'Giá thấp đến cao' },
        { id: 'highToLow', value: 'highToLow', label: 'Giá cao xuống thấp' },
    ];

    return (
        <>
            <div>
                <div className="flex justify-between items-center">
                    <h1 className="text-[1.5rem] tracking-wider uppercase">
                        Sắp xếp
                    </h1>
                    <i
                        className={`fa-solid fa-chevron-${
                            isOpen ? 'up' : 'down'
                        } cursor-pointer pr-2`}
                        onClick={toggleSidebar}
                    ></i>
                </div>

                <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <ul className="space-y-2 pt-2">
                        {sortOptions.map((option) => (
                            <li
                                key={option.id}
                                className="flex gap-4 items-center"
                            >
                                <input
                                    type="radio"
                                    name="sort"
                                    id={option.id}
                                    className="peer hidden"
                                    checked={selectValue === option.value}
                                    onChange={() => handleChange(option.value)}
                                />
                                <label
                                    htmlFor={option.id}
                                    className={`flex items-center gap-2 cursor-pointer ${
                                        selectValue === option.value
                                            ? 'text-[#660000]'
                                            : 'text-black'
                                    }`}
                                >
                                    <span
                                        className={`block w-4 h-4 border rounded-full ${
                                            selectValue === option.value
                                                ? 'bg-[#660000] border-transparent'
                                                : 'border-[#660000]'
                                        }`}
                                    ></span>
                                    {option.label}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Arrange;
