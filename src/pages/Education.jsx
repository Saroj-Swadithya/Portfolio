// import BackgroundShapes from '../components/BackgroundShapes';

export default function Education() {
  const education = [
    {
      degree: 'B.Tech Computer Science and Engineering (Artificial Intelligence)',
      school: 'Karunya Institute of Technology and Sciences',
      cgpa: 'CGPA as of 6th Semester: 7.88',
      year: 'Aug 2022 - May 2026',
    },
    {
      degree: 'Class 12',
      school: 'The TVS School',
      cgpa: 'Percentage: 81.3%',
      year: 'June 2021 - May 2022',
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* <BackgroundShapes variant="education" /> */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-5xl w-full">
        <h2 className="text-3xl font-heading mb-10 text-center text-darkLavender">Education</h2>
        <div className="relative flex flex-col gap-10 px-2">
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#734f96] to-[#e56e94] rounded-full opacity-90" style={{ zIndex: 0 }} />
          {education.map((edu, idx) => (
            <div key={edu.degree} className="relative flex items-start gap-6 z-10">
              <div className="flex flex-col items-center">
                <span className="w-6 h-6" />
                
              </div>
              <div className="bg-gradient-to-br from-[#e3e4fa] to-[#ffe6e8] rounded-2xl p-6 shadow-md flex-1">
                <p className="text-md text-gray-700 font-semibold mb-1">{edu.school}</p>
                <h3 className="text-xl font-heading font-bold mb-1 text-darkLavender">{edu.degree}</h3>
                <p className="text-sm font-semibold text-blushRed">{edu.cgpa}</p>
                <p className="text-sm font-semibold text-gray-700">{edu.year}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
