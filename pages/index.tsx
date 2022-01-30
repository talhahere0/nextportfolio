import Head from 'next/head'
import { motion } from 'framer-motion'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

export default function Home() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  return (
    <>
      <Head>
        <title>Talha Zulfiqar | Web Developer</title>
      </Head>
      <div className="h-16 border">
        <div className="flex">
          <motion.div
            animate={{ x: 30 }}
            transition={{ type: 'spring', stiffness: 50 }}
          >
            <div
              style={{ width: '40px', height: '40px' }}
              className="rounded-full p-1"
            >
              <img
                src="img1.jpg"
                style={{ width: '100%', height: '100%' }}
                className=" mt-3 rounded-full border-2 border-solid border-cyan-500 object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            animate={{ x: 30 }}
            transition={{ type: 'spring', stiffness: 50 }}
          >
            <h1 className="ml-2 mt-4 cursor-pointer font-sans text-lg font-medium text-stone-600 hover:text-cyan-500">
              Talha Zulfiqar
            </h1>
          </motion.div>
        </div>

        <motion.div
          animate={{ x: -30 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <a
            href="https://www.linkedin.com/in/talha-916837185/"
            target="_blank"
          >
            <BsLinkedin className="float-right -mt-7 mr-2 text-2xl" />
          </a>
        </motion.div>
      </div>

      <div className="colorful flex min-h-screen flex-col items-center  py-2">
        <motion.div
          animate={{ y: 30 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <div
            style={{ width: '200px', height: '200px' }}
            className="gradientborders rounded-full p-1"
          >
            <img
              src="img1.jpg"
              className="rounded-full object-cover"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </motion.div>

        <span className="mt-10 font-sans font-medium text-stone-600 sm:text-lg md:text-3xl">
          TalHa Zulfiqar | Web Developer
        </span>

        <p className="mt-2 text-center font-sans text-stone-600 sm:text-sm md:text-lg">
          Hi, I am Mern Stack Developer, Learn new technologies is my passion,
        </p>

        <p className=" text-center font-sans font-semibold text-stone-600 sm:text-sm md:text-lg">
          Reactjs | Expressjs | Nodejs
        </p>
        <p className="mt-2 text-center font-sans text-stone-600 sm:text-sm md:text-lg">
          📫 How to reach me: Muhammadtalha6063@gmail.com.
        </p>
        <p className="mt-2 text-center font-sans text-stone-600 sm:text-sm md:text-lg">
          👯 I’m looking to collaborate on any new project.
        </p>
        <p className="mt-2 text-center font-sans text-stone-600 sm:text-sm md:text-lg">
          💬 Ask me about any web application technologies.
        </p>
        <p className="mt-2 text-center font-sans text-stone-600 sm:text-sm md:text-lg">
          ⚡ Currently Working on Blockchain Project.
        </p>

        <motion.div
          animate={{ y: -50 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <div className="mt-16 flex gap-10 text-2xl ">
            <a href="https://github.com/talhahere0" target="_blank">
              <BsGithub className="hover:scale-150" />
            </a>
            <a
              href="https://www.linkedin.com/in/talha-916837185/"
              target="_blank"
            >
              <BsLinkedin className="hover:scale-150" />
            </a>
            <a href="https://instagram.com/codewithtalha/" target="_blank">
              <BsInstagram className="hover:scale-150" />
            </a>
            <a href="https://twitter.com/talha_dev1/" target="_blank">
              <BsTwitter className="hover:scale-150" />
            </a>
          </div>
        </motion.div>
      </div>
    </>
  )
}
