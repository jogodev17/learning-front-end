import { NextResponse } from "next/server";


export async function POST(request: NextResponse) {  
    const res = await request.json();
    console.log
    return NextResponse.json({data: res})    
}