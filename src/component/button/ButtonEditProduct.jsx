function ButtonEditProduct({
    label = '',
    type = '',
    id = '',
    name = '',
    value = '',
    onChange,
}) {
    return (
        <div className="flex flex-col gap-2 w-full mt-2">
            <label htmlFor={name} className="font-medium tracking-wider">
                {label}
            </label>
            <input
                className="border-solid border-2 border-black-600 bg-white px-4 py-3 text-[14px] text-primaryAdmin placeholder:font-semibold font-semibold rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-200"
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                required
            />
        </div>
    );
}

export default ButtonEditProduct;
