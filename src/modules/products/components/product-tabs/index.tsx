"use client"

import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"

import Accordion from "./accordion"
import { HttpTypes } from "@medusajs/types"

type ProductTabsProps = {
  product: HttpTypes.StoreProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = [
   
    {
      label: "Shipping & Returns",
      component: <ShippingInfoTab />,
    },
  ]

  return (
    <div className="w-full">
      <Accordion type="multiple">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            title={tab.label}
            headingSize="medium"
            value={tab.label}
          >
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}



const ShippingInfoTab = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">Fast delivery</span>
            <p className="max-w-sm">
              <ul >
                <li>Day 1: Payment Received</li>
                <li>Days 2-3: Vet Check + Health Certificate</li>
                <li>Days 4-5: Flight or Courier Booking</li>
                 <li>Days 6-7: Pet Shipped </li> 
               </ul>         
                </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold">Simple exchanges</span>
            <p className="max-w-sm">
             Upon delivery If your product isn't the right fit, simple exchanges are available for a new one.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Back />
          <div>
            <span className="font-semibold">Cancellations</span>
            <p className="max-w-sm">
              Easy cancellations are permitted prior to shipment.
              Once a package has shipped, the order cannot be canceled, and no refund will be issued.
                In situations where an order is canceled, a 10% restocking fee will apply to all canceled orders.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTabs
