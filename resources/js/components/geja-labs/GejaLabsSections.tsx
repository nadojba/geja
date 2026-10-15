import {
    useEffect,
    useRef,
    useState,
    type CSSProperties,
    type FormEvent,
} from 'react';
import { Link } from '@inertiajs/react';
import { type Experiment, type Book, type SiteProfile } from '@/data/geja-labs';
import { show as experimentShow } from '@/routes/experiments';

const navigation = [
    ['Experimentos', '#experimentos'],
    ['Sobre', '#sobre'],
    ['Leituras', '#leituras'],
    ['Terminal', '#terminal'],
] as const;

function Anchor({
    href,
    children,
    className = '',
}: {
    href: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <a className={className} href={href}>
            {children}
        </a>
    );
}

export function Header({ profile }: { profile: SiteProfile }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <Anchor className="fm-skip" href="#conteudo">
                Pular para o conteúdo
            </Anchor>
            <header
                className={`fm-header${scrolled ? ' is-scrolled' : ''}`}
                id="hd"
            >
                <Anchor
                    className="fm-brand"
                    href="#conteudo"
                    aria-label="Geja Labs, início"
                >
                    <span aria-hidden="true">g.</span>geja labs
                </Anchor>
                <nav
                    className="fm-desktop-nav"
                    aria-label="Navegação principal"
                >
                    {navigation.map(([label, href]) => (
                        <Anchor key={href} href={href}>
                            {label}
                        </Anchor>
                    ))}
                </nav>
                <div className="fm-header-actions">
                    <a
                        className="fm-social-link"
                        href={
                            profile.linkedinUrl ?? 'https://www.linkedin.com/'
                        }
                        target="_blank"
                        rel="noopener"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M6.5 8.2H3.2V21h3.3V8.2ZM4.85 3A1.95 1.95 0 1 0 4.85 6.9 1.95 1.95 0 0 0 4.85 3ZM21 13.66c0-3.86-2.06-5.66-4.8-5.66-2.2 0-3.18 1.21-3.73 2.06V8.2H9.16V21h3.31v-6.34c0-1.67.32-3.28 2.38-3.28 2.03 0 2.06 1.9 2.06 3.39V21H21v-7.34Z" />
                        </svg>
                    </a>
                    <a
                        className="fm-social-link"
                        href={profile.githubUrl ?? 'https://github.com/'}
                        target="_blank"
                        rel="noopener"
                        aria-label="GitHub"
                        title="GitHub"
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.48.09.66-.21.66-.46v-1.68c-2.68.58-3.25-1.14-3.25-1.14-.44-1.12-1.08-1.42-1.08-1.42-.88-.6.07-.59.07-.59.97.07 1.49 1 1.49 1 .86 1.48 2.25 1.05 2.8.8.09-.63.34-1.05.61-1.29-2.14-.24-4.39-1.07-4.39-4.77 0-1.05.38-1.91 1-2.58-.1-.24-.43-1.22.1-2.54 0 0 .82-.26 2.62.98a9.1 9.1 0 0 1 4.77 0c1.8-1.24 2.62-.98 2.62-.98.53 1.32.2 2.3.1 2.54.62.67 1 1.53 1 2.58 0 3.71-2.25 4.52-4.4 4.76.35.3.65.88.65 1.78v2.64c0 .25.18.55.67.46A9.5 9.5 0 0 0 12 2.5Z" />
                        </svg>
                    </a>
                </div>
                <details className="fm-mobile-nav">
                    <summary>Menu</summary>
                    <nav aria-label="Navegação móvel">
                        {navigation.map(([label, href]) => (
                            <Anchor key={href} href={href}>
                                {label}
                            </Anchor>
                        ))}
                    </nav>
                </details>
            </header>
        </>
    );
}

