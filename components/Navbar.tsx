'use client';

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import React from 'react';

const user = {};
export const Navbar = () => {
        const router = useRouter();
        return (
                <header className="navbar">
                        <nav>
                                <Link href="/">
                                        <Image src={'/assets/icons/logo.svg'} alt="Logo" width={32} height={32} />
                                        <h1 className="logo-text">SnapCast</h1>
                                </Link>

                                {user && (
                                        <figure>
                                                <button
                                                        className="upload-btn"
                                                        onClick={() => router.push('/profile/id')}
                                                >
                                                        <Image
                                                                src={'/assets/images/dummy.jpg'}
                                                                alt="Upload"
                                                                className="rounded-full aspect-square"
                                                                width={32}
                                                                height={32}
                                                        />
                                                </button>
                                                <button
                                                        onClick={async () => {
                                                                return await authClient.signOut({
                                                                        fetchOptions: {
                                                                                onSuccess: () => {
                                                                                        redirect('/sign-in');
                                                                                },
                                                                        },
                                                                });
                                                        }}
                                                        className="cursor-pointer"
                                                >
                                                        <Image
                                                                src={'/assets/icons/logout.svg'}
                                                                alt="Logout"
                                                                className="rotate-180"
                                                                width={24}
                                                                height={24}
                                                        />
                                                </button>
                                        </figure>
                                )}
                        </nav>
                </header>
        );
};
