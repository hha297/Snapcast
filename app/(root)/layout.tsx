import { Navbar } from '@/components/Navbar';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

const Layout = async ({ children }: { children: ReactNode }) => {
        const session = await auth.api.getSession({ headers: await headers() });
        if (!session) redirect('/sign-in');
        return (
                <div>
                        <Navbar />
                        {children}
                </div>
        );
};

export default Layout;
