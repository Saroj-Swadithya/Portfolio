export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-primary font-heading text-2xl">Portfolio</h1>
      <div className="space-x-4">
        <a href="#home" className="hover:text-primary">Home</a>
        <a href="#about" className="hover:text-primary">About</a>
        <a href="#projects" className="hover:text-primary">Projects</a>
        <a href="#experience" className="hover:text-primary">Experience</a>
        <a href="#tech" className="hover:text-primary">Tech</a>
        <a href="#education" className="hover:text-primary">Education</a>
      </div>
    </nav>
  );
}
