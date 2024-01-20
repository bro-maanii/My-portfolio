import React from "react";
import p2 from "../../../public/projects/work2.png"
import p1 from "../../../public/projects/work1.png"
import p3 from "../../../public/projects/work3.png"
import p4 from "../../../public/projects/work4.png"
import Project_view from "../Components/Work/Project_view";

function page() {
  return (
    <div className="sm:pl-[6%]">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">
              MY PORTFOLIO
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Hello and welcome to my portfolio! I&apos;m a <strong> web
              developer</strong>, and I&apos;m thrilled to share some handpicked collection of
              my impressive projects with you. These projects highlight my
              skills in crafting creative solutions using <strong>web
              technologies</strong>. Feel free to explore and learn more about my work.
            </p>
          </div>
          {/* Projects  */}
          <div className="sm:flex flex-wrap  -m-4">
            <Project_view title="PhotoApp"  decrption="Photo Editing App That Enhances, Colorizes, Cartoonize Your Images In Seconds." img={p3} LiveURL='https://my-photo-app-three.vercel.app/' codeURL='https://github.com/bro-maanii/Photo-App' />
            <Project_view title="E-commerce Website"  decrption="
An e-commerce website serves as a virtual marketplace, connecting buyers and sellers online, offering a wide array of products and services, and enabling secure transactions and seamless shopping experiences" img={p2} LiveURL='https://dine-market-sigma-smoky.vercel.app/' codeURL='https://github.com/bro-maanii/DineMarket_Hackathon' />
            <Project_view title="Photography-Web"  decrption="Created a captivating online portfolio for a talented photographer, providing a visually stunning showcase of their work. The website elegantly presents their creativity, helping them leave a lasting impression on clients and enthusiasts alike" img={p1} LiveURL='https://photography-orcin.vercel.app/' codeURL='https://github.com/bro-maanii/Photography-web' />
            <Project_view title="Shoes Shop"  decrption="An e-commerce Shoes website serves as a virtual marketplace, connecting buyers and sellers online, offering a wide array of products and services, and enabling secure transactions and seamless shopping experiences" img={p4} LiveURL='https://www.youtube.com/watch?v=pQVPVnjIKj4&t=4s' codeURL='https://github.com/bro-maanii/ShoesShop' />
            {/* <Project_view title="Br" project_Name="ds" decrption="Sweater" img={p1}/>
            <Project_view title="Br" project_Name="ds" decrption="Sweater" img={p1}/>
            <Project_view title="Br" project_Name="ds" decrption="Sweater" img={p1}/> */}
            
        </div>
            
          
        </div>
      </section>
    </div>
  );
}

export default page;
