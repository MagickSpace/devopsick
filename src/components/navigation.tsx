'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { Icons } from '@/icons'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

export const components = [
  {
    title: {
      uk: 'Телефон',
      en: 'Cellphone',
      ru: 'Телефон',
    },
    href: '/docs/primitives/alert-dialog',
    description: {
      uk: 'Телефон',
      en: 'Cellphone',
      ru: 'Телефон',
    },
  },
  {
    title: {
      uk: 'Телефон',
      en: 'Cellphone',
      ru: 'Телефон',
    },
    href: '/docs/primitives/hover-card',
    description: {
      uk: 'Телефон',
      en: 'Cellphone',
      ru: 'Телефон',
    },
  },
  {
    title: {
      uk: 'Телефон',
      en: 'Cellphone',
      ru: 'Телефон',
    },
    href: '/docs/primitives/progress',
    description: {
      uk: 'Телефон',
      en: 'Cellphone',
      ru: 'Телефон',
    },
  },
  {
    title: {
      uk: 'Телефон',
      en: 'Cellphone',
      ru: 'Телефон',
    },
    href: '/docs/primitives/scroll-area',
    description: {
      uk: 'Телефон',
      en: 'Cellphone',
      ru: 'Телефон',
    },
  },
  {
    title: {
      uk: 'Телефон',
      en: 'Cellphone',
      ru: 'Телефон',
    },
    href: '/docs/primitives/tabs',
    description: {
      uk: 'Телефон',
      en: 'Cellphone',
      ru: 'Телефон',
    },
  },
  {
    title: {
      uk: 'Телефон',
      en: 'Cellphone',
      ru: 'Телефон',
    },
    href: '/docs/primitives/tooltip',
    description: {
      uk: 'Телефон',
      en: 'Cellphone',
      ru: 'Телефон',
    },
  },
]

import { useTranslations } from '@/i18n/utils'

export function NavigationMenuDemo({ lang }: { lang: 'uk' | 'en' | 'ru' }) {
  const [setOpen] = React.useState(false)
  const t = useTranslations(lang)

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icons.logo className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title[lang]}
                  title={component.title[lang]}
                  href={component.href}
                >
                  {component.description[lang]}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/docs">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
