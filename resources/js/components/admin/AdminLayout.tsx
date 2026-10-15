import { Link } from '@inertiajs/react';
import type { ReactNode } from 'react';
import { home } from '@/routes';
import admin from '@/routes/admin';

export function AdminLayout({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#f5f3ef] text-[#202027]">
            <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-[#ded9d1] bg-[#202027] p-6 text-white lg:block">
                <Link
                    href={home.url()}
                    className="flex items-center gap-2 text-xl font-semibold tracking-tight"
                >
                    <span className="grid h-8 w-8 place-items-center rounded bg-[#ff8739] text-[#202027]">
                        g.
                    </span>
                    geja labs
                </Link>
                <p className="mt-12 font-mono text-[10px] tracking-[0.16em] text-[#8e8d99] uppercase">
                    Painel privado
                </p>
                <nav className="mt-4 grid gap-2 text-sm">
                    <Link
                        href={admin.dashboard.url()}
                        className="rounded px-3 py-2 text-[#c2c8ce] hover:bg-white/10 hover:text-white"
                    >
                        Visão geral
                    </Link>
                    <Link
                        href={admin.experiments.index.url()}
                        className="rounded px-3 py-2 text-[#c2c8ce] hover:bg-white/10 hover:text-white"
                    >
                        Experimentos
                    </Link>
                    <Link
                        href={admin.books.index.url()}
                        className="rounded px-3 py-2 text-[#c2c8ce] hover:bg-white/10 hover:text-white"
                    >
                        Leituras
                    </Link>
                    <Link
                        href={admin.profile.edit.url()}
                        className="rounded px-3 py-2 text-[#c2c8ce] hover:bg-white/10 hover:text-white"
                    >
                        Perfil do site
                    </Link>
                </nav>
                <Link
                    href={home.url()}
                    className="absolute bottom-8 left-6 text-xs text-[#8e8d99] hover:text-[#ff8739]"
                >
                    ← Ver site público
                </Link>
            </aside>
            <div className="lg:pl-64">
                <header className="flex items-center justify-between border-b border-[#ded9d1] bg-white px-6 py-4 lg:px-10">
                    <div>
                        <p className="font-mono text-[10px] tracking-[0.16em] text-[#8e8d99] uppercase">
                            Geja Labs / Admin
                        </p>
                        <h1 className="mt-1 text-xl font-semibold">{title}</h1>
                    </div>
                    <Link
                        href={admin.logout.url()}
                        method="post"
                        as="button"
                        className="text-xs text-[#6f6b72] hover:text-[#ff8739]"
                    >
                        Sair
                    </Link>
                </header>
                <main className="p-6 lg:p-10">{children}</main>
            </div>
        </div>
    );
}

export function Field({
    label,
    error,
    children,
}: {
    label: string;
    error?: string;
    children: ReactNode;
}) {
    return (
        <label className="grid gap-2 text-sm font-medium text-[#3b3740]">
            <span>{label}</span>
            {children}
            {error && (
                <small className="font-normal text-red-600">{error}</small>
            )}
        </label>
    );
}

export const inputClass =
    'w-full rounded border border-[#d7d1c8] bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#ff8739] focus:ring-2 focus:ring-[#ff8739]/20';
export const textareaClass = `${inputClass} min-h-28 resize-y`;
