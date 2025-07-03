import profileImg from '../assets/profile.jpeg';
import { FaGithub, FaCoffee } from 'react-icons/fa';
// import BackgroundShapes from '../components/BackgroundShapes';
// import SectionDecor from '../components/SectionDecor';

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* <BackgroundShapes variant="about" /> */}
      {/* <SectionDecor variant="about" /> */}
      <div className="bg-white rounded-3xl shadow-2xl flex flex-col items-center gap-4 p-8 max-w-5xl w-full relative z-10">
        <div
          className="p-1 bg-gradient-to-r from-[#734f96] to-[#e56e94] rounded-full mb-2 flex items-center justify-center animate-smoothfloat"
          style={{ width: 136, height: 136 }}
        >
          <img
            src={profileImg}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover bg-white p-1"
          />
        </div>
        <style>{`
          @keyframes smoothfloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
          .animate-smoothfloat {
            animation: smoothfloat 5s ease-in-out infinite;
          }
        `}</style>
        <h2 className="text-3xl font-heading mb-2 text-darkLavender text-center">About Me</h2>
        <p className="max-w-xl text-gray-700 text-center">
          I build intuitive interfaces, write clean code, and turn data into meaningful insights. I blend art and code to build user-centric experiences.
        </p>
        {/* Coffee & Code and Social Buttons - below description */}
        <div className="flex flex-col items-center mt-4">
          <span className="text-base font-semibold mb-2 flex items-center gap-2 font-sans">
            <FaCoffee className="inline-block align-middle text-2xl" style={{ color: '#a0522d' }} />
            <span className="bg-gradient-to-r from-[#e56e94] to-[#734f96] bg-clip-text text-transparent">Coffee & Code?</span>
          </span>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/sarojswadithyam/"
              className="flex items-center gap-2 px-5 py-2 rounded-full shadow-lg font-semibold text-white bg-gradient-to-r from-[#0077b5] to-[#00a0dc] hover:brightness-110 transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg className="inline-block align-middle" width="1.3em" height="1.3em" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/Saroj-Swadithya"
              className="flex items-center gap-2 px-5 py-2 rounded-full shadow-lg font-semibold text-white bg-[#24292e] hover:brightness-110 transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="inline-block align-middle text-xl" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
