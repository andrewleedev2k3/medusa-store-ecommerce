/* eslint-disable react/no-unescaped-entities */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { RefreshCcw, RotateCcw, Truck } from 'lucide-react'

const ProductInfo = () => {
  return (
    <Accordion type="single" collapsible className="w-full text-sm text-content-text">
      <AccordionItem value="item-1" className="border-t-[1px]">
        <AccordionTrigger className="hover:no-underline font-normal">
          Product Information
        </AccordionTrigger>
        <AccordionContent className="grid grid-cols-2 gap-6">
          <div className="flex flex-col text-[13px]">
            <span className="text-content-title font-medium">Material</span>
            <p className="text-[12px]">Leadther</p>
          </div>
          <div className="flex flex-col text-[13px]">
            <span className="text-content-title font-medium">Weight</span>
            <p className="text-[12px]">150</p>
          </div>
          <div className="flex flex-col text-[13px]">
            <span className="text-content-title font-medium">Country of origin</span>
            <p className="text-[12px]">USA</p>
          </div>
          <div className="flex flex-col text-[13px]">
            <span className="text-content-title font-medium">Dimensions</span>
            <p className="text-[12px]">1/2</p>
          </div>
          <div className="flex flex-col text-[13px]">
            <span className="text-content-title font-medium">Type</span>
            <p className="text-[12px]">New</p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="hover:no-underline font-normal">
          Shipping & Returns
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-7">
          <div className="flex gap-2">
            <Truck />
            <div>
              <span className="text-[13px] text-content-title font-semibold">Fast delivery</span>
              <p className="text-[12px]">
                Your package will arrive in 3-5 business days at your pick up location or in the
                comfort of your home.
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <RefreshCcw size={18} />
            <div>
              <span className="text-[13px] text-content-title font-semibold">Simple exchanges</span>
              <p className="text-[12px]">
                Is the fit not quite right? No worries - we'll exchange your product for a new one.
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <RotateCcw size={28} />
            <div>
              <span className="text-[13px] text-content-title font-semibold">Easy returns</span>
              <p className="text-[12px]">
                Just return your product and we'll refund your money. No questions asked – we'll do
                our best to make sure your return is hassle-free.
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
export default ProductInfo
