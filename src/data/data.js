export const about = {
    name: "Daniel Dias",
    role: "Desenvolvedor FullStack & DevOps",
    about: "Desenvolvedor FullStack & DevOps com 5 anos de experiência na área (1 ano como estagiário e 3 anos como desenvolvedor Fullstack & DevOps pleno) e Engenheiro de IA. Trabalho diariamente com Linux, Shell Script, TypeScript, Rust, Ruby, Python e Node.js, construindo aplicações escaláveis e automatizando infraestrutura. Estudei na Santander Coders e na Rocketseat.",
    email: "danieldiasof@gmail.com",
};

export const seo = {
    title: `${about.name} | ${about.role}`,
    description: "Portfólio de Daniel Dias, Desenvolvedor FullStack & DevOps e Engenheiro de IA com 5 anos de experiência trabalhando com Linux, TypeScript, Rust, Ruby, Python e Node.js.",
    keywords: "portfólio, FullStack, DevOps, Engenheiro de IA, Linux, TypeScript, Rust, Ruby, Python, Node.js, portfólio de desenvolvedor",
}

export const forms = {
    formspreeUrl: "https://formspree.io/f/<url>",
}

export const skills = [
    { name: "Linux", alt: "logo linux", icon: "/linux.svg" },
    { name: "Shell", alt: "logo shell", icon: "/shell.svg" },
    { name: "TypeScript", alt: "logo typescript", icon: "/typescript.svg" },
    { name: "Rust", alt: "logo rust", icon: "/rust.svg" },
    { name: "Ruby", alt: "logo ruby", icon: "/ruby.svg" },
    { name: "Python", alt: "logo python", icon: "/python.svg" },
    { name: "Node.js", alt: "logo nodejs", icon: "/nodejs.svg" },
];

export const socials = {
    github: "https://github.com/DanielDiasK",
    whatsapp: "https://wa.me/5517988326991",
};

export const projects = {
    pinProjects: [
        {
            slug: "vyre",
            title: "Vyre",
            description:
                "Criação de uma moeda própria e de um marketplace para trocas de itens, com a moeda baseada no real, porém com maior e mais justo poder de compra, distribuída em lotes para beneficiar empresas e pessoas.",
            tags: ["React Native", "Expo", "NextJS", "MongoDB"],
            link: "",
            tasks: [
                "Criação de moeda digital própria",
                "Desenvolvimento de marketplace para trocas de itens",
                "Publicação do aplicativo na Play Store e Aptoide",
                "Modelo econômico baseado no real com maior poder de compra",
                "Distribuição de lotes da moeda para empresas beneficiarem pessoas",
            ],
            objetivo:
                "Ajudar economicamente o mercado de trocas de itens, criando uma moeda justa baseada no real, com maior poder de compra, distribuída em lotes para que empresas possam oferecer benefícios às pessoas.",
            impacto:
                "Projeto destaque no programa Sebrae SuperNova SP 2026, com potencial de movimentar a economia de trocas e gerar benefícios reais para empresas e usuários.",
        },
        {
            slug: "zanocode-ide",
            title: "ZanoCode IDE",
            description:
                "IDE própria desenvolvida do zero: usa apenas a API de marketplace do VSCode para extensões, todo o restante criado em Rust para distribuição Linux, com suporte a Windows e TypeScript na camada de UI.",
            tags: ["Rust", "TypeScript", "Linux", "Windows"],
            link: "https://github.com/DanielDiasK/void-ide",
            tasks: [
                "Integração com a API de marketplace do VSCode",
                "Núcleo da IDE desenvolvido do zero em Rust",
                "Distribuição para Linux",
                "Suporte para Windows",
                "Camada de interface em TypeScript",
            ],
            objetivo:
                "Criar uma IDE própria, leve e independente, usando apenas a API de marketplace do VSCode para extensões e todo o restante construído do zero em Rust.",
            impacto:
                "IDE com foco em performance e simplicidade, demonstrando engenharia de baixo nível aplicada em um produto real e funcional.",
        },
        {
            slug: "api-ruby",
            title: "API em Ruby",
            description:
                "API REST desenvolvida em Ruby, com arquitetura limpa, banco de dados relacional e endpoints documentados para integração com outros sistemas.",
            tags: ["Ruby", "API REST"],
            link: "https://github.com/DanielDiasK/ruby-supabase-api",
            tasks: [
                "Desenvolvimento de API REST em Ruby",
                "Arquitetura limpa e organizada",
                "Banco de dados relacional",
                "Documentação dos endpoints",
            ],
            objetivo:
                "Construir uma API REST robusta em Ruby, com arquitetura limpa e documentação completa, pronta para integrar outros sistemas.",
            impacto:
                "Facilita a integração entre sistemas com endpoints padronizados, bem documentados e fáceis de manter.",
        },
        {
            slug: "servidor-ia",
            title: "Servidor de IA",
            description:
                "Servidor de Inteligência Artificial criado com pesos de treinamento, pronto para carregar modelos e processar inferências em produção.",
            tags: ["Python", "IA", "Machine Learning"],
            link: "https://github.com/DanielDiasK/odysseus",
            tasks: [
                "Servidor de IA em Python",
                "Carregamento de modelos com pesos de treinamento",
                "Processamento de inferências em produção",
            ],
            objetivo:
                "Criar um servidor de Inteligência Artificial capaz de carregar modelos com pesos de treinamento e processar inferências em escala, sem depender de APIs externas.",
            impacto:
                "Base própria para aplicações de IA, garantindo independência, controle dos dados e menor custo de operação.",
        },
    ],
    otherProjects: [
        {
            slug: "chegabus",
            title: "ChegaBus",
            description:
                "Aplicação web para consulta de rotas e horários de ônibus, com interface simples e dados atualizados.",
            tags: ["Vue", "TypeScript"],
            link: "https://github.com/DanielDiasK/chegabus",
            tasks: [
                "Desenvolvimento com Vue",
                "Interface em TypeScript",
                "Consulta de rotas e horários de ônibus",
            ],
            objetivo:
                "Oferecer uma forma simples e rápida de consultar rotas e horários de ônibus para a população.",
            impacto:
                "Facilita o deslocamento diário das pessoas com informações claras, organizadas e acessíveis.",
        },
        {
            slug: "delivery-react",
            title: "Delivery React",
            description:
                "Aplicação de delivery construída com React e TypeScript, com carrinho de compras e fluxo completo de checkout.",
            tags: ["React", "TypeScript"],
            link: "https://github.com/DanielDiasK/Delivery-React",
            tasks: [
                "Desenvolvimento com React",
                "TypeScript",
                "Carrinho de compras",
                "Fluxo completo de checkout",
                "Animações de UI",
            ],
            objetivo:
                "Praticar UI, animações e boas práticas de frontend construindo uma aplicação de delivery completa.",
            impacto:
                "Projeto de aprendizado que demonstra construção de interfaces fluidas, experiência do usuário e organização de código.",
        },
    ],
};

