"use client";
import React from "react";
import { PinContainer } from "../components/3d-pin";

export function AnimatedPinDemo3() {
    return (
        <div className=" w-full flex items-center justify-center ">
            <PinContainer title="React Developer" href="">
                <div
                    className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                        Recat Developer
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 text-sm">
                           React Developer ready to build dynamic, high-performance, and interactive web applications.
                        </span>
                    </div>
                    
                    <div
                        className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
                        <img
                            src="https://ghost.codersera.com/blog/content/images/2022/08/ReactlibFeat-1.png" // your image path
                            alt="Frontend Developer"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </PinContainer>
        </div>
    );
}
