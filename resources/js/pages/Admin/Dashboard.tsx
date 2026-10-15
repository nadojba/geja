import { Head, Link } from '@inertiajs/react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import admin from '@/routes/admin';

type DashboardProps = {
    stats: {
        totalExperiments: number;
        publishedExperiments: number;
        draftExperiments: number;
    };
};

export default function Dashboard({ stats }: DashboardProps) {
    return (
        <>
            <Head title="Dashboard — Geja Labs" />
            <AdminLayout title="Visão geral">
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                        <div>
                            <p className="font-mono text-[10px] tracking-[0.16em] text-[#ff8739] uppercase">
                                // laboratório em movimento
                            </p>
                            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                                O conteúdo começa aqui.
                            </h2>
                        </div>
                        <Link
                            href={admin.experiments.create.url()}
                            className="inline-flex rounded bg-[#ff8739] px-4 py-3 text-sm font-semibold text-[#202027] hover:bg-[#ffa163]"
                        >
                            Novo experimento ↗
                        </Link>
                    </div>
                    <div className="mt-10 grid gap-4 md:grid-cols-3">
                        {[
                            ['Total de experimentos', stats.totalExperiments],
                            ['Publicados', stats.publishedExperiments],
                            ['Rascunhos', stats.draftExperiments],
                        ].map(([label, value]) => (
                            <div
                                className="rounded-lg border border-[#ded9d1] bg-white p-6"
                                key={label as string}
                            >
                                <span className="font-mono text-[10px] tracking-[0.12em] text-[#8e8d99] uppercase">
                                    {label}
                                </span>
                                <strong className="mt-4 block text-4xl font-semibold">
                                    {value}
                                </strong>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 rounded-lg border border-[#ded9d1] bg-[#292127] p-8 text-white">
                        <p className="font-mono text-[10px] tracking-[0.16em] text-[#c8ff00] uppercase">
                            próximo passo
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold">
                            Cadastre a história por trás de cada ideia.
                        </h3>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-[#b9bbc5]">
                            Cada experimento pode ter sua própria cor, ícone,
                            stack, etapas, aprendizados e links externos.
                        </p>
                        <Link
                            href={admin.experiments.index.url()}
                            className="mt-6 inline-block text-sm text-[#ff8739] hover:text-[#ffa163]"
                        >
                            Gerenciar experimentos →
                        </Link>
                        <Link
                            href={admin.books.index.url()}
                            className="ml-5 inline-block text-sm text-[#ff8739] hover:text-[#ffa163]"
                        >
                            Gerenciar leituras →
                        </Link>
                        <Link
                            href={admin.profile.edit.url()}
                            className="ml-5 inline-block text-sm text-[#ff8739] hover:text-[#ffa163]"
                        >
                            Editar perfil →
                        </Link>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}
