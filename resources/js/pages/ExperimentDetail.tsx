import { Head, Link } from '@inertiajs/react';
import type { Experiment } from '@/data/geja-labs';
import { show as experimentShow } from '@/routes/experiments';
import { home } from '@/routes';

type ExperimentDetailProps = {
    experiment: Experiment;
    nextExperiment: Experiment | null;
    position: number;
    total: number;
};

export default function ExperimentDetail({
    experiment,
    nextExperiment,
    position,
    total,
}: ExperimentDetailProps) {
    return (
        <>
            <Head title={`${experiment.title} — Geja Labs`} />
            <header className="fm-header fm-detail-header">
                <Link
                    className="fm-brand"
                    href={home.url()}
                    aria-label="Geja Labs, início"
                >
                    <span aria-hidden="true">g.</span>geja labs
                </Link>
                <Link
                    className="fm-detail-back"
                    href={`${home.url()}#experimentos`}
                >
                    ← Todos os experimentos
                </Link>
                <a
                    className="fm-button"
                    href={experiment.githubUrl ?? 'https://github.com/'}
                    target="_blank"
                    rel="noopener"
                >
                    GitHub ↗
                </a>
            </header>

            <main className="fm-detail-page">
                <section
                    className="fm-detail-hero fm-wrap"
                    style={
                        {
                            '--detail-accent': experiment.accent[0],
                            '--detail-secondary': experiment.accent[1],
                        } as React.CSSProperties
                    }
                >
                    <div className="fm-detail-hero-copy">
                        <Link
                            className="fm-detail-breadcrumb"
                            href={`${home.url()}#experimentos`}
                        >
                            geja labs / experimentos / {experiment.slug}
                        </Link>
                        <p className="fm-eyebrow">{experiment.label}</p>
                        <div className="fm-detail-title-row">
                            <span className="fm-detail-number">
                                {String(position).padStart(2, '0')} /{' '}
                                {String(total).padStart(2, '0')}
                            </span>
                            <h1>{experiment.title}</h1>
                        </div>
                        <p className="fm-detail-kicker">{experiment.kicker}</p>
                        <p className="fm-detail-intro">
                            {experiment.description}
                        </p>
                        <div className="fm-detail-actions">
                            <a
                                className="fm-button"
                                href={
                                    experiment.githubUrl ??
                                    'https://github.com/'
                                }
                                target="_blank"
                                rel="noopener"
                            >
                                Ver no GitHub ↗
                            </a>
                            <a
                                className="fm-detail-demo-link"
                                href={
                                    experiment.demoUrl ??
                                    experimentShow.url(experiment.slug)
                                }
                            >
                                Ver online (demo) ↗
                            </a>
                        </div>
                        <span className="fm-detail-status">
                            ● {experiment.status}
                        </span>
                    </div>
                    <div className="fm-detail-orbit" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                        <span>{experiment.icon}</span>
                    </div>
                </section>

                <div className="fm-detail-signal">
                    <div className="fm-wrap">
                        <span>O EXPERIMENTO EM UMA LINHA</span>
                        <strong>{experiment.outcome}</strong>
                    </div>
                </div>

                <section className="fm-detail-content fm-wrap">
                    <div className="fm-detail-main">
                        <DetailBlock
                            eyebrow="01 / O PROBLEMA"
                            title="A pergunta antes do código"
                        >
                            <p>{experiment.problem}</p>
                        </DetailBlock>
                        <DetailBlock
                            eyebrow="02 / A ABORDAGEM"
                            title="Construir para entender"
                        >
                            <p>{experiment.approach}</p>
                        </DetailBlock>
                        <div className="fm-detail-phases">
                            <p className="fm-eyebrow">03 / O PROCESSO</p>
                            <h2>
                                Como a experiência
                                <br />
                                <em>ganhou forma.</em>
                            </h2>
                            <ol>
                                {experiment.phases.map((phase, phaseIndex) => (
                                    <li key={phase.title}>
                                        <span>
                                            {String(phaseIndex + 1).padStart(
                                                2,
                                                '0',
                                            )}
                                        </span>
                                        <div>
                                            <h3>{phase.title}</h3>
                                            <p>{phase.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                        <DetailBlock
                            eyebrow="04 / O QUE FICOU"
                            title="Aprendizados que continuam"
                        >
                            <ul className="fm-detail-learnings">
                                {experiment.learnings.map((learning) => (
                                    <li key={learning}>{learning}</li>
                                ))}
                            </ul>
                        </DetailBlock>
                    </div>

                    <aside className="fm-detail-aside">
                        <div className="fm-detail-aside-card">
                            <span className="fm-label">
                                STACK DO EXPERIMENTO
                            </span>
                            <ul className="fm-detail-stack">
                                {experiment.stack.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="fm-detail-aside-card fm-detail-aside-note">
                            <span className="fm-label">STATUS ATUAL</span>
                            <strong>{experiment.status}</strong>
                            <p>
                                Este registro acompanha o experimento como ele
                                está hoje. O laboratório pode mudar de direção.
                            </p>
                        </div>
                        <div className="fm-detail-aside-card fm-detail-links-card">
                            <span className="fm-label">
                                ACESSAR EXPERIMENTO
                            </span>
                            <div className="fm-detail-aside-links">
                                <a
                                    href={
                                        experiment.demoUrl ??
                                        experimentShow.url(experiment.slug)
                                    }
                                >
                                    Ver online (demo) <span>↗</span>
                                </a>
                                <a
                                    href={
                                        experiment.githubUrl ??
                                        'https://github.com/'
                                    }
                                    target="_blank"
                                    rel="noopener"
                                >
                                    Ver no GitHub <span>↗</span>
                                </a>
                            </div>
                        </div>
                    </aside>
                </section>

                <section className="fm-detail-next fm-wrap">
                    <span className="fm-label">PRÓXIMO EXPERIMENTO</span>
                    {nextExperiment && (
                        <Link href={experimentShow.url(nextExperiment.slug)}>
                            <span>{nextExperiment.icon}</span>
                            <strong>{nextExperiment.title}</strong>
                            <small>Explorar ↗</small>
                        </Link>
                    )}
                </section>
            </main>
        </>
    );
}

function DetailBlock({
    eyebrow,
    title,
    children,
}: {
    eyebrow: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="fm-detail-block">
            <p className="fm-eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
            {children}
        </div>
    );
}
