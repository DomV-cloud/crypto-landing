import React from "react";
import Navbar from "../components/Navbar";

function Program() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative mb-8 lg:mb-0 lg:row-start-1 lg:col-start-2">
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure >
                <div className="mb-8">
                  <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-[#00df9a] sm:text-4xl sm:leading-10">
                    Program našeho setkání
                  </h2>
                </div>
                <div className="mb-8 text-white">
                  <p className="text-lg leading-7 text-white">
                    Toto setkání se bude konat na adrese: Ječná 30, Praha.
                  </p>
                  <p className="text-lg leading-7 text-white">
                    Program zahrnuje následující aktivity:
                  </p>
                  <ul className="list-disc pl-8 mb-8">
                    <li className="text-lg leading-7 text-white">
                      Přednáška o budoucnosti technologií.
                    </li>
                    <li className="text-lg leading-7 text-white">
                      Interaktivní workshopy.
                    </li>
                    <li className="text-lg leading-7 text-white">
                      Networking s ostatními účastníky.
                    </li>
                  </ul>
                  <p className="text-lg leading-7 text-white">
                    Přijďte se k nám připojit a strávit skvělý den plný nových
                    zážitků a poznání!
                  </p>
                </div>
              </figure>
            </div>
          </div>
          <div>
            <div className="mb-8">
              <h3 className="text-lg font-medium leading-6 text-white">
                Další setkání:
              </h3>
            </div>
            <div className="mb-8">
              <a
                href="https://www.example.com/setkani-1"
                className="text-lg leading-7 text-white hover:underline"
              >
                Setkání 1
              </a>
            </div>
            <div className="mb-8">
              <a
                href="https://www.example.com/setkani-2"
                className="text-lg leading-7 text-white hover:underline"
              >
                Setkání 2
              </a>
            </div>
            <div className="mb-8">
              <a
                href="https://www.example.com/setkani-3"
                className="text-lg leading-7 text-white hover:underline"
              >
                Setkání 3
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Program;
