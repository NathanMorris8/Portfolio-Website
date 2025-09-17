import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ filename: string }> }
) {
  try {
    const { filename } = await params
    const imagePath = path.join(process.cwd(), 'tesla-portfolio', 'public', filename)
    
    // Also try without the tesla-portfolio prefix in case cwd is already correct
    const altImagePath = path.join(process.cwd(), 'public', filename)
    
    console.log('Looking for image at:', imagePath)
    
    let finalPath = imagePath
    if (!fs.existsSync(imagePath)) {
      console.log('Image not found at:', imagePath)
      console.log('Trying alternative path:', altImagePath)
      if (fs.existsSync(altImagePath)) {
        finalPath = altImagePath
        console.log('Found image at alternative path')
      } else {
        console.log('Image not found at either path')
        return new NextResponse('Image not found', { status: 404 })
      }
    }

    const imageBuffer = fs.readFileSync(finalPath)
    const ext = path.extname(filename).toLowerCase()
    
    let contentType = 'application/octet-stream'
    if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg'
    else if (ext === '.png') contentType = 'image/png'
    else if (ext === '.gif') contentType = 'image/gif'
    else if (ext === '.webp') contentType = 'image/webp'
    
    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000',
      },
    })
  } catch (error) {
    console.error('Error serving image:', error)
    return new NextResponse('Error serving image', { status: 500 })
  }
}
