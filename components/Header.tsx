import Navlinks from "./Navitems";
import UserDropdown from "./UserDropdown";

const Header = () => {
  return (
    <>
    <header className="sticky top-0 ">
        <div className="container bg-gray-500 h-[4rem] flex items-center justify-between rounded-md">
            <div className="h-full flex items-center">
                SKOTS
            </div>
            <div className="hidden sm:block">
                <Navlinks />
            </div>
            <div>
                <UserDropdown/>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header