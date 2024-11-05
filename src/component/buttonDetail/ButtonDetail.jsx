function ButtonDetail({ title = '', onClick }) {
    return (
        <>
            <button
                onClick={onClick}
                className="mt-4 px-6 py-2 bg-[#420500] text-white hover:bg-[#942319]"
            >
                {title}
            </button>
        </>
    );
}

export default ButtonDetail;
