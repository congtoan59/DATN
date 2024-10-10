import Arrange from './Arrange/Arrange';
import Color from './Color/Color';
import LogoFilter from './LogoFilter/LogoFilter';
function Sidebar() {
    return (
        <>
            <div className="pt-6 pl-2 h-screen sticky top-0 ">
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
