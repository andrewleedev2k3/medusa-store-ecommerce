import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Medusa Store',
    default: 'Medusa Store'
  }
}

export default function UsersLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="min-h-screen">{children}</div>
}
