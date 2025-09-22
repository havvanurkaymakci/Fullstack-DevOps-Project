import { ArrowRight } from 'lucide-react';

const awards = [
  { title: 'Site Of The Day', description: 'Css & Animation', year: '2018' },
  { title: 'Best Business Model', description: 'New Strategy', year: '2019' },
  { title: 'Motion Graphic', description: '3D & Visual Effect', year: '2020' },
  { title: 'Video Design', description: 'Css & Animation', year: '2022' },
];

export default () => {
  return (
    <section
      className="bg-gray-900 bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden py-16"
    >
      <div
        className="max-w-5xl mx-auto px-3"
      >
        <div
          className="table-responsive"
        >
          <table className="table w-full">
            <tbody>
              <tr>
                <td
                  className="bg-transparent text-lg font-medium text-white py-8 border-b border-b-gray-800"
                >
                  <span
                    className="text-2xl"
                  >Our Awards</span>
                </td>
                <td
                  className="bg-transparent text-lg font-medium text-white py-8 border-b border-b-gray-800"
                ></td>
                <td
                  className="text-end bg-transparent text-lg font-medium text-white py-8 border-b border-b-gray-800"
                >
                  <a
                    href="#"
                    className="text-base flex justify-end items-center text-blue-400 gap-2"
                  >
                    <span className="whitespace-nowrap">View My Work</span>
                    <ArrowRight className="inline" size={16} />
                  </a>
                </td>
              </tr>

              {awards.map((award, index) => (
                <tr key={index}>
                  <td
                    className="bg-transparent text-base font-medium text-white py-8 border-b border-b-gray-800"
                  >
                    {award.title}
                  </td>
                  <td
                    className="bg-transparent text-base font-medium text-white py-8 border-b border-b-gray-800"
                  >
                    {award.description}
                  </td>
                  <td
                    className="text-end bg-transparent text-base font-medium text-white py-8 border-b border-b-gray-800"
                  >
                    {award.year}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}