import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Indian Heritage — Preserving India\'s Living Traditions & Traditional Knowledge',
  description: 'Digital platform for discovering, documenting, preserving and learning about India\'s traditional knowledge and cultural heritage — farming practices, crafts, folklore, food, and village traditions.',
  openGraph: {
    title: 'Indian Heritage — Preserving India\'s Living Traditions',
    description: 'Preserving the stories, skills and traditions that make India unique — traditional farming, crafts, folk arts, folklore, food, and village life.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indian Heritage — Preserving India\'s Living Traditions',
    description: 'Preserving the stories, skills and traditions that make India unique.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className="min-h-screen bg-[#FAF7F0] text-[#35443A] selection:bg-[#8FAF9A]/30">
        {children}
      </body>
    </html>
  );
}
