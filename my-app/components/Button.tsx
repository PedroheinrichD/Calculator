"use client"

import { ButtonType } from "@/types/ButtonType";

export default function Button({ onClick, character, label, className }: ButtonType){
    return(
        <div>
            <button 
            className={
                className 
                ? className 
                : "flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-b from-neutral-700 to-neutral-800 text-2xl font-semibold text-white shadow-[0_4px_12px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.08)] ring-1 ring-white/5 backdrop-blur-sm transition-all duration-150 hover:from-neutral-600 hover:to-neutral-700 active:scale-95 active:shadow-[0_1px_4px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(0,0,0,0.3)]"
                }
                onClick={() => onClick(character)}
                >
               {label}
            </button>
        </div>
    );
}