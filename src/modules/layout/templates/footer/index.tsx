import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="bg-[#f8f1ea]/80 backdrop-blur-sm border-t border-[#e0d6cc] w-full text-black rounded-t-2xl shadow-[0_-6px_20px_-10px_rgba(0,0,0,0.1)] animate-fade-in">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-10 md:flex-row justify-between py-16 md:py-24 transition-all duration-500">
          {/* LEFT: Logo + Newsletter */}
          <div className="flex flex-col gap-y-6 max-w-sm">
            <LocalizedClientLink
              href="/"
              className="text-2xl font-bold text-black hover:text-orange-500 uppercase transition-all duration-300 tracking-wider"
            >
              PET HEVEN
            </LocalizedClientLink>

            <div>
              <span className="text-base font-medium mb-2 block text-black">
                Subscribe to our Newsletter
              </span>
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="border border-[#e0d6cc] px-4 py-2.5 rounded-md text-sm outline-none focus:ring-2 focus:ring-orange-400 bg-white placeholder:text-gray-400 transition-shadow"
                />
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-orange-600 hover:shadow-md transition-all duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* MIDDLE: Categories + Collections + Static Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm">
            {/* Categories */}
            {productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-3">
                <span className="text-black font-medium">Categories</span>
                <ul className="flex flex-col gap-2 text-gray-700">
                  {productCategories.slice(0, 6).map((c) => {
                    if (c.parent_category) return null
                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li key={c.id}>
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-orange-500 transition-colors duration-200 font-medium",
                            children && "text-[15px]"
                          )}
                          href={`/categories/${c.handle}`}
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="ml-3 mt-1 space-y-1">
                            {children.map((child) => (
                              <li key={child.id}>
                                <LocalizedClientLink
                                  className="hover:text-orange-500 transition-colors duration-200"
                                  href={`/categories/${child.handle}`}
                                >
                                  {child.name}
                                </LocalizedClientLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            {/* Collections */}
            {collections?.length > 0 && (
              <div className="flex flex-col gap-y-3">
                <span className="text-black font-medium">Collections</span>
                <ul
                  className={clx(
                    "grid gap-2 text-gray-700",
                    { "grid-cols-2": collections.length > 3 }
                  )}
                >
                  {collections.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-orange-500 transition-colors duration-200"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Static Links */}
            <div className="flex flex-col gap-y-3">
              <span className="text-black font-medium">Pet Heven</span>
              <ul className="flex flex-col gap-2 text-gray-700">
                <li>
                  <LocalizedClientLink href="/about" className="hover:text-orange-500 transition">
                    About Us
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/contact" className="hover:text-orange-500 transition">
                    Contact
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/services" className="hover:text-orange-500 transition">
                    Services
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/privacy-policy" className="hover:text-orange-500 transition">
                    Privacy Policy
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full py-6 text-gray-600 border-t border-[#e0d6cc] text-xs gap-y-2">
          <span>© {new Date().getFullYear()} Pet Heven. All rights reserved.</span>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}
