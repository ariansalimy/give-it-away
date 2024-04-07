import { readdirSync } from "fs";
import { writeFile } from "fs/promises";
import { NextRequest,NextResponse} from "next/server";
import { join } from "path";

export async function POST(request:NextRequest) {
    return new Response("This is a new API route");

}