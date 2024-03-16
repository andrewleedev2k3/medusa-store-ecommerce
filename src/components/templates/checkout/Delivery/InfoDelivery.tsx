const InfoDelivery = ({ data }: { data: string }) => {
  return (
    <div className="flex flex-col gap-2 text-sm border-b-[1px] py-8">
      <span className="text-content-title font-medium">Method</span>
      <span>{data === 'standard' ? 'FakeEx Standard ( $8,00 )' : 'FakeEx Express ( $12.00 )'}</span>
    </div>
  )
}

export default InfoDelivery
