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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illo 
                    facilis adipisci dolorum eveniet laboriosam, dignissimos cumque ea aliquam itaque ducimus 
                    corporis tempora repellendus, maiores mollitia labore ipsa vero expedita. 
                </h2>
            </div>
            
            
    </div>
  );
};

export default Hero;
