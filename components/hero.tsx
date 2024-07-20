import React from "react";
import { Image } from "@nextui-org/react";

const Hero: React.FC = () => {
  return (
    <div className="text-center flex  items-center justify-center h-screen">
        
            
            <Image
                isBlurred
                width={600}
                height={800}
                rounded-r-full z-30 object-scale-down
                src="/cool-egg.jpg"
                alt="NextUI Album Cover"
                className="m-5"
            />
            <div className="items-center justify-center z-40 space-y-16">
                <h1 className="items-center justify-center font-bold text-9xl -ml-10 z-40">
                        Songbirds
                        
                </h1>
                <h1 className="items-center italic justify-center font-bold text-9xl -ml-10 z-40  text-accent1  ">
                    Giving a Voice to the Voiceless
                    
                </h1>
                <h2 className="text-2xl text-center tracking-wide mr-3 px-32">
                    By leveraging blockchain's immutable ledger, we empower individuals and 
                    communities to address issues like corruption, poverty, and inequality. 
                </h2>
            </div>
            
            
    </div>
  );
};

export default Hero;
