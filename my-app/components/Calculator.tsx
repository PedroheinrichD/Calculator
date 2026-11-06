"use client"
import { useState } from "react";
import Button from "./Button";

const keyBase = "flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-semibold text-white ring-1 ring-white/5 shadow-[0_4px_12px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-150 hover:brightness-110 active:scale-95 active:shadow-[0_1px_4px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(0,0,0,0.3)]";
const operatorKey = `${keyBase} bg-gradient-to-b from-orange-600 to-orange-700`;
const equalsKey = `${keyBase} bg-gradient-to-b from-blue-500 to-blue-600`;

const placeholderKey = "flex h-16 w-16 cursor-not-allowed items-center justify-center rounded-2xl bg-neutral-800/40 text-xl font-medium text-neutral-500 ring-1 ring-white/5";

export default function Calculator() {
    const [display, setDisplay] = useState("")
    
    const handleClick = (char: string) => {
        setDisplay(display + char);
    };

    return (
        <div className="flex min-h-screen items-center justify-center py-6">
            <div className="w-fit rounded-3xl bg-neutral-900 p-4 shadow-2xl ring-1 ring-white/10">
                <h1 className="mb-4 flex h-24 items-end justify-end overflow-hidden rounded-2xl bg-neutral-950 px-4 pb-3 text-5xl font-light text-white ring-1 ring-white/5">
                    {display || "0"}
                </h1>

                <div className="grid grid-cols-4 gap-2">
                    <button disabled className={placeholderKey}>%</button>
                    <button disabled className={placeholderKey}>CE</button>
                    <button disabled className={placeholderKey}>C</button>
                    <button disabled className={placeholderKey}>⌫</button>

                    <button disabled className={placeholderKey}>1/x</button>
                    <button disabled className={placeholderKey}>x²</button>
                    <button disabled className={placeholderKey}>²√x</button>
                    <Button character="/" label="÷" onClick={handleClick} className={operatorKey} />

                    <Button character="7" label="7" onClick={handleClick} />
                    <Button character="8" label="8" onClick={handleClick} />
                    <Button character="9" label="9" onClick={handleClick} />
                    <Button character="*" label="×" onClick={handleClick} className={operatorKey} />

                    <Button character="4" label="4" onClick={handleClick} />
                    <Button character="5" label="5" onClick={handleClick} />
                    <Button character="6" label="6" onClick={handleClick} />
                    <Button character="-" label="−" onClick={handleClick} className={operatorKey} />

                    <Button character="1" label="1" onClick={handleClick} />
                    <Button character="2" label="2" onClick={handleClick} />
                    <Button character="3" label="3" onClick={handleClick} />
                    <Button character="+" label="+" onClick={handleClick} className={operatorKey} />

                    <button disabled className={placeholderKey}>+/−</button>
                    <Button character="0" label="0" onClick={handleClick} />
                    <Button character="." label="." onClick={handleClick} />
                    <Button character="=" label="=" onClick={handleClick} className={equalsKey} />
                </div>
            </div>
        </div>
    );
}
