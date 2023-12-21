import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "../ui/separator"
import NavItems from "./NavItems"
  
//---------------------------------MOBILE NAVIGATION BAR--------------------------------------------------
// 1. using shadcn sheet component for mobile nav bar https://ui.shadcn.com/docs/components/sheet
// 2. installed sheet, imported all necessary components above
// 3. used their demo example and then configured it
// 4. wrapped demo example in <nav> and added md:hidden to the nav for mobile navbar like below

const MobileNav = () => {
  return (
    <nav className="md:hidden">
        <Sheet>
            <SheetTrigger className="align-middle">
                {/* added an svg image for our hamburger icon. It has to be in SheetTrigger */}
                <Image
                src="/assets/icons/menu.svg"
                alt="menu"
                height={24}
                width={24}
                className="cursor-pointer"
                />
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
                <Image
                src="/assets/images/logo.svg"
                alt="logo"
                width={128}
                height={38}
                />
                <Separator className="border border-violet-500" /> {/* installed and added shadcn separator */}
                <NavItems />
            </SheetContent>
        </Sheet>

    </nav>
  )
}

export default MobileNav