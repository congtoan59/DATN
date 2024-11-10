const Select = ({
    label,
    name,
    require,
    options = [],
    onChange,
    defaultValue = '',
    value,
}) => {
    return (
        <div className="w-full">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
                <label className="font-bold text-primaryAdmin text-[18px]">
                    {label}
                    {require && <span className="text-red-500 ml-1">*</span>}
                </label>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                    View all tags
                </a>
            </div>

            {/* Select */}
            <select
                value={value}
                name={name}
                required={require}
                onChange={onChange}
                defaultValue={defaultValue}
                className="w-full h-11 px-4 py-3 text-[14px] text-primaryAdmin
                     bg-white border-custom rounded-lg
                     placeholder:font-semibold font-semibold
                     hover:border-gray-300
                     focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-200
                     appearance-none cursor-pointer
                     transition-all"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.5rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                    paddingRight: '2.5rem',
                }}
            >
                <option value="" disabled>
                    Select {label}...
                </option>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
