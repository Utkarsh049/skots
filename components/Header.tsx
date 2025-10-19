import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import NavItems from "./Navitems";
import { searchStocks } from "@/lib/actions/finnhub.actions";
import UserDropdown from "./UserDropdown";

const Header = async () => {
  const initialStocks = await searchStocks();
  return (
    <>
      <header className="sticky top-0 ">
        <div className="container bg-white/50 backdrop-filter backdrop-blur-sm h-[4rem] flex items-center justify-between rounded-md">
          <div className="h-full flex items-center font-bold text-black">
            <span className="text-yellow-300 p-[1px]">S</span>KOTS
          </div>
          <nav className="hidden sm:block">
            <NavItems initialStocks={initialStocks} />
          </nav>
          <div className="gap-2 flex items-center">
          <div  className="sm:hidden">
            <UserDropdown initialStocks={initialStocks} />
          </div>
            <SignedOut>
              <SignInButton>
                <button className="ml-2 bg-yellow-300 text-black rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign In
                </button>
              </SignInButton>
              {/* <SignUpButton>
                <button className="ml-2 bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton> */}
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
