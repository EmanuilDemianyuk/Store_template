import React, { useState } from "react";
import { Stepper, Step, CardHeader, Typography } from "@material-tailwind/react";

interface CustomStepperProps {
    activeStep: number;
    setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

export function CustomStepper({ activeStep, setActiveStep }: CustomStepperProps) {
    return (
        <div className="basis-full lg:basis-1/2 py-4 w-full bg-inherit">
            <CardHeader floated={false} className="grid h-16 lg:h-20 m-0 place-items-end bg-BrandLightGreen shadow-none rounded-none">
                <div className="w-full pe-20 lg:pe-0 lg:px-2 pt-4 pb-8">
                    <Stepper
                        activeStep={activeStep}
                        lineClassName="bg-BrandLightGreen"
                        activeLineClassName="bg-BrandLightGreen"
                    >
                        <Step
                            className="h-6 w-10 md:w-12 text-BrandDarkGreen cursor-pointer md:me-2"
                            activeClassName="ring-0 !bg-BrandLightGreen border-[1px] border-BrandDarkGreen"
                            completedClassName="!bg-gray-300"
                            onClick={() => setActiveStep(0)}
                        >
                            <div className="absolute -bottom-0.5 w-max text-center text-xs">
                                <Typography variant="h6"className="font-content text-BrandDarkGreen">All</Typography>
                            </div>
                        </Step>
                        <Step
                            className="h-6 w-14 text-BrandDarkGreen cursor-pointer md:me-2"
                            activeClassName="ring-0 !bg-BrandLightGreen border-[1px] border-BrandDarkGreen"
                            completedClassName="!bg-gray-300"
                            onClick={() => setActiveStep(1)}
                        >
                            <div className="absolute -bottom-0.5 w-max text-center text-xs">
                                <Typography variant="h6" className="text-BrandDarkGreen font-content">Pizza</Typography>
                            </div>
                        </Step>
                        <Step
                            className="h-6 w-24 md:w-28 text-BrandDarkGreen cursor-pointer md:me-2"
                            activeClassName="ring-0 !bg-BrandLightGreen border-[1px] border-BrandDarkGreen"
                            completedClassName="!bg-gray-300"
                            onClick={() => setActiveStep(2)}
                        >
                            <div className="absolute -bottom-0.5 w-max text-center text-xs">
                                <Typography variant="h6" className="text-BrandDarkGreen font-content">Sidedishes</Typography>
                            </div>
                        </Step>
                        <Step
                            className="h-6 w-16 md:w-20 text-BrandDarkGreen cursor-pointer md:me-2"
                            activeClassName="ring-0 !bg-BrandLightGreen border-[1px] border-BrandDarkGreen"
                            completedClassName="!bg-gray-300"
                            onClick={() => setActiveStep(3)}
                        >
                            <div className="absolute -bottom-0.5 w-max text-center text-xs">
                                <Typography variant="h6" className="text-BrandDarkGreen font-content">Drinks</Typography>
                            </div>
                        </Step>
                        <Step
                            className="h-6 w-20 md:w-24 text-BrandDarkGreen cursor-pointer md:me-2"
                            activeClassName="ring-0 !bg-BrandLightGreen border-[1px] border-BrandDarkGreen"
                            completedClassName="!bg-gray-300"
                            onClick={() => setActiveStep(4)}
                        >
                            <div className="absolute -bottom-0.5 w-max text-center text-xs">
                                <Typography variant="h6" className="text-BrandDarkGreen font-content">Desserts</Typography>
                            </div>
                        </Step>
                    </Stepper>
                </div>
            </CardHeader>
        </div>
    );
}
