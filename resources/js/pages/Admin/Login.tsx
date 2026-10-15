import { Form, Head } from '@inertiajs/react';
import { Field, inputClass } from '@/components/admin/AdminLayout';
import { store } from '@/routes/admin/login';

export default function Login() {
    return (
        <>
            <Head title="Entrar — Geja Labs" />
            <main className="grid min-h-screen place-items-center bg-[#202027] px-6 py-12">
                <div className="w-full max-w-md rounded-xl border border-white/10 bg-[#292127] p-8 text-white shadow-2xl">
                    <div className="mb-10 flex items-center gap-3 text-2xl font-semibold">
                        <span className="grid h-10 w-10 place-items-center rounded bg-[#ff8739] text-[#202027]">
                            g.
                        </span>
                        geja labs
                    </div>
                    <p className="font-mono text-[10px] tracking-[0.16em] text-[#c8ff00] uppercase">
                        // acesso privado
                    </p>
                    <h1 className="mt-3 text-3xl font-semibold tracking-tight">
                        Entrar no laboratório
                    </h1>
                    <p className="mt-3 text-sm leading-6 text-[#b9bbc5]">
                        Gerencie experimentos, links, cores e todo o conteúdo
                        editorial do site.
                    </p>
                    <Form
                        action={store.url()}
                        method="post"
                        className="mt-8 grid gap-5"
                    >
                        {({ errors, processing }) => (
                            <>
                                <Field label="E-mail" error={errors.email}>
                                    <input
                                        className={`${inputClass} border-white/15 bg-white/5 text-white`}
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        required
                                    />
                                </Field>
                                <Field label="Senha" error={errors.password}>
                                    <input
                                        className={`${inputClass} border-white/15 bg-white/5 text-white`}
                                        type="password"
                                        name="password"
                                        autoComplete="current-password"
                                        required
                                    />
                                </Field>
                                <label className="flex items-center gap-2 text-xs text-[#b9bbc5]">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        value="1"
                                    />{' '}
                                    Lembrar acesso
                                </label>
                                <button
                                    className="mt-2 rounded bg-[#ff8739] px-4 py-3 text-sm font-semibold text-[#202027] transition hover:bg-[#ffa163] disabled:opacity-50"
                                    disabled={processing}
                                >
                                    {processing
                                        ? 'Entrando…'
                                        : 'Entrar no painel ↗'}
                                </button>
                            </>
                        )}
                    </Form>
                </div>
            </main>
        </>
    );
}
