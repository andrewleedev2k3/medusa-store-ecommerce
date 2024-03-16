import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cart'
}

const LayoutCart = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

export default LayoutCart
