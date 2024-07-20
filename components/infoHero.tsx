import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

const InfoHero: React.FC = () => {
    return (
            <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 bg-background">
                
                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">Contribute</p>
                    <h4 className="text-white font-medium text-large">Contribute to a Project</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="https://nextui.org/images/card-example-3.jpeg"
                    
                />
                </Card>
                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">Create</p>
                    <h4 className="text-white font-medium text-large">Create a Project</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="https://nextui.org/images/card-example-4.jpeg"
                />
                </Card>
                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">How It Works</p>
                    <h4 className="text-white font-medium text-large"></h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="https://nextui.org/images/card-example-2.jpeg"
                />
                </Card>
                
            </div>
        

    );
};


export default InfoHero;
