'use client'
import { NAV_ITEMS } from "@/lib/constants"
import Link from "next/link";
import { usePathname } from "next/navigation"

const Navitems = () => {
  const pathname = usePathname();
  const isActive = (href: string) => {
    return pathname === href;
  };
  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
        {NAV_ITEMS.map(({href,title}) => (
            <li key={href}>
                <Link href={href} className={`hover:text-white ${isActive(href) ? 'text-white' : 'text-gray-400'}`}>
                    {title}
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default Navitems;