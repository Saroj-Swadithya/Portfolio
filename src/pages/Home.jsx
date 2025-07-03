import { triggerConfetti } from '../hooks/useConfetti';
import profileImg from '../assets/profile.jpeg';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-lavenderPinocchio to-softWhite">
      

      {/* 💬 Heading and CTA */}
      <h1 className="text-5xl font-heading mb-4 text-darkLavender">
        Hello, I'm{' '}
        <span className="relative">
          <span className="bg-[linear-gradient(to_top,#e56e94_20%,#d1d5db_100%)] bg-clip-text text-transparent inline-block">
            Saroj Swadithya!
          </span>
        </span>
      </h1>
      
      <TypeAnimation
        sequence={[
          'Software Developer 👩🏻‍💻', 2000,
          'Frontend Developer ❤️', 2000,
          'Data Analyst 📊', 2000,
        ]}
        wrapper="h2"
        speed={50}
        repeat={Infinity}
        className="text-xl text-lavenderPurple mb-4"
      />

      <a
        href="#projects"
        onClick={triggerConfetti}
        className="mt-6 px-6 py-3 bg-gradient-to-r from-[#734f96] to-[#e56e94] text-white rounded-full shadow-lg hover:brightness-110 hover:scale-105 transition font-semibold"
      >
        View My Work ✨
      </a>
    </section>
  );
}
