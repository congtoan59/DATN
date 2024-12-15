import React from 'react';

const InputAddAdmin = ({
    placeholder,
    name,
    label,
    require,
    type = 'text',
    min,
    onChange,
    value,
    error,
}) => {
    return (
        <div className="w-full flex flex-col gap-2">
            {/* Label cố định */}
            <label
                htmlFor={name}
                className="font-semibold text-[14px] text-gray-700"
            >
                {label}
                {require && <span className="text-red-500 ml-1">*</span>}
            </label>

            {/* Input */}
            <input
                onChange={onChange}
                type={type}
                min={min}
                value={value}
                name={name}
                id={name}
                placeholder={placeholder}
                className={`border border-gray-300 rounded-lg px-4 py-3 text-[14px] placeholder-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    error ? 'border-red-500 focus:ring-red-500' : ''
                }`}
            />

            {/* Thông báo lỗi */}
            {error && (
                <span className="text-red-500 text-[12px] mt-1">
                    {error}
                </span>
            )}
        </div>
    );
};

export default InputAddAdmin;
