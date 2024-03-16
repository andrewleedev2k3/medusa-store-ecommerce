import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Order Confirmed'
}

const LayoutDetailOrder = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

export default LayoutDetailOrder
