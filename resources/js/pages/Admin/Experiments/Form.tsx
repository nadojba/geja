import { Head, useForm } from '@inertiajs/react';
import { useState, type FormEvent } from 'react';
import {
    AdminLayout,
    Field,
    inputClass,
    textareaClass,
} from '@/components/admin/AdminLayout';
import admin from '@/routes/admin';

type Phase = { title: string; description: string };
type StoredExperiment = {
    id: number;
    slug: string;
    title: string;
    description: string;
    label: string;
    status: string;
    icon: string;
    kicker: string;
    problem: string;
    approach: string;
    outcome: string;
    accent_primary: string;
    accent_secondary: string;
    stack: string[];
    phases: Phase[];
    learnings: string[];
    github_url: string | null;
    demo_url: string | null;
    sort_order: number;
    is_published: boolean;
};
type FormData = Omit<StoredExperiment, 'id'>;

const emptyExperiment: FormData = {
    slug: '',
    title: '',
    description: '',
    label: 'LABORATÓRIO',
    status: 'Em construção',
    icon: '↗',
    kicker: '',
    problem: '',
    approach: '',
    outcome: '',
    accent_primary: '#ff8739',
    accent_secondary: '#c8ff00',
    stack: ['PHP'],
    phases: [{ title: '', description: '' }],
    learnings: [''],
    github_url: null,
    demo_url: null,
    sort_order: 0,
    is_published: true,
};

