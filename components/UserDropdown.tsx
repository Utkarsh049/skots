"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { Avatar } from "@radix-ui/react-avatar";
import Navitems from "./Navitems";
import { Menu } from "lucide-react";
import { searchStocks } from "@/lib/actions/finnhub.actions";
const UserDropdown = ({initialStocks}:{initialStocks:StockWithWatchlistStatus[]}) => {
  const router = useRouter();
  const handleSignout = () => {
    router.push("/sign-in");
  };

  const user = { name: "Utkarsh", email: "hola@gmail.com" };
  return (
    <DropdownMenu >
      <DropdownMenuTrigger >
        <Button variant="ghost">
          <Menu/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* <div className="flex relative items-center gap-3">
          <div className="hidden md:flex flex-col items-start">
            <span className="font-medium text-gray-400">{user.name}</span>
            <span className="text-sm text-gray-400">{user.email}</span>
          </div>
        </div>
        <DropdownMenuSeparator /> */}
        <nav className="sm:hidden">
          <Navitems initialStocks={initialStocks}/>
        </nav>
        <DropdownMenuSeparator className="sm:hidden" />
        <DropdownMenuItem onClick={handleSignout}>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
