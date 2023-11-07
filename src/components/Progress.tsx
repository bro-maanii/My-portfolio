"use client"

import React, { ReactNode } from "react";
import { Progress } from "@/components/ui/progress"

type MyComponentProps = {
    Percent: number;
    componentProp: ReactNode;
  };
  

const  ProgressDemo: React.FC<MyComponentProps> = ({ Percent, componentProp }) => {

  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(Percent))
    return () => clearTimeout(timer)
  }, [])

  return(
    <div className="py-2">
        <div>{componentProp}</div>
        <div className="flex gap-3">
                <Progress value={progress} className="mt-1 w-[70%] h-3 " />
                <p  className="text-sm">{Percent}%</p>
        </div>
        
    </div>
    )
}
export default ProgressDemo