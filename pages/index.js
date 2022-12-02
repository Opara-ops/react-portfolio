import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube,} from 'react-icons/ai';
import Image from "next/image";
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';



export default function Home() {
  return (
    <div>
      <Head>
        <title>ChukkyOparaPortfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white px-10">
        <section className= "max-h-screen">
          <nav classname="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developedbychukky</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill/>
              </li>
              <li><a className="bg-gradient-to-tl from-cyan-500 to-yellow-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Emmanuel Opara</h2>
            <h3 className= "text-2xl py-2">Developer and Data Research Analyst</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Freelancer providing programming services for career-based students
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-20 py-3 text-gray-500">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-yellow-400 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={deved} layout="fill" objectFit="cover" />

          </div>
          <h1>Hello</h1>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-80">
              Since the beginning of my journey as a freelance developer, I've done some remote jobs for leading <span className= "text-blue-600">organisations </span>in the business world and also implemented projects for <span className= "text-blue-600">startups</span>
            </p>
          </div>
          <div>
            <Image src={design} width={100} height={100} />
            <h3>Simple Web development projects</h3>
            <p>
              Created using next.js, react designs suited to run on localhost
            </p>

          </div>
        </section>

      </main>
    </div>
  );
}
