// import { FaBriefcase } from 'react-icons/fa';
// import BackgroundShapes from '../components/BackgroundShapes';

export default function Experience() {
  const experiences = [
    {
      role: 'Software Developer Intern',
      company: 'Gogaga Entertainment Pvt.Ltd',
      year: 'January 2025 - April 2025',
      desc: 'Built a custom OTT streaming Android app for live events and concerts.',
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* <BackgroundShapes variant="experience" /> */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-5xl w-full">
        <h2 className="text-3xl font-heading mb-10 text-center text-darkLavender">Experience</h2>
        <div className="relative flex flex-col gap-10 px-2">
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#734f96] to-[#e56e94] rounded-full opacity-90" style={{ zIndex: 0 }} />
          {experiences.map((exp, idx) => (
            <div key={exp.role} className="relative flex items-start gap-6 z-10">
              <div className="flex flex-col items-center">
                <span className="w-6 h-6" />
                {idx !== experiences.length - 1 && (
                  <span className="flex-1 w-1 bg-gradient-to-b from-[#734f96] to-[#e56e94] opacity-90" style={{ minHeight: 40 }} />
                )}
              </div>
              <div className="bg-gradient-to-br from-[#e3e4fa] to-[#ffe6e8] rounded-2xl p-6 shadow-md flex-1">
                <h3 className="text-xl font-heading font-bold mb-1 text-darkLavender flex flex-wrap items-center gap-2">
                  {exp.role}
                  <span className="text-sm font-normal text-gray-500">@ {exp.company}</span>
                </h3>
                <p className="text-sm font-semibold mb-1 text-blushRed">{exp.year}</p>
                <p className="text-gray-700">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
