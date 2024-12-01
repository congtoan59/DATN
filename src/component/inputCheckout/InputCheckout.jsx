function InputCheckout({
    label = '',
    name = '',
    value = '',
    onChange = () => {},
    type = 'text',
    required = false,
    placeholder = '',
    className = '',
}) {
    return (
        <div className="mb-4">
            <label
                htmlFor={name}
                className="block text-gray-700 text-sm font-bold mb-2"
            >
                {label}
            </label>
            <input
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                required={required}
                className={`w-full px-4 py-2 border border-[#cecdcd] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 ${className}`}
            />
        </div>
    );
}

export default InputCheckout;
