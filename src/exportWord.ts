import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow, TableCell, WidthType, ShadingType } from 'docx';
import { saveAs } from 'file-saver';
import { translations, Language } from './i18n';

const stripHtml = (html: string) => html.replace(/<[^>]*>?/gm, '');

/* ── per-language Word-only content ── */
const wordData = {
    zh: {
        docTitle: '个 人 简 历',
        date: '2026年3月',
        sectionBasic: '■  基本信息',
        sectionSummary: '■  职业概要',
        sectionTech: '■  技术栈',
        sectionHistory: '■  工作经历',
        sectionProjects: '■  代表项目',
        sectionEdu: '■  教育背景',
        sectionSelfEval: '■  自我评价',
        sectionIntent: '■  求职意向',
        basicInfo: {
            name: ['姓名：', '魏　超'],
            loc: ['籍贯/居住地：', '长春市'],
            contact: ['联系方式：', 'chaowei126@gmail.com'],
            url: ['在线简历：', 'https://chaowei126.github.io/resume-platform/'],
            exp: ['工作年限：', '19 年（2007年至今）'],
            target: ['目标职位：', '高级工程师 / 开发组长 / 技术负责人'],
        },
        summary: '在金融和电信行业拥有19年软件研发与项目管理经验，以 Java / Spring Cloud 为核心技术栈，熟练掌握 Hive、Kafka 大数据组件及 K8s 容器化部署。曾主导吉林银行数据检核系统、吉林电信经分大数据平台等省级行业项目，具备从架构设计、核心编码、性能优化到运维部署的全链路能力。多次担任开发组长，带领小团队完成高质量交付。近年积极探索 AI/LLM 方向，正在基于 OpenClaw 框架进行 Agent 应用开发与部署实践。',
        techCategories: [
            { name: '后端（主力）：', tags: 'Java / Spring Boot / Spring Cloud / MyBatis / Redis / MySQL' },
            { name: '大数据（熟悉）：', tags: 'Hive / Kafka / HBase / Hadoop / ELK' },
            { name: '运维部署：', tags: 'K8s / Docker / Jenkins CI/CD / Linux / Shell' },
            { name: '前端 & 其他：', tags: 'Vue.js / Node.js / UniApp / 小程序 / 数据可视化' },
            { name: 'AI方向（学习中）：', tags: 'OpenClaw Agent / 多Agent编排 / LLM集成' },
            { name: '数据库：', tags: 'MySQL / Oracle / HBase' },
        ],
        projStacks: [
            'Java / Spring Boot / MySQL / Kafka / K8s',
            'Hive / Hadoop / Kafka / HBase / Spark',
            'Spring Cloud / Vue.js / Redis / MySQL / Kafka',
            'K8s / Docker / Jenkins / Spring Boot / Vue.js',
        ],
        edu: '2010年 — 2013年　吉林大学　软件工程　本科（在职就读）',
        selfEval: '在金融报送和电信经分领域拥有多年真实项目落地经验，善于从业务需求出发进行架构设计与技术选型，具备独立主导模块或子系统的全链路开发能力。在团队协作中，注重代码质量与持续改进，积极指导和培养初中级工程师。性格上适应力强、执行力高、抗压能力好，乐于接受新技术挑战。近年持续关注 AI/LLM 方向，正在利用 OpenClaw 等框架进行 Agent 应用开发实践，拓展个人技术深度与广度。',
        roleLabel: '角色：',
        stackLabel: '技术栈：',
    },
    en: {
        docTitle: 'RESUME',
        date: 'March 2026',
        sectionBasic: '■  Basic Information',
        sectionSummary: '■  Career Summary',
        sectionTech: '■  Technical Stack',
        sectionHistory: '■  Work Experience',
        sectionProjects: '■  Key Projects',
        sectionEdu: '■  Education',
        sectionSelfEval: '■  Self Evaluation',
        sectionIntent: '■  Job Intent',
        basicInfo: {
            name: ['Name:', 'Wei Chao'],
            loc: ['Location:', 'Changchun, China'],
            contact: ['Contact:', 'chaowei126@gmail.com'],
            url: ['Online Resume:', 'https://chaowei126.github.io/resume-platform/'],
            exp: ['Experience:', '19 Years (Since 2007)'],
            target: ['Target Role:', 'Senior Engineer / Tech Lead / Tech Manager'],
        },
        summary: 'Full-stack engineer with 19 years of software R&D and project management experience in finance and telecom industries. Core stack is Java / Spring Cloud, proficient in Hive, Kafka big data components and K8s containerized deployment. Led provincial-level projects including Jilin Bank Data Inspection System and Jilin Telecom BI Big Data Platform. Capable of full-pipeline delivery from architecture design, core coding, performance optimization to operations. Frequently serves as Tech Lead, delivering high-quality projects with small teams. Actively exploring AI/LLM technologies, currently practicing Agent application development based on OpenClaw framework.',
        techCategories: [
            { name: 'Backend (Primary):', tags: 'Java / Spring Boot / Spring Cloud / MyBatis / Redis / MySQL' },
            { name: 'Big Data (Proficient):', tags: 'Hive / Kafka / HBase / Hadoop / ELK' },
            { name: 'DevOps & Deployment:', tags: 'K8s / Docker / Jenkins CI/CD / Linux / Shell' },
            { name: 'Frontend & Others:', tags: 'Vue.js / Node.js / UniApp / Mini Programs / Data Visualization' },
            { name: 'AI Direction (Learning):', tags: 'OpenClaw Agent / Multi-Agent Orchestration / LLM Integration' },
            { name: 'Databases:', tags: 'MySQL / Oracle / HBase' },
        ],
        projStacks: [
            'Java / Spring Boot / MySQL / Kafka / K8s',
            'Hive / Hadoop / Kafka / HBase / Spark',
            'Spring Cloud / Vue.js / Redis / MySQL / Kafka',
            'K8s / Docker / Jenkins / Spring Boot / Vue.js',
        ],
        edu: '2010 — 2013　Jilin University　Software Engineering　Bachelor\'s (Part-time)',
        selfEval: 'Years of real-world project delivery experience in financial reporting and telecom BI domains. Skilled at architecture design and technology selection driven by business requirements. Capable of independently leading module or subsystem development end-to-end. In team collaboration, emphasis on code quality and continuous improvement, actively mentoring junior engineers. Adaptable, strong execution, and resilient under pressure. Recently actively exploring AI/LLM direction, practicing Agent application development with OpenClaw framework to expand technical depth and breadth.',
        roleLabel: 'Role: ',
        stackLabel: 'Tech Stack: ',
    },
    ja: {
        docTitle: '履 歴 書',
        date: '2026年3月',
        sectionBasic: '■  基本情報',
        sectionSummary: '■  職業概要',
        sectionTech: '■  技術スタック',
        sectionHistory: '■  職歴',
        sectionProjects: '■  主なプロジェクト',
        sectionEdu: '■  学歴',
        sectionSelfEval: '■  自己評価',
        sectionIntent: '■  希望条件',
        basicInfo: {
            name: ['氏名：', '魏 超（ギ チョウ）'],
            loc: ['所在地：', '長春市'],
            contact: ['連絡先：', 'chaowei126@gmail.com'],
            url: ['オンライン履歴書：', 'https://chaowei126.github.io/resume-platform/'],
            exp: ['経験年数：', '19年（2007年より）'],
            target: ['希望職種：', 'シニアエンジニア / テックリード / 技術マネージャー'],
        },
        summary: '金融業界と通信業界において19年のソフトウェア開発およびプロジェクト管理経験を有するフルスタックエンジニア。Java / Spring Cloudをコア技術として、Hive、KafkaなどのビッグデータコンポーネントおよびK8sコンテナ化デプロイに精通。吉林銀行データ検査システム、吉林通信BI基盤など省レベルの業界プロジェクトを主導。アーキテクチャ設計からコアコーディング、パフォーマンス最適化、運用保守までのフルパイプライン能力を保有。テックリードとして小規模チームを率い、高品質な納品を実現。近年AI/LLM方向を積極的に探求し、OpenClawフレームワークを用いたAgentアプリケーション開発を実践中。',
        techCategories: [
            { name: 'バックエンド（主力）：', tags: 'Java / Spring Boot / Spring Cloud / MyBatis / Redis / MySQL' },
            { name: 'ビッグデータ（熟達）：', tags: 'Hive / Kafka / HBase / Hadoop / ELK' },
            { name: 'DevOps・デプロイ：', tags: 'K8s / Docker / Jenkins CI/CD / Linux / Shell' },
            { name: 'フロントエンド他：', tags: 'Vue.js / Node.js / UniApp / ミニプログラム / データ可視化' },
            { name: 'AI方向（学習中）：', tags: 'OpenClaw Agent / マルチAgent連携 / LLM統合' },
            { name: 'データベース：', tags: 'MySQL / Oracle / HBase' },
        ],
        projStacks: [
            'Java / Spring Boot / MySQL / Kafka / K8s',
            'Hive / Hadoop / Kafka / HBase / Spark',
            'Spring Cloud / Vue.js / Redis / MySQL / Kafka',
            'K8s / Docker / Jenkins / Spring Boot / Vue.js',
        ],
        edu: '2010 — 2013　吉林大学　ソフトウェア工学　学士（在職就学）',
        selfEval: '金融報送と通信経営分析分野で多年の実プロジェクト実装経験を有し、ビジネス要件からのアーキテクチャ設計と技術選定に長ける。モジュールやサブシステムの独立したフルパイプライン開発能力を持つ。チーム協業においてはコード品質と継続的改善を重視し、若手エンジニアの指導と育成に積極的に取り組む。適応力が高く、実行力があり、ストレスへの耐性も強い。近年AI/LLM方向を積極的に探求し、OpenClawフレームワークを用いたAgent開発実践を通じて技術の深度と広度を拡大中。',
        roleLabel: '役割：',
        stackLabel: '技術スタック：',
    },
};

