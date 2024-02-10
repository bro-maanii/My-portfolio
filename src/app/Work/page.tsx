import React from "react";
import p2 from "../../../public/projects/work2.png";
import p1 from "../../../public/projects/work1.png";
import p3 from "../../../public/projects/work3.png";
import p4 from "../../../public/projects/work4.png";
import p5 from "../../../public/projects/PYthon1.png";
import p6 from "../../../public/projects/PYthon2.png";
import Project_view from "../Components/Work/Project_view";
import Reveal from "@/components/Reveal";

function page() {
  return (
    <div className="sm:pl-[6%]">
      <Reveal>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">
                MY PORTFOLIO
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Hello and welcome to my portfolio! I&apos;m a{" "}
                <strong> web developer</strong>, and I&apos;m thrilled to share
                some handpicked collection of my impressive projects with you.
                These projects highlight my skills in crafting creative
                solutions using <strong>web technologies</strong>. Feel free to
                explore and learn more about my work.
              </p>
            </div>
            {/* Projects  */}
            <div className="sm:flex flex-wrap  -m-4">
              <Project_view
                title="PhotoApp"
                decrption="Photo Editing App That Enhances, Colorizes, Cartoonize Your Images In Seconds."
                img={p3}
                LiveURL="https://my-photo-app-three.vercel.app/"
                codeURL="https://github.com/bro-maanii/Photo-App"
              />
              <Project_view
                title="Photography-Web"
                decrption="Created a captivating online portfolio for a talented photographer, providing a visually stunning showcase of their work. The website elegantly presents their creativity, helping them leave a lasting impression on clients and enthusiasts alike"
                img={p1}
                LiveURL="https://photography-orcin.vercel.app/"
                codeURL="https://github.com/bro-maanii/Photography-web"
              />
              <Project_view
                title="Shoes Shop"
                decrption="An e-commerce Shoes website serves as a virtual marketplace, connecting buyers and sellers online, offering a wide array of products and services, and enabling secure transactions and seamless shopping experiences"
                img={p4}
                LiveURL="https://www.youtube.com/watch?v=pQVPVnjIKj4&t=4s"
                codeURL="https://github.com/bro-maanii/ShoesShop"
              />
              <Project_view
                title="E-commerce Website"
                decrption="Under development"
                img={p2}
                LiveURL="https://dine-market-sigma-smoky.vercel.app/"
                codeURL="https://github.com/bro-maanii/DineMarket_Hackathon"
              />
              <Project_view
                title="Personalized Chatbot"
                decrption="A personalized chatbot powered by Python 3.12, Streamlit, and OpenAI's GPT-3.5 Turbo! 🤖✨ Explore my professional background, interests, or simply have a chat - the chatbot is here to assist you interactively!"
                img={p5}
                LiveURL="https://www.linkedin.com/feed/update/urn:li:activity:7158947486651318273/"
                codeURL="https://github.com/bro-maanii/my-personal-assistent/blob/main/App.py"
              />
              <Project_view
                title="Travel Assistant Chatbot"
                decrption="Thrilled to unveil a user-friendly travel assistant powered by Mapbox, OpenAI, and Streamlit! 🗺️✨ Share your details, preferences, and requirements, and let the assistant curate the best places just for you. Watch as it maps out your ideal destinations and marks them for you! 🗺️🌟 Ready to revolutionize the way you plan your travels?"
                img={p6}
                codeURL="https://github.com/bro-maanii/travel-assisent/blob/main/app.py"
                LiveURL="https://www.linkedin.com/feed/update/urn:li:activity:7160967211212288002/"
              />
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}

export default page;
