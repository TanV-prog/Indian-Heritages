import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'download', 'indian_heritage_platform_full_project.zip');
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Project archive is being generated. Please try again in a few moments.' },
        { status: 404 }
      );
    }

    const fileBuffer = fs.readFileSync(filePath);
    const headers = new Headers();
    headers.set('Content-Type', 'application/zip');
    headers.set('Content-Disposition', 'attachment; filename="indian_heritage_platform_full_project.zip"');
    headers.set('Content-Length', fileBuffer.length.toString());

    return new NextResponse(fileBuffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json({ error: 'Failed to download archive' }, { status: 500 });
  }
}
