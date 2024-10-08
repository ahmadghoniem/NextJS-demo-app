"use client"
import Link from "next/link"
import { cn } from "@/app/_utils/helper"
import { usePathname } from "next/navigation"
const Nav = () => {
  // although it's a client component that doesn't mean it's not going to be server side rendered
  // this will throw an error on the server console stating that window doesn't exist because window doesn't exist on the server only on the browser
  const pathname = usePathname()
  return (
    <nav>
      <ul className="flex flex-row justify-around p-4 my-2">
        <h1>Website</h1>
        <li>
          <Link
            href={"/docs"}
            className={cn(
              "text-blue-300",
              pathname === "/docs" && "text-yellow-700"
            )}
            scroll={false}
          >
            docs
          </Link>
        </li>
        <li>
          <Link
            href={"/blog"}
            className={cn(
              "text-blue-300",
              pathname === "/blog" && "text-yellow-700"
            )}
            scroll={false}
          >
            blog
          </Link>
        </li>
        <li>
          <Link
            href={"/todos"}
            className={cn(
              "text-blue-300",
              pathname === "/todos" && "text-yellow-700"
            )}
            scroll={false}
          >
            todos
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Nav