/* ── helper: section heading with blue background ── */
const sectionHeading = (text: string) =>
    new Paragraph({
        children: [new TextRun({ text, bold: true, color: '1F3864', size: 24 })],
        spacing: { before: 360, after: 160 },
        shading: { type: ShadingType.SOLID, color: 'D6E4F0' },
    });

/* ── helper: key-value row ── */
const kvRow = (label: string, value: string) =>
    new Paragraph({
        children: [
            new TextRun({ text: label, bold: true, size: 20 }),
            new TextRun({ text: value, size: 20 }),
        ],
        spacing: { before: 40, after: 40 },
    });

export const exportWord = async (lang: Language) => {
    const t = translations[lang];
    const w = wordData[lang];
    const bi = w.basicInfo;

    const children: Paragraph[] = [];

    /* ────── Title ────── */
    children.push(
        new Paragraph({
            children: [new TextRun({ text: w.docTitle, bold: true, size: 44 })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 80 },
        }),
        new Paragraph({
            children: [new TextRun({ text: w.date, size: 18, italics: true })],
            alignment: AlignmentType.RIGHT,
            spacing: { after: 240 },
        }),
    );

    /* ────── 1. 基本信息 ────── */
    children.push(sectionHeading(w.sectionBasic));
    children.push(
        kvRow(bi.name[0], bi.name[1]),
        kvRow(bi.loc[0], bi.loc[1]),
        kvRow(bi.contact[0], bi.contact[1]),
        kvRow(bi.url[0], bi.url[1]),
        kvRow(bi.exp[0], bi.exp[1]),
        kvRow(bi.target[0], bi.target[1]),
    );

    /* ────── 2. 职业概要 ────── */
    children.push(sectionHeading(w.sectionSummary));
    children.push(new Paragraph({
        children: [new TextRun({ text: w.summary, size: 20 })],
        spacing: { before: 80, after: 120 },
    }));

    /* ────── 3. 技术栈 ────── */
    children.push(sectionHeading(w.sectionTech));
    for (const cat of w.techCategories) {
        children.push(new Paragraph({
            children: [
                new TextRun({ text: cat.name, bold: true, size: 20 }),
                new TextRun({ text: cat.tags, size: 20 }),
            ],
            spacing: { before: 50, after: 50 },
        }));
    }

    /* ────── 4. 工作经历 ────── */
    children.push(sectionHeading(w.sectionHistory));
    // Only non-education items
    const workItems = t.content.history.items.filter(item => item.badge !== '教育' && item.badge !== 'Education' && item.badge !== '学歴');
    for (const item of workItems) {
        children.push(
            new Paragraph({
                children: [
                    new TextRun({ text: `${item.period}　`, size: 20 }),
                    new TextRun({ text: item.co, bold: true, size: 22 }),
                ],
                spacing: { before: 180, after: 60 },
            }),
            new Paragraph({
                children: [new TextRun({ text: item.role, italics: true, size: 20 })],
                spacing: { after: 60 },
            }),
        );
        if (item.note) {
            children.push(new Paragraph({
                children: [new TextRun({ text: item.note, size: 20 })],
                spacing: { after: 60 },
            }));
        }
        if (item.wins) {
            for (const win of item.wins) {
                children.push(new Paragraph({
                    children: [new TextRun({ text: `• ${stripHtml(win)}`, size: 20 })],
                    spacing: { before: 30, after: 30 },
                    indent: { left: 360 },
                }));
            }
        }
    }

    /* ────── 5. 代表项目 ────── */
    children.push(sectionHeading(w.sectionProjects));
    t.content.projects.items.forEach((proj, i) => {
        children.push(
            new Paragraph({
                children: [
                    new TextRun({ text: `${proj.title}`, bold: true, size: 22 }),
                    new TextRun({ text: `  (${proj.yr})`, italics: true, size: 20 }),
                ],
                spacing: { before: 200, after: 80 },
                shading: { type: ShadingType.SOLID, color: 'EDF2F9' },
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: w.roleLabel, bold: true, size: 20 }),
                    new TextRun({ text: proj.role, size: 20 }),
                ],
                spacing: { after: 40 },
            }),
        );
        if (w.projStacks[i]) {
            children.push(new Paragraph({
                children: [
                    new TextRun({ text: w.stackLabel, bold: true, size: 20 }),
                    new TextRun({ text: w.projStacks[i], size: 20, color: '2E75B6' }),
                ],
                spacing: { after: 40 },
            }));
        }
        children.push(
            new Paragraph({
                children: [new TextRun({ text: proj.desc, size: 20 })],
                spacing: { after: 60 },
            }),
            new Paragraph({
                children: [new TextRun({ text: proj.kpis.join(' | '), size: 18, italics: true, color: '666666' })],
                spacing: { after: 160 },
            }),
        );
    });

    /* ────── 6. 教育背景 ────── */
    children.push(sectionHeading(w.sectionEdu));
    children.push(new Paragraph({
        children: [new TextRun({ text: w.edu, size: 20 })],
        spacing: { before: 60, after: 120 },
    }));

    /* ────── 7. 自我评价 ────── */
    children.push(sectionHeading(w.sectionSelfEval));
    children.push(new Paragraph({
        children: [new TextRun({ text: w.selfEval, size: 20 })],
        spacing: { before: 80, after: 120 },
    }));

    /* ────── 8. 求职意向 ────── */
    children.push(sectionHeading(w.sectionIntent));
    for (const item of t.sidebar.intent.items) {
        children.push(kvRow(`${item.l}：`, item.v.replace(/\n/g, ' / ')));
    }

    /* ────── Generate & Download ────── */
    const doc = new Document({
        sections: [{ properties: {}, children }],
    });

    Packer.toBlob(doc).then((blob) => {
        saveAs(blob, `Resume_${t.hero.name}.docx`);
    });
};
