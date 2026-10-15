import { Head, Link, router } from '@inertiajs/react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import admin from '@/routes/admin';

type ExperimentRow = {
    id: number;
    title: string;
    slug: string;
    status: string;
    label: string;
    icon: string;
    is_published: boolean;
    sort_order: number;
};

export default function Index({
    experiments,
}: {
    experiments: ExperimentRow[];
}) {
    function remove(experiment: ExperimentRow) {
        if (window.confirm(`Excluir “${experiment.title}”?`))
            router.delete(admin.experiments.destroy.url(experiment.id));
    }

    return (
        <>
            <Head title="Experimentos — Admin" />
            <AdminLayout title="Experimentos">
                <div className="mx-auto max-w-6xl">
                    <div className="flex items-end justify-between gap-4">
                        <div>
                            <p className="font-mono text-[10px] tracking-[0.16em] text-[#ff8739] uppercase">
                                // conteúdo editorial
                            </p>
                            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                                Experimentos
                            </h2>
                        </div>
                        <Link
                            href={admin.experiments.create.url()}
                            className="rounded bg-[#ff8739] px-4 py-3 text-sm font-semibold text-[#202027] hover:bg-[#ffa163]"
                        >
                            Novo experimento ↗
                        </Link>
                    </div>
                    <div className="mt-8 overflow-hidden rounded-lg border border-[#ded9d1] bg-white">
                        <div className="grid grid-cols-[1fr_150px_120px_100px] border-b border-[#ded9d1] px-5 py-3 font-mono text-[10px] tracking-[0.1em] text-[#8e8d99] uppercase">
                            <span>Experimento</span>
                            <span>Status</span>
                            <span>Visibilidade</span>
                            <span />
                        </div>
                        {experiments.map((experiment) => (
                            <div
                                className="grid grid-cols-[1fr_150px_120px_100px] items-center border-b border-[#eeeae4] px-5 py-5 last:border-0"
                                key={experiment.id}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="grid h-9 w-9 place-items-center rounded bg-[#292127] font-mono text-sm text-[#ff8739]">
                                        {experiment.icon}
                                    </span>
                                    <div>
                                        <strong className="block text-sm">
                                            {experiment.title}
                                        </strong>
                                        <small className="font-mono text-[10px] text-[#8e8d99]">
                                            /{experiment.slug}
                                        </small>
                                    </div>
                                </div>
                                <span className="text-xs text-[#6f6b72]">
                                    {experiment.status}
                                </span>
                                <span
                                    className={`text-xs ${experiment.is_published ? 'text-emerald-700' : 'text-[#8e8d99]'}`}
                                >
                                    {experiment.is_published
                                        ? 'Publicado'
                                        : 'Rascunho'}
                                </span>
                                <div className="flex justify-end gap-3 text-xs">
                                    <Link
                                        href={admin.experiments.edit.url(
                                            experiment.id,
                                        )}
                                        className="text-[#6f6b72] hover:text-[#ff8739]"
                                    >
                                        Editar
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() => remove(experiment)}
                                        className="text-[#6f6b72] hover:text-red-600"
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