export function Hero({
    profile,
    experiments,
}: {
    profile: SiteProfile;
    experiments: Experiment[];
}) {
    return (
        <>
            <section className="fm-hero fm-wrap">
                <div>
                    <p className="fm-eyebrow">{profile.heroEyebrow}</p>
                    <h1>
                        {profile.heroTitle}
                        <br />
                        <em>{profile.heroTitleEmphasis}</em>
                    </h1>
                    <p className="fm-lead">{profile.heroLead}</p>
                    <div className="fm-actions">
                        <Anchor className="fm-button" href="#experimentos">
                            Ver experimentos ↗
                        </Anchor>
                        <Anchor href="#sobre">Sobre mim ↓</Anchor>
                    </div>
                </div>
                <div className="fm-hero-art" aria-hidden="true">
                    <div className="fm-plan">
                        <div className="fm-plan-top">
                            <span>MEUS EXPERIMENTOS</span>
                            <span>git log</span>
                        </div>
                        <ol>
                            {experiments
                                .slice(0, 3)
                                .map((experiment, index) => (
                                    <li
                                        className={
                                            index === 1 ? 'fm-current' : ''
                                        }
                                        key={experiment.slug}
                                    >
                                        <b>{experiment.icon}</b>
                                        <div>
                                            <strong>{experiment.title}</strong>
                                            <small>{experiment.status}</small>
                                        </div>
                                        <span>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </li>
                                ))}
                        </ol>
                    </div>
                </div>
                <Anchor className="fm-scroll-cue" href="#experimentos">
                    <span className="fm-scroll-arrow" aria-hidden="true">
                        ↓
                    </span>
                </Anchor>
            </section>
            <div className="fm-strip">
                <div className="fm-wrap">
                    <span>STACK DO LABORATÓRIO</span>
                    <strong>PHP</strong>
                    <i>↗</i>
                    <strong>JavaScript</strong>
                    <i>↗</i>
                    <strong>MySQL</strong>
                    <i>↗</i>
                    <strong>Git</strong>
                    <i>↗</i>
                    <strong>Linux</strong>
                </div>
            </div>
        </>
    );
}

export function ExperimentsSection({
    experiments,
}: {
    experiments: Experiment[];
}) {
    return (
        <section className="fm-section fm-wrap" id="experimentos">
            <SectionHead
                eyebrow="01 / EXPERIMENTOS"
                title={
                    <>
                        Uma ideia, um teste.
                        <br />
                        <em>Vários aprendizados.</em>
                    </>
                }
                description="Alguns estão no ar, outros em construção e alguns foram arquivados. Todos ensinaram alguma coisa."
            />
            <div className="fm-stack">
                {experiments.map((experiment, index) => (
                    <Link
                        className="fm-tool"
                        href={experimentShow.url(experiment.slug)}
                        key={experiment.slug}
                        aria-label={`Abrir detalhe de ${experiment.title}`}
                    >
                        <span className="fm-stack-number">
                            {String(index + 1).padStart(2, '0')} / 05
                        </span>
                        <span className="fm-tool-icon" aria-hidden="true">
                            {experiment.icon}
                        </span>
                        {experiment.label && (
                            <span className="fm-label">{experiment.label}</span>
                        )}
                        <h3>{experiment.title}</h3>
                        <p>{experiment.description}</p>
                        {index === 0 ? (
                            <div className="fm-mini-path" aria-hidden="true">
                                <span>IDEIA</span>
                                <i>→</i>
                                <span>CÓDIGO</span>
                                <i>→</i>
                                <span>APRENDIZADO</span>
                            </div>
                        ) : (
                            <span className="fm-label">{experiment.label}</span>
                        )}
                    </Link>
                ))}
            </div>
        </section>
    );
}

function SectionHead({
    eyebrow,
    title,
    description,
}: {
    eyebrow: string;
    title: React.ReactNode;
    description: string;
}) {
    return (
        <div className="fm-section-head">
            <div>
                <p className="fm-eyebrow">{eyebrow}</p>
                <h2>{title}</h2>
            </div>
            <p>{description}</p>
        </div>
    );
}

