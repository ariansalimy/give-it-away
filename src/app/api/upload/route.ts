import { writeFile } from "fs/promises";
import { NextRequest,NextResponse} from "next/server";
import { join } from "path";

export async function POST(request:NextRequest) {
    const data = await request.formData();
    const file: File | null = data.get('file') as unknown as File;

    if (!file) {
        return NextResponse.json({success:false});
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes);

    


<<<<<<< HEAD
    const path = join('/','tmp',file.name);
=======
    const path = join(process.cwd(),file.name);
>>>>>>> 4d26463a159d458c0176abd26d7f2bd7fc25c737
    console.log('path is',path)
    await writeFile(path,buffer);
    console.log(`open ${path} to see the uploaded file`);

    return NextResponse.json({success:true});

}
