function AccountLayout({ children }) {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-[100%] flex-1 px-20 min-h-screen  ">
                <div className="flex mx-8 shadow-1 rounded-2xl">
                    <div className="flex-[0_0_60%]">
                        <img
                            className="h-full w-full rounded-l-2xl object-cover"
                            src="https://cdn.dribbble.com/userupload/8432950/file/original-0c14504bd291054d76548cb015dff89a.png?resize=1200x900&vertical=center"
                            alt="Image 1"
                        />
                    </div>
                    <div className="max-h-full bg-[#e9e9e9] flex-[0_0_40%] rounded-r-2xl p-3">
                        <div className="size-full bg-white  rounded-2xl shadow-sm">
                            {children}
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default AccountLayout;
