function UserInfo({ title, name, email }) {
    return (
        <div>
            <h1 className="uppercase font-medium tracking-widest text-[19px]">
                {title}
            </h1>
            <div className="mt-6">
                <div className="flex gap-2 items-center mb-2">
                    <p className="font-bold text-[15px] tracking-wide">
                        Họ tên :
                    </p>
                    <span>{name}</span>
                </div>
                <div className="flex gap-2 items-center mb-2">
                    <p className="font-bold text-[15px] tracking-wide">
                        Email :
                    </p>
                    <span>{email}</span>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;
