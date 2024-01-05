
import Link from 'next/link'

const NavbarLinks = ({ href, title }) => {
    return (
        <Link href={href}
            className="block py-2 pl-2 pr-4
             text-[#ADB7BE] sm:text-xl hover:text-white rounded md:p-0"
        >
            {title}
        </Link>
    )
}

export default NavbarLinks