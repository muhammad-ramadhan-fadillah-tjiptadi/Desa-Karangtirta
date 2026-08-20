import { Hero10, type Hero10Props } from '@/components/ui/hero-10'

const values = {
  title: 'Build faster interfaces',
  titleLine2Prefix: 'with',
  titleHighlight: 'Ready-Made Blocks',
  description:
    'Compose beautiful products from accessible, production-ready UI blocks that drop straight into your codebase.',
  images: [
    'https://images.unsplash.com/photo-1685013640715-8701bbaa2207?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1746467364902-ab40952e33fe?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  imageAlts: ['Design detail', 'Product interface', 'Layout composition'],
  animation: 'subtle',
  primaryCTA: {
    ctaEnabled: true,
    text: 'Jelajahi Desa Kami',
    link: '#profil',
    variant: 'default',
    size: 'default',
  },
} satisfies Hero10Props

export default function Hero10Demo() {
  return <Hero10 {...values} />
}
