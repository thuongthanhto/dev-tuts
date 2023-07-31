import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Image from 'next/image'

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <>
      <NextSeo
        title="Thuong To - ReactJS TeamLead"
        titleTemplate="Thuong To - ReactJS TeamLead"
        defaultTitle="Thuong To - ReactJS TeamLead"
        description="I have more than 6 years of experience in ReactJS and 4 years in Blockchain and work on many technologies. I always aspire to discover new knowledge. I can adapt quickly to new technology. I am happy to work in a close team environment. I always apply a positive attitude to every task I undertake."
        canonical="https://thuongthanhto.com/"
        openGraph={{
          url: 'https://thuongthanhto.com/',
          title: 'Thuong To - ReactJS TeamLead',
          description:
            'I have more than 6 years of experience in ReactJS and 4 years in Blockchain and work on many technologies. I always aspire to discover new knowledge. I can adapt quickly to new technology. I am happy to work in a close team environment. I always apply a positive attitude to every task I undertake.',
          images: [
            {
              url: '/avatar.png',
              width: 200,
              height: 200,
              alt: 'Thuong To - ReactJS TeamLead',
            },
          ],
        }}
      />
      <div className="container mx-auto flex flex-col md:flex-row md:justify-center">
        <div className="border border-gray-300 shadow-lg p-4 md:p-10 md:w-4/5 mt-10 mb-10 bg-[#F7FAF7] rounded-md">
          <header>
            <ul className="flex flex-wrap justify-end gap-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/thuongthanhto/"
                  className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    role="img"
                    viewBox="0 0 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/thuongthanhto"
                  className="bg-gray-700 p-2 font-medium text-white inline-flex items-center space-x-2 rounded"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="w-5"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Image src="/avatar.png" alt="Picture of the author" width={200} height={200} className="rounded" />
                <div className="ml-5">
                  <h1 className="text-4xl md:text-7xl font-extrabold mt-1">Thuong To</h1>
                  <p className="text-xl mt-1 md:mt-5 ml-5">ReactJS Team Lead</p>
                </div>
              </div>

              <div>
                <Link href="/cv.pdf" className="text-blue-700">
                  Download PDF
                </Link>
              </div>
            </div>
          </header>

          <main className="flex flex-col md:flex-row gap-x-10 mt-10">
            <div className="w-full md:w-4/6">
              <section>
                <h2 className="text-2xl pb-1 border-b font-semibold">About</h2>
                <p className="mt-4 text-sm">
                  Over the past 7 years, I have worked with a wide range of technologies such as HTML, CSS, JavaScript,
                  and NodeJS to deliver high-quality web solutions to clients across different industries. I have been
                  working as a ReactJS Developer, honing my skills in developing complex web applications and user
                  interfaces. I have a deep understanding of ReactJS frameworks such as Redux, NextJS, and GraphQL, and
                  I am proficient in using tools such as Git, JIRA, and Trello to manage projects and collaborate with
                  team members.
                </p>
                <p className="text-sm mt-1">
                  My experience includes developing responsive websites, implementing RESTful APIs, integrating
                  third-party libraries, and optimizing web applications for performance.
                </p>

                <p className="text-sm mt-1">
                  What sets me apart from other developers is my ability to work effectively in a team environment and
                  my commitment to delivering projects on time and within budget. I am a quick learner and I am always
                  willing to take on new challenges to expand my skill set.
                </p>
              </section>

              <section>
                <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">Work Experiences</h2>
                <ul className="mt-2">
                  <li className="pt-3">
                    <div className="flex justify-between items-center text-sm">
                      <div>
                        <strong className="text-base">ReactJS Team Lead at HDBank</strong>
                      </div>
                      <div>October 2021 up to Present</div>
                    </div>

                    <ul className="ml-4 list-disc">
                      <li className="text-sm mt-1">
                        <strong>Responsible</strong> for building the structure and source code for the team.
                      </li>
                      <li className="text-sm mt-1">
                        <strong>Ensures</strong> that the product was being made as scalable, maintainable, and easily
                        extensible.
                      </li>
                      <li className="text-sm mt-1">
                        <strong>Develops</strong> and implements the Muadee BNPL product for HDBank and works on a
                        cutting-edge Fintech products
                      </li>
                    </ul>
                  </li>

                  <li className="pt-4">
                    <p className="flex justify-between text-sm">
                      <strong className="text-base">Senior ReactJS Developer at Sendo</strong>March 2019 to October 2021
                    </p>

                    <ul className="ml-4 list-disc">
                      <li className="text-sm mt-1">
                        <strong>Developed</strong> and <strong>maintained</strong> various features that helped improve
                        the user experience of the website. I specially worked on the features for:
                        <ul className="ml-1">
                          <li>- Air ticket booking</li>
                          <li>- Train ticket booking.</li>
                          <li>- Pay & bill</li>
                          <li>- Mobile card top up</li>
                          <li>- Back office website management</li>
                        </ul>
                      </li>
                      <li className="text-sm mt-1">
                        <strong>Performed</strong> web development and user interface design.
                      </li>
                      <li className="text-sm mt-1">
                        <strong>Coordinated</strong> and <strong>Handled</strong> with different APIs and integrate
                        third-party systems into the website.
                      </li>
                    </ul>
                  </li>
                  <li className="pt-4">
                    <p className="flex justify-between text-sm">
                      <strong className="text-base">Front-End Engineer at FPT Software</strong>March 2017 to February
                      2019
                    </p>
                    <ul className="ml-4 list-disc">
                      <li className="text-sm mt-1">
                        <strong>Coordinated</strong> and <strong>Handled</strong> complete front-end engineering of the
                        product
                      </li>
                      <li className="text-sm mt-1">
                        <strong>Performed</strong> as a React Developer
                      </li>
                      <li className="text-sm mt-1">
                        <strong>Managed</strong> the responsibilities including:
                        <ul className="ml-1">
                          <li>- Creation of the UI functionalities using ReactJS.</li>
                          <li>- Collaboration with the Backend Engineers.</li>
                          <li>- Optimization of the web application for maximum speed and scalability.</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">Education</h2>
                <ul className="mt-2">
                  <li className="pt-2">
                    <p className="flex justify-between text-sm">
                      <strong className="text-base">University of Information Technology (2013-2017)</strong>
                    </p>
                    <p className="flex justify-between text-sm">
                      Software Engineering<strong>GPA 8.2/10</strong>
                    </p>
                  </li>
                  <li className="pt-2 border-t mt-3">
                    <p className="flex justify-between text-sm">
                      <strong className="text-base">TOEIC Certification (May 2022)</strong>
                      <strong>Score: 745</strong>
                    </p>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">Projects</h2>

                <h3 className="underline font-bold mt-5 uppercase italic">Corporate Projects:</h3>

                <ul className="mt-1">
                  <li className="py-2">
                    <div className="flex justify-between my-1">
                      <div>
                        <div><strong>Muadee Websites </strong></div>
                        <div className="text-sm italic">(LandingPage, Admin Portal, Merchant Portal and Payment Gateway)</div>
                      </div>

                      <p className="hidden md:flex">
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">React</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">Redux Tookit</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">AWS</span>
                      </p>
                    </div>
                    <ul className="flex mb-2">
                      <li>
                        <a
                          href="https://muadee.com.vn/"
                          target="_blank"
                          className="text-[#108a00] font-medium py-1 mr-1 rounded"
                          rel="noreferrer"
                        >
                          https://muadee.com.vn
                        </a>
                      </li>
                    </ul>
                    <p className="text-sm">
                      Buy now, pay in installments. no need to worry about fees. Split bills and pay in 3-4 months with
                      the first "Make in Bank" application in Vietnam.
                    </p>
                  </li>
                  <li className="py-2">
                    <div className="flex justify-between my-1">
                      <strong>Sendo</strong>
                      <p className="hidden md:flex">
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">ReactJS</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">Redux</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">Jenkin</span>
                      </p>
                    </div>
                    <ul className="flex mb-2">
                      <li>
                        <a
                          href="https://www.sendo.vn/tien-ich"
                          target="_blank"
                          className="text-[#108a00] font-medium py-1 mr-1 rounded"
                          rel="noreferrer"
                        >
                          https://www.sendo.vn/tien-ich
                        </a>
                      </li>
                    </ul>
                    <div className="text-sm">
                      <ul className="list-disc ml-3">
                        <li>
                          Buy train/airplane tickets, pay bills online, recharge phones, buy game card scratch cards
                          quickly at Sendo.vn
                        </li>
                        <li>Convenient payment</li>
                        <li>Safe</li>
                        <li>Secure by bank account</li>
                        <li>Credit card or Senpay e-wallet</li>
                      </ul>
                    </div>
                  </li>
                </ul>

                <h3 className="underline font-bold uppercase mt-5 italic">Freelance Projects:</h3>

                <ul className="mt-1">
                  <li className="py-2">
                    <div className="flex justify-between my-1">
                      <strong>PlayDapp</strong>
                      <p className="hidden md:flex">
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">ReactJS</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">EtherJS</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">Web3JS</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">Redux Tookit</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">AWS</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">Blockchain</span>
                      </p>
                    </div>
                    <ul className="flex mb-2">
                      <li>
                        <a
                          href="https://playdapp.com/"
                          target="_blank"
                          className="text-[#108a00] font-medium py-1 mr-1 rounded"
                          rel="noreferrer"
                        >
                          https://playdapp.com
                        </a>
                      </li>
                    </ul>
                    <p className="text-sm">PlayDapp From dApp to Blockchain-Powered Gaming Entertainment Ecosystem. </p>
                  </li>

                  <li className="py-2">
                    <div className="flex justify-between my-1">
                      <strong>Real Realm</strong>
                      <p className="hidden md:flex">
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">ReactJS</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">EtherJS</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">Web3JS</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">Redux Tookit</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">AWS</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">Blockchain</span>
                      </p>
                    </div>

                    <p className="text-sm">
                      Real Realm is a war strategy game with millions users. Acknowledging the enormous potential in the
                      world of blockchain, Real Realm is now integrated and enhanced, aiming to be an innovative
                      blockchain-based game that naturally applies Free-to-play and Play-to-enjoy mechanisms by unique
                      algorithms.
                    </p>
                  </li>

                  <li className="py-2">
                    <div className="flex justify-between my-1">
                      <strong>F2 NFT</strong>
                      <p className="hidden md:flex">
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">ReactJS</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">NextJS</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">EtherJS</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">Web3JS</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">Redux Tookit</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">AWS</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">Blockchain</span>
                      </p>
                    </div>
                    <ul className="flex mb-2">
                      <li>
                        <a href="https://app.f2nft.games" className="text-[#108a00] font-medium py-1 mr-1 rounded">
                          https://app.f2nft.games
                        </a>
                      </li>
                    </ul>
                    <p className="text-sm">F2 NFT is a game NFT with F2C token and Stake feature. </p>
                  </li>

                  <li className="py-2">
                    <div className="flex justify-between my-1">
                      <strong>Alita Finance</strong>
                      <p className="hidden md:flex">
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">ReactJS</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">EtherJS</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">Web3JS</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">Redux Tookit</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">AWS</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">Blockchain</span>
                      </p>
                    </div>
                    <ul className="flex mb-2">
                      <li>
                        <a href="https://app.alita.finance/#/" className="text-[#108a00] font-medium py-1 mr-1 rounded">
                          https://app.alita.finance/#/
                        </a>
                      </li>
                    </ul>
                    <p className="text-sm">
                      Alita Finance - Connecting Centralized And Decentralized Trading Platforms Worldwide{' '}
                    </p>
                    <p className="text-sm">
                      Trade and Earn on the most effective Decentralized Exchange and Yield Farming platform
                    </p>
                  </li>

                  <li className="py-2">
                    <div className="flex justify-between my-1">
                      <strong>Etermon</strong>
                      <p className="hidden md:flex">
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">ReactJS</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">EtherJS</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">Web3JS</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">Redux Tookit</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">AWS</span>
                        <span className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">Blockchain</span>
                      </p>
                    </div>
                    <ul className="flex mb-2">
                      <li>
                        <a href="https://etermon.io/" className="text-[#108a00] font-medium py-1 mr-1 rounded">
                          https://etermon.io/
                        </a>
                      </li>
                    </ul>
                    <p className="text-sm">
                      Etermon is an NFT Game, a diverse monster world where you can PLAY, RELAX and EARN
                    </p>
                  </li>
                </ul>
              </section>
            </div>

            <div className="md:w-2/6 mt-6 md:mt-0 flex flex-col md:bg-[#0f2642] md:text-white md:px-3 md:py-4 md:rounded-md">
              <strong className="text-xl font-semibold border-b md:border-none">Contact Details</strong>
              <ul className="mt-2 mb-10">
                <li className="px-2 mt-1">
                  <strong className="mr-1">Phone </strong>
                  <a href="tel:+84986335807" className="block ml-1 hover:underline italic">
                    +84 98 633 5807
                  </a>
                </li>
                <li className="px-2 mt-1">
                  <strong className="mr-1">E-mail </strong>
                  <a href="mailto:thuongthanhto@gmail.com" className="block ml-1 hover:underline italic">
                    thuongthanhto@gmail.com
                  </a>
                </li>
                <li className="px-2 mt-1">
                  <strong className="mr-1">Location</strong>
                  <span className="block ml-1 italic">Ho Chi Minh City, Vietnam</span>
                </li>
              </ul>

              <strong className="text-xl font-semibold border-b md:border-none">Skills</strong>

              <div className="ml-1 mb-10">
                <div className="font-semibold mt-1">Frontend</div>
                <ul className="mt-2 italic">
                  <li className="px-2 mt-1">HTML5</li>
                  <li className="px-2 mt-1">CSS3, TailwindCSS</li>
                  <li className="px-2 mt-1">JavaScript, ES5, ES6</li>
                  <li className="px-2 mt-1">React, NextJS</li>
                  <li className="px-2 mt-1">Redux Toolkit, Thunk, Saga</li>
                  <li className="px-2 mt-1">Blockchain, EtherJS, Web3JS</li>
                </ul>
                <div className="font-semibold mt-2">Backend</div>
                <ul className="mt-2 italic">
                  <li className="px-2 mt-1">NodeJS, NestJS, GraphQL, ExpressJS</li>
                  <li className="px-2 mt-1">Postgres, MySql, MongoDB</li>
                </ul>
                <div className="font-semibold mt-2">Devops</div>
                <ul className="mt-2 italic">
                  <li className="px-2 mt-1">AWS</li>
                  <li className="px-2 mt-1">Vercel, Heroku</li>
                </ul>
              </div>

              <strong className="text-xl font-semibold border-b md:border-none">Further Education</strong>
              <ul className="mt-2 mb-10">
                <li className="px-2 mt-1">Udemy</li>
                <li className="px-2 mt-1">Coursera</li>
                <li className="px-2 mt-1">Pluralsight</li>
              </ul>

              <strong className="text-xl font-semibold border-b md:border-none">Currently learning</strong>
              <ul className="mt-2 mb-10">
                <li className="px-2 mt-1">Solution Architect and DevOps</li>
                <li className="px-2 mt-1">User Experience</li>
              </ul>
              <strong className="text-xl font-semibold border-b md:border-none">Interests & Hobbies</strong>
              <ul className="mt-2 mb-10">
                <li className="px-2 mt-1">Sustainability</li>
                <li className="px-2 mt-1">New technologies</li>
                <li className="px-2 mt-1">Blog</li>
                <li className="px-2 mt-1">Investment</li>
                <li className="px-2 mt-1">Travel</li>
              </ul>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
