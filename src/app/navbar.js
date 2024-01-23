
const Navbar = () => {
  return (
    <nav className=" p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
            <div/>
          {/* <div className="text-white text-xl font-semibold">Your Logo</div> */}
          <div className="flex-1 hidden md:flex justify-center space-x-5">
            <a href="#about" data-te-smooth-scroll-init className="text-gray-400 font-medium">About</a>
            <a href="#contact" data-te-smooth-scroll-init className="text-gray-400 font-medium">Contact</a>
            <a href="#experience" data-te-smooth-scroll-init className="text-gray-400 font-medium">Experience</a>
            <a href="#education" data-te-smooth-scroll-init className="text-gray-400 font-medium">Education</a>
            <a href="#skills" data-te-smooth-scroll-init className="text-gray-400 font-medium">Skills</a>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;