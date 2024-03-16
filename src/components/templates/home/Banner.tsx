import { Github } from 'lucide-react'
import Link from 'next/link'

const Banner = () => {
  return (
    <div className="bg-[#F9FAFB] px-1 h-96 text-center flex flex-col gap-3 items-center justify-center text-2xl">
      <span className="text-content-title">Ecommerce Medusa Store</span>
      <div className="text-content-text">Andrew Lee - Link Github Project</div>
      <Link
        href="https://github.com/andrewleedev2k3/medusa-store-ecommerce"
        target="_blank"
        className="px-3 py-[1px] shadow-sm bg-[#F7F8F9] border-2 rounded-xl flex gap-1 font-semibold items-center text-content-title text-[13px]"
      >
        View on GitHub
        <Github size={16} />
      </Link>
    </div>
  )
}

export default Banner