export default function Form({
    experiment,
}: {
    experiment: StoredExperiment | null;
}) {
    const editing = Boolean(experiment);
    const { data, setData, post, put, processing, errors, transform } =
        useForm<FormData>(experiment ? { ...experiment } : emptyExperiment);
    const [stackText, setStackText] = useState(data.stack.join(', '));
    const submit = (event: FormEvent) => {
        event.preventDefault();
        const stack = stackText
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean);
        transform((formData) => ({ ...formData, stack }));
        if (editing && experiment) {
            put(admin.experiments.update.url(experiment.id));
        } else {
            post(admin.experiments.store.url());
        }
    };
    const updatePhase = (index: number, field: keyof Phase, value: string) =>
        setData(
            'phases',
            data.phases.map((phase, phaseIndex) =>
                phaseIndex === index ? { ...phase, [field]: value } : phase,
            ),
        );
    const updateLearning = (index: number, value: string) =>
        setData(
            'learnings',
            data.learnings.map((learning, learningIndex) =>
                learningIndex === index ? value : learning,
            ),
        );
    return (
        <>
            <Head
                title={`${editing ? 'Editar' : 'Novo'} experimento — Admin`}
            />
            <AdminLayout
                title={editing ? 'Editar experimento' : 'Novo experimento'}
            >
                <form
                    onSubmit={submit}
                    className="mx-auto grid max-w-6xl gap-8"
                    noValidate
                >
                    <div className="flex items-end justify-between gap-4">
                        <div>
                            <p className="font-mono text-[10px] tracking-[0.16em] text-[#ff8739] uppercase">
                                // conteúdo editorial
                            </p>
                            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                                {editing ? data.title : 'Novo experimento'}
                            </h2>
                        </div>
                        <button
                            disabled={processing}
                            className="rounded bg-[#ff8739] px-5 py-3 text-sm font-semibold text-[#202027] hover:bg-[#ffa163] disabled:opacity-50"
                        >
                            {processing ? 'Salvando…' : 'Salvar experimento ↗'}
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
                        <Field label="Slug" error={errors.slug}>
                            <input
                                className={inputClass}
                                value={data.slug}
                                onChange={(e) =>
                                    setData('slug', e.target.value)
                                }
                                placeholder="mini-framework-php"
                            />
                        </Field>
                        <Field label="Label" error={errors.label}>
                            <input
                                className={inputClass}
                                value={data.label}
                                onChange={(e) =>
                                    setData('label', e.target.value)
                                }
                            />
                        </Field>
                        <Field label="Status" error={errors.status}>
                            <input
                                className={inputClass}
                                value={data.status}
                                onChange={(e) =>
                                    setData('status', e.target.value)
                                }
                            />
                        </Field>
                        <Field label="Ícone" error={errors.icon}>
                            <input
                                className={inputClass}
                                value={data.icon}
                                onChange={(e) =>
                                    setData('icon', e.target.value)
                                }
                            />
                        </Field>
                        <Field label="Kicker" error={errors.kicker}>
                            <input
                                className={inputClass}
                                value={data.kicker}
                                onChange={(e) =>
                                    setData('kicker', e.target.value)
                                }
                            />
                        </Field>
                        <Field label="Descrição" error={errors.description}>
                            <textarea
                                className={`${textareaClass} md:col-span-2`}
                                value={data.description}
                                onChange={(e) =>
                                    setData('description', e.target.value)
                                }
                            />
                        </Field>
                    </section>
                    <section className="grid gap-5 rounded-lg border border-[#ded9d1] bg-white p-6 md:grid-cols-2">
                        <Field
                            label="Cor principal"
                            error={errors.accent_primary}
                        >
                            <input
                                className={`${inputClass} h-12 p-1`}
                                type="color"
                                value={data.accent_primary}
                                onChange={(e) =>
                                    setData('accent_primary', e.target.value)
                                }
                            />
                        </Field>
                        <Field
                            label="Cor secundária"
                            error={errors.accent_secondary}
                        >
                            <input
                                className={`${inputClass} h-12 p-1`}
                                type="color"
                                value={data.accent_secondary}
                                onChange={(e) =>
                                    setData('accent_secondary', e.target.value)
                                }
                            />
                        </Field>
                        <Field
                            label="Stack (separada por vírgulas)"
                            error={errors.stack}
                        >
                            <input
                                className={`${inputClass} md:col-span-2`}
                                value={stackText}
                                onChange={(e) => setStackText(e.target.value)}
                            />
                        </Field>
                        <Field label="GitHub" error={errors.github_url}>
                            <input
                                className={inputClass}
                                type="url"
                                value={data.github_url ?? ''}
                                onChange={(e) =>
                                    setData(
                                        'github_url',
                                        e.target.value || null,
                                    )
                                }
                            />
                        </Field>
                        <Field label="Demo online" error={errors.demo_url}>
                            <input
                                className={inputClass}
                                type="url"
                                value={data.demo_url ?? ''}
                                onChange={(e) =>
                                    setData('demo_url', e.target.value || null)
                                }
                            />
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
                        <label className="flex items-center gap-2 self-end pb-3 text-sm">
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
                    <section className="grid gap-5 rounded-lg border border-[#ded9d1] bg-white p-6">
                        <Field label="Problema" error={errors.problem}>
                            <textarea
                                className={textareaClass}
                                value={data.problem}
                                onChange={(e) =>
                                    setData('problem', e.target.value)
                                }
                            />
                        </Field>
                        <Field label="Abordagem" error={errors.approach}>
                            <textarea
                                className={textareaClass}
                                value={data.approach}
                                onChange={(e) =>
                                    setData('approach', e.target.value)
                                }
                            />
                        </Field>
                        <Field label="Resultado" error={errors.outcome}>
                            <textarea
                                className={textareaClass}
                                value={data.outcome}
                                onChange={(e) =>
                                    setData('outcome', e.target.value)
                                }
                            />
                        </Field>
                    </section>
                    <section className="grid gap-5 rounded-lg border border-[#ded9d1] bg-white p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-semibold">Etapas</h3>
                                <p className="mt-1 text-xs text-[#8e8d99]">
                                    O processo exibido na página pública.
                                </p>
                            </div>
                            <button
                                type="button"
                                className="text-xs text-[#ff8739]"
                                onClick={() =>
                                    setData('phases', [
                                        ...data.phases,
                                        { title: '', description: '' },
                                    ])
                                }
                            >
                                + Adicionar etapa
                            </button>
                        </div>
                        {data.phases.map((phase, index) => (
                            <div
                                className="grid gap-3 md:grid-cols-[220px_1fr_auto]"
                                key={index}
                            >
                                <input
                                    className={inputClass}
                                    placeholder="Título da etapa"
                                    value={phase.title}
                                    onChange={(e) =>
                                        updatePhase(
                                            index,
                                            'title',
                                            e.target.value,
                                        )
                                    }
                                />
                                <input
                                    className={inputClass}
                                    placeholder="Descrição"
                                    value={phase.description}
                                    onChange={(e) =>
                                        updatePhase(
                                            index,
                                            'description',
                                            e.target.value,
                                        )
                                    }
                                />
                                <button
                                    type="button"
                                    className="text-xs text-red-600"
                                    onClick={() =>
                                        setData(
                                            'phases',
                                            data.phases.filter(
                                                (_, phaseIndex) =>
                                                    phaseIndex !== index,
                                            ),
                                        )
                                    }
                                >
                                    Remover
                                </button>
                            </div>
                        ))}
                    </section>
                    <section className="grid gap-5 rounded-lg border border-[#ded9d1] bg-white p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-semibold">Aprendizados</h3>
                                <p className="mt-1 text-xs text-[#8e8d99]">
                                    Uma frase por aprendizado.
                                </p>
                            </div>
                            <button
                                type="button"
                                className="text-xs text-[#ff8739]"
                                onClick={() =>
                                    setData('learnings', [
                                        ...data.learnings,
                                        '',
                                    ])
                                }
                            >
                                + Adicionar aprendizado
                            </button>
                        </div>
                        {data.learnings.map((learning, index) => (
                            <div className="flex gap-3" key={index}>
                                <input
                                    className={inputClass}
                                    value={learning}
                                    onChange={(e) =>
                                        updateLearning(index, e.target.value)
                                    }
                                    placeholder="O que ficou deste experimento?"
                                />
                                <button
                                    type="button"
                                    className="text-xs text-red-600"
                                    onClick={() =>
                                        setData(
                                            'learnings',
                                            data.learnings.filter(
                                                (_, learningIndex) =>
                                                    learningIndex !== index,
                                            ),
                                        )
                                    }
                                >
                                    Remover
                                </button>
                            </div>
                        ))}
                    </section>
                </form>
            </AdminLayout>
        </>
    );
}
