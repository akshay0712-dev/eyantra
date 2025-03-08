import React from "react";

const trainingImages = [
  "https://www.e-yantra.org/images/training/3d-printer.png",
  "https://www.e-yantra.org/images/training/ag.png",
  "https://www.e-yantra.org/images/training/blender.png",
  "https://www.e-yantra.org/images/training/drone.png",
  "https://www.e-yantra.org/images/training/embedded.png",
  "https://www.e-yantra.org/images/training/imageprocessing.png",
  "https://www.e-yantra.org/images/training/iot.png",
  "https://www.e-yantra.org/images/training/machinelearning.png",
  "https://www.e-yantra.org/images/training/python.png",
  "https://www.e-yantra.org/images/training/ros2.webp",
  "https://www.e-yantra.org/images/training/gazebo.png",
  "https://www.e-yantra.org/images/training/fpga.png",
];


const Landing = () => {
  return (
    <>
      <div className="">
        <img
          src="./image/Banner.jpg"
          alt="Logo"
          className="w-[100vw] mx-auto "
        />
      </div>

      <div className="container-full mx-auto py-8">
        <div className="flex flex-wrap mb-4 items-center">
          <div className="w-full lg:w-1/2">
            <img
              className="rounded-3xl mb-8 w-full lg:w-auto px-4"
              src="/image/Gallery/3.jpg"
              alt="Lab Image"
            />
            <img
              className="rounded-3xl mb-8 w-full lg:w-auto px-4"
              src="/image/Gallery/2.jpg"
              alt=""
            />
          </div>
          <div className="w-full lg:w-1/2 px-2 md:px-8">
            <ul className="py-4 px-2 bg-orange-200 rounded-md">
              <h2 className="text-2xl font-bold font-heading mb-4 text-center text-yellow-600">
                Welcome to E-Yantra Lab
                <span className="text-red-600"> at GEC Kishanganj!</span>
              </h2>
              <li className="bg-orange-100 rounded-md p-2">
                <p className="text-lg md:text-xl">
                  A hub for interdisciplinary engineering, integrating
                  Electronics, Mechanical, and Electrical Engineering for
                  hands-on learning and innovation.
                </p>
              </li>
              <li className="bg-orange-100 rounded-md p-2 mt-2">
                <p className="mt-2 text-lg md:text-xl">
                  State-of-the-Art Facilities 🛠️🔬 – Equipped with FDM 3D
                  printers, general-purpose boards, advanced sensors, and
                  technical modules to support robotics and engineering
                  projects.
                </p>
              </li>
              <li className="bg-orange-100 rounded-md p-2 mt-2">
                <p className="mt-2 text-lg md:text-xl">
                  Bridging Theory & Practice 📚⚙️ – Students gain practical
                  experience, applying theoretical knowledge to solve real-world
                  challenges and enhance their problem-solving skills.
                </p>
              </li>
              <li className="bg-orange-100 rounded-md p-2 mt-2">
                <p className="mt-2 text-lg md:text-xl">
                  Encouraging Innovation & Teamwork 💡🤝 – Under the guidance of
                  E-Yantra coordinators, students collaborate on
                  multidisciplinary projects, fostering creativity and technical
                  expertise.
                </p>
              </li>
              <li className="bg-orange-100 rounded-md p-2 mt-2">
                <p className="my-2 text-lg md:text-xl">
                  Shaping Future Engineers 🚀👨‍💻 – Dedicated to empowering the
                  next generation of engineers, the lab provides tools and
                  opportunities to help students thrive in a competitive
                  industry.
                </p>
              </li>
            </ul>
            <img
              className="rounded-3xl w-full lg:w-auto px-2 md:px-0 mt-2"
              src="/image/Gallery/4.jpg"
              alt="Lab Image"
            />
          </div>
        </div>
      </div>

      <div className="container-full mx-auto py-8">
        <div className="flex flex-wrap mb-4 items-center gap-3 lg:gap-0">
          <div className="w-full lg:w-1/2 px-2 md:px-8">
            <ul className="py-4 px-2 bg-orange-200 rounded-md">
              <h2 className="text-2xl font-bold font-heading mb-4 text-center text-yellow-600">
                What makes us unique
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li className="bg-orange-100 rounded-md p-2 mt-2">
                  <p className="mt-2 text-sm">🚀 Project-Based Learning Approach</p>
                </li>
                <li className="bg-orange-100 rounded-md p-2 mt-2">
                  <p className="mt-2 text-sm">🚀 Learn While You Compete</p>
                </li>
                <li className="bg-orange-100 rounded-md p-2 mt-2">
                  <p className="mt-2 text-sm">🚀 Expert Mentorship</p>
                </li>
                <li className="bg-orange-100 rounded-md p-2 mt-2">
                  <p className="mt-2 text-sm">🚀 Real-World Problem Solving</p>
                </li>
                <li className="bg-orange-100 rounded-md p-2 mt-2">
                  <p className="mt-2 text-sm">🚀 Enhanced Placement Potential</p>
                </li>
                <li className="bg-orange-100 rounded-md p-2 mt-2">
                  <p className="mt-2 text-sm">🚀 Hands-On Learning Experience</p>
                </li>
                <li className="bg-orange-100 rounded-md p-2 mt-2">
                  <p className="mt-2 text-sm">🚀 Comprehensive Skill Development</p>
                </li>
                <li className="bg-orange-100 rounded-md p-2 mt-2">
                  <p className="mt-2 text-sm">🚀 Active Peer Learning</p>
                </li>
                <li className="bg-orange-100 rounded-md p-2 mt-2">
                  <p className="mt-2 text-sm">🚀 Get industry-ready</p>
                </li>
                <li className="bg-orange-100 rounded-md p-2 mt-2">
                  <p className="mt-2 text-sm">🚀 Develop Startup Potential</p>
                </li>
              </div>
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              className="rounded-3xl mb-8 w-full lg:w-auto px-4"
              src="https://www.e-yantra.org/images/eyantra_unique.webp"
              alt="Banner"
            />
          </div>
        </div>
      </div>

      <section
      className="bg-gray-50 py-24 lg:py-32 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://www.e-yantra.org/images/home/binary.jpg')",
      }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
            We train you in
          </h1>
          <div className="h-1 w-44 mx-auto mt-2 bg-gradient-to-r from-yellow-300 to-orange-500 rounded"></div>
        </div>

        <div className="flex flex-wrap py-8 justify-center items-center gap-4">
          {trainingImages.map((imgSrc, index) => (
            <div
              key={index}
              className="max-w-56 p-4 flex justify-center items-center bg-gray-100 rounded-md"
            >
              <img src={imgSrc} alt={`Training ${index + 1}`} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>

      
    </>
  );
};

export default Landing;
