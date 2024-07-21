import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

const InfoHero: React.FC = () => {
    return (
            <div className="max-w-max gap-2 flex-col px-8 bg-background items-center justify-center align-middle">
               <div>
                    <Card className="col-span-12 sm:col-span-4 h-[400px] w-[70rem] m-3 bg-secondary bg-stripe-gradient">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Contribute</p>
                            <h4 className="text-white font-medium text-large">Contribute to a Project</h4>
                        </CardHeader>
                        
                    </Card>
                </div> 
                
            
                <div className="flex-row max-w-max">
                    <Card className="col-span-12 sm:col-span-4 h-[400px] w-[70rem] m-3 bg-primary bg-stripe-gradient">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Create</p>
                            <h4 className="text-white font-medium text-large">Create a Project</h4>
                        </CardHeader>
                    </Card>
                </div>
                
                
            </div>
        

    );
};


export default InfoHero;
