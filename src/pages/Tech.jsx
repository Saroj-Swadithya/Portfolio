import { FaCode, FaGlobe, FaMobileAlt, FaDatabase, FaTools, FaChartBar, FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaDatabase as FaDb, FaAndroid, FaJava } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiFirebase, SiPostman, SiTableau } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
// import BackgroundShapes from '../components/BackgroundShapes';
import React from 'react';
import emailjs from 'emailjs-com';
import { useState } from 'react';

// Data structure for categories and techs
const gradientId = 'mainIconGradient';
const gradientSvg = (
  <defs>
    <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#734f96" />
      <stop offset="100%" stopColor="#e56e94" />
    </linearGradient>
  </defs>
);
const categories = [
  {
    name: 'Programming Languages',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {gradientSvg}
        <rect width="64" height="64" rx="12" fill="white" />
        <text x="32" y="42" textAnchor="middle" fontSize="36" fontWeight="bold" fill="url(#mainIconGradient)" fontFamily="monospace">{'</>'}</text>
      </svg>
    ),
    techs: [
      { name: 'Java', icon: <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer"><FaJava className="text-4xl text-[#007396]" /></a> },
      { name: 'Python', icon: <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer"><FaPython className="text-4xl text-[#3776AB]" /></a> },
      { name: 'C', icon: <a href="https://www.c-language.org/" target="_blank" rel="noopener noreferrer"><FaCode className="text-4xl text-[#A8B9CC]" /></a> },
      { name: 'SQL', icon: <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer"><FaDb className="text-4xl text-[#e38c00]" /></a> },
      { name: 'JavaScript', icon: <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer"><SiJavascript className="text-4xl text-[#f7df1e]" style={{color:'#f7df1e'}} /></a> },
    ],
  },
  {
    name: 'Web Development',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {gradientSvg}
        <rect width="64" height="64" rx="12" fill="white" />
        <circle cx="32" cy="32" r="18" stroke="url(#mainIconGradient)" strokeWidth="4" fill="none" />
        <path d="M32 14a18 18 0 0 1 0 36M14 32h36" stroke="url(#mainIconGradient)" strokeWidth="4" fill="none" />
        <ellipse cx="32" cy="32" rx="8" ry="18" stroke="url(#mainIconGradient)" strokeWidth="4" fill="none" />
      </svg>
    ),
    techs: [
      { name: 'HTML', icon: <a href="https://html.com/" target="_blank" rel="noopener noreferrer"><FaHtml5 className="text-4xl text-[#e34c26]" /></a> },
      { name: 'CSS', icon: <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noopener noreferrer"><FaCss3Alt className="text-4xl text-[#1572B6]" /></a> },
      { name: 'JavaScript', icon: <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer"><SiJavascript className="text-4xl text-[#f7df1e]" style={{color:'#f7df1e'}} /></a> },
      { name: 'React', icon: <a href="https://react.dev/" target="_blank" rel="noopener noreferrer"><FaReact className="text-4xl text-[#61dafb]" /></a> },
      { name: 'Node.js', icon: <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"><FaNodeJs className="text-4xl text-[#339933]" /></a> },
    ],
  },
  {
    name: 'Mobile Development',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {gradientSvg}
        <rect width="64" height="64" rx="12" fill="white" />
        <rect x="20" y="16" width="24" height="32" rx="4" stroke="url(#mainIconGradient)" strokeWidth="4" fill="none" />
        <circle cx="32" cy="44" r="2" fill="url(#mainIconGradient)" />
      </svg>
    ),
    techs: [
      { name: 'Android Studio', icon: <a href="https://developer.android.com/studio" target="_blank" rel="noopener noreferrer"><FaAndroid className="text-4xl text-[#3DDC84]" /></a> },
    ],
  },
  {
    name: 'Databases',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {gradientSvg}
        <rect width="64" height="64" rx="12" fill="white" />
        <ellipse cx="32" cy="20" rx="16" ry="6" stroke="url(#mainIconGradient)" strokeWidth="4" fill="none" />
        <ellipse cx="32" cy="32" rx="16" ry="6" stroke="url(#mainIconGradient)" strokeWidth="4" fill="none" />
        <ellipse cx="32" cy="44" rx="16" ry="6" stroke="url(#mainIconGradient)" strokeWidth="4" fill="none" />
      </svg>
    ),
    techs: [
      { name: 'MongoDB', icon: <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer"><SiMongodb className="text-4xl text-[#47A248]" /></a> },
      { name: 'Firebase', icon: <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer"><SiFirebase className="text-4xl text-[#FFCA28]" /></a> },
      { name: 'SQL', icon: <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer"><FaDb className="text-4xl text-[#e38c00]" /></a> },
    ],
  },
  {
    name: 'DevOps & Tools',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {gradientSvg}
        <rect width="64" height="64" rx="12" fill="white" />
        <g stroke="url(#mainIconGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M20 44L44 20" />
          <path d="M28 20L20 28L36 44L44 36" />
          <rect x="28" y="28" width="8" height="8" rx="2" fill="url(#mainIconGradient)" stroke="none" />
        </g>
      </svg>
    ),
    techs: [
      { name: 'Docker', icon: <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer"><FaDocker className="text-4xl text-[#2496ED]" /></a> },
      { name: 'Git', icon: <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer"><FaGitAlt className="text-4xl text-[#F05032]" /></a> },
      { name: 'GitHub', icon: <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub className="text-4xl text-[#181717]" /></a> },
      { name: 'Postman', icon: <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer"><SiPostman className="text-4xl text-[#FF6C37]" /></a> },
      { name: 'VS Code', icon: <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer"><VscVscode className="text-4xl text-[#007ACC]" /></a> },
    ],
  },
  {
    name: 'Data Visualization',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {gradientSvg}
        <rect width="64" height="64" rx="12" fill="white" />
        <rect x="18" y="36" width="6" height="10" rx="2" fill="url(#mainIconGradient)" />
        <rect x="28" y="28" width="6" height="18" rx="2" fill="url(#mainIconGradient)" />
        <rect x="38" y="20" width="6" height="26" rx="2" fill="url(#mainIconGradient)" />
        <rect x="18" y="48" width="26" height="4" rx="2" fill="url(#mainIconGradient)" />
      </svg>
    ),
    techs: [
      { name: 'Tableau', icon: <a href="https://www.tableau.com/" target="_blank" rel="noopener noreferrer"><SiTableau className="text-4xl text-[#E97627]" /></a> },
    ],
  },
];

// Scaffold TechCategoryCard (to be implemented)
function TechCategoryCard({ category }) {
  const [flipped, setFlipped] = React.useState(false);

  // Handle flip on click (mobile) and hover (desktop)
  const handleFlip = () => setFlipped((f) => !f);

  return (
    <div
      className="w-full h-48 md:h-56 cursor-pointer [perspective:1200px]"
      onClick={handleFlip}
      onMouseEnter={() => window.innerWidth > 768 && setFlipped(true)}
      onMouseLeave={() => window.innerWidth > 768 && setFlipped(false)}
    >
      <div
        className={`relative w-full h-full duration-700 [transform-style:preserve-3d]`}
        style={{ transform: flipped ? 'rotateY(180deg)' : 'none' }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg z-10" style={{ backfaceVisibility: 'hidden' }}>
          <div className="flex flex-col items-center">
            <div className="mb-2 flex items-center justify-center">{category.icon}</div>
            <div className="text-base md:text-lg font-bold text-darkLavender text-center">{category.name}</div>
          </div>
        </div>
        {/* Back Side */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#e3e4fa] to-[#ffe6e8] rounded-2xl shadow-lg text-darkLavender z-20" style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center items-center h-full w-full">
            {category.techs.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center">
                <div className="text-2xl md:text-3xl mb-1">{tech.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Tech() {
  return (
    <section className="min-h-screen flex items-center justify-center px-2 py-10 relative overflow-hidden">
      {/* <BackgroundShapes variant="tech" /> */}
      <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-8 max-w-5xl w-full">
        <h2 className="text-2xl md:text-3xl font-heading mb-6 md:mb-8 text-darkLavender text-center">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 justify-center">
          {categories.map((category) => (
            <TechCategoryCard key={category.name} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function CoffeeAndChat() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    try {
      await emailjs.send(
        'service_w3nay17',
        'template_4uhkggp',
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        'xT9ebCzDZk1SWbDwV'
      );
      setStatus('Message sent! I will get back to you soon.');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="flex flex-col items-center justify-center py-12 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full">
        <h2 className="text-2xl md:text-3xl font-heading mb-6 text-darkLavender text-center">Coffee & Chat</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="rounded-xl border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#734f96]" required />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email" className="rounded-xl border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#734f96]" required />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows={4} className="rounded-xl border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#734f96] resize-none" required />
          <button type="submit" className="mt-2 bg-gradient-to-r from-[#734f96] to-[#e56e94] text-white font-bold py-2 rounded-xl shadow-md hover:scale-105 transition-transform">Chat</button>
        </form>
        {status && <div className="mt-4 text-center text-sm text-darkLavender">{status}</div>}
      </div>
    </section>
  );
}
