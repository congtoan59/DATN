const InputField = ({ label, type, name, value, onChange, required, min }) => {
    return (
        <div>
            <label className="block text-sm font-medium mb-2">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full p-2 border rounded border-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-300"
                required={required}
                min={min}
            />
        </div>
    );
};

export default InputField;
