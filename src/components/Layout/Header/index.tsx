import Image from 'next/image'
import { FiSearch } from 'react-icons/fi'
import AvatarDropdown from './AvatarDropdown'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="h-[56px] fixed top-0 left-0 right-0 shadow-sm bg-white">
      <div className="container mx-auto flex items-center justify-between h-full">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={50} height={40} />
          </Link>

          <div className="hidden sm:flex ml-4 relative">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 h-[40px] w-[400px] p-[8px] rounded-md"
            />
            <button className="absolute left-auto inset-px p-2 hover:bg-bg-hover rounded-md">
              <FiSearch size={24} />
            </button>
          </div>
        </div>
        <div>
          <AvatarDropdown />
        </div>
      </div>
    </header>
  )
}

export default Header
