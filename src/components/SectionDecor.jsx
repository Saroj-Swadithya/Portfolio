import { FaStar, FaMagic, FaHeart, FaRegCircle, FaCode, FaBriefcase, FaClock, FaCogs, FaGraduationCap, FaBook, FaLightbulb } from 'react-icons/fa';

const iconStyles = 'absolute opacity-40 pointer-events-none';

const arrangements = {
  about: [
    { icon: <FaStar size={32} color="#e6a9ec" />, style: { top: 20, left: 30 } },
    { icon: <FaMagic size={40} color="#967bb6" />, style: { bottom: 40, right: 60 } },
    { icon: <FaRegCircle size={24} color="#e3e4fa" />, style: { top: 80, right: 40 } },
    { icon: <FaStar size={20} color="#f8f8ff" />, style: { bottom: 30, left: 60 } },
  ],
  projects: [
    { icon: <FaCode size={36} color="#734f96" />, style: { top: 30, left: 60 } },
    { icon: <FaRegCircle size={28} color="#ffe6e8" />, style: { bottom: 60, right: 40 } },
    { icon: <FaHeart size={24} color="#e56e94" />, style: { top: 100, right: 80 } },
    { icon: <FaRegCircle size={20} color="#a1c4fd" />, style: { bottom: 30, left: 100 } },
  ],
  experience: [
    { icon: <FaBriefcase size={32} color="#e6a9ec" />, style: { top: 40, left: 40 } },
    { icon: <FaClock size={28} color="#734f96" />, style: { bottom: 50, right: 60 } },
    { icon: <FaRegCircle size={20} color="#fad0c4" />, style: { top: 120, right: 30 } },
    { icon: <FaRegCircle size={18} color="#e3e4fa" />, style: { bottom: 20, left: 80 } },
  ],
  tech: [
    { icon: <FaCogs size={36} color="#a1c4fd" />, style: { top: 30, left: 80 } },
    { icon: <FaCode size={28} color="#734f96" />, style: { bottom: 60, right: 60 } },
    { icon: <FaRegCircle size={22} color="#e6a9ec" />, style: { top: 100, right: 60 } },
    { icon: <FaRegCircle size={18} color="#c2e9fb" />, style: { bottom: 30, left: 120 } },
  ],
  education: [
    { icon: <FaGraduationCap size={32} color="#e56e94" />, style: { top: 40, left: 60 } },
    { icon: <FaBook size={28} color="#a6c1ee" />, style: { bottom: 60, right: 80 } },
    { icon: <FaLightbulb size={24} color="#fad0c4" />, style: { top: 120, right: 40 } },
    { icon: <FaRegCircle size={20} color="#e3e4fa" />, style: { bottom: 30, left: 100 } },
  ],
};

export default function SectionDecor({ variant }) {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      {arrangements[variant]?.map((item, i) => (
        <span
          key={i}
          className={iconStyles}
          style={{ ...item.style }}
        >
          {item.icon}
        </span>
      ))}
    </div>
  );
}
