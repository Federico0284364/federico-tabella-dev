import NavLink from "./NavLink"

export default function Header(){
  return <header className="relative flex justify-between items-center w-[87vw] max-w-215">
          <h1 className=" w-24 sm:w-max text-xl border py-1 px-2 bg-medium rounded-xs">Federico Tabella</h1>          <nav className="text-lg flex items-center gap-5">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/projects">Projects</NavLink>
          </nav>
        </header>
}