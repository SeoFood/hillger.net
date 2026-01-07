import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const WIDTH = 1200
const HEIGHT = 630

// Load fonts
const jetbrainsMono = readFileSync(
  join(import.meta.dir, '../node_modules/@fontsource/jetbrains-mono/files/jetbrains-mono-latin-500-normal.woff')
).buffer
const ibmPlexSans = readFileSync(
  join(import.meta.dir, '../node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff')
).buffer

async function generateOgImage() {
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a24 100%)',
          padding: '60px',
        },
        children: [
          // Logo
          {
            type: 'div',
            props: {
              style: {
                fontSize: '32px',
                fontFamily: 'JetBrains Mono',
                color: '#c9a66b',
                marginBottom: '40px',
                letterSpacing: '-0.02em',
              },
              children: '<M.H./>',
            },
          },
          // Name
          {
            type: 'div',
            props: {
              style: {
                fontSize: '72px',
                fontFamily: 'IBM Plex Sans',
                fontWeight: 600,
                color: '#f4f1eb',
                marginBottom: '20px',
              },
              children: 'Marco Hillger',
            },
          },
          // Title
          {
            type: 'div',
            props: {
              style: {
                fontSize: '36px',
                fontFamily: 'IBM Plex Sans',
                color: '#c9a66b',
                marginBottom: '40px',
              },
              children: 'Senior Fullstack Developer',
            },
          },
          // Tagline
          {
            type: 'div',
            props: {
              style: {
                fontSize: '24px',
                fontFamily: 'IBM Plex Sans',
                color: '#8a8a8a',
                textAlign: 'center',
                maxWidth: '800px',
              },
              children: 'E-Commerce | Produktionsautomatisierung | Web-Architekturen',
            },
          },
          // Border accent
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                height: '4px',
                background: 'linear-gradient(90deg, transparent, #c9a66b, transparent)',
              },
            },
          },
        ],
      },
    },
    {
      width: WIDTH,
      height: HEIGHT,
      fonts: [
        {
          name: 'JetBrains Mono',
          data: jetbrainsMono,
          weight: 500,
          style: 'normal',
        },
        {
          name: 'IBM Plex Sans',
          data: ibmPlexSans,
          weight: 400,
          style: 'normal',
        },
      ],
    }
  )

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: WIDTH,
    },
  })

  const pngData = resvg.render()
  const pngBuffer = pngData.asPng()

  writeFileSync(join(import.meta.dir, '../public/og-image.png'), pngBuffer)
  console.log('OG image generated: public/og-image.png')
}

generateOgImage()
