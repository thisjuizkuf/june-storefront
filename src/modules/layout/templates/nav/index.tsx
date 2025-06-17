import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

import { ShoppingCart, User } from "lucide-react"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          
          {/* Left: Side menu */}
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          {/* Center: Logo */}
          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="flex items-center justify-center"
              data-testid="nav-store-link"
            >
              <Image
                src="/logo.png" // Replace with your logo path (e.g., /logo.svg, /logo.webp)
                alt="Pet Heven Logo"
                width={120}
                height={32}
                className="object-contain"
              />
            </LocalizedClientLink>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            
            {/* Account icon */}
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                <User className="w-5 h-5" />
              </LocalizedClientLink>
            </div>

            {/* Cart icon with fallback */}
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <ShoppingCart className="w-5 h-5" />
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
