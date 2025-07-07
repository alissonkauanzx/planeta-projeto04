import { supabase } from "@/lib/supabaseClient"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File | null

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
      "video/mp4",
      "video/webm",
      "video/ogg",
      "application/pdf",
    ]

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: "File type not allowed" }, { status: 400 })
    }

    const maxSize = 50 * 1024 * 1024 // 50MB
    if (file.size > maxSize) {
      return NextResponse.json({ error: "File size exceeds limit" }, { status: 400 })
    }

    const fileName = `${Date.now()}_${file.name}`
    const { data, error } = await supabase.storage
      .from("project-media")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
        contentType: file.type,
      })

    if (error) {
      console.error("Supabase upload error:", error)
      return NextResponse.json({ error: "Upload failed" }, { status: 500 })
    }

    const { publicURL, error: urlError } = supabase.storage
      .from("project-media")
      .getPublicUrl(fileName)

    if (urlError) {
      console.error("Supabase getPublicUrl error:", urlError)
      return NextResponse.json({ error: "Failed to get public URL" }, { status: 500 })
    }

    return NextResponse.json({
      url: publicURL,
      name: file.name,
      size: file.size,
      type: file.type,
    })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "Upload failed" }, { status: 500 })
  }
}