export const timeline = [
    {
        title: "Vyre — Destaque no Sebrae SuperNova SP",
        description:
            "Projeto Vyre, destaque no programa SuperNova do Sebrae de São Paulo, premiado entre os melhores projetos de inovação de 2026.",
        date: "2026",
    },
    {
        title: "Olimpíada de Robótica",
        description:
            "3 anos de participação na Olimpíada de Robótica, com destaque estadual em São Paulo.",
        date: "3 anos",
    },
];

export const experience = [
    {
        category: "Profissional",
        title: "Desenvolvedor FullStack & DevOps (Pleno)",
        description:
            "3 anos trabalhando como desenvolvedor FullStack & DevOps pleno, construindo aplicações web com TypeScript, Node.js, Python e Ruby, além de gerenciar servidores Linux, pipelines de CI/CD e automação de infraestrutura.",
        date: "3 anos",
    },
    {
        category: "Profissional",
        title: "Engenheiro de IA",
        description:
            "Trabalhando em projetos de inteligência artificial, integrando soluções de IA em aplicações fullstack e automatizando fluxos de trabalho inteligentes.",
        date: "Engenheiro de IA",
    },
    {
        category: "Profissional",
        title: "Estagiário",
        description:
            "1 ano como estagiário, desenvolvendo habilidades fundamentais em Linux, Shell Script e desenvolvimento de software enquanto trabalhava em projetos reais.",
        date: "1 ano",
    },
    {
        category: "Formação",
        title: "Formação — Rocketseat",
        description:
            "Treinamento intensivo cobrindo desenvolvimento web moderno com TypeScript, Node.js, React e conceitos de infraestrutura.",
        date: "Formação",
    },
    {
        category: "Formação",
        title: "Curso — Santander Coders",
        description:
            "Programa de bolsas do Santander cobrindo fundamentos de programação, desenvolvimento backend e práticas de DevOps.",
        date: "Formação",
    },
    {
        category: "Formação",
        title: "2 Semestres de Física — IFSP",
        description:
            "Dois semestres de Física no Instituto Federal de São Paulo (IFSP), com base em matemática, pensamento científico e raciocínio lógico.",
        date: "Formação",
    },
];

export const blogs = [
    {
        title: "Entendendo React Hooks",
        date: "12/03/2025",
        link: "#",
    },
    {
        title: "CSS Grid vs Flexbox: Quando Usar Cada Um",
        date: "25/12/2024",
        link: "#",
    },
    {
        title: "Melhores Práticas de SEO no Next.js",
        date: "10/07/2024",
        link: "#",
    },
];
