import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-[#00df9a] font-semibold tracking-wide uppercase">Contact</h2>
        </div>
        <div className="mt-10">
          <div className="max-w-2xl mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src="https://source.unsplash.com/random/800x800/?person" alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Tomáš Nehoda
                  </p>
                  <p className="text-sm text-gray-500">
                    777 444 555
                  </p>
                  <p className="text-sm text-gray-500">
                    tomasnehoda@example.com
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src="https://source.unsplash.com/random/800x800/?person" alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Jaromír Erben
                  </p>
                  <p className="text-sm text-gray-500">
                    789 453 666
                  </p>
                  <p className="text-sm text-gray-500">
                    jaromirerben@example.com
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src="https://source.unsplash.com/random/800x800/?person" alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    David Nový
                  </p>
                  <p className="text-sm text-gray-500">
                    774 285 555
                  </p>
                  <p className="text-sm text-gray-500">
                    davidnovy@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
