import { Head, useForm } from '@inertiajs/react';
import { useState, type FormEvent } from 'react';
import {
    AdminLayout,
    Field,
    inputClass,
    textareaClass,
} from '@/components/admin/AdminLayout';
import admin from '@/routes/admin';

type Step = {
    title: string;
    description: string;
    image?: string | null | File;
};
type Profile = {
    id: number;
    hero_eyebrow: string;
    hero_title: string;
    hero_title_emphasis: string;
    hero_lead: string;
    about_name: string;
    about_title: string;
    about_lead: string;
    about_photo_url: string | null;
    about_steps: Step[];
    stack: string[];
    contact_text: string;
    github_url: string | null;
    linkedin_url: string | null;
    contact_email: string | null;
    manifesto_eyebrow: string;
    manifesto_title: string;
    manifesto_title_emphasis: string;
    manifesto_description: string;
};
type FormData = Omit<Profile, 'id'>;

export default function Form({ profile }: { profile: Profile }) {
    const { data, setData, put, processing, errors } = useForm<FormData>({
        ...profile,
    });
    const [imagePreviews, setImagePreviews] = useState<Record<number, string>>(
        {},
    );
    const updateStep = (index: number, field: keyof Step, value: string) =>
        setData(
            'about_steps',
            data.about_steps.map((step, stepIndex) =>
                stepIndex === index ? { ...step, [field]: value } : step,
            ),
        );
    const updateStepImage = (index: number, file: File | undefined) => {
        if (!file) return;
        setData(
            'about_steps',
            data.about_steps.map((step, stepIndex) =>
                stepIndex === index ? { ...step, image: file } : step,
            ),
        );
        setImagePreviews((current) => ({
            ...current,
            [index]: URL.createObjectURL(file),
        }));
    };
    const submit = (event: FormEvent) => {
        event.preventDefault();
        put(admin.profile.update.url(profile.id), { forceFormData: true });
    };
    return (
        <>
            <Head title="Perfil do site — Admin" />
            <AdminLayout title="Perfil do site">
                <form
                    onSubmit={submit}
                    className="mx-auto grid max-w-6xl gap-6"
                >
                    <div className="flex items-end justify-between">
                        <div>
                            <p className="font-mono text-[10px] tracking-[0.16em] text-[#ff8739] uppercase">
                                // conteúdo global
                            </p>
                            <h2 className="mt-2 text-3xl font-semibold">
                                Identidade do laboratório
                            </h2>
                        </div>
                        <button
                            disabled={processing}
                            className="rounded bg-[#ff8739] px-5 py-3 text-sm font-semibold text-[#202027]"
                        >
                            {processing ? 'Salvando…' : 'Salvar perfil ↗'}
                        </button>
                    </div>
                    <section className="grid gap-5 rounded-lg border border-[#ded9d1] bg-white p-6 md:grid-cols-2">
                        <Field
                            label="Eyebrow da hero"
                            error={errors.hero_eyebrow}
                        >
                            <input
                                className={inputClass}
                                value={data.hero_eyebrow}
                                onChange={(e) =>
                                    setData('hero_eyebrow', e.target.value)
                                }
                            />
                        </Field>
                        <Field label="Título da hero" error={errors.hero_title}>
                            <input
                                className={inputClass}
                                value={data.hero_title}
                                onChange={(e) =>
                                    setData('hero_title', e.target.value)
                                }
                            />
                        </Field>
                        <Field
                            label="Ênfase da hero"
                            error={errors.hero_title_emphasis}
                        >
                            <input
                                className={inputClass}
                                value={data.hero_title_emphasis}
                                onChange={(e) =>
                                    setData(
                                        'hero_title_emphasis',
                                        e.target.value,
                                    )
                                }
                            />
                        </Field>
                        <Field label="Texto da hero" error={errors.hero_lead}>
                            <textarea
                                className={textareaClass}
                                value={data.hero_lead}
                                onChange={(e) =>
                                    setData('hero_lead', e.target.value)
                                }
                            />
                        </Field>
                    </section>
                    <section className="grid gap-5 rounded-lg border border-[#ded9d1] bg-white p-6 md:grid-cols-2">
                        <Field label="Nome" error={errors.about_name}>
                            <input
                                className={inputClass}
                                value={data.about_name}
                                onChange={(e) =>
                                    setData('about_name', e.target.value)
                                }
                            />
                        </Field>
                        <Field label="Título sobre" error={errors.about_title}>
                            <input
                                className={inputClass}
                                value={data.about_title}
                                onChange={(e) =>
                                    setData('about_title', e.target.value)
                                }
                            />
                        </Field>
                        <Field label="Texto sobre" error={errors.about_lead}>
                            <textarea
                                className={textareaClass}
                                value={data.about_lead}
                                onChange={(e) =>
                                    setData('about_lead', e.target.value)
                                }
                            />
                        </Field>
                        <Field
                            label="Foto (URL)"
                            error={errors.about_photo_url}
                        >
                            <input
                                className={inputClass}
                                value={data.about_photo_url ?? ''}
                                onChange={(e) =>
                                    setData(
                                        'about_photo_url',
                                        e.target.value || null,
                                    )
                                }
                            />
                        </Field>
                        <Field
                            label="Stack (uma por vírgula)"
                            error={errors.stack}
                        >
                            <input
                                className={inputClass}
                                value={data.stack.join(', ')}
                                onChange={(e) =>
                                    setData(
                                        'stack',
                                        e.target.value
                                            .split(',')
                                            .map((item) => item.trim())
                                            .filter(Boolean),
                                    )
                                }
                            />
                        </Field>
                        <Field
                            label="Texto de contato"
                            error={errors.contact_text}
                        >
                            <input
                                className={inputClass}
                                value={data.contact_text}
                                onChange={(e) =>
                                    setData('contact_text', e.target.value)
                                }
                            />
                        </Field>
                        <Field label="GitHub" error={errors.github_url}>
                            <input
                                className={inputClass}
                                value={data.github_url ?? ''}
                                onChange={(e) =>
                                    setData(
                                        'github_url',
                                        e.target.value || null,
                                    )
                                }
                            />
                        </Field>
                        <Field label="LinkedIn" error={errors.linkedin_url}>
                            <input
                                className={inputClass}
                                value={data.linkedin_url ?? ''}
                                onChange={(e) =>
                                    setData(
                                        'linkedin_url',
                                        e.target.value || null,
                                    )
                                }
                            />
                        </Field>
                        <Field label="E-mail" error={errors.contact_email}>
                            <input
                                className={inputClass}
                                value={data.contact_email ?? ''}
                                onChange={(e) =>
                                    setData(
                                        'contact_email',
                                        e.target.value || null,
                                    )
                                }
                            />
                        </Field>
                    </section>
                    <section className="grid gap-4 rounded-lg border border-[#ded9d1] bg-white p-6">
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold">Etapas sobre</h3>
                            <button
                                type="button"
                                className="text-xs text-[#ff8739]"
                                onClick={() =>
                                    setData('about_steps', [
                                        ...data.about_steps,
                                        {
                                            title: '',
                                            description: '',
                                            image: null,
                                        },
                                    ])
                                }
                            >
                                + Adicionar etapa
                            </button>
                        </div>
                        {data.about_steps.map((step, index) => (
                            <div
                                className="grid gap-3 rounded border border-[#eeeae4] p-4 md:grid-cols-[220px_1fr]"
                                key={index}
                            >
                                <input
                                    className={inputClass}
                                    value={step.title}
                                    placeholder="Título"
                                    onChange={(e) =>
                                        updateStep(
                                            index,
                                            'title',
                                            e.target.value,
                                        )
                                    }
                                />
                                <input
                                    className={inputClass}
                                    value={step.description}
                                    placeholder="Descrição"
                                    onChange={(e) =>
                                        updateStep(
                                            index,
                                            'description',
                                            e.target.value,
                                        )
                                    }
                                />
                                <div className="grid gap-2 md:col-span-2 md:grid-cols-[220px_1fr] md:items-center">
                                    <label className="text-xs font-medium text-[#6f6b72]">
                                        Imagem desta etapa
                                        <input
                                            className="mt-2 block w-full text-xs"
                                            type="file"
                                            accept="image/jpeg,image/png,image/webp,image/avif"
                                            onChange={(event) =>
                                                updateStepImage(
                                                    index,
                                                    event.target.files?.[0],
                                                )
                                            }
                                        />
                                    </label>
                                    {(imagePreviews[index] ?? step.image) && (
                                        <img
                                            className="h-24 w-40 rounded object-cover"
                                            src={
                                                imagePreviews[index] ??
                                                step.image ??
                                                undefined
                                            }
                                            alt={`Prévia da etapa ${index + 1}`}
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </section>
                    <section className="grid gap-5 rounded-lg border border-[#ded9d1] bg-white p-6 md:grid-cols-2">
                        <Field
                            label="Eyebrow manifesto"
                            error={errors.manifesto_eyebrow}
                        >
                            <input
                                className={inputClass}
                                value={data.manifesto_eyebrow}
                                onChange={(e) =>
                                    setData('manifesto_eyebrow', e.target.value)
                                }
                            />
                        </Field>
                        <Field
                            label="Título manifesto"
                            error={errors.manifesto_title}
                        >
                            <input
                                className={inputClass}
                                value={data.manifesto_title}
                                onChange={(e) =>
                                    setData('manifesto_title', e.target.value)
                                }
                            />
                        </Field>
                        <Field
                            label="Ênfase manifesto"
                            error={errors.manifesto_title_emphasis}
                        >
                            <input
                                className={inputClass}
                                value={data.manifesto_title_emphasis}
                                onChange={(e) =>
                                    setData(
                                        'manifesto_title_emphasis',
                                        e.target.value,
                                    )
                                }
                            />
                        </Field>
                        <Field
                            label="Descrição manifesto"
                            error={errors.manifesto_description}
                        >
                            <textarea
                                className={textareaClass}
                                value={data.manifesto_description}
                                onChange={(e) =>
                                    setData(
                                        'manifesto_description',
                                        e.target.value,
                                    )
                                }
                            />
                        </Field>
                    </section>
                </form>
            </AdminLayout>
        </>
    );
}
