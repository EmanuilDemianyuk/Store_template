import React from "react";
import { Stepper, Step, CardHeader, Typography } from "@material-tailwind/react";
import { CustomStepperProps } from "../../../typesOrInterface/interface";
import styles from './style.module.scss';

export function CustomStepper({ activeStep, setActiveStep }: CustomStepperProps) {
    return (
        <div className={styles.CustomStepper}>
            <CardHeader floated={false} className={styles.CustomStepper__CardHeader}>
                <div className="w-full pe-20 lg:pe-0 lg:px-2 pt-4 pb-8">
                    <Stepper
                        activeStep={activeStep}
                        lineClassName="bg-BrandLightGreen"
                        activeLineClassName="bg-BrandLightGreen"
                    >
                        <Step
                            className={styles.CustomStepper__StepOne}
                            activeClassName="ring-0 !bg-BrandLightGreen border-[1px] border-BrandDarkGreen"
                            completedClassName="!bg-gray-300"
                            onClick={() => setActiveStep(0)}
                        >
                            <div>
                                <Typography 
                                variant="h6" 
                                className={styles.CustomStepper__StepOne__Typography}>All</Typography>
                            </div>
                        </Step>
                        <Step
                            className={styles.CustomStepper__StepTwo}
                            activeClassName="ring-0 !bg-BrandLightGreen border-[1px] border-BrandDarkGreen"
                            completedClassName="!bg-gray-300"
                            onClick={() => setActiveStep(1)}
                        >
                            <div>
                                <Typography 
                                variant="h6" 
                                className={styles.CustomStepper__StepTwo__Typography}>Pizza</Typography>
                            </div>
                        </Step>
                        <Step
                            className={styles.CustomStepper__StepThree}
                            activeClassName="ring-0 !bg-BrandLightGreen border-[1px] border-BrandDarkGreen"
                            completedClassName="!bg-gray-300"
                            onClick={() => setActiveStep(2)}
                        >
                            <div className="absolute -bottom-0.5 w-max text-center text-xs">
                                <Typography 
                                variant="h6" 
                                className={styles.CustomStepper__StepThree__Typography}>Sidedishes</Typography>
                            </div>
                        </Step>
                        <Step
                            className={styles.CustomStepper__StepFour}
                            activeClassName="ring-0 !bg-BrandLightGreen border-[1px] border-BrandDarkGreen"
                            completedClassName="!bg-gray-300"
                            onClick={() => setActiveStep(3)}
                        >
                            <div className="absolute -bottom-0.5 w-max text-center text-xs">
                                <Typography 
                                variant="h6" 
                                className={styles.CustomStepper__StepFour__Typography}>Drinks</Typography>
                            </div>
                        </Step>
                        <Step
                            className={styles.CustomStepper__StepFive}
                            activeClassName="ring-0 !bg-BrandLightGreen border-[1px] border-BrandDarkGreen"
                            completedClassName="!bg-gray-300"
                            onClick={() => setActiveStep(4)}
                        >
                            <div className="absolute -bottom-0.5 w-max text-center text-xs">
                                <Typography 
                                variant="h6" 
                                className={styles.CustomStepper__StepFive__Typography}>Desserts</Typography>
                            </div>
                        </Step>
                    </Stepper>
                </div>
            </CardHeader>
        </div>
    );
}
