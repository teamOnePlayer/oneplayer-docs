import React from 'react'
import { useRouter } from "nextra/hooks"
import { Link, useConfig } from 'nextra-theme-docs';

export default {
  docsRepositoryBase: "https://github.com/teamOnePlayer/oneplayer-docs/tree/main",
  color: {
    hue: 270,
  },
  banner: {
    key: 'OnePlayer-1.0.0',
    content: (
        <>🎉 OnePlayer 1.0.0 is here! High-performance Lavalink client with minimal footprint!</>
    )
  },
  logo: (
    <>
      <img src="/logo.svg" alt="logo" width="24" height="24" />
      <span style={{ marginLeft: '.5em', fontWeight: 800 }}>
        OnePlayer
      </span>
    </>
  ),
  head() {
    const { asPath } = useRouter();
    const { title } = useConfig()
    const { frontMatter } = useConfig()

    const url = `https://oneplayer.js.org${asPath}`
    const metaDescription = frontMatter.description || 'OnePlayer is a high-performance, minimal Lavalink client for Discord.js with ultra-low latency and optimized resource usage.'
    const metaTitle = `${title} - OnePlayer`

    return (
      <>
        <title>{metaTitle}</title>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={metaTitle} />
        <meta
          property="og:description"
          content={metaDescription}
        />
      </>
    )

  },
  footer: {
    content: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://github.com/teamOnePlayer" target="_blank">
          OnePlayer
        </a>
        .
      </span>
    )
  }
}
