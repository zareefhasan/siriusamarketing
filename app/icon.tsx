import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-AH0gYpOVskyGHlqr4Q510YlpvhoN49.png"
        alt="favicon"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}