export function AboutSection({ profile }: { profile: SiteProfile }) {
    const [activeStep, setActiveStep] = useState(0);
    const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach((entry) => {
                    if (entry.isIntersecting)
                        setActiveStep(
                            stepRefs.current.indexOf(
                                entry.target as HTMLLIElement,
                            ),
                        );
                }),
            { rootMargin: '-45% 0px -45% 0px' },
        );
        stepRefs.current.forEach((step) => step && observer.observe(step));
        return () => observer.disconnect();
    }, []);

    const activeImage =
        profile.aboutSteps[activeStep]?.image ?? profile.aboutPhotoUrl;

    return (
        <section className="fm-method" id="sobre">
            <div className="fm-wrap fm-method-grid">
                <div>
                    <p className="fm-eyebrow">02 / SOBRE</p>
                    <h2>
                        {profile.aboutName},
                        <br />
                        <em>{profile.aboutTitle}</em>
                    </h2>
                    <p className="fm-lead">{profile.aboutLead}</p>
                    <div className="photo">
                        {activeImage ? (
                            <img
                                key={activeImage}
                                src={activeImage}
                                alt={`Imagem da etapa ${activeStep + 1} sobre Leonardo Geja`}
                            />
                        ) : (
                            <span>LG</span>
                        )}
                    </div>
                    <div
                        className="fm-about-carousel"
                        aria-label="Imagens das etapas sobre Leonardo Geja"
                    >
                        <div
                            className="fm-about-carousel-track"
                            style={{
                                transform: `translateX(-${activeStep * 100}%)`,
                            }}
                        >
                            {profile.aboutSteps.map((step, index) => (
                                <div
                                    className="fm-about-carousel-slide"
                                    key={`${step.title}-image`}
                                    aria-hidden={index !== activeStep}
                                >
                                    {(step.image ?? profile.aboutPhotoUrl) ? (
                                        <img
                                            src={
                                                step.image ??
                                                profile.aboutPhotoUrl ??
                                                undefined
                                            }
                                            alt={`Imagem da etapa ${index + 1} sobre Leonardo Geja`}
                                        />
                                    ) : (
                                        <span>LG</span>
                                    )}
                                </div>
                            ))}
                        </div>
                        <button
                            className="fm-about-carousel-control is-prev"
                            type="button"
                            aria-label="Imagem anterior"
                            onClick={() =>
                                setActiveStep(
                                    (activeStep -
                                        1 +
                                        profile.aboutSteps.length) %
                                        profile.aboutSteps.length,
                                )
                            }
                        >
                            ←
                        </button>
                        <button
                            className="fm-about-carousel-control is-next"
                            type="button"
                            aria-label="Próxima imagem"
                            onClick={() =>
                                setActiveStep(
                                    (activeStep + 1) %
                                        profile.aboutSteps.length,
                                )
                            }
                        >
                            →
                        </button>
                        <div className="fm-about-carousel-dots">
                            {profile.aboutSteps.map((step, index) => (
                                <button
                                    type="button"
                                    key={`${step.title}-dot`}
                                    className={
                                        index === activeStep ? 'is-active' : ''
                                    }
                                    aria-label={`Ir para imagem da etapa ${index + 1}`}
                                    aria-current={
                                        index === activeStep
                                            ? 'step'
                                            : undefined
                                    }
                                    onClick={() => setActiveStep(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="fm-scroll-status" aria-hidden="true">
                        <div>
                            <span>DO GEJA AO CÓDIGO</span>
                            <span>
                                {String(activeStep + 1).padStart(2, '0')} /{' '}
                                {String(profile.aboutSteps.length).padStart(
                                    2,
                                    '0',
                                )}
                            </span>
                        </div>
                        <div className="fm-scroll-track">
                            <span
                                style={{
                                    width: `${((activeStep + 1) / profile.aboutSteps.length) * 100}%`,
                                }}
                            />
                        </div>
                        <small>Continue rolando para explorar ↓</small>
                    </div>
                </div>
                <ol className="fm-method-steps">
                    {profile.aboutSteps.map(({ title, description }, index) => (
                        <li
                            key={title}
                            ref={(element) => {
                                stepRefs.current[index] = element;
                            }}
                            className={index === activeStep ? 'is-active' : ''}
                        >
                            <span>{String(index + 1).padStart(2, '0')}</span>
                            <div>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

function Cover({ book }: { book: Book }) {
    const style = {
        '--c1': book.colors[0],
        '--c2': book.colors[1],
    } as CSSProperties;
    return (
        <div className="cover" style={style}>
            <small>{book.tag}</small>
            <b>{book.title}</b>
            <small>{book.author}</small>
            {book.image && (
                <img
                    src={book.image}
                    alt={`Capa de ${book.title}`}
                    onError={(event) => event.currentTarget.remove()}
                />
            )}
        </div>
    );
}

export function Bookshelf({ books }: { books: Book[] }) {
    const [selectedBook, setSelectedBook] = useState<Book>();
    return (
        <section className="fm-section fm-wrap" id="leituras">
            <SectionHead
                eyebrow="03 / LEITURAS"
                title={
                    <>
                        Livros que moldam
                        <br />
                        <em>como eu trabalho.</em>
                    </>
                }
                description="Negócios, decisão, relacionamento e engenharia. Clique em um livro para ver o resumo."
            />
            <div className="shelf">
                {books.map((book) => (
                    <button
                        className="book"
                        key={book.title}
                        onClick={() => setSelectedBook(book)}
                        aria-label={`Abrir resumo de ${book.title}`}
                    >
                        <Cover book={book} />
                        <div className="meta">
                            <strong>{book.title}</strong>
                            <span>{book.author}</span>
                        </div>
                    </button>
                ))}
            </div>
            <BookDialog
                book={selectedBook}
                onClose={() => setSelectedBook(undefined)}
            />
        </section>
    );
}

function BookDialog({ book, onClose }: { book?: Book; onClose: () => void }) {
    useEffect(() => {
        if (!book) return;
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', closeOnEscape);
        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', closeOnEscape);
        };
    }, [book]);
    if (!book) return null;
    return (
        <div
            className="book-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`Resumo de ${book.title}`}
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <div className="book-modal-panel">
                <button className="x" onClick={onClose} aria-label="Fechar">
                    ✕
                </button>
                <div className="mb">
                    <Cover book={book} />
                    <div>
                        <span className="tag">{book.tag}</span>
                        <h3>{book.title}</h3>
                        <p className="au">
                            {book.author} · {book.year}
                        </p>
                        <h4>RESUMO</h4>
                        <p>{book.summary}</p>
                        <h4>IDEIAS PRINCIPAIS</h4>
                        <ul>
                            {book.ideas.map((idea) => (
                                <li key={idea}>{idea}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Terminal({
    books,
    experiments,
    profile,
}: {
    books: Book[];
    experiments: Experiment[];
    profile: SiteProfile;
}) {
    const commands: Record<string, () => string[]> = {
        help: () => [
            'Comandos disponíveis:',
            '  whoami           quem sou eu',
            '  about            resumo rápido',
            '  ls experimentos  lista os experimentos',
            '  ls livros        lista as leituras',
            '  cat stack        tecnologias que uso',
            '  contato          como falar comigo',
            '  clear            limpa a tela',
        ],
        whoami: () => [`${profile.aboutName} · Desenvolvedor PHP na Unoesc`],
        about: () => [profile.aboutLead],
        'ls experimentos': () =>
            experiments
                .slice(1)
                .map(
                    (experiment, index) =>
                        `${String(index + 1).padStart(2, '0')}  ${experiment.title.padEnd(24)}[${experiment.status}]`,
                ),
        'ls livros': () =>
            books.map((book) => `${book.title} — ${book.author}`),
        'cat stack': () => [profile.stack.join(' · ')],
        contato: () => [profile.contactText],
    };
    const [lines, setLines] = useState([
        'Bem-vindo ao Geja Labs. Digite help para começar.',
    ]);
    const [command, setCommand] = useState('');
    function run(value: string) {
        const normalized = value.trim().toLowerCase().replace(/\s+/g, ' ');
        if (!normalized) return;
        if (normalized === 'clear') {
            setLines([]);
            return;
        }
        const output =
            commands[normalized]?.() ??
            (normalized.startsWith('sudo')
                ? ['permissão negada. Boa tentativa.']
                : [`comando não encontrado: ${normalized}. Digite help.`]);
        setLines((current) => [
            ...current,
            `geja@labs:~$ ${normalized}`,
            ...output,
        ]);
    }
    function submit(event: FormEvent) {
        event.preventDefault();
        run(command);
        setCommand('');
    }
    return (
        <section
            className="fm-section fm-wrap"
            id="terminal"
            style={{ paddingTop: 20 }}
        >
            <SectionHead
                eyebrow="04 / TERMINAL"
                title={
                    <>
                        Prefere explorar
                        <br />
                        <em>pelo terminal?</em>
                    </>
                }
                description="Digite um comando ou clique em uma sugestão. Use help para ver todos."
            />
            <div className="tm">
                <div className="tm-top">
                    <i />
                    <i />
                    <i />
                    <span>geja@labs ~</span>
                </div>
                <div className="tm-out" aria-live="polite">
                    {lines.map((line, index) => (
                        <div key={`${line}-${index}`}>{line}</div>
                    ))}
                </div>
                <form className="tm-in" onSubmit={submit}>
                    <label htmlFor="ti">geja@labs:~$</label>
                    <input
                        id="ti"
                        value={command}
                        onChange={(event) => setCommand(event.target.value)}
                        autoComplete="off"
                        autoCapitalize="off"
                        spellCheck={false}
                        aria-label="Comando"
                    />
                </form>
                <div className="tm-sug">
                    {[
                        'help',
                        'whoami',
                        'ls experimentos',
                        'ls livros',
                        'cat stack',
                        'contato',
                    ].map((suggestion) => (
                        <button
                            className="tag"
                            type="button"
                            key={suggestion}
                            onClick={() => run(suggestion)}
                        >
                            {suggestion}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function ExpandableManifesto({ profile }: { profile: SiteProfile }) {
    const sectionRef = useRef<HTMLElement>(null);
    const bannerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const tick = () => {
            const section = sectionRef.current;
            const banner = bannerRef.current;
            if (!section || !banner) return;
            const rect = section.getBoundingClientRect();
            const progress = Math.max(
                0,
                Math.min(
                    1,
                    (-rect.top / (rect.height - window.innerHeight)) * 1.7,
                ),
            );
            banner.style.width = `${88 + 12 * progress}%`;
            banner.style.height = `${72 + 28 * progress}%`;
            banner.style.borderRadius = `${30 * (1 - progress)}px`;
        };
        tick();
        window.addEventListener('scroll', tick, { passive: true });
        window.addEventListener('resize', tick);
        return () => {
            window.removeEventListener('scroll', tick);
            window.removeEventListener('resize', tick);
        };
    }, []);
    return (
        <section className="fm-expand-story" id="ex" ref={sectionRef}>
            <div className="fm-expand-stage">
                <div className="fm-expand-banner" id="ban" ref={bannerRef}>
                    <div className="fm-expand-lines" aria-hidden="true" />
                    <div className="fm-wrap">
                        <p className="fm-eyebrow">{profile.manifestoEyebrow}</p>
                        <h2>
                            {profile.manifestoTitle}
                            <br />
                            <em>{profile.manifestoTitleEmphasis}</em>
                        </h2>
                        <p>{profile.manifestoDescription}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Footer({ profile }: { profile: SiteProfile }) {
    return (
        <footer className="fm-site-footer">
            <div className="fm-wrap fm-footer">
                <div>
                    <a className="fm-brand" href="#conteudo">
                        <span aria-hidden="true">g.</span>geja labs
                    </a>
                    <p>{profile.contactText}</p>
                </div>
                <nav aria-label="Links do rodapé">
                    {profile.githubUrl && (
                        <a
                            href={profile.githubUrl}
                            target="_blank"
                            rel="noopener"
                        >
                            GitHub ↗
                        </a>
                    )}
                    {profile.linkedinUrl && (
                        <a
                            href={profile.linkedinUrl}
                            target="_blank"
                            rel="noopener"
                        >
                            LinkedIn ↗
                        </a>
                    )}
                    {profile.contactEmail && (
                        <a href={`mailto:${profile.contactEmail}`}>
                            {profile.contactEmail}
                        </a>
                    )}
                </nav>
                <small>
                    Construído com curiosidade · {new Date().getFullYear()}
                </small>
            </div>
        </footer>
    );
}
