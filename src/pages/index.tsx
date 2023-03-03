import Link from 'next/link'
import { NextSeo } from 'next-seo'

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
              url: '/og-image.jpg',
              width: 800,
              height: 420,
              alt: 'Thuong To - ReactJS TeamLead',
            },
          ],
        }}
      />
      <div className="container mx-auto flex flex-col md:flex-row md:justify-center">
        <div className="border border-gray-300 shadow-lg p-4 md:p-10 md:w-4/5 mt-10 mb-10 bg-[#F0F0F0] rounded-md">
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
              <div>
                {/* <div className="bg-cover bg-no-repeat rounded-full h-52 w-52"
                        style="background-image: url(../bootstrap/dog.jpg)">
                    </div> */}
                <Link href="/cv.pdf" className="text-blue-700">
                  Download PDF
                </Link>
              </div>
              <div className="grid justify-items-end">
                <h1 className="text-4xl md:text-7xl font-extrabold mt-1">Thuong To</h1>
                <p className="text-xl mt-1 md:mt-5">ReactJS Team Lead</p>
              </div>
            </div>
          </header>

          <main className="flex flex-col md:flex-row gap-x-10 mt-10">
            <div className="w-full md:w-4/6">
              <section>
                <h2 className="text-2xl pb-1 border-b font-semibold">About</h2>
                <p className="mt-4 text-sm">
                  Over the past 6 years, I have been working as a ReactJS Developer, honing my skills in developing
                  complex web applications and user interfaces. I have a deep understanding of ReactJS frameworks such
                  as Redux, NextJS, and GatsbyJS, and I am proficient in using tools such as Git, JIRA, and Trello to
                  manage projects and collaborate with team members.
                </p>
                <p className="text-sm mt-1">
                  My experience includes developing responsive websites, implementing RESTful APIs, integrating
                  third-party libraries, and optimizing web applications for performance. I have also worked with a wide
                  range of technologies such as HTML, CSS, JavaScript, and NodeJS to deliver high-quality web solutions
                  to clients across different industries.
                </p>

                <p className="text-sm mt-1">
                  What sets me apart from other developers is my ability to work effectively in a team environment and
                  my commitment to delivering projects on time and within budget. I am a quick learner and I am always
                  willing to take on new challenges to expand my skillset.
                </p>
              </section>

              <section>
                <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">Work Experiences</h2>
                <ul className="mt-2">
                  <li className="pt-2">
                    <div className="flex justify-between items-center text-sm">
                      <div>
                        <strong className="text-base">ReactJS Team Lead at HDBank</strong>
                      </div>
                      <div>10/2021-Now</div>
                    </div>
                    <p className="text-justify text-sm">
                      Development, and implementation of a Fintech Product to enable Vietnam customers to Buy Now, Pay
                      Later services. Muadee by HDBank, One of the first BNPL products made by the Bank in Vietnam.
                    </p>
                    <p className="text-sm">
                      Develop new features flow UI/UX design, write unit test, review code, build structure source for
                      team.
                    </p>
                  </li>

                  <li className="pt-2">
                    <p className="flex justify-between text-sm">
                      <strong className="text-base">Senior ReactJS Developer at Sendo</strong>03/2019-10/2021
                    </p>
                    <p className="text-justify text-sm">
                      Join a scrum team as member. Develop new features flow UI/UX design, write unit test, review code
                      for junior member, build structure source for team.
                    </p>
                  </li>
                  <li className="pt-2">
                    <p className="flex justify-between text-sm">
                      <strong className="text-base">Fullstack Develop at FPT Software</strong>03/2017-02/2019
                    </p>
                    <p className="text-justify text-sm">
                      {`I am a fullstack NodeJS and React developer. As a Front-End Engineer at FPT Software I'm handling
                    complete front-end of the product.
                  `}
                    </p>
                    <p className="text-sm">My responsibilities include: </p>
                    <p className="text-sm">- Making the UI functional using React.JS.</p>
                    <p className="text-sm">- Collaborate with the Backend Engineers.</p>
                    <p className="text-sm">- Optimize the application for maximum speed and scalability.</p>
                    <p className="text-sm">- Build reusable code.</p>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">Education</h2>
                <ul className="mt-2">
                  <li className="pt-2">
                    <p className="flex justify-between text-sm">
                      <strong className="text-base">University of Information Technology</strong>2013-2017
                    </p>
                    <p className="flex justify-between text-sm">
                      Software Engineering<small>GPA 7.8/10</small>
                    </p>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">Projects</h2>

                <ul className="mt-1">
                  <li className="py-2">
                    <div className="flex justify-between my-1">
                      <strong>Sendo</strong>
                      <p className="hidden md:flex">
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">ReactJS</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">Redux</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">Jenkin</span>
                      </p>
                    </div>
                    <ul className="flex mb-2">
                      <li>
                        <a
                          href="https://www.sendo.vn/tien-ich"
                          target="_blank"
                          className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                          rel="noreferrer"
                        >
                          https://www.sendo.vn/tien-ich
                        </a>
                      </li>
                    </ul>
                    <div className="text-sm">
                      <ul>
                        <li>
                          - Buy train/airplane tickets, pay bills online, recharge phones, buy game card scratch cards
                          quickly at Sendo.vn
                        </li>
                        <li>- Convenient payment</li>
                        <li>- Safe</li>
                        <li>- Secure by bank account</li>
                        <li>- Credit card or Senpay e-wallet</li>
                      </ul>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex justify-between my-1">
                      <strong>Muadee Webapp (Admin Portal and Merchant Portal)</strong>
                      <p className="hidden md:flex">
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">React</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">Redux Tookit</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">AWS</span>
                      </p>
                    </div>
                    <ul className="flex mb-2">
                      <li>
                        <a
                          href="https://muadee.com.vn/"
                          target="_blank"
                          className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
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
                      <strong>PlayDapp</strong>
                      <p className="hidden md:flex">
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">ReactJS</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">EtherJS</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">Web3JS</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">Redux Tookit</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">AWS</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">Blockchain</span>
                      </p>
                    </div>
                    <ul className="flex mb-2">
                      <li>
                        <a
                          href="https://playdapp.com/"
                          target="_blank"
                          className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                          rel="noreferrer"
                        >
                          https://playdapp.com
                        </a>
                      </li>
                    </ul>
                    <p className="text-sm">PlayDapp From dApp to Blockchain-Powered Gaming Entertainment Ecosystem</p>
                  </li>

                  <li className="py-2">
                    <div className="flex justify-between my-1">
                      <strong>Fantasy NFT</strong>
                      <p className="hidden md:flex">
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">ReactJS</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">EtherJS</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">Web3JS</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">Redux Tookit</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">AWS</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">Blockchain</span>
                      </p>
                    </div>
                    <ul className="flex mb-2">
                      <li>
                        <a
                          href="https://fantasynft.org/"
                          target="_blank"
                          className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                          rel="noreferrer"
                        >
                          https://fantasynft.org
                        </a>
                      </li>
                    </ul>
                    <p className="text-sm">
                      Fantasy NFT – Create, sell or collect digital items secured with #blockchain
                    </p>
                  </li>

                  <li className="py-2">
                    <div className="flex justify-between my-1">
                      <strong>Fantasy Lottery</strong>
                      <p className="hidden md:flex">
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">ReactJS</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">EtherJS</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">Web3JS</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">Redux Tookit</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">AWS</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">Blockchain</span>
                      </p>
                    </div>
                    <ul className="flex mb-2">
                      <li>
                        <a
                          href="https://fantasynft.org/"
                          target="_blank"
                          className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                          rel="noreferrer"
                        >
                          https://fantasylotterygame.com
                        </a>
                      </li>
                    </ul>
                    <p className="text-sm">Buy ticket and waiting for win in multiple chain </p>
                  </li>

                  <li className="py-2">
                    <div className="flex justify-between my-1">
                      <strong>Real Realm</strong>
                      <p className="hidden md:flex">
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">ReactJS</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">EtherJS</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">Web3JS</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">Redux Tookit</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">AWS</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">Blockchain</span>
                      </p>
                    </div>
                    <ul className="flex mb-2">
                      <li>
                        <a
                          href="https://realrealm.io"
                          className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                        >
                          https://realrealm.io
                        </a>
                      </li>
                    </ul>
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
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">ReactJS</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">NextJS</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">EtherJS</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">Web3JS</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">Redux Tookit</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">AWS</span>
                        <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-sm rounded">Blockchain</span>
                      </p>
                    </div>
                    <ul className="flex mb-2">
                      <li>
                        <a
                          href="https://app.f2nft.games "
                          className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                        >
                          https://app.f2nft.games
                        </a>
                      </li>
                    </ul>
                    <p className="text-sm">F2 NFT is a game NFT with F2C token and Stake feature. </p>
                  </li>
                </ul>
              </section>
            </div>

            <div className="md:w-2/6 mt-6 md:mt-0 flex flex-col md:bg-[#0f2642] md:text-white md:px-3 md:py-4 md:rounded-md">
              <strong className="text-xl font-semibold border-b md:border-none">Contact Details</strong>
              <ul className="mt-2 mb-10">
                <li className="px-2 mt-1">
                  <strong className="mr-1">Phone </strong>
                  <a href="tel:+84986335807" className="block">
                    +84 98 633 5807
                  </a>
                </li>
                <li className="px-2 mt-1">
                  <strong className="mr-1">E-mail </strong>
                  <a href="mailto:thuongthanhto@gmail.com" className="block">
                    thuongthanhto@gmail.com
                  </a>
                </li>
                <li className="px-2 mt-1">
                  <strong className="mr-1">Location</strong>
                  <span className="block">Ho Chi Minh City, Vietnam</span>
                </li>
              </ul>

              <strong className="text-xl font-semibold border-b md:border-none">Skills</strong>
              <ul className="mt-2 mb-10">
                <li className="px-2 mt-1">HTML</li>
                <li className="px-2 mt-1">CSS</li>
                <li className="px-2 mt-1">JavaScript, ES5, ES6</li>
                <li className="px-2 mt-1">React, NextJS</li>
                <li className="px-2 mt-1">Redux Toolkit, Thunk, Saga</li>
                <li className="px-2 mt-1">Node.js, NestJS, Graphql, ExpressJS</li>
                <li className="px-2 mt-1">Postgres, MySql, Mongodb</li>
                <li className="px-2 mt-1">Blockchain, Etherjs, Web3js</li>
                <li className="px-2 mt-1">AWS</li>
              </ul>
              <strong className="text-xl font-semibold border-b md:border-none">Further Education</strong>
              <ul className="mt-2 mb-10">
                <li className="px-2 mt-1">Medium</li>
                <li className="px-2 mt-1">Udemy</li>
                <li className="px-2 mt-1">Linkedin Learning</li>
              </ul>

              <strong className="text-xl font-semibold border-b md:border-none">Currently learning</strong>
              <ul className="mt-2 mb-10">
                <li className="px-2 mt-1">DevOps and Atrchitech</li>
                <li className="px-2 mt-1">User Experience</li>
              </ul>
              <strong className="text-xl font-semibold border-b md:border-none">Interests & Hobbies</strong>
              <ul className="mt-2">
                <li className="px-2 mt-1">Sustainability</li>
                <li className="px-2 mt-1">New technologies</li>
                <li className="px-2 mt-1">Blog</li>
                <li className="px-2 mt-1">Investment</li>
                <li className="px-2 mt-1">Travel</li>
              </ul>
            </div>
          </main>

          <footer className="mt-6">
            <p className="bg-gray-600 text-white text-center text-sm pt-2">
              The best way to predict the future is to create it. <small>- AbrahamLincoln</small>
            </p>
            <p className="bg-gray-600 text-white text-center text-sm pb-2">
              I am creating my future by learning new things and making small progresses everyday.
            </p>
          </footer>
        </div>
      </div>
    </>
  )
}
