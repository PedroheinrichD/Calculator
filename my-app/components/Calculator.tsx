"use client"
import { useState } from "react";
import Button from "./Button";

export default function Calculator() {
    const [display, setDisplay] = useState("")
    
    return (
        <div>
            <h1>{display}</h1>
           
            <Button
                character="1"
                label="1"
                setDisplay={setDisplay}
            />

            <Button
                character="="
                label="="
                setDisplay={setDisplay}
            />

        </div>
    );
}