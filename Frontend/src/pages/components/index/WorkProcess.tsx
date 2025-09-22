import React from 'react';

const steps = [
  {
    title: 'Concept',
    description: 'Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit',
    items: [
      'Reviewing any existing branding',
      'Target audience and competitors research',
      'Developing a strategy'
    ]
  },
  {
    title: 'Design',
    description: 'Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit',
    items: [
      'Developing wireframes and mockup',
      'Choosing typography, color palettes,',
      'Refining the design'
    ]
  },
  {
    title: 'Webflow',
    description: 'Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit',
    items: [
      'Testing the website thoroughly launch',
      'Choosing typography, color palettes,',
      'Refining the design'
    ]
  }
];

export default () => {
  return (
    <section className="bg-gray-900 bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden pt-16 pb-16">
      <div className="max-w-6xl mx-auto px-3">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p
            className="text-2xl font-serif text-blue-400 relative flex justify-center items-center gap-6 mx-auto mb-6"
          >
            <span className="w-16 h-px bg-blue-400"></span>
            Working Process
            <span className="w-16 h-px bg-blue-400"></span>
          </p>
          <h2
            className="font-medium text-4xl text-white leading-tight"
          >
            Your Dream Website In Just Few Steps
          </h2>
        </div>
        {/* Heading */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="overflow-hidden duration-500 border border-gray-700 rounded-lg p-6 relative after:absolute after:w-12 after:h-12 after:bottom-0 after:right-0 after:content-[''] after:bg-gray-800 after:rounded-tl-[100px] after:rounded-tr-[20px] after:duration-500 hover:border-blue-400 hover:after:bg-blue-400">
                <h2 className="text-white mb-4 capitalize text-3xl leading-tight font-semibold">
                  {step.title}
                </h2>
                <p className="mb-6 text-gray-400 text-lg">
                  {step.description}
                </p>
                <ul>
                  {step.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="relative flex items-center gap-2 text-gray-400 pl-5 mb-2 last:mb-0"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <p className="text-sm">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}