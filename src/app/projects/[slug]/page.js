import Link from "next/link";
import { projects, seo } from "@/data/data";

export function generateStaticParams() {
    return [...projects.pinProjects, ...projects.otherProjects].map((p) => ({
        slug: p.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const all = [...projects.pinProjects, ...projects.otherProjects];
    const project = all.find((p) => p.slug === slug);
    return {
        title: `${project?.title || "Projeto"} | ${seo.title}`,
        description: project?.description,
    };
}

function Section({ title, children }) {
    return (
        <div>
            <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
                {title}
            </h2>
            {children}
        </div>
    );
}

export default async function ProjectDetail({ params }) {
    const { slug } = await params;
    const all = [...projects.pinProjects, ...projects.otherProjects];
    const project = all.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="md:w-[700px] w-[100%] mt-5 p-4">
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                >
                    ← Voltar
                </Link>
                <p className="mt-6 text-base-content/80">
                    Projeto não encontrado.
                </p>
            </div>
        );
    }

    return (
        <div className="md:w-[700px] w-[100%] mt-5 p-4">
            <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m12 19-7-7 7-7" />
                    <path d="M19 12H5" />
                </svg>
                Voltar
            </Link>
            <main className="mt-4">
                <div className="border-2 border-base-content/20 rounded-2xl p-6 flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-semibold">
                            {project.title}
                        </h1>
                        <div className="flex items-center flex-wrap gap-2">
                            {project.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs border-gray-400 font-medium text-base-content/70 border rounded-md px-4"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <p className="text-base text-base-content/80">
                        {project.description}
                    </p>

                    <Section title="Tarefas">
                        <ul className="mt-3 flex flex-col gap-2">
                            {project.tasks.map((task, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-start gap-2 text-base-content/80"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="mt-1 shrink-0 text-green-600 dark:text-green-400"
                                    >
                                        <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                    <span className="text-sm">{task}</span>
                                </li>
                            ))}
                        </ul>
                    </Section>

                    <Section title="Objetivo">
                        <p className="mt-3 text-sm text-base-content/80">
                            {project.objetivo}
                        </p>
                    </Section>

                    <Section title="Impacto">
                        <p className="mt-3 text-sm text-base-content/80">
                            {project.impacto}
                        </p>
                    </Section>
                </div>
            </main>
        </div>
    );
}
