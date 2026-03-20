import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';
import { translations, Language } from './i18n';

const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>?/gm, '');
};

/* ── per-language labels used only in the Word file ── */
const wordLabels = {
    zh: {
        techTitle: '技术能力',
        techCategories: [
            { name: '后端核心', tags: 'Java / Spring Boot / Spring Cloud / MyBatis' },
            { name: '大数据（熟悉）', tags: 'Hive / Kafka / HBase / Hadoop / ELK' },
            { name: '运维部署', tags: 'K8s / Docker / Jenkins CI/CD / Linux / Shell' },
            { name: '前端 & 其他', tags: 'Vue.js / Node.js / UniApp / 小程序 / 数据可视化' },
            { name: 'AI方向（学习中）', tags: 'OpenClaw Agent / 多Agent编排 / LLM集成' },
            { name: '数据库', tags: 'MySQL / Oracle / HBase' },
        ],
        projStacks: [
            'Java / Spring Boot / MySQL / Kafka / K8s',
            'Hive / Hadoop / Kafka / HBase / Spark',
            'Spring Cloud / Vue.js / Redis / MySQL / Kafka',
            'K8s / Docker / Jenkins / Spring Boot / Vue.js',
        ],
        selfEvalTitle: '自我评价',
        strengthsLabel: '【优势】',
        strengths: [
            '在金融报送和电信经分领域有真实落地经验，深度参与过系统从0到1的建设。',
            '具备从架构设计、核心编码、数据库优化到 K8s 部署的全链路能力，小团队中可独立承担多个模块。',
            '有具体可量化的技术成果作为佐证（+20% 异常检测、4hr+ ETL 提速、100% 闭环率），结果导向。',
        ],
        candidLabel: '【坦诚说明】',
        candids: [
            '公司官方职级为软件研发工程师，技术组长角色在项目中承担，非正式 title。',
            '带队规模以小团队为主（6人以下），暂无大型研发团队管理经验。',
            '目前正在学习 OpenClaw，AI 工程化方向处于积累阶段，尚无生产落地项目。',
        ],
        eduTitle: '教育背景',
        edu: '2010年 — 2013年　吉林大学　软件工程　本科（在职就读）',
        role: '角色',
        techStack: '技术栈',
    },
    en: {
        techTitle: 'Technical Skills',
        techCategories: [
            { name: 'Backend Core', tags: 'Java / Spring Boot / Spring Cloud / MyBatis' },
            { name: 'Big Data (Proficient)', tags: 'Hive / Kafka / HBase / Hadoop / ELK' },
            { name: 'DevOps & Deployment', tags: 'K8s / Docker / Jenkins CI/CD / Linux / Shell' },
            { name: 'Frontend & Others', tags: 'Vue.js / Node.js / UniApp / Mini Programs / Data Visualization' },
            { name: 'AI Direction (Learning)', tags: 'OpenClaw Agent / Multi-Agent Orchestration / LLM Integration' },
            { name: 'Databases', tags: 'MySQL / Oracle / HBase' },
        ],
        projStacks: [
            'Java / Spring Boot / MySQL / Kafka / K8s',
            'Hive / Hadoop / Kafka / HBase / Spark',
            'Spring Cloud / Vue.js / Redis / MySQL / Kafka',
            'K8s / Docker / Jenkins / Spring Boot / Vue.js',
        ],
        selfEvalTitle: 'Self Evaluation',
        strengthsLabel: 'Strengths',
        strengths: [
            'Real-world delivery experience in financial reporting and telecom BI, deeply involved in building systems from scratch.',
            'Full-pipeline capability from architecture design, core coding, database optimization to K8s deployment — can independently handle multiple modules in small teams.',
            'Concrete quantifiable results as proof (+20% anomaly detection, 4hr+ ETL speedup, 100% closure rate), results-oriented.',
        ],
        candidLabel: 'Candid Disclosure',
        candids: [
            'Official company title is Software R&D Engineer; Tech Lead role is project-based, not a formal title.',
            'Team leadership mainly in small teams (under 6), no large R&D team management experience yet.',
            'Currently learning OpenClaw; AI engineering direction is in accumulation phase with no production projects yet.',
        ],
        eduTitle: 'Education',
        edu: '2010 — 2013　Jilin University　Software Engineering　Bachelor\'s (Part-time study)',
        role: 'Role',
        techStack: 'Tech Stack',
    },
    ja: {
        techTitle: '技術スキル',
        techCategories: [
            { name: 'バックエンドコア', tags: 'Java / Spring Boot / Spring Cloud / MyBatis' },
            { name: 'ビッグデータ（熟達）', tags: 'Hive / Kafka / HBase / Hadoop / ELK' },
            { name: 'DevOps・デプロイ', tags: 'K8s / Docker / Jenkins CI/CD / Linux / Shell' },
            { name: 'フロントエンド他', tags: 'Vue.js / Node.js / UniApp / ミニプログラム / データ可視化' },
            { name: 'AI方向（学習中）', tags: 'OpenClaw Agent / マルチAgent連携 / LLM統合' },
            { name: 'データベース', tags: 'MySQL / Oracle / HBase' },
        ],
        projStacks: [
            'Java / Spring Boot / MySQL / Kafka / K8s',
            'Hive / Hadoop / Kafka / HBase / Spark',
            'Spring Cloud / Vue.js / Redis / MySQL / Kafka',
            'K8s / Docker / Jenkins / Spring Boot / Vue.js',
        ],
        selfEvalTitle: '自己評価',
        strengthsLabel: '強み',
        strengths: [
            '金融報送と通信経営分析分野で実際の実装経験があり、システムのゼロからの構築に深く関与。',
            'アーキテクチャ設計、コアコーディング、データベース最適化からK8sデプロイまでのフルパイプライン能力を持つ。',
            '具体的な定量的成果（異常検知+20%、ETL 4hr+高速化、クローズ率100%）による結果重視の姿勢。',
        ],
        candidLabel: '率直な説明',
        candids: [
            '公式な職級はソフトウェア研究開発エンジニア、テックリードの役割はプロジェクトベースで正式な肩書きではない。',
            'チームリーダーシップは主に小規模チーム（6人以下）、大規模R&Dチーム管理経験はまだない。',
            '現在OpenClawを学習中、AIエンジニアリング方向は蓄積段階で本番プロジェクトはまだない。',
        ],
        eduTitle: '学歴',
        edu: '2010 — 2013　吉林大学　ソフトウェア工学　学士（在職就学）',
        role: '役割',
        techStack: '技術スタック',
    },
};

