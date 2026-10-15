import { Head, useForm } from '@inertiajs/react';
import { useState, type FormEvent } from 'react';
import {
    AdminLayout,
    Field,
    inputClass,
    textareaClass,
} from '@/components/admin/AdminLayout';
import admin from '@/routes/admin';

type Book = {
    id: number;
    title: string;
    author: string;
    year: number;
    tag: string;
    image: string | null | File;
    colors: string[];
    summary: string;
    ideas: string[];
    sort_order: number;
    is_published: boolean;
};
type FormData = Omit<Book, 'id'>;
const empty: FormData = {
    title: '',
    author: '',
    year: new Date().getFullYear(),
    tag: 'ENGENHARIA',
    image: null,
    colors: ['#553120', '#1d1c23'],
    summary: '',
    ideas: [''],
    sort_order: 0,
    is_published: true,
};

export default function Form({ book }: { book: Book | null }) {
    const editing = Boolean(book);
    const { data, setData, post, put, processing, errors, transform } =
        useForm<FormData>(book ? { ...book } : empty);
    const [ideasText, setIdeasText] = useState(data.ideas.join('\n'));
    const [imagePreview, setImagePreview] = useState(
        typeof data.image === 'string' ? data.image : undefined,
    );
    const updateImage = (file: File | undefined) => {
        if (!file) return;
        setData('image', file);
        setImagePreview(URL.createObjectURL(file));
    };
    const submit = (event: FormEvent) => {
        event.preventDefault();
        const ideas = ideasText
            .split('\n')
            .map((idea) => idea.trim())
            .filter(Boolean);
        transform((formData) => ({ ...formData, ideas }));
        if (book) put(admin.books.update.url(book.id), { forceFormData: true });
        else post(admin.books.store.url(), { forceFormData: true });
    };
    return (
        <>
            <Head title={`${editing ? 'Editar' : 'Novo'} livro — Admin`} />
            <AdminLayout title={editing ? 'Editar livro' : 'Novo livro'}>
                <form
                    onSubmit={submit}
                    className="mx-auto grid max-w-5xl gap-6"
                >
                    <div className="flex items-end justify-between">
                        <div>
                            <p className="font-mono text-[10px] tracking-[0.16em] text-[#ff8739] uppercase">
                                // leitura
                            </p>
                            <h2 className="mt-2 text-3xl font-semibold">
                                {editing ? data.title : 'Cadastrar livro'}
                            </h2>
                        </div>
                        <button
                            disabled={processing}
                            className="rounded bg-[#ff8739] px-5 py-3 text-sm font-semibold text-[#202027]"
                        >
                            {processing ? 'Salvando…' : 'Salvar livro ↗'}
                        </button>
                    </div>
                    <section className="grid gap-5 rounded-lg border border-[#ded9d1] bg-white p-6 md:grid-cols-2">
                        <Field label="Título" error={errors.title}>
                            <input
                                className={inputClass}
                                value={data.title}
                                onChange={(e) =>
                                    setData('title', e.target.value)
                                }
                            />
                        </Field>
                        <Field label="Autor" error={errors.author}>
                            <input
                                className={inputClass}
                                value={data.author}
                                onChange={(e) =>
                                    setData('author', e.target.value)
                                }
                            />
                        </Field>
                        <Field label="Ano" error={errors.year}>
                            <input
                                className={inputClass}
                                type="number"
                                value={data.year}
                                onChange={(e) =>
                                    setData('year', Number(e.target.value))
                                }
                            />
                        </Field>
                        <Field label="Tag" error={errors.tag}>
                            <input
                                className={inputClass}
                                value={data.tag}
                                onChange={(e) => setData('tag', e.target.value)}
                            />
                        </Field>
                        <Field label="Capa do livro" error={errors.image}>
                            <input
                                className={`${inputClass} p-2`}
                                type="file"
                                accept="image/jpeg,image/png,image/webp,image/avif"
                                onChange={(event) =>
                                    updateImage(event.target.files?.[0])
                                }
                            />
                            {imagePreview && (
                                <img
                                    className="mt-3 h-40 w-28 rounded object-cover"
                                    src={imagePreview}
                                    alt={`Prévia da capa de ${data.title || 'livro'}`}
                                />
                            )}
                        </Field>
                        <Field label="Ordem" error={errors.sort_order}>
                            <input
                                className={inputClass}
                                type="number"
                                min="0"
                                value={data.sort_order}
                                onChange={(e) =>
                                    setData(
                                        'sort_order',
                                        Number(e.target.value),
                                    )
                                }
                            />
                        </Field>
                        <Field label="Cor 1" error={errors['colors.0']}>
                            <input
                                className="h-12 w-full rounded border border-[#ded9d1] p-1"
                                type="color"
                                value={data.colors[0]}
                                onChange={(e) =>
                                    setData('colors', [
                                        e.target.value,
                                        data.colors[1],
                                    ])
                                }
                            />
                        </Field>
                        <Field label="Cor 2" error={errors['colors.1']}>
                            <input
                                className="h-12 w-full rounded border border-[#ded9d1] p-1"
                                type="color"
                                value={data.colors[1]}
                                onChange={(e) =>
                                    setData('colors', [
                                        data.colors[0],
                                        e.target.value,
                                    ])
                                }
                            />
                        </Field>
                        <label className="flex items-center gap-2 text-sm">
                            <input
                                type="checkbox"
                                checked={data.is_published}
                                onChange={(e) =>
                                    setData('is_published', e.target.checked)
                                }
                            />{' '}
                            Publicado
                        </label>
                    </section>
                    <Field label="Resumo" error={errors.summary}>
                        <textarea
                            className={textareaClass}
                            value={data.summary}
                            onChange={(e) => setData('summary', e.target.value)}
                        />
                    </Field>
                    <Field
                        label="Ideias principais (uma por linha)"
                        error={errors.ideas}
                    >
                        <textarea
                            className={textareaClass}
                            value={ideasText}
                            onChange={(e) => setIdeasText(e.target.value)}
                        />
                    </Field>
                </form>
            </AdminLayout>
        </>
    );
}
