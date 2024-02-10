import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import HomeIcon from "@/components/ui/icons/HomeIcon";
import AboutIcon from "@/components/ui/icons/AboutIcon";
import WorkIcon from "@/components/ui/icons/WorkIcon";
import ContactIcon from "@/components/ui/icons/ContactIcon";
import Link from "next/link";

function SideNavbar() {
  return (
    <nav className="float-right pr-[12%] sm:pr-12 py-4 w-1\/3  h-max">
      <div className="fixed  ">
        <div className=" grid grid-rows-3 grid-flow-col gap-4">
          <div>
            <ModeToggle />
          </div>
          <div>
            <div className="grid justify-items-center gap-y-4">
              <Link href="/">
                <div>
                  <Button
                    variant="ghost"
                    className="flex  justify-end rounded-full p-3 bg-red-400 hover:bg-red-500  dark:bg-blue-500 dark:hover:bg-blue-600 "
                  >
                    <abbr title="Home">
                      <HomeIcon />
                    </abbr>
                  </Button>
                </div>
              </Link>

              <Link href="/About">
                <div>
                  <Button
                    variant="ghost"
                    className="flex justify-end rounded-full p-3 bg-red-400 hover:bg-red-500 dark:bg-blue-500 dark:hover:bg-blue-600"
                  >
                    <abbr title="About Me">
                      <AboutIcon />
                    </abbr>
                  </Button>
                </div>
              </Link>
              <Link href="/Work">
                <div>
                  <Button
                    variant="ghost"
                    className="flex justify-end rounded-full p-3 bg-red-400 hover:bg-red-500 dark:bg-blue-500 dark:hover:bg-blue-600"
                  >
                    <abbr title="Portfolio">
                      <WorkIcon />
                    </abbr>
                  </Button>
                </div>
              </Link>
              <Link href="/Contact">
                <div>
                  <Button
                    variant="ghost"
                    className="flex justify-end rounded-full p-3 bg-red-400 hover:bg-red-500 dark:bg-blue-500 dark:hover:bg-blue-600"
                  >
                    <abbr title="Contact">
                      <ContactIcon />
                    </abbr>
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SideNavbar;
