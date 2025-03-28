'use client'

import Header from '@/components/Header'
import VideoHero from '@/components/VideoHero'
import LinkSection from '@/components/LinkSection'
import Footer from '@/components/Footer'
import StarBackground from '@/components/StarBackground'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <StarBackground />
      <Header />
      <main className="flex-grow">
        <VideoHero />
        <LinkSection />
      </main>
      <Footer />
    </div>
  );
}
