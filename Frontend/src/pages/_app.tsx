
/*
import '../syntax-highlighter/scripts/shBrushAS3';
import '../syntax-highlighter/scripts/shBrushBash.js';
import '../syntax-highlighter/scripts/shBrushColdFusion.js';
import '../syntax-highlighter/scripts/shBrushCpp.js';
import '../syntax-highlighter/scripts/shBrushCSharp.js';
import '../syntax-highlighter/scripts/shBrushCss.js';
import '../syntax-highlighter/scripts/shBrushDelphi.js';
import '../syntax-highlighter/scripts/shBrushDiff.js';
import '../syntax-highlighter/scripts/shBrushErlang.js';
import '../syntax-highlighter/scripts/shBrushGroovy.js';
import '../syntax-highlighter/scripts/shBrushJava.js';
import '../syntax-highlighter/scripts/shBrushJavaFX.js';
import '../syntax-highlighter/scripts/shBrushPerl.js';
import '../syntax-highlighter/scripts/shBrushPhp.js';
import '../syntax-highlighter/scripts/shBrushPlain.js';
import '../syntax-highlighter/scripts/shBrushPowerShell.js';
import '../syntax-highlighter/scripts/shBrushPython.js';
import '../syntax-highlighter/scripts/shBrushRuby.js';
import '../syntax-highlighter/scripts/shBrushSass.js';
import '../syntax-highlighter/scripts/shBrushScala.js';
import '../syntax-highlighter/scripts/shBrushSql.js';
import '../syntax-highlighter/scripts/shBrushVb.js';
import '../syntax-highlighter/scripts/shBrushXml.js';
import '../syntax-highlighter/scripts/shCore.js';
import '../syntax-highlighter/scripts/shLegacy.js';


*/
// pages/_app.tsx
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css' // AOS stilleri

import { AuthProvider } from '@/context/AuthContext'


//import '../public/assets/css/login-register.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init()
  }, [])

  
  return (
    
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp

