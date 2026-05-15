import React from 'react';

const Accessibility: React.FC = () => {
  return (
    <div className="pt-[88px]">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            Accessibility
          </h1>

          <p className="text-gray-700 leading-relaxed mb-6">
            SunnySideUp Building Maintenance is committed to making our website
            accessible to everyone, including people with disabilities.
          </p>

          <div className="space-y-6 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Our goal</h2>
              <p className="leading-relaxed">
                We aim to provide content and functionality that is usable with
                assistive technologies such as screen readers and keyboard
                navigation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">What we do</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Keyboard-accessible navigation and interactive elements.</li>
                <li>Semantic HTML and helpful ARIA labels where appropriate.</li>
                <li>Readable layouts with sufficient contrast.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Feedback</h2>
              <p className="leading-relaxed">
                If you encounter an accessibility barrier, please contact us so
                we can fix it.
              </p>
              <p className="mt-3">
                <a
                  className="text-sky-700 font-semibold underline"
                  href="mailto:sabiri.amin@gmail.com"
                >
                  sabiri.amin@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Ongoing improvements</h2>
              <p className="leading-relaxed">
                We continuously review and improve the accessibility of our
                website as technologies and best practices evolve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accessibility;

