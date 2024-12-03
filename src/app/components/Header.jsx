"use client";
import { Button, Navbar, TextInput, theme } from "flowbite-react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { usePathname } from "next/navigation";
// import { useTheme } from "next-themes";
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
// import { dark, light } from "@clerk/themes";

export default function Header() {
  const path = usePathname();
  // const { theme, setTheme } = useTheme();

  return (
    <Navbar className="border-b-2">
      <Link
        href="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <h1 className="hidden sm:block text-xl dark:text-white font-bold m-0 mt-1">
          Classical Music Collection 2025
        </h1>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 hidden sm:inline"
          color="gray"
          pill
          // onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>

        {/* <SignedIn>
          <UserButton
            appearance={{
              baseTheme: theme === "light" ? light : dark,
            }}
          />
        </SignedIn>

        <SignedOut> */}
        <Link href="/sign-in">
          <Button gradientDuoTone="purpleToBlue" outline>
            Sign In
          </Button>
        </Link>
        {/* </SignedOut> */}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link href="/">
          <Navbar.Link active={path === "/"} as={"div"}>
            Home
          </Navbar.Link>
        </Link>
        <Link href="/recordings">
          <Navbar.Link active={path === "/recordings"} as={"div"}>
            Recordings
          </Navbar.Link>
        </Link>
        <Link href="/performances">
          <Navbar.Link active={path === "/performances"} as={"div"}>
            Performances
          </Navbar.Link>
        </Link>
        <Link href="/dashboard">
          <Navbar.Link active={path === "/dashboard"} as={"div"}>
            Dashboard
          </Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
