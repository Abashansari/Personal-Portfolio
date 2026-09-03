import Link from "next/link";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12 border-t border-border-teal">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="#home" className="text-text-primary font-bold text-xl tracking-wider mb-2">
            ABASH ANSARI
          </Link>
          <span className="text-accent-teal text-xs tracking-[0.2em] font-mono uppercase mb-4">
            Full-Stack Developer
          </span>
          <p className="text-text-secondary text-sm font-mono tracking-widest uppercase">
            BUILT WITH CURIOSITY, CODE, AND INTENTION.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-text-secondary">
            <Link href="#home" className="hover:text-accent-cyan transition-colors">Home</Link>
            <Link href="#about" className="hover:text-accent-cyan transition-colors">About</Link>
            <Link href="#experience" className="hover:text-accent-cyan transition-colors">Experience</Link>
            <Link href="#projects" className="hover:text-accent-cyan transition-colors">Projects</Link>
            <Link href="#tech-stack" className="hover:text-accent-cyan transition-colors">Tech Stack</Link>
            <Link href="#journey" className="hover:text-accent-cyan transition-colors">Journey</Link>
            <Link href="#blog" className="hover:text-accent-cyan transition-colors">Blog</Link>
            <Link href="#contact" className="hover:text-accent-cyan transition-colors">Contact</Link>
          </div>
          
          <div className="text-xs text-text-secondary/50 font-mono tracking-widest">
            © {currentYear} ABASH ANSARI
          </div>
        </div>
        
      </div>
    </footer>
  );
}
