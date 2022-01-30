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
            <img
              src="img2.jpg"
              style={{ width: '35px', height: '35px' }}
              className=" mt-3 rounded-full border-2 border-solid border-stone-400 object-cover pt-2"
            />
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

      <div className="bgcolorful flex min-h-screen flex-col items-center  py-2">
        <motion.div
          animate={{ y: 50 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <img
            className="circle bg-pk rounded-full border-4 border-stone-400 object-cover pt-2"
            src="img2.jpg"
            style={{ width: '200px', height: '200px' }}
          />
        </motion.div>

        <span className="mt-16 font-sans text-3xl font-medium text-stone-600">
          TalHa Zulfiqar | Web Developer
        </span>

        <p className="text-1xl mt-2 font-sans text-stone-600">
          Hi, I am Mern Stack Developer, Learn new technologies is my passion,
        </p>

        <p className="text-1xl font-sans text-stone-600">
          Reactjs | Expressjs | Nodejs
        </p>
        <p className="text-1xl font-sans text-stone-600">
          📫 How to reach me: Muhammadtalha6063@gmail.com.
        </p>
        <p className="text-1xl font-sans text-stone-600">
          👯 I’m looking to collaborate on any new project.
        </p>
        <p className="text-1xl font-sans text-stone-600">
          💬 Ask me about any web application technologies.
        </p>
        <p className="text-1xl font-sans text-stone-600">
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
