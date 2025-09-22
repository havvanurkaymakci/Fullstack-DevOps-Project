// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>

        {/* public klasöründeki dosyaya doğrudan link veriyoruz */}
          <link rel="stylesheet" href="/assets/css/login-register.css" />

        {/* Favicon */}
        <link rel="shortcut icon" href="/assets/img/logo/favicon.png" />

        {/* Tailwind CSS CDN */}
        <script src="https://cdn.tailwindcss.com"></script>

        {/* Tailwind Config */}
        <script src="/assets/js/tailwindCongfig.js"></script>

        {/* Magnific Popup CSS */}
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />

        {/* Swiper CSS */}
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />

        {/* AOS Animation CSS */}
        <link rel="stylesheet" href="/assets/css/aos.css" />

        {/* Bootstrap Icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css"
          crossOrigin="anonymous"
        />

        {/* Main Custom CSS */}
        <link rel="stylesheet" href="/assets/css/style.css" />

        {/* Syntax Highlighter Styles */}
        <link rel="stylesheet" href="/syntax-highlighter/styles/shCore.css" />
        <link rel="stylesheet" href="/syntax-highlighter/styles/shCoreDefault.css" />
        <link rel="stylesheet" href="/syntax-highlighter/styles/shCoreDjango.css" />
        <link rel="stylesheet" href="/syntax-highlighter/styles/shCoreEmacs.css" />
        <link rel="stylesheet" href="/syntax-highlighter/styles/shCoreFadeToGrey.css" />
        <link rel="stylesheet" href="/syntax-highlighter/styles/shCoreMDUltra.css" />
        <link rel="stylesheet" href="/syntax-highlighter/styles/shCoreMidnight.css" />
        <link rel="stylesheet" href="/syntax-highlighter/styles/shCoreRDark.css" />
        <link rel="stylesheet" href="/syntax-highlighter/styles/shThemeDefault.css" />
        <link rel="stylesheet" href="/syntax-highlighter/styles/shThemeDjango.css" />
        <link rel="stylesheet" href="/syntax-highlighter/styles/shThemeEclipse.css" />
        <link rel="stylesheet" href="/syntax-highlighter/styles/shThemeFadeToGrey.css" />
        <link rel="stylesheet" href="/syntax-highlighter/styles/shThemeMDUltra.css" />
        <link rel="stylesheet" href="/syntax-highlighter/styles/shThemeMidnight.css" />
        <link rel="stylesheet" href="/syntax-highlighter/styles/shThemeRDark.css" />
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Syntax Highlighter Scripts */}
        <script src="/syntax-highlighter/scripts/shCore.js"></script>
        <script src="/syntax-highlighter/scripts/shBrushPython.js"></script>
        <script src="/syntax-highlighter/scripts/shBrushSql.js"></script>
        <script src="/syntax-highlighter/scripts/shBrushCss.js"></script>
        <script src="/syntax-highlighter/scripts/shBrushXml.js"></script>
        <script src="/syntax-highlighter/scripts/shLegacy.js"></script>
      </body>
    </Html>
  )
}
