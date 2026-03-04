import React, { useState, useEffect } from 'react';
import { translations, Language } from './i18n';

export default function App() {
  const [lang, setLang] = useState<Language>('zh');
  const t = translations[lang];

  useEffect(() => {
    if (window.location.search.includes('print=true')) {
      setTimeout(() => window.print(), 800);
    }
  }, []);

  const handlePrint = () => {
    if (window.self !== window.top) {
      const url = new URL(window.location.href);
      url.searchParams.set('print', 'true');
      window.open(url.toString(), '_blank');
    } else {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-bg text-ink font-body selection:bg-gold-dim selection:text-gold">
      
      {/* Topbar */}
      <div className="bg-ink sticky top-0 z-50 no-print">
        <div className="max-w-[1280px] mx-auto px-5 md:px-12 py-2.5 flex justify-between items-center">
          <a href="#" className="text-muted hover:text-white text-[11px] tracking-[2px] uppercase flex items-center gap-2 transition-colors">
          {t.topbar.back}
        </a>
        <div className="hidden md:block text-[10px] tracking-[4px] text-muted uppercase">
          {t.topbar.center}
        </div>
        <div className="flex items-center gap-2.5">
          <div className="flex items-center bg-ink2 rounded overflow-hidden mr-2">
            {(['zh', 'en', 'ja'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 text-[10px] uppercase tracking-wider transition-colors ${
                  lang === l ? 'bg-gold text-ink font-bold' : 'text-muted hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <button onClick={handlePrint} className="bg-transparent border border-[#3a3f4a] text-[#aaa] px-3.5 py-1.5 text-[10px] tracking-[2px] uppercase cursor-pointer transition-all hover:border-gold hover:text-gold font-body">
            {t.topbar.print}
          </button>
        </div>
        </div>
      </div>

      {/* Hero Band */}
      <div className="bg-paper border-b-2 border-ink relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-navy"></div>
        <div className="max-w-[1280px] mx-auto px-5 md:px-12 pt-12 pb-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-end">
          <div>
          <div className="text-[10px] tracking-[5px] text-gold uppercase mb-3 flex items-center gap-2.5">
            <div className="w-[18px] h-[1px] bg-gold"></div>
            {t.hero.eyebrow}
          </div>
          <div className="font-serif text-[clamp(44px,6vw,72px)] leading-none text-ink tracking-tight mb-1.5">
            {t.hero.name}
          </div>
          <div className="font-serif italic text-[clamp(15px,2vw,20px)] text-mid mb-5">
            {t.hero.title}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {t.hero.tags.map((tag, i) => (
              <div key={i} className="text-[10px] tracking-[2px] text-navy border border-rule px-2.5 py-1 uppercase bg-bg">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="md:text-right">
          <div className="inline-flex items-center gap-2 bg-[#f0f7f2] border border-[#a8d4b8] text-green px-4 py-1.5 text-[11px] tracking-[2px] uppercase mb-3.5">
            <div className="w-[7px] h-[7px] rounded-full bg-green animate-pulse-soft"></div>
            {t.hero.avail}
          </div>
          <div className="text-xs text-mid leading-[2.2] md:text-right">
            <div><a href={`mailto:${t.sidebar.contact.email}`} className="text-ink hover:text-gold transition-colors">{t.sidebar.contact.email}</a></div>
            <div><span className="text-ink">{t.sidebar.contact.phone}</span></div>
            <div>{t.hero.loc}</div>
          </div>
        </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-0 main-grid">
        
        {/* Sidebar */}
        <aside className="md:border-r border-rule py-10 md:pr-8 sidebar-col border-b md:border-b-0">
          
          <div className="mb-8">
            <div className="bg-[#fdf8ef] border border-gold-border p-3 mb-5">
              <div className="text-[9px] tracking-[3px] text-gold uppercase mb-1.5">{t.sidebar.note.label}</div>
              <div className="text-[13px] text-ink font-semibold mb-1">{t.sidebar.note.title}</div>
              <div className="text-[11px] text-mid">{t.sidebar.note.sub}</div>
            </div>
          </div>

          <div className="mb-8">
            <div className="text-[9px] tracking-[4px] text-muted uppercase mb-3 pb-1.5 border-b border-rule-light">{t.sidebar.stats.title}</div>
            {t.sidebar.stats.items.map((item, i) => (
              <div key={i} className="flex justify-between items-baseline py-1.5 border-b border-rule-light last:border-0">
                <div className="text-[11px] text-mid">{item.l}</div>
                <div className="font-serif text-[17px] text-ink font-semibold">
                  {item.v}<span className="text-xs text-gold font-sans ml-0.5">{item.u}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <div className="text-[9px] tracking-[4px] text-muted uppercase mb-3 pb-1.5 border-b border-rule-light">{t.sidebar.skills.title}</div>
            {t.sidebar.skills.items.map((skill, i) => (
              <div key={i} className="mb-2.5">
                <div className="flex justify-between mb-1">
                  <span className="text-[11px] text-ink2">{skill.n}</span>
                  <span className="text-[10px] text-muted">{skill.y}</span>
                </div>
                <div className="h-[2px] bg-rule-light w-full">
                  <div className="h-full bg-gradient-to-r from-gold to-navy print-exact" style={{ width: skill.p }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <div className="text-[9px] tracking-[4px] text-muted uppercase mb-3 pb-1.5 border-b border-rule-light">{t.sidebar.domains.title}</div>
            <div className="flex flex-wrap gap-1.5">
              {t.sidebar.domains.feat.map((tag, i) => (
                <span key={`f-${i}`} className="text-[10px] border border-gold-border text-gold bg-gold-dim px-2 py-0.5">{tag}</span>
              ))}
              {t.sidebar.domains.norm.map((tag, i) => (
                <span key={`n-${i}`} className="text-[10px] text-mid border border-rule px-2 py-0.5">{tag}</span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="text-[9px] tracking-[4px] text-muted uppercase mb-3 pb-1.5 border-b border-rule-light">{t.sidebar.keywords.title}</div>
            <div className="flex flex-wrap gap-1.5">
              {t.sidebar.keywords.tags.map((tag, i) => (
                <span key={i} className="text-[10px] text-mid border border-rule px-2 py-0.5">{tag}</span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="text-[9px] tracking-[4px] text-muted uppercase mb-3 pb-1.5 border-b border-rule-light">{t.sidebar.intent.title}</div>
            {t.sidebar.intent.items.map((item, i) => (
              <div key={i} className="flex flex-col gap-[1px] py-1.5 border-b border-rule-light last:border-0">
                <div className="text-[9px] text-muted tracking-[2px] uppercase">{item.l}</div>
                <div className="text-xs text-ink whitespace-pre-line">{item.v}</div>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <div className="text-[9px] tracking-[4px] text-muted uppercase mb-3 pb-1.5 border-b border-rule-light">{t.sidebar.contact.title}</div>
            <div className="flex flex-col gap-[1px] py-1.5 border-b border-rule-light">
              <div className="text-[9px] text-muted tracking-[2px] uppercase">Email</div>
              <div className="text-xs text-ink"><a href={`mailto:${t.sidebar.contact.email}`} className="hover:text-gold">{t.sidebar.contact.email}</a></div>
            </div>
            <div className="flex flex-col gap-[1px] py-1.5 border-b border-rule-light">
              <div className="text-[9px] text-muted tracking-[2px] uppercase">Phone</div>
              <div className="text-xs text-ink">{t.sidebar.contact.phone}</div>
            </div>
            <div className="flex flex-col gap-[1px] py-1.5">
              <div className="text-[9px] text-muted tracking-[2px] uppercase">Location</div>
              <div className="text-xs text-ink">{t.sidebar.contact.loc}</div>
            </div>
          </div>

        </aside>

        {/* Content */}
        <div className="py-10 md:pl-14 content-col">
          
          {/* Summary */}
          <div className="mb-12">
            <div className="font-serif text-[22px] text-ink mb-5 pb-2.5 border-b-2 border-ink flex justify-between items-baseline">
              {t.content.summary.title}
              <span className="text-[10px] text-muted tracking-[3px] font-body font-normal uppercase">{t.content.summary.sub}</span>
            </div>
            <p className="text-sm text-ink2 leading-loose border-l-[3px] border-gold pl-4 mb-5 italic">
              {t.content.summary.text}
            </p>
            <p className="text-[13px] text-mid leading-loose mb-5">
              {t.content.summary.body}
            </p>
            
            <div className="bg-[#fdf8ef] border border-gold-border p-5 my-6">
              <div className="text-[10px] tracking-[3px] text-gold uppercase mb-3">{t.content.summary.honest.title}</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                {t.content.summary.honest.items.map((item, i) => (
                  <div key={i} className="text-xs text-mid pl-3.5 relative leading-relaxed">
                    <span className="absolute left-0 text-gold text-base leading-[1.2]">·</span>
                    <span dangerouslySetInnerHTML={{__html: item}} />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-rule mt-6">
              {t.content.summary.kpis.map((kpi, i) => (
                <div key={i} className="bg-paper py-4 px-4 text-center">
                  <div className="font-serif text-[28px] text-gold leading-none mb-1">{kpi.n}</div>
                  <div className="text-[10px] text-muted tracking-[1px] leading-[1.6]" dangerouslySetInnerHTML={{__html: kpi.d}}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-12">
            <div className="font-serif text-[22px] text-ink mb-5 pb-2.5 border-b-2 border-ink flex justify-between items-baseline">
              {t.content.history.title}
              <span className="text-[10px] text-muted tracking-[3px] font-body font-normal uppercase">{t.content.history.sub}</span>
            </div>
            <div className="relative before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[1px] before:bg-rule">
              {t.content.history.items.map((item, i) => (
                <div key={i} className="relative pl-6 pb-9 last:pb-0">
                  <div className={`absolute left-[-4px] top-2 w-[9px] h-[9px] rounded-full border-2 ${item.now ? 'bg-gold border-gold' : 'bg-paper border-rule'} print-exact`}></div>
                  <div className="flex items-center gap-2.5 mb-1 flex-wrap">
                    <span className="text-[11px] text-muted tracking-[1px]">{item.period}</span>
                    <span className={`text-[9px] tracking-[2px] uppercase px-2 py-0.5 border ${item.now ? 'text-gold border-gold-border bg-gold-dim' : 'text-navy border-[#c0c8da] bg-[#f4f6fb]'}`}>{item.badge}</span>
                  </div>
                  <div className="font-serif text-base text-ink font-semibold mb-0.5">{item.co}</div>
                  <div className="text-xs text-mid mb-2.5 italic">{item.role}</div>
                  {item.note && <div className="text-xs text-mid leading-[1.9] mb-3">{item.note}</div>}
                  {item.wins && (
                    <ul className="flex flex-col gap-1.5">
                      {item.wins.map((win, j) => (
                        <li key={j} className="text-xs text-ink2 pl-3.5 relative leading-[1.7]">
                          <span className="absolute left-0 text-gold">—</span>
                          <span dangerouslySetInnerHTML={{__html: win}} />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="mb-12">
            <div className="font-serif text-[22px] text-ink mb-5 pb-2.5 border-b-2 border-ink flex justify-between items-baseline">
              {t.content.projects.title}
              <span className="text-[10px] text-muted tracking-[3px] font-body font-normal uppercase">{t.content.projects.sub}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {t.content.projects.items.map((proj, i) => (
                <div key={i} className="border border-rule p-5 bg-paper transition-colors hover:border-gold-border">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-[9px] tracking-[2px] text-gold uppercase border border-gold-border bg-gold-dim px-2 py-0.5">{proj.tag}</div>
                    <div className="text-[10px] text-muted">{proj.yr}</div>
                  </div>
                  <div className="font-serif text-sm text-ink mb-1 font-semibold leading-[1.3]">{proj.title}</div>
                  <div className="text-[11px] text-gold mb-2 tracking-[1px]">{proj.role}</div>
                  <div className="text-[11px] text-mid leading-[1.8] mb-3">{proj.desc}</div>
                  <div className="flex flex-wrap gap-1">
                    {proj.kpis.map((kpi, j) => (
                      <span key={j} className="text-[10px] text-navy border border-[#c0c8da] bg-[#f4f6fb] px-2 py-0.5">{kpi}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fit Analysis */}
          <div className="mb-12">
            <div className="font-serif text-[22px] text-ink mb-5 pb-2.5 border-b-2 border-ink flex justify-between items-baseline">
              {t.content.fit.title}
              <span className="text-[10px] text-muted tracking-[3px] font-body font-normal uppercase">{t.content.fit.sub}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="border border-rule p-4.5">
                <div className="text-[10px] tracking-[3px] uppercase mb-3 text-green">{t.content.fit.good.label}</div>
                <ul className="flex flex-col gap-2">
                  {t.content.fit.good.items.map((item, i) => (
                    <li key={i} className="text-xs text-mid pl-3.5 relative leading-[1.7]">
                      <span className="absolute left-0 text-green">→</span>
                      <span dangerouslySetInnerHTML={{__html: item}} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-rule p-4.5">
                <div className="text-[10px] tracking-[3px] uppercase mb-3 text-gold">{t.content.fit.advice.label}</div>
                <ul className="flex flex-col gap-2">
                  {t.content.fit.advice.items.map((item, i) => (
                    <li key={i} className="text-xs text-mid pl-3.5 relative leading-[1.7]">
                      <span className="absolute left-0 text-gold">—</span>
                      <span dangerouslySetInnerHTML={{__html: item}} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CTA Band */}
      <div className="bg-ink no-print">
        <div className="max-w-[1280px] mx-auto px-5 md:px-12 py-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
          <div className="font-serif text-[26px] text-white mb-2">{t.cta.title}</div>
          <div className="text-xs text-muted leading-[1.8]">{t.cta.sub}</div>
        </div>
        <div className="flex flex-col gap-2 min-w-[190px]">
          <a href={`mailto:${t.sidebar.contact.email}`} className="flex items-center justify-between gap-3 px-4 py-3 text-[11px] tracking-[2px] uppercase transition-colors bg-gold text-ink hover:bg-[#d4a030]">
            {t.cta.email}
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); alert('出于隐私保护，请先通过邮件联系获取完整电话号码。\nFor privacy reasons, please contact via email first.'); }} className="flex items-center justify-between gap-3 px-4 py-3 text-[11px] tracking-[2px] uppercase transition-colors border border-[#3a3f4a] text-[#aaa] hover:border-gold hover:text-gold">
            {t.cta.phone}
          </a>
        </div>
        </div>
      </div>

    </div>
  );
}
