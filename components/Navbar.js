import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="py-4 px-8 bg-gray-800 text-white flex justify-between shadow">
            <div className="flex items-center">
                {/* <Image
                    src="/../public/masper-logo-noback.png"
                    alt="Picture of the author"
                    width={50}
                    height={50}
                /> */}
                <div className="text-2xl ml-3 font-medium"><Link href="/">MASPER</Link></div>
            </div>
            <div className="flex items-center">
                <div className="ml-8"><Link href="/members">Membros</Link></div>
                <div className="ml-8"><Link href="/profile">Perfil</Link></div>
                <div className="ml-8"><Link href="/login">Sair</Link></div>
            </div>
        </nav>
    )
}