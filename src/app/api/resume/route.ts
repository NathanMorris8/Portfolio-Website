import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    // Fix: Use the correct project directory
    const resumePath = path.join(process.cwd(), 'tesla-portfolio', 'public', 'resume.pdf')
    
    console.log('Looking for resume at:', resumePath)
    console.log('File exists:', fs.existsSync(resumePath))
    
    // Check if file exists
    if (!fs.existsSync(resumePath)) {
      console.log('Resume file not found at:', resumePath)
      return new NextResponse(`Resume not found at: ${resumePath}`, { status: 404 })
    }

    // Read the file
    const fileBuffer = fs.readFileSync(resumePath)
    console.log('File read successfully, size:', fileBuffer.length)
    
    // Return the PDF with proper headers
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="Nathan_Morris_Resume.pdf"',
        'Cache-Control': 'public, max-age=31536000',
      },
    })
  } catch (error) {
    console.error('Error serving resume:', error)
    return new NextResponse(`Error serving resume: ${error}`, { status: 500 })
  }
}
