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
                className=" border-[2px] border-black rounded-lg px-3 py-1"
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
