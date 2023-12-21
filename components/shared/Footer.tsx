import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t-2 border-violet-500 bg-violet-100">
      <div className="flex-center wrapper flex flex-col flex-between gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image 
          src="/assets/images/logo.svg"
          alt="logo"
          width={128}
          height={38}
          />    
        </Link>
        <p className="drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-violet-500">2023 Evently. Rene Pungartnik</p>
      </div>
    </footer>
  )
}

export default Footer