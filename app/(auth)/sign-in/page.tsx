'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { testimonials } from '@/constants';
import { authClient } from '@/lib/auth-client';

const SignInPage = () => {
        const [currentIndex, setCurrentIndex] = useState(0);

        useEffect(() => {
                const interval = setInterval(() => {
                        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
                }, 5000);
                return () => clearInterval(interval);
        }, []);

        const testimonial = testimonials[currentIndex];

        const handleSignIn = async (provider: 'google' | 'github') => {
                try {
                        await authClient.signIn.social({ provider });
                } catch (error) {
                        console.error('Sign-in error:', error);
                }
        };

        return (
                <main className="sign-in">
                        <aside className="testimonial">
                                <Link href="/">
                                        <Image src="/assets/icons/logo.svg" alt="logo" width={32} height={32} />
                                        <h1>Snapcast</h1>
                                </Link>

                                <div className="description relative mt-4">
                                        <section
                                                key={testimonial.name}
                                                className="absolute inset-0 transition-all duration-700 ease-in-out animate-slide"
                                        >
                                                <figure className="flex gap-1">
                                                        {Array.from({ length: 5 }).map((_, index) => (
                                                                <Image
                                                                        src="/assets/icons/star.svg"
                                                                        alt="star"
                                                                        width={20}
                                                                        height={20}
                                                                        key={index}
                                                                />
                                                        ))}
                                                </figure>
                                                <p className="mt-4 italic">&quot;{testimonial.quote}&quot;</p>
                                                <article className="flex items-center gap-4 mt-4">
                                                        <Image
                                                                src={testimonial.avatar}
                                                                alt={testimonial.name}
                                                                width={64}
                                                                height={64}
                                                                className="rounded-full"
                                                        />
                                                        <div>
                                                                <h2 className="font-semibold">{testimonial.name}</h2>
                                                                <p className="text-sm text-gray-500">
                                                                        {testimonial.title}
                                                                </p>
                                                        </div>
                                                </article>
                                        </section>
                                </div>

                                <p className="mt-6 text-xs text-gray-400">© Snapcast {new Date().getFullYear()}</p>
                        </aside>

                        <aside className="google-sign-in">
                                <section>
                                        <Link href="/">
                                                <Image src="/assets/icons/logo.svg" alt="logo" width={40} height={40} />
                                                <h1>Snapcast</h1>
                                        </Link>
                                        <p>
                                                Create and share your very first <span>SnapCast Video</span> in no time
                                        </p>
                                        <button onClick={() => handleSignIn('google')}>
                                                <Image
                                                        src="/assets/icons/google.svg"
                                                        alt="google"
                                                        width={20}
                                                        height={20}
                                                />
                                                <span>Sign in with Google</span>
                                        </button>
                                        <button onClick={() => handleSignIn('github')}>
                                                <Image
                                                        src="/assets/icons/github.svg"
                                                        alt="github"
                                                        width={24}
                                                        height={24}
                                                />
                                                <span>Sign in with Github</span>
                                        </button>
                                </section>
                        </aside>

                        <div className="overlay" />
                </main>
        );
};

export default SignInPage;
