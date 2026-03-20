export type Language = 'zh' | 'en' | 'ja';

export const translations = {
  zh: {
    topbar: { back: '个人主页', center: '候选人简报 · CANDIDATE BRIEF', share: '分享', export: '导出简历', copied: '已复制' },
    hero: { eyebrow: '候选人简报 · Senior Engineer Profile', name: '魏超', title: '高级软件工程师 / 项目技术组长 · 19年经验', tags: ['金融行业', '电信行业', 'Java / Spring Cloud', '大数据治理', 'K8s 容器化', '开发组长'], avail: '开放职业机会 · 2026', loc: '长春 · 可远程 · 可出差' },
    sidebar: {
      note: { label: '职位说明', title: '软件工程师', sub: '↳ 多个项目担任开发组长 / 技术负责人' },
      stats: { title: '基本信息', items: [{ l: '工作年限', v: '19', u: '年' }, { l: '行业经验', v: '12', u: '年' }, { l: '现任公司', v: 'BONC', u: '（东方国信）' }, { l: '带队规模', v: '小', u: '团队' }, { l: '学历', v: '本', u: '科' }, { l: '毕业院校', v: '吉林', u: '大学' }] },
      skills: { title: '技能深度', items: [{ n: 'Java / Spring', y: '15yr+', p: '90%' }, { n: '架构设计', y: '10yr', p: '78%' }, { n: '大数据 (Hive/Kafka)', y: '8yr', p: '70%' }, { n: 'Vue.js / Node', y: '6yr', p: '58%' }, { n: 'K8s / Docker', y: '3yr', p: '48%' }] },
      domains: { title: '擅长领域', feat: ['银行业', '电信运营商'], norm: ['数据质量与分析平台', '报送 / 经营分析系统', '营销中台'] },
      keywords: { title: '技术关键词', tags: ['Spring Cloud', 'Spring Boot', 'Hadoop', 'Hive', 'Kafka', 'HBase', 'ELK', 'Redis', 'MySQL', 'Oracle', 'K8s', 'Docker', 'Jenkins', 'Linux/Shell', 'Vue.js', 'Node.js', 'UniApp', '小程序', '数据可视化'] },
      intent: { title: '求职意向', items: [{ l: '目标职位', v: '高级工程师 / 开发组长\n技术经理 / 技术负责人' }, { l: '目标城市', v: '不限 · 可远程' }, { l: '工作方式', v: '全职 · 可出差' }, { l: '薪资期望', v: '面议（参考市场水准）' }] },
      contact: { title: '联系方式', email: 'chaowei126@gmail.com', phone: '181 **** 3605', loc: '长春市' }
    },
    content: {
      summary: {
        title: '候选人概述', sub: 'EXECUTIVE SUMMARY',
        text: '19年工作经验的全栈工程师，深耕数据质量与数据分析平台领域，在金融行业（如报送系统）与电信行业（如经营分析系统）有丰富的平台类项目落地经历，具备从架构设计、编码到容器化部署的全链路能力，多次以项目技术组长身份带领小团队完成交付。目前正在深入研究 AI/LLM 底层技术，并基于 OpenClaw 等框架进行 Agent 应用开发与部署实践。',
        body: '当前在东方国信（BONC）任软件研发工程师，服务年限12年+，参与和主导了吉林银行、吉林联通、山西银行等多个省级行业数字化项目。技术栈以 Java/Spring Cloud 为核心，熟悉 Hive/Kafka 大数据生态，近年完成 K8s 容器化部署实践。在多个项目中担任开发组长或技术负责人，负责架构选型、方案评审、进度管控，指导初中级工程师，开展代码审查与技术培训，提升团队整体交付质量。',
        honest: {
          title: '⚑ 猎头注意事项（如实说明）',
          items: [
            '公司官方职级为<strong>软件工程师</strong>，项目中担任组长',
            '带队规模为<strong>小团队</strong>，6人以下为主',
            '19年职业生涯主要在<strong>2家公司</strong>度过（跳槽少）',
            '积极探索 AI/LLM 底层技术及 <strong>OpenClaw Agent</strong> 应用落地',
            '吉林大学软件工程<strong>自考本科</strong>（已取得学士学位）',
            '性能提升数据来自<strong>项目实际测量</strong>，可详述'
          ]
        },
        kpis: [
          { n: '20%', d: '吉林银行数据免疫<br/>异常检测提速' },
          { n: '4hr+', d: '电信经分宽表<br/>加工时间缩短' },
          { n: '100%', d: '数据问题整改<br/>全链路闭环' }
        ]
      },

      history: {
        title: '工作经历', sub: 'CAREER HISTORY',
        items: [
          { period: '2012.07 — 至今 · 12年+', badge: '现任', co: '北京东方国信科技股份有限公司（BONC）', role: '软件研发工程师 · 多项目开发组长 / 技术负责人', note: '长期服务于电信、金融、政企行业的大型数字化平台项目，负责后端架构设计与开发、技术攻坚、团队协调，近年承担 K8s 容器化运维工作。', wins: ['在多个项目中担任<strong>开发组长或技术负责人</strong>，负责架构选型、方案评审、进度管控', '指导初中级工程师，开展<strong>代码审查与技术培训</strong>，提升团队整体交付质量', '主导<strong>吉林银行数据检核系统</strong>：全链路闭环架构，异常检测提速 <strong>20%</strong>', '主导<strong>吉林电信经分大数据平台</strong>重构：宽表加工提速 <strong>4小时+</strong>，自助取数提速 2小时+', '参与<strong>山西银行辰元营销中台</strong>：Spring Cloud 架构，线上线下数据闭环', '负责<strong>吉林联通云平台</strong>：K8s 应用上线与运维，突发问题处置'], now: true },
          { period: '2011.03 — 2012.06', badge: '上一份', co: '北京量子伟业时代信息技术有限公司', role: '软件工程师', wins: ['负责<strong>移动档案管理系统</strong>核心模块实现、需求调研与数据库设计', '指导下级工程师，参与关键技术攻关'] },
          { period: '2007.10 — 2011.02', badge: '早期', co: '吉林省旺豪软件 / 北京亚细亚智业', role: '软件工程师', wins: ['参与需求调研、概要设计、核心模块设计与开发', '积累扎实的工程实现能力与业务理解能力'] },
          { period: '2010 — 2013', badge: '教育', co: '吉林大学', role: '软件工程 · 本科（在职就读）' }
        ]
      },
      projects: {
        title: '代表项目', sub: 'KEY PROJECTS',
        items: [
          { tag: '金融 · 数据质量', yr: '2025—2026', title: '吉林银行 数据检核系统', role: '开发组长 / 架构设计', desc: '主导全行级数据质量管控平台后端架构设计，构建「规则配置→任务执行→问题整改→验收闭环」完整链路。规则引擎模块化设计，支持业务方零代码自助配置检核规则，无需开发介入。', kpis: ['异常检测 +20%', '100% 闭环', '五年趋势分析', '零代码规则配置', '集成OA工单流转'] },
          { tag: '电信 · 大数据', yr: '2016—2017', title: '吉林电信 经营分析大数据平台（ETL重构）', role: '技术负责人', desc: '全面重构底层 ETL 逻辑，引入并行计算与中间表策略，解决海量宽表加工瓶颈。通过随机前缀 + 两阶段聚合解决数据倾斜，将集中在少数 Reducer 的压力均匀分散。', kpis: ['宽表 -4hr+', '取数 -2hr+', '准实时展现', '数据倾斜攻克'] },
          { tag: '金融 · 营销中台', yr: '2022—2023', title: '山西银行 辰元营销平台', role: '开发组长', desc: '基于 Spring Cloud 架构设计银行营销中台，涵盖素材管理、活动策划、投放、执行、分析全模块。营销活动要素组件化，支持运营人员灵活配置规则、H5 页面当天上线，无需开发介入。', kpis: ['Spring Cloud', 'O2O数据闭环', 'H5快速生成', '组件化配置'] },
          { tag: '电信 · 云原生', yr: '2024', title: '吉林联通 老用户专区', role: '开发组长', desc: '开发联通老用户专属服务平台，整合多种营销渠道。负责云平台 K8s 应用上线、滚动更新、配置管理（ConfigMap/Secret）及漏洞处理。处理 OOMKilled 等生产故障，快速定位根因并给出根治方案。', kpis: ['K8s运维', '云平台部署', '故障根因分析', '滚动更新'] }
        ]
      },

      fit: {
        title: '适岗分析', sub: 'FIT ANALYSIS',
        good: { label: '✓ 适合的岗位类型', items: ['<strong>高级 Java 工程师</strong>（银行/电信/政企）', '<strong>开发组长</strong>（5-10人小团队）', '<strong>技术经理</strong>（偏技术、轻管理）', '<strong>大数据平台工程师</strong>（Hive/Kafka方向）', '需要<strong>行业经验</strong>的项目技术负责人'] },
        advice: { label: '⚑ 猎头推荐建议', items: ['以<strong>行业经验+量化结果</strong>定位，不以职级', '12年同公司体现<strong>稳定性与忠诚度</strong>', '全栈能力是<strong>项目交付效率</strong>的保证', '可提供<strong>项目技术文档</strong>作佐证', '期望的<strong>汇报对象</strong>：技术总监/CTO'] }
      }
    },
    cta: { title: '安排与魏超的对话', sub: '技术讨论、职位匹配或面试安排，欢迎直接联系。通常24小时内回复。', email: '发送邮件 →', phone: '电话联系 →', home: '查看个人主页 →' }
  },
  en: {
    topbar: { back: 'Personal Homepage', center: 'CANDIDATE BRIEF', share: 'Share', export: 'Export Resume', copied: 'Copied' },
    hero: { eyebrow: 'Candidate Brief · Senior Engineer Profile', name: 'Wei Chao', title: 'Senior Software Engineer / Tech Lead · 19 Yrs Exp', tags: ['Finance', 'Telecom', 'Java / Spring Cloud', 'Big Data', 'K8s / Docker', 'Tech Lead'], avail: 'Open to Opportunities · 2026', loc: 'Changchun · Remote · Travel' },
    sidebar: {
      note: { label: 'Position Note', title: 'Software Engineer', sub: '↳ Acts as Tech Lead in multiple projects' },
      stats: { title: 'Basic Info', items: [{ l: 'Experience', v: '19', u: 'Yrs' }, { l: 'Industry Exp', v: '12', u: 'Yrs' }, { l: 'Current Co', v: 'BONC', u: '' }, { l: 'Team Size', v: 'Small', u: 'Team' }, { l: 'Education', v: 'Bachelor', u: '' }, { l: 'University', v: 'Jilin', u: 'Univ' }] },
      skills: { title: 'Skill Depth', items: [{ n: 'Java / Spring', y: '15yr+', p: '90%' }, { n: 'Architecture', y: '10yr', p: '78%' }, { n: 'Big Data (Hive/Kafka)', y: '8yr', p: '70%' }, { n: 'Vue.js / Node', y: '6yr', p: '58%' }, { n: 'K8s / Docker', y: '3yr', p: '48%' }] },
      domains: { title: 'Domains', feat: ['Banking/Finance', 'Telecom'], norm: ['Data Quality & Analysis', 'Reporting / BI Systems', 'Marketing Hub'] },
      keywords: { title: 'Keywords', tags: ['Spring Cloud', 'Spring Boot', 'Hadoop', 'Hive', 'Kafka', 'HBase', 'ELK', 'Redis', 'MySQL', 'Oracle', 'K8s', 'Docker', 'Jenkins', 'Linux/Shell', 'Vue.js', 'Node.js', 'UniApp', 'Data Visualization'] },
      intent: { title: 'Job Intent', items: [{ l: 'Target Role', v: 'Senior Engineer / Tech Lead\nTech Manager' }, { l: 'Target City', v: 'Any · Remote OK' }, { l: 'Work Type', v: 'Full-time · Travel OK' }, { l: 'Salary', v: 'Negotiable (Market Reference)' }] },
      contact: { title: 'Contact', email: 'chaowei126@gmail.com', phone: '181 **** 3605', loc: 'Changchun City' }
    },
    content: {
      summary: {
        title: 'Executive Summary', sub: 'EXECUTIVE SUMMARY',
        text: 'Full-stack engineer with 19 years of experience, specializing in data quality and data analysis platforms. Proven track record in delivery of platform projects for finance (e.g., reporting systems) and telecom (e.g., business analysis systems) industries. Proven ability in architecture design, coding, and containerized deployment. Frequently leads small teams to successful project delivery. Actively researching underlying AI/LLM technologies and practicing Agent application development and deployment based on frameworks like OpenClaw.',
        body: 'Currently a Software R&D Engineer at BONC (12+ years). Led and participated in multiple provincial-level digital projects for Jilin Bank, Jilin Unicom, and Shanxi Bank. Core stack is Java/Spring Cloud, familiar with Hive/Kafka ecosystem, and recently implemented K8s containerized deployments. Serves as Tech Lead and Development Team Lead in multiple projects, responsible for architecture selection, solution review, progress management, mentoring junior engineers, conducting code reviews and technical training to improve overall team delivery quality.',
        honest: {
          title: '⚑ Notes for HR / Headhunters',
          items: [
            'Official title is <strong>Software Engineer</strong>; acts as Tech Lead in projects.',
            'Experienced in leading <strong>small teams</strong> (under 6 people).',
            'Highly stable: 19-year career spent primarily in <strong>2 companies</strong>.',
            'Actively exploring AI/LLM technologies and <strong>OpenClaw Agent</strong> implementations.',
            'Education: <strong>Self-taught Bachelor\'s degree</strong> in Software Engineering (Degree obtained).',
            'Performance metrics are from <strong>actual project measurements</strong>.'
          ]
        },
        kpis: [
          { n: '20%', d: 'Jilin Bank Immune<br/>Detection Speedup' },
          { n: '4hr+', d: 'Telecom Wide-table<br/>Processing Reduced' },
          { n: '100%', d: 'Data Issue<br/>Remediation Loop' }
        ]
      },

      history: {
        title: 'Career History', sub: 'CAREER HISTORY',
        items: [
          { period: '2012.07 — Present · 12+ Yrs', badge: 'Current', co: 'BONC (Beijing Orient National Communication)', role: 'Software R&D Engineer · Tech Lead', note: 'Long-term service in large-scale digital platform projects for telecom, finance, and enterprise sectors. Responsible for backend architecture, technical problem-solving, team coordination, and K8s operations.', wins: ['Served as <strong>Development Team Lead / Tech Lead</strong> in multiple projects, responsible for architecture selection and solution review', 'Mentored junior engineers, conducted <strong>code reviews and technical training</strong> to improve team delivery quality', 'Led <strong>Jilin Bank Data Inspection System</strong>: Closed-loop architecture, anomaly detection speedup <strong>20%</strong>', 'Led <strong>Jilin Telecom Big Data Platform</strong> refactoring: Wide-table processing reduced by <strong>4+ hours</strong>, data fetch reduced by 2+ hours', 'Participated in <strong>Shanxi Bank Marketing Hub</strong>: Spring Cloud architecture, O2O data loop', 'Managed <strong>Jilin Unicom Cloud Platform</strong>: K8s application deployment, rolling updates, and incident response'], now: true },
          { period: '2011.03 — 2012.06', badge: 'Previous', co: 'Beijing Quantum Weiye Era IT Co., Ltd.', role: 'Software Engineer', wins: ['Developed core modules for <strong>mobile archive management system</strong>, requirements research and database design', 'Mentored junior engineers, participated in key technical breakthroughs'] },
          { period: '2007.10 — 2011.02', badge: 'Early', co: 'Jilin Wanghao Software / Beijing Asia Intelligence', role: 'Software Engineer', wins: ['Participated in requirements research, outline design, core module design and development', 'Built solid engineering implementation capabilities and business understanding'] },
          { period: '2010 — 2013', badge: 'Education', co: 'Jilin University', role: 'Software Engineering · Bachelor\'s Degree (Part-time study)' }
        ]
      },
      projects: {
        title: 'Key Projects', sub: 'KEY PROJECTS',
        items: [
          { tag: 'Finance · Data Quality', yr: '2025—2026', title: 'Jilin Bank Data Inspection System', role: 'Tech Lead / Architecture', desc: 'Led bank-wide data quality control platform backend architecture design. Built a complete pipeline: rule configuration → task execution → issue remediation → acceptance closure. Modular rule engine supports zero-code self-service configuration by business users.', kpis: ['Detection +20%', '100% Closed-loop', '5-Yr Trend Analysis', 'Zero-code Rules', 'OA Integration'] },
          { tag: 'Telecom · Big Data', yr: '2016—2017', title: 'Jilin Telecom BI Big Data Platform (ETL Refactoring)', role: 'Tech Lead', desc: 'Comprehensive ETL logic refactoring with parallel computing and intermediate table strategies. Resolved data skew via random prefix + two-stage aggregation, evenly distributing pressure across Reducers.', kpis: ['Wide-table -4hr+', 'Data Fetch -2hr+', 'Near Real-time', 'Data Skew Resolved'] },
          { tag: 'Finance · Marketing', yr: '2022—2023', title: 'Shanxi Bank Marketing Hub', role: 'Tech Lead', desc: 'Designed bank marketing hub based on Spring Cloud, covering material management, campaign planning, delivery, execution, and analytics. Component-based campaign elements enable operators to flexibly configure rules and launch H5 pages same-day.', kpis: ['Spring Cloud', 'O2O Data Loop', 'Rapid H5 Gen', 'Component-based'] },
          { tag: 'Telecom · Cloud Native', yr: '2024', title: 'Jilin Unicom Legacy User Zone', role: 'Tech Lead', desc: 'Developed exclusive service platform for legacy users, integrating multiple marketing channels. Managed K8s application deployment, rolling updates, ConfigMap/Secret management, and vulnerability remediation. Handled OOMKilled production incidents with rapid root cause analysis.', kpis: ['K8s Ops', 'Cloud Deployment', 'Root Cause Analysis', 'Rolling Updates'] }
        ]
      },

      fit: {
        title: 'Fit Analysis', sub: 'FIT ANALYSIS',
        good: { label: '✓ Suitable Roles', items: ['<strong>Senior Java Engineer</strong> (Banking/Telecom/Enterprise)', '<strong>Tech Lead</strong> (Small teams of 5-10)', '<strong>Tech Manager</strong> (Tech-focused, light management)', '<strong>Big Data Engineer</strong> (Hive/Kafka focus)', 'Project Tech Lead requiring <strong>industry experience</strong>'] },
        advice: { label: '⚑ Headhunter Advice', items: ['Position based on <strong>industry experience + quantified results</strong>, not just title', '12 years in one company shows <strong>stability and loyalty</strong>', 'Full-stack capability guarantees <strong>project delivery efficiency</strong>', 'Can provide <strong>technical documentation</strong> as proof', 'Expected reporting line: <strong>Tech Director / CTO</strong>'] }
      }
    },
    cta: { title: 'Arrange a Conversation with Wei Chao', sub: 'For technical discussions, role matching, or interviews, feel free to reach out directly. Usually replies within 24 hours.', email: 'Send Email →', phone: 'Call Now →', home: 'View Personal Homepage →' }
  },
  ja: {
    topbar: { back: '個人サイト', center: '候補者概要 · CANDIDATE BRIEF', share: '共有', export: '履歴書をダウンロード', copied: 'コピーしました' },
    hero: { eyebrow: '候補者概要 · Senior Engineer Profile', name: '魏 超 (ギ チョウ)', title: 'シニアソフトウェアエンジニア / テックリード · 経験19年', tags: ['金融業界', '通信業界', 'Java / Spring Cloud', 'ビッグデータ', 'K8s コンテナ化', 'テックリード'], avail: '転職活動中 · 2026', loc: '長春 · リモート可 · 出張可' },
    sidebar: {
      note: { label: '役職に関する注記', title: 'ソフトウェアエンジニア', sub: '↳ 複数のプロジェクトでテックリードを担当' },
      stats: { title: '基本情報', items: [{ l: '経験年数', v: '19', u: '年' }, { l: '業界経験', v: '12', u: '年' }, { l: '現職', v: 'BONC', u: '(東方国信)' }, { l: 'チーム規模', v: '小', u: '規模' }, { l: '学歴', v: '学士', u: '' }, { l: '出身大学', v: '吉林', u: '大学' }] },
      skills: { title: 'スキル深度', items: [{ n: 'Java / Spring', y: '15yr+', p: '90%' }, { n: 'アーキテクチャ設計', y: '10yr', p: '78%' }, { n: 'ビッグデータ (Hive/Kafka)', y: '8yr', p: '70%' }, { n: 'Vue.js / Node', y: '6yr', p: '58%' }, { n: 'K8s / Docker', y: '3yr', p: '48%' }] },
      domains: { title: '得意分野', feat: ['銀行/金融', '通信キャリア'], norm: ['データ品質・分析基盤', '報送・経営分析システム', 'マーケティング基盤'] },
      keywords: { title: '技術キーワード', tags: ['Spring Cloud', 'Spring Boot', 'Hadoop', 'Hive', 'Kafka', 'HBase', 'ELK', 'Redis', 'MySQL', 'Oracle', 'K8s', 'Docker', 'Jenkins', 'Linux/Shell', 'Vue.js', 'Node.js', 'UniApp', 'データ可視化'] },
      intent: { title: '希望条件', items: [{ l: '希望職種', v: 'シニアエンジニア / テックリード\n技術マネージャー' }, { l: '希望勤務地', v: '不問 · リモート可' }, { l: '勤務形態', v: '正社員 · 出張可' }, { l: '給与', v: '応相談（市場水準参考）' }] },
      contact: { title: '連絡先', email: 'chaowei126@gmail.com', phone: '181 **** 3605', loc: '長春市' }
    },
    content: {
      summary: {
        title: '概要', sub: 'EXECUTIVE SUMMARY',
        text: 'データ品質およびデータ分析プラットフォームを専門とするフルスタックエンジニア。金融業界（報送システムなど）および通信業界（経営分析システムなど）のプラットフォーム開発において豊富な経験を持つ。アーキテクチャ設計、コーディング、コンテナ化展開の全工程に対応可能。小規模チームを率いてのプロジェクト完遂経験多数。現在、AI/LLMの基盤技術を深く研究し、OpenClawなどのフレームワークを用いたAgentアプリケーションの開発とデプロイを実践中。',
        body: '現在、BONCにてソフトウェア研究開発エンジニアとして12年以上勤務。吉林銀行、吉林通信、山西銀行などの省レベルのデジタルプロジェクトを主導。コア技術はJava/Spring Cloudで、Hive/Kafkaエコシステムにも精通しており、近年はK8sコンテナ化展開を実践。複数のプロジェクトでテックリードや開発チームリーダーを務め、アーキテクチャ選定、ソリューションレビュー、進捗管理、若手エンジニアの指導、コードレビューと技術研修の実施を担当。',
        honest: {
          title: '⚑ HR / ヘッドハンター向け特記事項',
          items: [
            '公式な役職は<strong>ソフトウェアエンジニア</strong>ですが、プロジェクトではテックリードを務めています。',
            '<strong>小規模チーム</strong>（6人以下）のマネジメント経験が豊富です。',
            '19年のキャリアの大部分を<strong>2社</strong>で過ごしており、非常に安定しています。',
            'AI/LLM基盤技術および<strong>OpenClaw Agent</strong>の実装を積極的に探求しています。',
            '学歴：独学（自学考試）によるソフトウェア工学の<strong>学士課程修了</strong>（学士号取得済み）。',
            'パフォーマンス向上のデータは<strong>実際のプロジェクト測定値</strong>に基づいています。'
          ]
        },
        kpis: [
          { n: '20%', d: '吉林銀行 異常検知<br/>スピードアップ' },
          { n: '4hr+', d: '通信ワイドテーブル<br/>処理時間短縮' },
          { n: '100%', d: 'データ問題の<br/>完全クローズドループ' }
        ]
      },

      history: {
        title: '職歴', sub: 'CAREER HISTORY',
        items: [
          { period: '2012.07 — 現在 · 12年以上', badge: '現職', co: '北京東方国信科技股份有限公司 (BONC)', role: 'ソフトウェア研究開発エンジニア · テックリード', note: '通信、金融、企業向けのデジタルプラットフォームプロジェクトを主導。バックエンドのアーキテクチャ設計、技術的課題の解決、チーム調整、K8sコンテナ運用を担当。', wins: ['複数のプロジェクトで<strong>開発チームリーダー/テックリード</strong>を務め、アーキテクチャ選定とソリューションレビューを担当', '若手エンジニアを指導し、<strong>コードレビューと技術研修</strong>を実施してチームの納品品質を向上', '<strong>吉林銀行データ検査システム</strong>を主導：クローズドループアーキテクチャ、異常検知速度<strong>20%</strong>向上', '<strong>吉林通信ビッグデータプラットフォーム</strong>のリファクタリングを主導：ワイドテーブル処理時間を<strong>4時間以上</strong>短縮', '<strong>山西銀行マーケティング基盤</strong>に参加：Spring Cloudアーキテクチャ、O2Oデータ連携', '<strong>吉林聯通クラウドプラットフォーム</strong>を担当：K8sアプリケーション展開、ローリングアップデート、インシデント対応'], now: true },
          { period: '2011.03 — 2012.06', badge: '前職', co: '北京量子偉業時代情報技術有限公司', role: 'ソフトウェアエンジニア', wins: ['<strong>モバイルアーカイブ管理システム</strong>のコアモジュール開発、要件調査、データベース設計を担当', '若手エンジニアの指導と主要技術課題の解決に参加'] },
          { period: '2007.10 — 2011.02', badge: '初期', co: '吉林省旺豪ソフトウェア / 北京アジアインテリジェンス', role: 'ソフトウェアエンジニア', wins: ['要件調査、概要設計、コアモジュールの設計と開発に参加', '確かなエンジニアリング実装能力とビジネス理解力を蓄積'] },
          { period: '2010 — 2013', badge: '学歴', co: '吉林大学', role: 'ソフトウェア工学 · 学士（在職就学）' }
        ]
      },
      projects: {
        title: '主なプロジェクト', sub: 'KEY PROJECTS',
        items: [
          { tag: '金融 · データ品質', yr: '2025—2026', title: '吉林銀行 データ検査システム', role: 'テックリード / アーキテクチャ設計', desc: '全行レベルのデータ品質管理プラットフォームのバックエンド設計を主導。「ルール設定→タスク実行→問題修正→受入検査クローズ」の完全パイプラインを構築。モジュラー式ルールエンジンでゼロコード設定をサポート。', kpis: ['検知速度 +20%', '100% クローズドループ', '5年トレンド分析', 'ゼロコードルール', 'OA統合'] },
          { tag: '通信 · ビッグデータ', yr: '2016—2017', title: '吉林通信 経営分析ビッグデータプラットフォーム（ETLリファクタリング）', role: 'テックリード', desc: 'ETLロジックの全面リファクタリング。並列計算と中間テーブル戦略を導入。ランダムプレフィックス+二段階集計によりデータの偏りを解消。', kpis: ['ワイドテーブル -4hr+', 'データ取得 -2hr+', 'ニアリアルタイム', 'データ偏り解消'] },
          { tag: '金融 · マーケティング', yr: '2022—2023', title: '山西銀行 マーケティングプラットフォーム', role: 'テックリード', desc: 'Spring Cloudベースの銀行マーケティングハブを設計。素材管理、企画、配信、実行、分析の全モジュールをカバー。コンポーネント化により即日H5ページ公開が可能。', kpis: ['Spring Cloud', 'O2Oデータ連携', '迅速なH5生成', 'コンポーネント化'] },
          { tag: '通信 · クラウドネイティブ', yr: '2024', title: '吉林聯通 既存ユーザー向けゾーン', role: 'テックリード', desc: '複数チャネルを統合した既存ユーザー専用プラットフォーム。K8sアプリの展開、ローリングアップデート、ConfigMap/Secret管理、脆弱性対応を担当。OOMKilledなどの本番障害に対し迅速な根本原因分析を実施。', kpis: ['K8s運用', 'クラウド展開', '根本原因分析', 'ローリングアップデート'] }
        ]
      },

      fit: {
        title: '適性分析', sub: 'FIT ANALYSIS',
        good: { label: '✓ 適した役割', items: ['<strong>シニアJavaエンジニア</strong> (銀行/通信/企業)', '<strong>テックリード</strong> (5〜10人の小規模チーム)', '<strong>技術マネージャー</strong> (技術重視、軽度の管理)', '<strong>ビッグデータエンジニア</strong> (Hive/Kafkaフォーカス)', '<strong>業界経験</strong>を必要とするプロジェクトテックリード'] },
        advice: { label: '⚑ ヘッドハンターへのアドバイス', items: ['役職だけでなく、<strong>業界経験＋定量的な結果</strong>に基づくポジショニング', '1社での12年の経験は<strong>安定性と忠誠心</strong>を示しています', 'フルスタックの能力は<strong>プロジェクトの納品効率</strong>を保証します', '証明として<strong>技術ドキュメント</strong>を提供可能', '希望する報告ライン：<strong>技術ディレクター / CTO</strong>'] }
      }
    },
    cta: { title: '魏超との対話を設定する', sub: '技術的な議論、役割のすり合わせ、面接の設定など、お気軽にご連絡ください。通常24時間以内に返信いたします。', email: 'メールを送信 →', phone: '電話をかける →', home: '個人サイトを見る →' }
  }
};
