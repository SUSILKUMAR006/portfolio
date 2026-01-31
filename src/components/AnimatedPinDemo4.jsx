"use client";
import React from "react";
import { PinContainer } from "../components/3d-pin";
import logo from '../assets/unnamed.jpg'

export function AnimatedPinDemo4() {
    return (
        <div className=" w-full flex items-center justify-center ">
            <PinContainer title=" Backend Developer" href="">
                <div
                    className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                        Backend Developer
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 text-sm">
                            Backend Developer ready to design scalable, secure, and efficient server-side systems and APIs
                        </span>
                    </div>
                    
                    <div
                        className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
                        <img
                            src={logo} // your image path
                            alt="Frontend Developer"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </PinContainer>
        </div>
    );
}
