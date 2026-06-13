import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";
export const contentType = "image/png";

async function loadFont(name: string) {
  return readFile(path.join(process.cwd(), "public", "fonts", name));
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Vinay Kumar Gupta";

  const [oggFont, monoFont] = await Promise.all([
    loadFont("Ogg-Roman.otf"),
    loadFont("ApercuMono.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#ffffff",
        }}
      >
        <span
          style={{
            fontFamily: "ApercuMono",
            fontSize: 16,
            color: "#666666",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          vdhyutidhara.com
        </span>

        <p
          style={{
            fontFamily: "Ogg",
            fontSize: title.length > 40 ? 52 : 72,
            fontWeight: 300,
            color: "#111111",
            lineHeight: 1.1,
            margin: 0,
            maxWidth: 900,
          }}
        >
          {title}
        </p>

        <span
          style={{
            fontFamily: "ApercuMono",
            fontSize: 16,
            color: "#666666",
          }}
        >
          Inclusive Software Engineer · Bangalore
        </span>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Ogg", data: oggFont, weight: 300 },
        { name: "ApercuMono", data: monoFont, weight: 400 },
      ],
    }
  );
}