export const exportWord = async (lang: Language) => {
    const t = translations[lang];
    const w = wordLabels[lang];

    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                // ── Header ──
                new Paragraph({
                    children: [
                        new TextRun({ text: t.hero.name, size: 48, bold: true })
                    ],
                    heading: HeadingLevel.TITLE,
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 100 },
                }),
                new Paragraph({
                    text: t.hero.title,
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 200 },
                }),
                new Paragraph({
                    text: `${t.sidebar.contact.email} | ${t.sidebar.contact.phone} | ${t.sidebar.contact.loc}`,
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 400 },
                }),

                // ── Technical Skills ──
                new Paragraph({
                    text: w.techTitle,
                    heading: HeadingLevel.HEADING_1,
                    spacing: { before: 400, after: 200 },
                }),
                ...w.techCategories.map(cat =>
                    new Paragraph({
                        children: [
                            new TextRun({ text: `${cat.name}: `, bold: true }),
                            new TextRun({ text: cat.tags }),
                        ],
                        spacing: { before: 60, after: 60 },
                    })
                ),

                // ── Career History ──
                new Paragraph({
                    text: t.content.history.title,
                    heading: HeadingLevel.HEADING_1,
                    spacing: { before: 400, after: 200 },
                }),
                ...t.content.history.items.flatMap(item => [
                    new Paragraph({
                        children: [
                            new TextRun({ text: item.co, bold: true, size: 28 }),
                            new TextRun({ text: ` | ${item.role}`, italics: true }),
                        ],
                        spacing: { before: 200, after: 100 },
                    }),
                    new Paragraph({
                        text: item.period,
                        spacing: { after: 100 },
                    }),
                    ...(item.note ? [new Paragraph({ text: item.note, spacing: { after: 100 } })] : []),
                    ...(item.wins ? item.wins.map(win => new Paragraph({
                        text: `• ${stripHtml(win)}`,
                        spacing: { before: 40, after: 40 },
                    })) : []),
                ]),

                // ── Key Projects ──
                new Paragraph({
                    text: t.content.projects.title,
                    heading: HeadingLevel.HEADING_1,
                    spacing: { before: 400, after: 200 },
                }),
                ...t.content.projects.items.flatMap((proj, i) => [
                    new Paragraph({
                        children: [
                            new TextRun({ text: proj.title, bold: true, size: 24 }),
                            new TextRun({ text: ` (${proj.yr})`, italics: true }),
                        ],
                        spacing: { before: 200, after: 100 },
                    }),
                    new Paragraph({
                        text: `${w.role}: ${proj.role}`,
                        spacing: { after: 60 },
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({ text: `${w.techStack}: `, bold: true }),
                            new TextRun({ text: w.projStacks[i] || '' }),
                        ],
                        spacing: { after: 60 },
                    }),
                    new Paragraph({
                        text: proj.desc,
                        spacing: { after: 60 },
                    }),
                    new Paragraph({
                        text: proj.kpis.join(' | '),
                        spacing: { after: 200 },
                    }),
                ]),

                // ── Self Evaluation ──
                new Paragraph({
                    text: w.selfEvalTitle,
                    heading: HeadingLevel.HEADING_1,
                    spacing: { before: 400, after: 200 },
                }),
                new Paragraph({
                    children: [new TextRun({ text: w.strengthsLabel, bold: true })],
                    spacing: { before: 100, after: 100 },
                }),
                ...w.strengths.map(s => new Paragraph({
                    text: `• ${s}`,
                    spacing: { before: 40, after: 40 },
                })),
                new Paragraph({
                    children: [new TextRun({ text: w.candidLabel, bold: true })],
                    spacing: { before: 200, after: 100 },
                }),
                ...w.candids.map(c => new Paragraph({
                    text: `• ${c}`,
                    spacing: { before: 40, after: 40 },
                })),

                // ── Education ──
                new Paragraph({
                    text: w.eduTitle,
                    heading: HeadingLevel.HEADING_1,
                    spacing: { before: 400, after: 200 },
                }),
                new Paragraph({
                    text: w.edu,
                    spacing: { after: 200 },
                }),

                // ── Job Intent ──
                new Paragraph({
                    text: t.sidebar.intent.title,
                    heading: HeadingLevel.HEADING_1,
                    spacing: { before: 400, after: 200 },
                }),
                ...t.sidebar.intent.items.map(item => new Paragraph({
                    children: [
                        new TextRun({ text: `${item.l}: `, bold: true }),
                        new TextRun({ text: item.v.replace(/\n/g, ' / ') }),
                    ],
                    spacing: { before: 40, after: 40 },
                })),

                // ── Skills Summary ──
                new Paragraph({
                    text: t.sidebar.skills.title,
                    heading: HeadingLevel.HEADING_1,
                    spacing: { before: 400, after: 200 },
                }),
                new Paragraph({
                    text: t.sidebar.skills.items.map(s => `${s.n} (${s.y})`).join(', '),
                    spacing: { after: 400 },
                }),

                // ── Basic Info ──
                new Paragraph({
                    text: t.sidebar.stats.title,
                    heading: HeadingLevel.HEADING_1,
                    spacing: { before: 400, after: 200 },
                }),
                new Paragraph({
                    text: t.sidebar.stats.items.map(s => `${s.l}: ${s.v}${s.u}`).join(' | '),
                    spacing: { after: 200 },
                }),
            ],
        }],
    });

    Packer.toBlob(doc).then((blob) => {
        saveAs(blob, `Resume_${t.hero.name}.docx`);
    });
};
