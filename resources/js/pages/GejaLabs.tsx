import { Head } from '@inertiajs/react';
import {
    AboutSection,
    Bookshelf,
    ExpandableManifesto,
    Footer,
    ExperimentsSection,
    Header,
    Hero,
    Terminal,
} from '@/components/geja-labs/GejaLabsSections';
import type { Book, Experiment, SiteProfile } from '@/data/geja-labs';

export default function GejaLabs({
    experiments,
    books,
    profile,
}: {
    experiments: Experiment[];
    books: Book[];
    profile: SiteProfile;
}) {
    return (
        <>
            <Head title="Geja Labs — Leonardo Geja, desenvolvedor PHP" />
            <Header profile={profile} />
            <main id="conteudo">
                <Hero profile={profile} experiments={experiments} />
                <ExperimentsSection experiments={experiments} />
                <AboutSection profile={profile} />
                <Bookshelf books={books} />
                <Terminal
                    books={books}
                    experiments={experiments}
                    profile={profile}
                />
                <ExpandableManifesto profile={profile} />
            </main>
            <Footer profile={profile} />
        </>
    );
}
