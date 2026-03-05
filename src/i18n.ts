export type Language = 'zh' | 'en' | 'ja';

export const translations = {
  zh: {
    topbar: { back: '← 个人主页', center: '候选人简报 · CANDIDATE BRIEF', share: '分享', print: '打印 / PDF', copied: '已复制' },
    hero: { eyebrow: '候选人简报 · Senior Engineer Profile', name: '魏超', title: '高级软件工程师 / 项目技术组长 · 19年经验', tags: ['金融行业', '电信行业', 'Java / Spring Cloud', '大数据治理', 'K8s 容器化', '开发组长'], avail: '开放职业机会 · 2026', loc: '长春 · 可远程 · 可出差' },
    sidebar: {
      note: { label: '职位说明', title: '软件工程师', sub: '↳ 多个项目担任开发组长 / 技术负责人' },
      stats: { title: '基本信息', items: [{l:'工作年限', v:'19', u:'年'}, {l:'行业经验', v:'12', u:'年'}, {l:'现任公司', v:'BONC', u:'（东方国信）'}, {l:'带队规模', v:'小', u:'团队'}, {l:'学历', v:'本', u:'科'}, {l:'毕业院校', v:'吉林', u:'大学'}] },
      skills: { title: '技能深度', items: [{n:'Java / Spring', y:'15yr+', p:'90%'}, {n:'架构设计', y:'10yr', p:'78%'}, {n:'大数据 (Hive/Kafka)', y:'8yr', p:'70%'}, {n:'Vue.js / Node', y:'6yr', p:'58%'}, {n:'K8s / Docker', y:'3yr', p:'48%'}] },
      domains: { title: '擅长领域', feat: ['银行/金融', '电信运营商'], norm: ['数据治理平台', '企业数字化', '营销中台'] },
      keywords: { title: '技术关键词', tags: ['Spring Cloud', 'Spring Boot', 'Hadoop', 'Hive', 'Kafka', 'HBase', 'ELK', 'Redis', 'MySQL', 'K8s', 'Docker', 'Jenkins', 'Linux/Shell', 'Vue.js', 'Node.js', 'Uniapp'] },
      intent: { title: '求职意向', items: [{l:'目标职位', v:'高级工程师 / 开发组长\n技术经理 / 技术负责人'}, {l:'目标城市', v:'不限 · 可远程'}, {l:'到岗时间', v:'1个月内'}, {l:'工作方式', v:'全职 · 可出差'}] },
      contact: { title: '联系方式', email: 'chaowei126@gmail.com', phone: '181 **** 3605', loc: '长春市' }
    },
    content: {
      summary: {
        title: '候选人概述', sub: 'EXECUTIVE SUMMARY',
        text: '19年工作经验的全栈工程师，在金融与电信行业核心系统有真实落地经历，具备从架构设计、编码到容器化部署的全链路能力，多次以项目技术组长身份带领小团队完成交付。目前正在深入研究 AI/LLM 底层技术，并基于 OpenClaw 等框架进行 Agent 应用开发与部署实践。',
        body: '当前在东方国信（BONC）任软件研发工程师，服务年限12年+，参与和主导了吉林银行、吉林联通、山西银行等多个省级行业数字化项目。技术栈以 Java/Spring Cloud 为核心，熟悉 Hive/Kafka 大数据生态，近年完成 K8s 容器化部署实践。',
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
          { n: '20%', d: '吉林银行数据检核<br/>异常检测提速' },
          { n: '4hr+', d: '电信经分宽表<br/>加工时间缩短' },
          { n: '100%', d: '数据问题整改<br/>全链路闭环' }
        ]
      },
      history: {
        title: '工作经历', sub: 'CAREER HISTORY',
        items: [
          { period: '2012.07 — 至今 · 12年+', badge: '现任', co: '北京东方国信科技股份有限公司（BONC）', role: '软件研发工程师 · 多项目开发组长 / 技术负责人', note: '长期服务于电信、金融、政企行业的大型数字化平台项目，负责后端架构设计与开发、技术攻坚、团队协调，近年承担 K8s 容器化运维工作。', wins: ['主导<strong>吉林银行数据检核系统</strong>：全链路闭环架构，异常检测提速 <strong>20%</strong>', '主导<strong>吉林电信经分大数据平台</strong>重构：宽表加工提速 <strong>4小时+</strong>，自助取数提速 2小时+', '参与<strong>山西银行辰元营销中台</strong>：Spring Cloud 架构，线上线下数据闭环', '负责<strong>吉林联通云平台</strong>：K8s 应用上线与运维，突发问题处置', '负责产品后端架构选型与技术方案评审，指导初中级工程师'], now: true },
          { period: '2011.03 — 2012.06', badge: '上一份', co: '北京量子伟业时代信息技术有限公司', role: '软件工程师', wins: ['负责<strong>移动档案管理系统</strong>核心模块实现、需求调研与数据库设计', '指导下级人员工作，参与技术攻关'] },
          { period: '2007.10 — 2011.02', badge: '早期', co: '吉林省旺豪软件 / 北京亚细亚智业', role: '软件工程师', wins: ['参与需求调研、概要文档、核心模块设计与开发', '积累扎实的工程基础能力'] },
          { period: '2010 — 2013', badge: '教育', co: '吉林大学', role: '软件工程 · 自考本科（已取得学士学位）' }
        ]
      },
      projects: {
        title: '代表项目', sub: 'KEY PROJECTS',
        items: [
          { tag: '金融 · 数据治理', yr: '2025—2026', title: '吉林银行数据检核系统', role: '开发组长 / 架构设计', desc: '全行级数据质量管控平台，全闭环架构（规则配置→任务执行→整改→验收），多角色协同工作台，OA接口自动化任务流转。', kpis: ['异常检测 +20%', '100% 闭环', '五年趋势分析'] },
          { tag: '电信 · 大数据', yr: '2016—2017', title: '经分大数据平台（吉林电信）', role: '技术负责人', desc: '重构底层 ETL 逻辑，引入并行计算与中间表策略，解决海量宽表加工瓶颈，部分页面实现准实时展现。', kpis: ['宽表 -4hr+', '取数 -2hr+', '准实时'] },
          { tag: '金融 · 营销中台', yr: '2022—2023', title: '山西银行辰元营销平台', role: '开发组长', desc: '基于 Spring Cloud 的银行营销中台，活动要素组件化，支持快速规则配置和 H5 页面生成，打通线上线下数据联动。', kpis: ['Spring Cloud', 'O2O数据闭环', 'H5快速生成'] },
          { tag: '电信 · 云原生', yr: '2024', title: '吉林联通老用户专区', role: '开发组长', desc: '整合多营销渠道的老用户专属平台，负责云平台上线、K8s 应用更新、系统漏洞处理及突发问题应对。', kpis: ['K8s运维', '云平台部署'] }
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
    topbar: { back: '← Personal Homepage', center: 'CANDIDATE BRIEF', share: 'Share', print: 'Print / PDF', copied: 'Copied' },
    hero: { eyebrow: 'Candidate Brief · Senior Engineer Profile', name: 'Wei Chao', title: 'Senior Software Engineer / Tech Lead · 19 Yrs Exp', tags: ['Finance', 'Telecom', 'Java / Spring Cloud', 'Big Data', 'K8s / Docker', 'Tech Lead'], avail: 'Open to Opportunities · 2026', loc: 'Changchun · Remote · Travel' },
    sidebar: {
      note: { label: 'Position Note', title: 'Software Engineer', sub: '↳ Acts as Tech Lead in multiple projects' },
      stats: { title: 'Basic Info', items: [{l:'Experience', v:'19', u:'Yrs'}, {l:'Industry Exp', v:'12', u:'Yrs'}, {l:'Current Co', v:'BONC', u:''}, {l:'Team Size', v:'Small', u:'Team'}, {l:'Education', v:'Bachelor', u:''}, {l:'University', v:'Jilin', u:'Univ'}] },
      skills: { title: 'Skill Depth', items: [{n:'Java / Spring', y:'15yr+', p:'90%'}, {n:'Architecture', y:'10yr', p:'78%'}, {n:'Big Data (Hive/Kafka)', y:'8yr', p:'70%'}, {n:'Vue.js / Node', y:'6yr', p:'58%'}, {n:'K8s / Docker', y:'3yr', p:'48%'}] },
      domains: { title: 'Domains', feat: ['Banking/Finance', 'Telecom'], norm: ['Data Governance', 'Enterprise Digital', 'Marketing Hub'] },
      keywords: { title: 'Keywords', tags: ['Spring Cloud', 'Spring Boot', 'Hadoop', 'Hive', 'Kafka', 'HBase', 'ELK', 'Redis', 'MySQL', 'K8s', 'Docker', 'Jenkins', 'Linux/Shell', 'Vue.js', 'Node.js', 'Uniapp'] },
      intent: { title: 'Job Intent', items: [{l:'Target Role', v:'Senior Engineer / Tech Lead\nTech Manager'}, {l:'Target City', v:'Any · Remote OK'}, {l:'Availability', v:'Within 1 month'}, {l:'Work Type', v:'Full-time · Travel OK'}] },
      contact: { title: 'Contact', email: 'chaowei126@gmail.com', phone: '181 **** 3605', loc: 'Changchun City' }
    },
    content: {
      summary: {
        title: 'Executive Summary', sub: 'EXECUTIVE SUMMARY',
        text: 'Full-stack engineer with 19 years of experience, specializing in core systems for finance and telecom industries. Proven ability in architecture design, coding, and containerized deployment. Frequently leads small teams to successful project delivery. Actively researching underlying AI/LLM technologies and practicing Agent application development and deployment based on frameworks like OpenClaw.',
        body: 'Currently a Software R&D Engineer at BONC (12+ years). Led and participated in multiple provincial-level digital projects for Jilin Bank, Jilin Unicom, and Shanxi Bank. Core stack is Java/Spring Cloud, familiar with Hive/Kafka ecosystem, and recently implemented K8s containerized deployments.',
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
          { n: '20%', d: 'Jilin Bank Anomaly<br/>Detection Speedup' },
          { n: '4hr+', d: 'Telecom Wide-table<br/>Processing Reduced' },
          { n: '100%', d: 'Data Issue<br/>Remediation Loop' }
        ]
      },
      history: {
        title: 'Career History', sub: 'CAREER HISTORY',
        items: [
          { period: '2012.07 — Present · 12+ Yrs', badge: 'Current', co: 'BONC (Beijing Orient National Communication)', role: 'Software R&D Engineer · Tech Lead', note: 'Long-term service in large-scale digital platform projects for telecom, finance, and enterprise sectors. Responsible for backend architecture, technical problem-solving, team coordination, and K8s operations.', wins: ['Led <strong>Jilin Bank Data Verification System</strong>: Closed-loop architecture, anomaly detection speedup <strong>20%</strong>', 'Led <strong>Jilin Telecom Big Data Platform</strong> refactoring: Wide-table processing reduced by <strong>4+ hours</strong>', 'Participated in <strong>Shanxi Bank Marketing Hub</strong>: Spring Cloud architecture, O2O data loop', 'Managed <strong>Jilin Unicom Cloud Platform</strong>: K8s application deployment and incident response', 'Responsible for backend architecture selection and mentoring junior engineers'], now: true },
          { period: '2011.03 — 2012.06', badge: 'Previous', co: 'Beijing Quantum Weiye Era IT Co., Ltd.', role: 'Software Engineer', wins: ['Developed core modules for mobile archive management systems', 'Mentored junior staff and participated in technical breakthroughs'] },
          { period: '2007.10 — 2011.02', badge: 'Early', co: 'Jilin Wanghao Software / Beijing Asia Intelligence', role: 'Software Engineer', wins: ['Participated in requirements gathering, documentation, and core module development', 'Built solid engineering foundation'] },
          { period: '2010 — 2013', badge: 'Education', co: 'Jilin University', role: 'Software Engineering · Self-taught Bachelor\'s Degree (Degree obtained)' }
        ]
      },
      projects: {
        title: 'Key Projects', sub: 'KEY PROJECTS',
        items: [
          { tag: 'Finance · Data Gov', yr: '2025—2026', title: 'Jilin Bank Data Verification System', role: 'Tech Lead / Architecture', desc: 'Bank-wide data quality control platform with a closed-loop architecture. Multi-role collaborative workspace with OA interface automation.', kpis: ['Detection +20%', '100% Closed-loop', '5-Yr Trend Analysis'] },
          { tag: 'Telecom · Big Data', yr: '2016—2017', title: 'Big Data Platform (Jilin Telecom)', role: 'Tech Lead', desc: 'Refactored underlying ETL logic, introducing parallel computing. Solved massive wide-table processing bottlenecks.', kpis: ['Wide-table -4hr+', 'Data Fetch -2hr+', 'Near Real-time'] },
          { tag: 'Finance · Marketing', yr: '2022—2023', title: 'Shanxi Bank Marketing Hub', role: 'Tech Lead', desc: 'Spring Cloud-based marketing hub. Supported rapid rule configuration and H5 page generation, integrating online and offline data.', kpis: ['Spring Cloud', 'O2O Data Loop', 'Rapid H5 Gen'] },
          { tag: 'Telecom · Cloud Native', yr: '2024', title: 'Jilin Unicom Legacy User Zone', role: 'Tech Lead', desc: 'Exclusive platform for legacy users across multiple marketing channels. Managed cloud deployment, K8s application updates, and system maintenance.', kpis: ['K8s Ops', 'Cloud Deployment'] }
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
    topbar: { back: '← 個人サイト', center: '候補者概要 · CANDIDATE BRIEF', share: '共有', print: '印刷 / PDF', copied: 'コピーしました' },
    hero: { eyebrow: '候補者概要 · Senior Engineer Profile', name: '魏 超 (ギ チョウ)', title: 'シニアソフトウェアエンジニア / テックリード · 経験19年', tags: ['金融業界', '通信業界', 'Java / Spring Cloud', 'ビッグデータ', 'K8s コンテナ化', 'テックリード'], avail: '転職活動中 · 2026', loc: '長春 · リモート可 · 出張可' },
    sidebar: {
      note: { label: '役職に関する注記', title: 'ソフトウェアエンジニア', sub: '↳ 複数のプロジェクトでテックリードを担当' },
      stats: { title: '基本情報', items: [{l:'経験年数', v:'19', u:'年'}, {l:'業界経験', v:'12', u:'年'}, {l:'現職', v:'BONC', u:'(東方国信)'}, {l:'チーム規模', v:'小', u:'規模'}, {l:'学歴', v:'学士', u:''}, {l:'出身大学', v:'吉林', u:'大学'}] },
      skills: { title: 'スキル深度', items: [{n:'Java / Spring', y:'15yr+', p:'90%'}, {n:'アーキテクチャ設計', y:'10yr', p:'78%'}, {n:'ビッグデータ (Hive/Kafka)', y:'8yr', p:'70%'}, {n:'Vue.js / Node', y:'6yr', p:'58%'}, {n:'K8s / Docker', y:'3yr', p:'48%'}] },
      domains: { title: '得意分野', feat: ['銀行/金融', '通信キャリア'], norm: ['データガバナンス', '企業DX', 'マーケティング基盤'] },
      keywords: { title: '技術キーワード', tags: ['Spring Cloud', 'Spring Boot', 'Hadoop', 'Hive', 'Kafka', 'HBase', 'ELK', 'Redis', 'MySQL', 'K8s', 'Docker', 'Jenkins', 'Linux/Shell', 'Vue.js', 'Node.js', 'Uniapp'] },
      intent: { title: '希望条件', items: [{l:'希望職種', v:'シニアエンジニア / テックリード\n技術マネージャー'}, {l:'希望勤務地', v:'不問 · リモート可'}, {l:'入社可能時期', v:'1ヶ月以内'}, {l:'勤務形態', v:'正社員 · 出張可'}] },
      contact: { title: '連絡先', email: 'chaowei126@gmail.com', phone: '181 **** 3605', loc: '長春市' }
    },
    content: {
      summary: {
        title: '概要', sub: 'EXECUTIVE SUMMARY',
        text: '金融および通信業界のコアシステムにおいて19年の経験を持つフルスタックエンジニア。アーキテクチャ設計、コーディング、コンテナ化展開の全工程に対応可能。小規模チームを率いてのプロジェクト完遂経験多数。現在、AI/LLMの基盤技術を深く研究し、OpenClawなどのフレームワークを用いたAgentアプリケーションの開発とデプロイを実践中。',
        body: '現在、BONCにてソフトウェア研究開発エンジニアとして12年以上勤務。吉林銀行、吉林通信、山西銀行などの省レベルのデジタルプロジェクトを主導。コア技術はJava/Spring Cloudで、Hive/Kafkaエコシステムにも精通しており、近年はK8sコンテナ化展開を実践。',
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
          { period: '2012.07 — 現在 · 12年以上', badge: '現職', co: '北京東方国信科技股份有限公司 (BONC)', role: 'ソフトウェア研究開発エンジニア · テックリード', note: '通信、金融、企業向けのデジタルプラットフォームプロジェクトを主導。バックエンドのアーキテクチャ設計、技術的課題の解決、チーム調整、K8sコンテナ運用を担当。', wins: ['<strong>吉林銀行データ検証システム</strong>を主導：クローズドループアーキテクチャ、異常検知速度<strong>20%</strong>向上', '<strong>吉林通信ビッグデータプラットフォーム</strong>のリファクタリングを主導：ワイドテーブル処理時間を<strong>4時間以上</strong>短縮', '<strong>山西銀行マーケティング基盤</strong>に参加：Spring Cloudアーキテクチャ、O2Oデータ連携', '<strong>吉林聯通クラウドプラットフォーム</strong>を担当：K8sアプリケーション展開とインシデント対応', 'バックエンドのアーキテクチャ選定と若手エンジニアの指導を担当'], now: true },
          { period: '2011.03 — 2012.06', badge: '前職', co: '北京量子偉業時代情報技術有限公司', role: 'ソフトウェアエンジニア', wins: ['モバイルアーカイブ管理システムのコアモジュール開発、要件定義、データベース設計を担当', '若手スタッフの指導と技術的課題の解決に参加'] },
          { period: '2007.10 — 2011.02', badge: '初期', co: '吉林省旺豪ソフトウェア / 北京アジアインテリジェンス', role: 'ソフトウェアエンジニア', wins: ['要件定義、ドキュメント作成、コアモジュールの設計と開発に参加', '強固なエンジニアリングの基礎を構築'] },
          { period: '2010 — 2013', badge: '学歴', co: '吉林大学', role: 'ソフトウェア工学 · 自学考試による学士（学士号取得済み）' }
        ]
      },
      projects: {
        title: '主なプロジェクト', sub: 'KEY PROJECTS',
        items: [
          { tag: '金融 · データガバナンス', yr: '2025—2026', title: '吉林銀行 データ検証システム', role: 'テックリード / アーキテクチャ設計', desc: '全行レベルのデータ品質管理プラットフォーム。OAインターフェースの自動化を備えたマルチロールコラボレーションワークスペース。', kpis: ['検知速度 +20%', '100% クローズドループ', '5年トレンド分析'] },
          { tag: '通信 · ビッグデータ', yr: '2016—2017', title: 'ビッグデータプラットフォーム (吉林通信)', role: 'テックリード', desc: 'ETLロジックのリファクタリングと並列計算の導入。大規模なワイドテーブル処理のボトルネックを解消。', kpis: ['ワイドテーブル -4hr+', 'データ取得 -2hr+', 'ニアリアルタイム'] },
          { tag: '金融 · マーケティング', yr: '2022—2023', title: '山西銀行 マーケティングプラットフォーム', role: 'テックリード', desc: 'Spring Cloudベースのマーケティングハブ。迅速なルール設定とH5ページ生成をサポートし、オンラインとオフラインのデータを統合。', kpis: ['Spring Cloud', 'O2Oデータ連携', '迅速なH5生成'] },
          { tag: '通信 · クラウドネイティブ', yr: '2024', title: '吉林聯通 既存ユーザー向けゾーン', role: 'テックリード', desc: '複数チャネルを統合した既存ユーザー専用プラットフォーム。クラウド展開、K8sアプリケーションの更新、システム保守を担当。', kpis: ['K8s運用', 'クラウド展開'] }
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
