//Utility Function
import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        status: "Healthy",
        message :"Secure API Lab is running smoothly",
    });
}