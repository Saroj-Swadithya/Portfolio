import { FaHome, FaUser, FaProjectDiagram, FaBriefcase, FaCogs, FaGraduationCap } from 'react-icons/fa';

const navItems = [
  { id: 'home', icon: <FaHome />, label: 'Home' },
  { id: 'about', icon: <FaUser />, label: 'About' },
  { id: 'projects', icon: <FaProjectDiagram />, label: 'Projects' },
  { id: 'experience', icon: <FaBriefcase />, label: 'Experience' },
  { id: 'tech', icon: <FaCogs />, label: 'Tech' },
  { id: 'education', icon: <FaGraduationCap />, label: 'Education' },
];

export default function BubbleNav() {
  return (
    <nav className="fixed top-1/2 right-6 -translate-y-1/2 z-50 flex flex-col gap-6">
      {navItems.map((item, idx) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`group w-14 h-14 flex items-center justify-center rounded-full shadow-xl bg-gradient-to-r from-[#734f96] to-[#e56e94] text-white text-2xl transition-transform duration-300 hover:scale-125 animate-float${idx % 2 === 0 ? '' : '-reverse'}`}
          style={{ animationDelay: `${idx * 0.2}s` }}
          title={item.label}
        >
          {item.icon}
          <span className="absolute left-full ml-3 px-3 py-1 rounded-lg bg-white text-lavenderPurple text-sm shadow opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all pointer-events-none whitespace-nowrap">
            {item.label}
          </span>
        </a>
      ))}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 3s ease-in-out infinite; }
      `}</style>
    </nav>
  );
} 