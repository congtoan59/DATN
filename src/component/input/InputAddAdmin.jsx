const InputAddAdmin = ({
    placeholder,
    name,
    label,
    require,
    type = 'text',
    min,
    onChange,
}) => {
    return (
        <div className="w-full flex flex-col gap-[1rem]">
            <label
                className="font-bold text-primaryAdmin text-[18px]"
                htmlFor={name}
            >
                {label}
                {require && (
                    <span className="text-red-500 ml-2 text-[18px]">*</span>
                )}
            </label>
            <input
                onChange={onChange}
                type={type}
                min={min}
                className="border-solid border-2 border-black-600 bg-white px-4 py-3 text-[14px] text-primaryAdmin placeholder:font-semibold font-semibold rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-200"
                placeholder={placeholder}
                name={name}
                id={name}
            />
        </div>
    );
};

export default InputAddAdmin;
