"use client"

import {
  Popover,
  PopoverPanel,
  Transition,
  Disclosure,
} from "@headlessui/react"
import {
  ArrowRightMini,
  XMark,
  ChevronDown,
} from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"

const SideMenuItems = {
 
  Account: "/account",
  Cart: "/cart",
  About: "/about",
  Contact: "/contact",
  Services: "/services",
}

const SideMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {
  const toggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base"
                >
                  Menu
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100 backdrop-blur-2xl"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 backdrop-blur-2xl"
                leaveTo="opacity-0"
              >
                <PopoverPanel className="flex flex-col absolute w-full pr-4 sm:pr-0 sm:w-1/3 2xl:w-1/4 sm:min-w-min h-[calc(100vh-1rem)] z-30 inset-x-0 text-sm text-ui-fg-on-color m-2 backdrop-blur-2xl">
                  <div
                    data-testid="nav-menu-popup"
                    className="flex flex-col h-full bg-[rgba(3,7,18,0.5)] rounded-rounded justify-between p-6"
                  >
                    <div className="flex justify-end" id="xmark">
                      <button data-testid="close-menu-button" onClick={close}>
                        <XMark />
                      </button>
                    </div>

                    {/* Menu Items */}
                    <ul className="flex flex-col gap-6 items-start justify-start">
                      {/* Home, then manually Store + dropdown, then the rest */}
                      <li>
                        <LocalizedClientLink
                          href="/"
                          className="text-3xl leading-10 hover:text-ui-fg-disabled"
                          onClick={close}
                          data-testid="home-link"
                        >
                          Home
                        </LocalizedClientLink>
                      </li>

                      {/* Store */}
                      <li>
                        <LocalizedClientLink
                          href="/store"
                          className="text-3xl leading-10 hover:text-ui-fg-disabled"
                          onClick={close}
                          data-testid="store-link"
                        >
                          Store
                        </LocalizedClientLink>
                      </li>

                      {/* Shop Categories Dropdown */}
                      <Disclosure>
                        {({ open }) => (
                          <li className="w-full">
                            <Disclosure.Button className="flex items-center gap-2 text-3xl leading-10 hover:text-ui-fg-disabled w-full">
                              <span>Shop Categories</span>
                              <ChevronDown
                                className={clx(
                                  "transition-transform duration-200",
                                  open ? "rotate-180" : ""
                                )}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="pl-4 flex flex-col gap-4 pt-2">
                              <LocalizedClientLink
                                href="/categories/dog"
                                className="text-lg hover:text-ui-fg-muted"
                                onClick={close}
                              >
                                Dogs
                              </LocalizedClientLink>
                              <LocalizedClientLink
                                href="/categories/cat"
                                className="text-lg hover:text-ui-fg-muted"
                                onClick={close}
                              >
                                Cats
                              </LocalizedClientLink>
                              <LocalizedClientLink
                                href="/categories/fish"
                                className="text-lg hover:text-ui-fg-muted"
                                onClick={close}
                              >
                                Fish
                              </LocalizedClientLink>
                              <LocalizedClientLink
                                href="/categories/bird"
                                className="text-lg hover:text-ui-fg-muted"
                                onClick={close}
                              >
                                 Birds
                              </LocalizedClientLink>
                              <LocalizedClientLink
                                href="/categories/lizard"
                                className="text-lg hover:text-ui-fg-muted"
                                onClick={close}
                              >
                                Lizards
                              </LocalizedClientLink>
                              <LocalizedClientLink
                                href="/categories/geckos"
                                className="text-lg hover:text-ui-fg-muted"
                                onClick={close}
                              >
                                Geckos
                              </LocalizedClientLink>
                              <LocalizedClientLink
                                href="/categories/turtle"
                                className="text-lg hover:text-ui-fg-muted"
                                onClick={close}
                              >
                                Turtles & Tortoises
                              </LocalizedClientLink>
                              <LocalizedClientLink
                                href="/categories/snakes"
                                className="text-lg hover:text-ui-fg-muted"
                                onClick={close}
                              >
                               Snakes
                              </LocalizedClientLink>
                            </Disclosure.Panel>
                          </li>
                        )}
                      </Disclosure>

                      {/* Remaining Items */}
                      {Object.entries(SideMenuItems).map(([name, href]) => (
                        <li key={name}>
                          <LocalizedClientLink
                            href={href}
                            className="text-3xl leading-10 hover:text-ui-fg-disabled"
                            onClick={close}
                            data-testid={`${name.toLowerCase()}-link`}
                          >
                            {name}
                          </LocalizedClientLink>
                        </li>
                      ))}
                    </ul>

                    {/* Footer */}
                    <div className="flex flex-col gap-y-6">
                      <div
                        className="flex justify-between"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={toggleState}
                            regions={regions}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150",
                            toggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                      <Text className="flex justify-between txt-compact-small">
                        © {new Date().getFullYear()} Pet Heven. All rights reserved.
                      </Text>
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
