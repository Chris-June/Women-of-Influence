import {
  HomeIcon,
  Users,
  Newspaper,
  Users2,
  BookText,
  ScrollText,
  Calendar,
  Heart,
  LogIn,
} from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';
import { Link } from 'react-router-dom';

const data = [
  {
    title: 'Home',
    icon: (
      <HomeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/',
  },
  {
    title: 'About Us',
    icon: (
      <Users className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/about',
  },
  {
    title: 'Newsletter',
    icon: (
      <Newspaper className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/newsletter',
  },
  {
    title: 'Community',
    icon: (
      <Users2 className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/community',
  },
  {
    title: 'Resources',
    icon: (
      <BookText className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/resources',
  },
  {
    title: 'Blog',
    icon: (
      <ScrollText className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/blog',
  },
  {
    title: 'Events',
    icon: (
      <Calendar className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/events',
  },
  {
    title: 'Get Involved',
    icon: (
      <Heart className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/get-involved',
  },
  {
    title: 'Login',
    icon: (
      <LogIn className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/login',
  },
];

export default function Header() {
  return (
    <div className='sticky top-0 left-0 w-full z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm shadow-sm'>
      <div className='max-w-7xl mx-auto px-4'>
        <Dock className='items-end py-3'>
          {data.map((item, idx) => (
            <Link to={item.href} key={idx}>
              <DockItem
                className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'
              >
                <DockLabel>{item.title}</DockLabel>
                <DockIcon>{item.icon}</DockIcon>
              </DockItem>
            </Link>
          ))}
        </Dock>
      </div>
    </div>
  );
}
