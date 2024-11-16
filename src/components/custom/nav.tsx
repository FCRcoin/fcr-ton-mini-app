'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export function NavigationBar() {
  const pathname = usePathname(); // Get the current path

  // Define your navigation items
  const navItems = [
    { href: '/referral', label: 'Referral', icon: '/assets/referral.png' },
    { href: '/task', label: 'Task', icon: '/assets/task.png' },
    { href: '/', label: 'Tap', icon: '/assets/tap.png' },
    { href: '/epimall', label: 'Shop', icon: '/assets/boost.png' },
    { href: '/stats', label: 'Stats', icon: '/assets/stats.png' },
  ];

  return (
    <NavigationMenu
      className="
        fixed 
        bottom-4 
        left-1/2 
        transform 
        -translate-x-1/2 
        z-50 
        w-full 
        max-w-md 
        px-4 
        bg-transparent
      "
    >
      <NavigationMenuList className="flex gap-2 justify-center w-full">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <NavigationMenuItem key={item.href} className="hover:opacity-90">
              <Link href={item.href} passHref legacyBehavior>
                {/* Apply 'group' to the container div instead of NavigationMenuLink */}
                <NavigationMenuLink asChild>
                  <a className="group">
                    <div className="relative flex items-center text-white bg-supernova-400 rounded-md">
                      <div
                        className={`
                          absolute inset-0 bg-black rounded-md
                          transition-opacity duration-300
                          ${isActive ? 'opacity-10' : 'opacity-80'}
                        `}
                      ></div>
                      {/* Content */}
                      <div className="relative flex flex-col justify-center items-center z-10 w-[60px] h-[80px] text-sm font-medium p-2">
                        <Image
                          src={item.icon}
                          alt={`${item.label} Icon`}
                          width={30}
                          height={36}
                          className="mb-1"
                        />
                        {item.label}
                      </div>
                    </div>
                  </a>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
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
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-white">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-white">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
