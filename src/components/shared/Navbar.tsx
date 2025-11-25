"use client"
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Switch } from "../ui/switch";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname=usePathname()
  return (
    <header className="py-4 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* logo  */}
        <div>
          <Link href="/" className="text-xl font-bold">
            WildNews
          </Link>
        </div>

        {/* desktop menu  */}
        <div>
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-8">
              <NavigationMenuItem>
                <NavigationMenuLink href="/news" className={`${pathname=== "/news"?"text-red-500 font-bold":""} hover:text-red-500`}>
                  News
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/services">
                  <NavigationMenuTrigger className={`${pathname=== "/services"?"text-red-500 font-bold":""} hover:text-red-500`}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[150px]">
                      <li>
                        <NavigationMenuLink href="/services/web">
                          Web Development
                        </NavigationMenuLink>
                      </li>

                      <li>
                        <NavigationMenuLink href="/services/apps">
                          Apps Development
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink href="/services/seo">
                          SEO
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink href="/services/game">
                          Game Development
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/about" className={`${pathname=== "/about"?"text-red-500 font-bold":""} hover:text-red-500`}>About</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem></NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/contact" className={`${pathname=== "/contact"?"text-red-500 font-bold":""} hover:text-red-500`}>Contact</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem></NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* login */}
        <div className="hidden lg:flex gap-5">
          <div className="flex items-center gap-2">
            <span>Dark Mode</span>
            <Switch />
          </div>
          <Button variant="default">Login</Button>
        </div>

        {/* mobile  */}

        <div className="lg:hidden">
          <Button>
            {" "}
            <AiOutlineMenu />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
