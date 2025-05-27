import localFont from 'next/font/local'

export const notoSans = localFont({
  src: [
    {
      path: 'fonts/NotoSansJP-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'fonts/NotoSansJP-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: 'fonts/NotoSansJP-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
})

export const notoSerif = localFont({
  src: [
    {
      path: 'fonts/NotoSerifJP-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'fonts/NotoSerifJP-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: 'fonts/NotoSerifJP-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-serif',
  display: 'swap',
}) 