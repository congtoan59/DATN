import Arrange from './Arrange/Arrange';
import Color from './Color/Color';
import LogoFilter from './LogoFilter/LogoFilter';
function Sidebar() {
    return (
        <>
            <div className="h-[100vh] pt-6 shadow-lg shadow-gray-500 pl-2">
                <div>
                    <Arrange />
                </div>
                <div className="pt-4">
                    <Color />
                </div>
                <div className="pt-4">
                    <LogoFilter />
                </div>
            </div>
        </>
    );
}

export default Sidebar;
