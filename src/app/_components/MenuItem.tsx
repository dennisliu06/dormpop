
import Link from "next/link";
import { signOutAction } from "../../../actions/signout";

interface MenuItemProps {
    href: string,
    name: string,
    signOutButton? : boolean
}

export default function MenuItem({href, name, signOutButton} : MenuItemProps) {
    return(
        <>
        {
        !signOutButton ?
        <Link href={href} className="flex text-black p-2 border-gray-100 border-1 hover:bg-husky-red hover:text-white">{name}</Link>
        :
        <div onClick={signOutAction} className="flex text-black p-2 border-gray-100 border-1 hover:bg-husky-red hover:text-white">
            <button type="submit">
                Sign Out
            </button>
        </div>
        }
            
        </>
    )
}