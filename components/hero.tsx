import React from "react";
import { Image } from "@nextui-org/react";

const Hero: React.FC = () => {
  return (
    <div className="text-center flex p-5 items-center justify-center h-screen">
        
            
            <Image
                isBlurred
                width={600}
                height={800}
                
                src="/logo.svg"
                alt="NextUI Album Cover"
                className="m-5"
            />
            <div className="items-center justify-center z-40 space-y-16 text-right p-14">
                <h1 className="items-center justify-center font-thin text-9xl -ml-10 z-40 text-secondary ">
                    Journey 
                        
                </h1>
                <h1 className="items-center  justify-center font-thin text-7xl -ml-10 z-40 pl-5 text-accent1 text-primary font-" >
                    Crowdfunding Projects
                    
                </h1>
                <h2 className=" items-center justify-center text-2xl text-center font-light tracking-wide mr-3 px-32">
                Our fully extensible crowdfunding platform empowers users to fund projects of their choice while enabling creators to post projects seeking funding. 
                To enhance user engagement and project accountability, milestones are established for projects, allowing users to track progress effectively.
                The platform ensures complete transparency with all transactions being public and non-repudiable. 
                Task smart contracts serve a dual purpose: facilitating trustless transactions through escrow mechanisms and allowing for customization of each task's properties, such as the currency used. 
                </h2>
            </div>
            
            
    </div>
  );
};

export default Hero;
