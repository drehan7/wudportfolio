export default function Navbar() {
    return (
        <nav className="flex items-center justify-between flex-wrap p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-3xl tracking-tight text-white-800">Dawud Saiyed Rehan</span>
          </div>
          <div className="block lg:hidden">
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-lg lg:flex-grow">
              <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-red-500 hover:text-white mr-4 text-xl">
                About
              </a>
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-red-500 hover:text-white mr-4 text-xl">
                Projects
              </a>
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-red-500 hover:text-white mr-4 text-xl">
                Contact
              </a>
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-red-500 hover:text-white text-xl">
                Resume
              </a>
            </div>
            <div>
            </div>
          </div>
          <div>
                <a href="github.com" className="fa-solid fa-user"></a>
          </div>
        </nav>
    )
}
