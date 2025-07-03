import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#E3E4FA] to-[#FFE6E8] py-6 text-center text-darkLavender">
      <div className="flex justify-center gap-6 mb-4 text-2xl">
        <a href="https://www.linkedin.com/in/sarojswadithyam/" target="_blank" rel="noopener noreferrer" className="bg-white text-[#0077b5] rounded-full p-3 shadow-lg hover:brightness-110 transition"><FaLinkedin /></a>
        <a href="https://github.com/Saroj-Swadithya" target="_blank" rel="noopener noreferrer" className="bg-[#24292e] text-white rounded-full p-3 shadow-lg hover:brightness-110 transition"><FaGithub /></a>
        <a href="mailto:sarojswadithyam@gmail.com" className="bg-white text-[#ea4335] rounded-full p-3 shadow-lg hover:brightness-110 transition"><FaEnvelope /></a>
      </div>
      <div className="flex flex-col items-center gap-1">
        <p className="text-darkLavender/80 text-sm md:text-base">
          Made with <span className="text-pink-500">❤️</span> ·
          <a href="https://buymeacoffee.com/sarojswadil" target="_blank" rel="noopener noreferrer" className="ml-1 hover:text-[#e56e94] transition-colors">Buy me a coffee <span className="text-lg">☕</span></a>
        </p>  
        <p className="text-darkLavender/60 text-xs md:text-sm mt-1">© 2025 Saroj Swadithya</p>
      </div>
    </footer>
  );
}
