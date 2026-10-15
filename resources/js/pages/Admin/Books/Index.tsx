import { Head, Link, router } from '@inertiajs/react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import admin from '@/routes/admin';

type Book = {
    id: number;
    title: string;
    author: string;
    year: number;
    tag: string;
    is_published: boolean;
};

export default function Index({ books }: { books: Book[] }) {
    return (
        <>
            <Head title="Leituras — Admin" />
            <AdminLayout title="Leituras">
                <div className="mx-auto max-w-6xl space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-mono text-[10px] tracking-[0.16em] text-[#ff8739] uppercase">
                                // conteúdo editorial
                            </p>
                            <h2 className="mt-2 text-3xl font-semibold">
                                Livros da estante
                            </h2>
                        </div>
                        <Link
                            href={admin.books.create.url()}
                            className="rounded bg-[#ff8739] px-4 py-3 text-sm font-semibold text-[#202027]"
                        >
                            Novo livro ↗
                        </Link>
                    </div>
                    <div className="overflow-hidden rounded-lg border border-[#ded9d1] bg-white">
                        {books.map((book) => (
                            <div
                                key={book.id}
                                className="flex items-center justify-between gap-4 border-b border-[#eeeae4] px-5 py-4 last:border-0"
                            >
                                <div>
                                    <p className="font-semibold">
                                        {book.title}
                                    </p>
                                    <p className="mt-1 text-xs text-[#8e8d99]">
                                        {book.author} · {book.year} · {book.tag}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 text-sm">
                                    <span
                                        className={
                                            book.is_published
                                                ? 'text-green-700'
                                                : 'text-[#8e8d99]'
                                        }
                                    >
                                        {book.is_published
                                            ? 'Publicado'
                                            : 'Rascunho'}
                                    </span>
                                    <Link
                                        className="text-[#ff8739]"
                                        href={admin.books.edit.url(book.id)}
                                    >
                                        Editar
                                    </Link>
                                    <button
                                        className="text-red-600"
                                        onClick={() => {
                                            if (
                                                window.confirm(
                                                    'Excluir este livro?',
                                                )
                                            )
                                                router.delete(
                                                    admin.books.destroy.url(
                                                        book.id,
                                                    ),
                                                );
                                        }}
                                    >
                                        Excluir
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}
