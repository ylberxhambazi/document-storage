'use client'
import cn from '@/util/cn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/documents', label: 'Documents' },
    { href: '/logs', label: 'Logs' },
    { href: '/profile', label: 'Profile' },
]

const Sidebar = () => {
    const pathname = usePathname()

    return (
        <aside className='w-64 bg-white border-r min-h-screen p-4'>
            <nav className='flex flex-col space-y-2'>
                {links.map(link => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            'block p-2 rounded-md hover:bg-gray-100 transition',
                            pathname === link.href ? 'bg-gray-100 font-semibold' : ''
                        )}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar