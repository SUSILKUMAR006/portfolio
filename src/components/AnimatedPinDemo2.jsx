"use client";
import React from "react";
import { PinContainer } from "../components/3d-pin";

export function AnimatedPinDemo2() {
    return (
        <div className=" w-full flex items-center justify-center ">
            <PinContainer title="Full Stack Developer" href="">
                <div
                    className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                        Full Stack Developer
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 text-sm">
                            Full Stack Developer ready to build complete, scalable, and modern web applications from front-end to back-end.
                        </span>
                    </div>
                    
                    <div
                        className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
                        <img
                            src="https://img.freepik.com/free-vector/top-view-dark-laptop-background-template_52683-7082.jpg?semt=ais_hybrid&w=740&q=80" // your image path
                            alt="Frontend Developer"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </PinContainer>
        </div>
    );
}
