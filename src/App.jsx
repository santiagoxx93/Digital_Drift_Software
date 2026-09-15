import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ state: 'loading', message: 'Enviando solicitud...' });
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/88da48cc568bcc21ede0414de20ed98f", {
        method: "POST",
        headers: { 
          'Accept': 'application/json'
        },
        body: formData
      });
      
      const result = await response.json();
      
      if(result.success) {
        setFormStatus({ state: 'success', message: '¡Solicitud enviada exitosamente! Te contactaremos pronto.' });
        e.target.reset();
      } else {
        setFormStatus({ state: 'error', message: 'Hubo un error al enviar. Por favor intenta por WhatsApp.' });
      }
    } catch (error) {
      setFormStatus({ state: 'error', message: 'Error de red. Por favor intenta por WhatsApp.' });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
    });
  }, []);

  return (
    <>
<div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-50/40 via-slate-50/60 to-white"></div><div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-red-100/50 rounded-full blur-[140px] pointer-events-none -z-10"></div><header data-aos="fade-down" data-aos-duration="500" className="fixed top-0 left-0 w-full z-50 px-gutter-mobile md:px-margin pt- space-sm py-2"><div className="max-w-[1280px] mx-auto h-20 px-gutter rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm flex items-center justify-between transition-all duration-300"><div className="flex items-center gap-space-sm"><img alt="Digital Drift Logo" className="h-14 w-auto object-contain" src="/img/logo-digital-drift.png" /><div className="flex flex-col"><div className="font-headline-sm text-headline-sm tracking-tight leading-none"><span className="font-bold text-[#0f172a]">Digital</span> <span className="text-[#ff1a35] font-bold">Drift</span></div><span className="font-label-sm text-label-sm uppercase text-[#ff1a35] tracking-widest leading-none mt-1 font-bold">SOFTWARE</span></div></div><nav className="hidden lg:flex items-center gap-space-md"><a aria-current="page" className="px-space-xs py-1 transition-colors bg-red-50 text-[#ff1a35] font-label-lg rounded-lg border border-red-200" data-path="demos" href="#demos">Demos</a><a className="font-label-lg text-label-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 px-space-xs py-1 rounded-lg transition-colors" data-path="paquetes" href="#paquetes">Paquetes</a><a className="font-label-lg text-label-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 px-space-xs py-1 rounded-lg transition-colors" data-path="proceso" href="#proceso">Proceso</a><a className="font-label-lg text-label-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 px-space-xs py-1 rounded-lg transition-colors" data-path="preguntas" href="#preguntas">Preguntas</a><a className="font-label-lg text-label-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 px-space-xs py-1 rounded-lg transition-colors" data-path="contacto" href="#contacto">Contacto</a></nav><div className="flex items-center gap-space-sm"><a className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-label-sm text-label-sm font-semibold transition-all shadow-sm" href="https://wa.me/584125063754?text=Hola%20Digital%20Drift,%20quiero%20consultar%20sobre%20sus%20servicios" target="_blank" rel="noopener noreferrer">Consultar Ahora</a></div></div></header><main className="w-full pt-20 bg-transparent"><div className="flex flex-col w-full overflow-hidden text-slate-900">
{/*  =================================================================  */}
{/*  1. HERO SECTION                                                    */}
{/*  =================================================================  */}
<section className="relative w-full max-w-[1280px] mx-auto px-gutter-mobile md:px-margin pt-space-md md:pt-space-lg pb-space-xl">
{/*  Subtle Atmosphere Glows  */}
<div className="absolute -top-12 left-1/4 w-[420px] h-[420px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
<div className="absolute top-1/3 right-5 w-[360px] h-[360px] bg-rose-500/5 rounded-full blur-[110px] pointer-events-none -z-10"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-center">
{/*  Left Column: Copy & Immediate Action  */}
<div data-aos="fade-up" className="lg:col-span-7 flex flex-col items-start">
{/*  Live Status Badge  */}
<div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 backdrop-blur-md shadow-sm mb-space-md">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff1a35] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff1a35]"></span>
</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-[#ff1a35] font-bold">EN VIVO</span>
<span className="w-1 h-1 rounded-full bg-red-300"></span>
<span className="font-label-sm text-label-sm text-slate-600 tracking-wide font-medium">Agencia de Desarrollo &amp; Digitalización Comercial</span>
</div>
{/*  High-Impact H1 Headline  */}
<h1 className="font-display-hero text-display-hero-mobile md:text-display-hero font-extrabold text-[#0f172a] tracking-tight leading-[1.1] mb-space-md">
          Convertimos tu negocio en una máquina de cerrar clientes por{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20ba5a] via-emerald-500 to-[#22c55e]">
            WhatsApp
          </span>
</h1>
{/*  Persuasive Subtitle  */}
<p className="font-body-lg text-body-lg text-slate-600 max-w-xl mb-space-lg leading-relaxed">
          Diseñamos la plataforma web de tu empresa: ultrarrápida, moderna y con dominio, correos corporativos y catálogo incluidos. Sin complicaciones técnicas.
        </p>
{/*  CTAs  */}
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm w-full sm:w-auto mb-space-lg">
{/*  Primary CTA (WhatsApp High Conversion)  */}
<a className="group relative inline-flex items-center justify-center gap-space-xs bg-[#25D366] hover:bg-[#20BA5A] text-white px-7 py-4 rounded-xl font-label-lg text-label-lg font-bold shadow-[0_8px_24px_-2px_rgba(37,211,102,0.38)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.5)] transition-all duration-200 active:scale-[0.98]" href="https://wa.me/584125063754?text=Hola%20Digital%20Drift,%20quiero%20solicitar%20mi%20demo%20visual%20gratis." rel="noopener noreferrer" target="_blank">
<svg className="w-5 h-5 fill-current transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
<path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.582 1.954.914 2.8.914h.005c3.18 0 5.767-2.587 5.768-5.766.002-3.18-2.584-5.768-5.767-5.768zm3.392 8.234c-.144.405-.837.774-1.17.823-.312.045-.694.06-2.12-.533-1.708-.709-2.813-2.45-2.898-2.564-.085-.114-.698-.929-.698-1.772 0-.844.441-1.258.599-1.428.158-.171.345-.214.46-.214.115 0 .23.002.331.007.107.006.251-.041.393.299.144.405.49 1.196.533 1.282.043.086.072.186.014.3-.058.115-.086.186-.172.286-.086.1-.182.224-.26.3-.086.086-.176.18-.076.352.101.171.448.74 0.963 1.198.663.59 1.222.773 1.394.858.172.086.273.072.374-.043.101-.115.432-.503.547-.675.115-.172.23-.143.388-.086.158.058 1.007.474 1.179.56.173.086.288.129.331.2.043.072.043.418-.101.823zM12.004 2C6.479 2 2 6.479 2 12.004c0 1.905.534 3.684 1.458 5.207L2 22l4.945-1.296A9.957 9.957 0 0012.004 22c5.525 0 10.004-4.479 10.004-10.004C22.008 6.479 17.529 2 12.004 2z"  />
</svg>
<span className="">Solicitar Demo Visual Gratis</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
{/*  Secondary Ghost CTA  */}
<a className="inline-flex items-center justify-center gap-space-xs bg-white hover:bg-slate-50 border border-slate-300 hover:border-[#ff1a35] hover:shadow-[0_4px_16px_rgba(255,26,53,0.12)] text-slate-800 px-6 py-4 rounded-xl font-label-lg text-label-lg font-semibold shadow-sm transition-all duration-200" href="#demos">
<span className="material-symbols-outlined text-[#ff1a35] text-[20px]">play_circle</span>
<span className="">Explorar Demos en Vivo</span>
</a>
</div>
{/*  Trust Metric Indicators  */}
<div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-600 font-body-sm text-body-sm pt-2">
<div className="inline-flex items-center gap-1.5 font-medium">
<span className="material-symbols-outlined text-[#20BA5A] text-[18px]">bolt</span>
<span className="">Entrega en 5-7 días</span>
</div>
<span className="text-slate-300">•</span>
<div className="inline-flex items-center gap-1.5 font-medium">
<span className="material-symbols-outlined text-[#ff1a35] text-[18px]">verified_user</span>
<span className="">Garantía 100% de satisfacción</span>
</div>
<span className="text-slate-300">•</span>
<div className="inline-flex items-center gap-1.5 font-medium">
<span className="material-symbols-outlined text-slate-800 text-[18px]">phone_iphone</span>
<span className="">Optimizado para móviles</span>
</div>
</div>
</div>
{/*  Right Column: Interactive Mockup Hero (macOS Clean White Engine)  */}
<div data-aos="fade-left" data-aos-delay="200" className="lg:col-span-5 relative mt-6 lg:mt-0 flex items-center justify-center">
{/*  Deep Crimson Glow Backing  */}
<div className="absolute inset-0 bg-gradient-to-tr from-red-100/70 via-rose-50/50 to-transparent rounded-3xl blur-2xl -z-10"></div>
{/*  Laptop / Tablet Glass Frame Mockup  */}
<div className="w-full bg-white border border-slate-200 rounded-2xl p-4 shadow-xl flex flex-col gap-3 relative">
{/*  Mockup Top OS Bar  */}
<div className="flex items-center justify-between px-2 py-1 bg-slate-50 rounded-lg border border-slate-200">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-[#ff1a35]"></span>
<span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></span>
<span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]"></span>
</div>
<div className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 px-3 py-0.5 bg-emerald-50 rounded-md border border-emerald-100 shadow-xs">
<span className="material-symbols-outlined text-[13px] text-emerald-600">lock</span>
<span className="font-semibold">https://www.tuempresa.com</span>
</div>
<div className="flex items-center gap-1 text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
<span className="material-symbols-outlined text-[12px] text-[#22c55e]">bolt</span>
0.6s carga
</div>
</div>
{/*  Mockup Internal Dashboard View  */}
<div className="bg-white rounded-xl p-4 flex flex-col gap-4 border border-slate-100 shadow-xs">
<div className="flex items-start sm:items-center justify-between flex-col sm:flex-row gap-2">
<div>
<span className="font-label-sm text-label-sm text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">100% activo y recibiendo visitas</span>
<span className="font-headline-sm text-headline-sm text-slate-900 font-bold">Tu Negocio en Internet</span>
</div>
<span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-label-sm text-[11px] font-semibold flex items-center gap-1.5 shrink-0">
<span className="relative flex h-2 w-2">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
Online
</span>
</div>
{/*  Ficha de estado del sitio (3 tarjetas)  */}
<div className="grid grid-cols-3 gap-2">
<div className="p-2.5 bg-slate-50 rounded-lg flex flex-col border border-slate-200 justify-center">
<span className="text-[10px] text-slate-500 font-medium mb-0.5">Dominio &amp; SSL</span>
<span className="text-[11px] font-semibold text-slate-900 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-[#22c55e]">check_circle</span>
.com Propio (Activo)
</span>
</div>
<div className="p-2.5 bg-slate-50 rounded-lg flex flex-col border border-slate-200 justify-center">
<span className="text-[10px] text-slate-500 font-medium mb-0.5">Correos Empresa</span>
<span className="text-[11px] font-semibold text-slate-900 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-[#22c55e]">mark_email_read</span>
4 Cuentas configuradas
</span>
</div>
<div className="p-2.5 bg-slate-50 rounded-lg flex flex-col border border-slate-200 justify-center">
<span className="text-[10px] text-slate-500 font-medium mb-0.5">Recepción de Leads</span>
<span className="text-[11px] font-semibold text-slate-900 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-[#22c55e]">smartphone</span>
Directo a tu celular
</span>
</div>
</div>
{/*  Simulación de Mensaje Entrante de WhatsApp  */}
<div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 flex flex-col gap-3 shadow-sm relative overflow-hidden">
{/* Decorative background element */}
<div className="absolute -right-4 -bottom-4 opacity-5">
<svg viewBox="0 0 24 24" className="w-32 h-32 fill-[#25D366]"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.582 1.954.914 2.8.914h.005c3.18 0 5.767-2.587 5.768-5.766.002-3.18-2.584-5.768-5.767-5.768zm3.392 8.234c-.144.405-.837.774-1.17.823-.312.045-.694.06-2.12-.533-1.708-.709-2.813-2.45-2.898-2.564-.085-.114-.698-.929-.698-1.772 0-.844.441-1.258.599-1.428.158-.171.345-.214.46-.214.115 0 .23.002.331.007.107.006.251-.041.393.299.144.405.49 1.196.533 1.282.043.086.072.186.014.3-.058.115-.086.186-.172.286-.086.1-.182.224-.26.3-.086.086-.176.18-.076.352.101.171.448.74 0.963 1.198.663.59 1.222.773 1.394.858.172.086.273.072.374-.043.101-.115.432-.503.547-.675.115-.172.23-.143.388-.086.158.058 1.007.474 1.179.56.173.086.288.129.331.2.043.072.043.418-.101.823zM12.004 2C6.479 2 2 6.479 2 12.004c0 1.905.534 3.684 1.458 5.207L2 22l4.945-1.296A9.957 9.957 0 0012.004 22c5.525 0 10.004-4.479 10.004-10.004C22.008 6.479 17.529 2 12.004 2z"/></svg>
</div>
<div className="flex items-center justify-between relative z-10">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.582 1.954.914 2.8.914h.005c3.18 0 5.767-2.587 5.768-5.766.002-3.18-2.584-5.768-5.767-5.768zm3.392 8.234c-.144.405-.837.774-1.17.823-.312.045-.694.06-2.12-.533-1.708-.709-2.813-2.45-2.898-2.564-.085-.114-.698-.929-.698-1.772 0-.844.441-1.258.599-1.428.158-.171.345-.214.46-.214.115 0 .23.002.331.007.107.006.251-.041.393.299.144.405.49 1.196.533 1.282.043.086.072.186.014.3-.058.115-.086.186-.172.286-.086.1-.182.224-.26.3-.086.086-.176.18-.076.352.101.171.448.74 0.963 1.198.663.59 1.222.773 1.394.858.172.086.273.072.374-.043.101-.115.432-.503.547-.675.115-.172.23-.143.388-.086.158.058 1.007.474 1.179.56.173.086.288.129.331.2.043.072.043.418-.101.823zM12.004 2C6.479 2 2 6.479 2 12.004c0 1.905.534 3.684 1.458 5.207L2 22l4.945-1.296A9.957 9.957 0 0012.004 22c5.525 0 10.004-4.479 10.004-10.004C22.008 6.479 17.529 2 12.004 2z"/></svg>
</div>
<span className="font-label-md text-label-md text-slate-900 font-bold leading-tight">Nuevo cliente desde la web</span>
</div>
<span className="text-[11px] font-medium text-slate-500 shrink-0">Hace 2 min</span>
</div>
<div className="bg-white rounded-xl rounded-tl-none p-3 shadow-sm border border-emerald-100 relative z-10 text-[13px] leading-relaxed text-slate-700">
¡Hola! Estuve viendo su catálogo en <span className="font-semibold text-[#25D366]">www.tuempresa.com</span> y me interesa cotizar un pedido. ¿Tienen disponibilidad inmediata?
</div>
<div className="inline-flex self-start px-3 py-1.5 rounded-lg bg-[#25D366] text-white text-[11px] font-bold shadow-sm items-center gap-1.5 mt-1 relative z-10 hover:bg-[#20BA5A] transition-colors cursor-pointer">
<span className="material-symbols-outlined text-[14px]">send</span>
1 clic para responder en WhatsApp
</div>
</div>
</div>
{/*  Bottom Visual Bar: Quick Highlights  */}
<div className="flex items-center justify-center px-3 pt-3 pb-1 border-t border-slate-100 mt-1">
<span className="font-body-sm text-[12px] text-slate-500 font-medium flex items-center gap-1.5 text-center">
<span className="material-symbols-outlined text-[16px] text-[#ff1a35]">verified_user</span>
Sin intermediarios • Tú eres dueño total de tu web y tus clientes
</span>
</div>
</div>
</div>
</div>
</section>
{/*  =================================================================  */}
{/*  2. SECCIÓN #demos - PORTAFOLIO & DEMOS INTERACTIVAS               */}
{/*  =================================================================  */}
<section data-aos="fade-up" className="w-full bg-[#f8fafc] border-y border-slate-200 py-space-xl" id="demos">
<div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-margin">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 mb-space-xs">
<span className="w-2 h-2 rounded-full bg-[#ff1a35]"></span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-[#ff1a35] font-bold">PORTAFOLIO ACTIVO</span>
</div>
<h2 className="font-headline-xl text-headline-xl font-bold text-[#0f172a] tracking-tight">
          Demos interactivas listas para probar
        </h2>
<p className="font-body-md text-body-md text-slate-600 mt-space-xs">
          Cada arquitectura está configurada desde la base con embudos directos a WhatsApp, catálogos indexables y respuesta ultraveloz para garantizar retorno de inversión.
        </p>
</div>
<div className="flex items-center gap-space-xs">
<span className="font-label-md text-label-md text-slate-600">¿No ves tu industria?</span>
<a className="font-label-md text-label-md text-[#ff1a35] hover:text-[#e11d48] hover:underline flex items-center font-bold" href="https://wa.me/584125063754?text=Hola%20Digital%20Drift,%20mi%20negocio%20es%20de%20otro%20rubro%20y%20quiero%20ver%20un%20ejemplo.">
          Diseñamos a medida
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</a>
</div>
</div>
{/*  4-Card Demo Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">

{/*  Card 1: Industria & Construcción  */}
<div className="group bg-white hover:bg-white border border-slate-200 hover:border-[#ff1a35]/60 rounded-2xl p-space-md shadow-sm hover:shadow-[0_12px_30px_rgba(255,26,53,0.12)] transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-full h-44 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 mb-space-sm relative group-hover:border-[#ff1a35]/40 transition-colors">
  <img src="/img/demo-construccion.png" alt="Vista previa demo Industria y Construcción" className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105" />
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-slate-900 group-hover:text-[#ff1a35] transition-colors">
  Industria &amp; Construcción
</h3>
<p className="font-body-sm text-body-sm text-slate-600 mt-1 mb-space-sm">
  Plataforma institucional para constructoras y servicios técnicos orientada a licitaciones, fichas descargables y cotizaciones formales.
</p>
<div className="flex flex-wrap gap-1.5 mb-space-md">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-red-50 border border-red-200 text-[#ff1a35] font-medium">Catálogo Técnico</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">Dossier PDF</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium border border-emerald-200">Cotización WhatsApp</span>
</div>
</div>
<a className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-[#ff1a35] hover:text-white font-label-md text-label-md text-slate-800 font-semibold flex items-center justify-center gap-1.5 transition-colors border border-slate-200 hover:border-transparent" href="https://demo-servinteca.vercel.app" target="_blank" rel="noopener noreferrer">
<span>Ver Demo en Vivo</span>
<span className="material-symbols-outlined text-[16px]">visibility</span>
</a>
</div>

{/*  Card 2: Clínicas & Salud Dental  */}
<div className="group bg-white hover:bg-white border border-slate-200 hover:border-[#ff1a35]/60 rounded-2xl p-space-md shadow-sm hover:shadow-[0_12px_30px_rgba(255,26,53,0.12)] transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-full h-44 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 mb-space-sm relative group-hover:border-[#ff1a35]/40 transition-colors">
  <img src="/img/clinica_dental.jpeg" alt="Vista previa demo Clínicas y Salud Dental" className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105" />
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-slate-900 group-hover:text-[#ff1a35] transition-colors">
  Clínicas &amp; Salud Dental
</h3>
<p className="font-body-sm text-body-sm text-slate-600 mt-1 mb-space-sm">
  Web médica diseñada para especialistas y odontología, orientada al agendamiento rápido de citas y consultas por WhatsApp.
</p>
<div className="flex flex-wrap gap-1.5 mb-space-md">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-red-50 border border-red-200 text-[#ff1a35] font-medium">Agenda Médica</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">Especialidades</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium border border-emerald-200">Citas Directas</span>
</div>
</div>
<a className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-[#ff1a35] hover:text-white font-label-md text-label-md text-slate-800 font-semibold flex items-center justify-center gap-1.5 transition-colors border border-slate-200 hover:border-transparent" href="https://wa.me/584125063754?text=Hola%20Digital%20Drift,%20quiero%20ver%20la%20demo%20médica%20privada" target="_blank" rel="noopener noreferrer">
<span>Ver Demo en Vivo</span>
<span className="material-symbols-outlined text-[16px]">visibility</span>
</a>
</div>

{/*  Card 3: Gastronomía & Menú Digital  */}
<div className="group bg-white hover:bg-white border border-slate-200 hover:border-[#ff1a35]/60 rounded-2xl p-space-md shadow-sm hover:shadow-[0_12px_30px_rgba(255,26,53,0.12)] transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-full h-44 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 mb-space-sm relative group-hover:border-[#ff1a35]/40 transition-colors">
  <img src="/img/demo-comida.png" alt="Vista previa demo Gastronomía y Menú Digital" className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105" />
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-slate-900 group-hover:text-[#ff1a35] transition-colors">
  Gastronomía &amp; Menú Digital
</h3>
<p className="font-body-sm text-body-sm text-slate-600 mt-1 mb-space-sm">
  Menú interactivo optimizado para locales de comida rápida y delivery con recepción de pedidos directos a WhatsApp sin comisiones.
</p>
<div className="flex flex-wrap gap-1.5 mb-space-md">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-red-50 border border-red-200 text-[#ff1a35] font-medium">Menú Digital</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">Carrito Rápido</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium border border-emerald-200">0% Comisión</span>
</div>
</div>
<a className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-[#ff1a35] hover:text-white font-label-md text-label-md text-slate-800 font-semibold flex items-center justify-center gap-1.5 transition-colors border border-slate-200 hover:border-transparent" href="https://demo-comida.vercel.app/" target="_blank" rel="noopener noreferrer">
<span>Ver Demo en Vivo</span>
<span className="material-symbols-outlined text-[16px]">visibility</span>
</a>
</div>

{/*  Card 4: Calzado & Tiendas Retail  */}
<div className="group bg-white hover:bg-white border border-slate-200 hover:border-[#ff1a35]/60 rounded-2xl p-space-md shadow-sm hover:shadow-[0_12px_30px_rgba(255,26,53,0.12)] transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-full h-44 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 mb-space-sm relative group-hover:border-[#ff1a35]/40 transition-colors">
  <img src="/img/demo-zapatos.png" alt="Vista previa demo Calzado y Tiendas Retail" className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105" />
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-slate-900 group-hover:text-[#ff1a35] transition-colors">
  Calzado &amp; Tiendas Retail
</h3>
<p className="font-body-sm text-body-sm text-slate-600 mt-1 mb-space-sm">
  Catálogo dinámico de productos con filtros de modelos, selección rápida y botón de compra directa al equipo de ventas.
</p>
<div className="flex flex-wrap gap-1.5 mb-space-md">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-red-50 border border-red-200 text-[#ff1a35] font-medium">Catálogo Visual</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">Filtro de Modelos</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium border border-emerald-200">Cierre en 1 Clic</span>
</div>
</div>
<a className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-[#ff1a35] hover:text-white font-label-md text-label-md text-slate-800 font-semibold flex items-center justify-center gap-1.5 transition-colors border border-slate-200 hover:border-transparent" href="https://demozapatos.vercel.app/" target="_blank" rel="noopener noreferrer">
<span>Ver Demo en Vivo</span>
<span className="material-symbols-outlined text-[16px]">visibility</span>
</a>
</div>

</div>
</div>
</section>
{/*  =================================================================  */}
{/*  3. SECCIÓN #paquetes - OFERTA PRINCIPAL: PAQUETE LLAVE EN MANO    */}
{/*  =================================================================  */}
<section data-aos="fade-up" className="relative w-full max-w-[1280px] mx-auto px-gutter-mobile md:px-margin py-space-xl" id="paquetes">
{/*  Background Subtle Glow  */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
<div className="text-center max-w-2xl mx-auto mb-space-lg">
<div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#ff1a35] mb-space-xs">
<span className="material-symbols-outlined text-[16px]">price_check</span>
<span className="font-label-sm text-label-sm uppercase font-bold tracking-wider">PAQUETE LLAVE EN MANO</span>
</div>
<h2 className="font-headline-xl text-headline-xl font-bold text-[#0f172a] tracking-tight">
        Transparencia Total, Cero Letras Pequeñas
      </h2>
<p className="font-body-md text-body-md text-slate-600 mt-2">
        Sin tarifas ocultas de renovación infladas ni costos técnicos imprevistos. Te entregamos un activo comercial de tu propiedad.
      </p>
</div>
{/*  Pricing Cards Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">

  {/* Tarjeta 1: Plan Web Negocio */}
  <div className="h-full flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 hover:border-blue-400/60 hover:shadow-[0_20px_40px_rgba(59,130,246,0.12)] transition-all duration-300 relative overflow-hidden">
    {/* Top Accent Ribbon */}
    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400"></div>
    
    <div>
      <div className="flex justify-between items-center mb-6">
        <span className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-label-sm text-label-sm font-bold uppercase tracking-wider">
          Sin mensualidades ocultas
        </span>
        <span className="text-xs uppercase font-medium tracking-wider text-slate-400">Plan Entrada Comercial</span>
      </div>
      
      <div className="flex flex-col gap-2 pb-6 border-b border-slate-100">
        <h3 className="font-headline-lg text-headline-lg font-extrabold text-slate-900">Plan Web Negocio</h3>
        <p className="font-body-sm text-body-sm text-slate-600 mt-1">Moderna, rápida y lista para vender más. La solución directa para digitalizar tu catálogo y atender pedidos.</p>
        
        <div className="flex flex-col mt-4">
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-extrabold text-[#0f172a] tracking-tight">$150</span>
            <span className="text-xl font-bold text-blue-500">USD</span>
          </div>
          <span className="text-xs text-slate-500 font-medium mt-1">o 2 cuotas de $80 USD</span>
        </div>
      </div>
      
      {/* Lista de características */}
      <div className="space-y-4 py-6">
        <div className="flex items-start gap-3.5">
          <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-blue-500 text-[16px] font-bold">check</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-slate-900 font-semibold">Diseño moderno 100% adaptable</span>
            <span className="font-body-sm text-body-sm text-slate-600">Optimizado para celulares y computadoras sin perder velocidad.</span>
          </div>
        </div>
        <div className="flex items-start gap-3.5">
          <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-blue-500 text-[16px] font-bold">check</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-slate-900 font-semibold">Catálogo interactivo</span>
            <span className="font-body-sm text-body-sm text-slate-600">Muestra organizada de tus productos o servicios con fotos y detalles.</span>
          </div>
        </div>
        <div className="flex items-start gap-3.5">
          <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-blue-500 text-[16px] font-bold">check</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-slate-900 font-semibold">Botón directo a WhatsApp</span>
            <span className="font-body-sm text-body-sm text-slate-600">Tus clientes te piden o cotizan con un solo clic.</span>
          </div>
        </div>
        <div className="flex items-start gap-3.5">
          <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-blue-500 text-[16px] font-bold">check</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-slate-900 font-semibold">Dominio (.com) y hosting ultra rápido</span>
            <span className="font-body-sm text-body-sm text-slate-600">Incluidos por 1 año completo con certificado de seguridad SSL.</span>
          </div>
        </div>
        <div className="flex items-start gap-3.5">
          <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-blue-500 text-[16px] font-bold">check</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-slate-900 font-semibold">Integración con redes sociales</span>
            <span className="font-body-sm text-body-sm text-slate-600">Conexión directa a perfiles de Instagram, Facebook y TikTok.</span>
          </div>
        </div>
        <div className="flex items-start gap-3.5">
          <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-blue-500 text-[16px] font-bold">check</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-slate-900 font-semibold">Puesta en marcha y entrega lista para operar</span>
            <span className="font-body-sm text-body-sm text-slate-600">Configuración completa para que comiences a recibir clientes sin enredos técnicos.</span>
          </div>
        </div>
      </div>
    </div>

    <div className="pt-3 mt-auto">
      <a className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-4 px-6 rounded-xl font-headline-sm text-headline-sm font-bold shadow-sm transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]" href="https://wa.me/584125063754?text=Hola%20Digital%20Drift,%20quiero%20empezar%20con%20el%20Plan%20Web%20Negocio%20de%20$150." rel="noopener noreferrer" target="_blank">
        <span className="">Quiero este plan →</span>
      </a>
      <div className="flex items-center justify-center gap-2 mt-3 font-body-sm text-body-sm text-slate-500">
        <span className="material-symbols-outlined text-[16px] text-slate-400">check_circle</span>
        <span className="">Sin mensualidades ocultas • Tu web es 100% tuya</span>
      </div>
    </div>
  </div>

  {/* Tarjeta 2: Plan Pyme Conversión (Actual) */}
  <div className="h-full flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 hover:border-[#ff1a35]/60 hover:shadow-[0_20px_40px_rgba(255,26,53,0.12)] transition-all duration-300 relative overflow-hidden">
    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#ff1a35] via-[#e11d48] to-[#f43f5e]"></div>
    
    <div>
      <div className="flex justify-between items-center mb-6">
        <span className="px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#ff1a35] font-label-sm text-label-sm font-extrabold uppercase tracking-wider flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[16px] fill-current">star</span>
          EL MÁS ELEGIDO POR PYMES
        </span>
        <span className="text-xs uppercase font-medium tracking-wider text-slate-400">Plan Turnkey Pro</span>
      </div>
      
      <div className="flex flex-col gap-2 pb-6 border-b border-slate-100">
        <h3 className="font-headline-lg text-headline-lg font-extrabold text-slate-900">Plan Pyme Conversión</h3>
        <p className="font-body-sm text-body-sm text-slate-600 mt-1">Todo lo que tu empresa necesita para operar y captar clientes en internet desde el día 1.</p>
        
        <div className="flex flex-col mt-4">
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-extrabold text-[#0f172a] tracking-tight">$280</span>
            <span className="text-xl font-bold text-[#ff1a35]">USD</span>
          </div>
          <span className="text-xs text-slate-500 font-medium mt-1">Pago único (o 2 cuotas de $145)</span>
        </div>
      </div>
      
      <div className="space-y-4 py-6">
        <div className="flex items-start gap-3.5">
          <div className="w-6 h-6 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-[#ff1a35] text-[16px] font-bold">check</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-slate-900 font-semibold">Diseño a medida adaptado a móviles y PC</span>
            <span className="font-body-sm text-body-sm text-slate-600">Interfaz moderna, 100% responsiva y optimizada para máxima velocidad en redes 4G/5G.</span>
          </div>
        </div>
        <div className="flex items-start gap-3.5">
          <div className="w-6 h-6 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-[#ff1a35] text-[16px] font-bold">check</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-slate-900 font-semibold">Dominio .com y hosting cloud ultrarrápido incluido</span>
            <span className="font-body-sm text-body-sm text-slate-600">1 año completo de servidor SSD con certificado de seguridad SSL y protección DDoS.</span>
          </div>
        </div>
        <div className="flex items-start gap-3.5">
          <div className="w-6 h-6 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-[#ff1a35] text-[16px] font-bold">check</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-slate-900 font-semibold">4 correos corporativos configurados</span>
            <span className="font-body-sm text-body-sm text-slate-600">ventas@, gerencia@, info@, soporte@ configurados en tus dispositivos de escritorio y móvil.</span>
          </div>
        </div>
        <div className="flex items-start gap-3.5">
          <div className="w-6 h-6 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-[#ff1a35] text-[16px] font-bold">check</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-slate-900 font-semibold">Botones inteligentes de cotización directa a WhatsApp</span>
            <span className="font-body-sm text-body-sm text-slate-600">Mensajes prellenados con el servicio o producto específico de consulta para facilitar el cierre.</span>
          </div>
        </div>
        <div className="flex items-start gap-3.5">
          <div className="w-6 h-6 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-[#ff1a35] text-[16px] font-bold">check</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-slate-900 font-semibold">Soporte técnico preferencial y alta en Google</span>
            <span className="font-body-sm text-body-sm text-slate-600">Indexación inicial en motores de búsqueda y acompañamiento prioritario post-entrega.</span>
          </div>
        </div>
      </div>
      
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex items-center gap-3 my-4">
        <span className="material-symbols-outlined text-[24px] text-slate-400 shrink-0">build</span>
        <div className="text-xs text-slate-600">
          <strong className="text-slate-900 font-semibold">Póliza opcional de tranquilidad:</strong> Mantenimiento mensual, copias de seguridad semanales y cambios de contenido por solo <span className="text-[#ff1a35] font-bold">$25/mes</span> (totalmente opcional).
        </div>
      </div>
    </div>

    <div className="pt-3 mt-auto">
      <a className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white py-4 px-6 rounded-xl font-headline-sm text-headline-sm font-bold shadow-[0_8px_24px_-2px_rgba(37,211,102,0.35)] transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]" href="https://wa.me/584125063754?text=Hola%20Digital%20Drift,%20quiero%20empezar%20con%20el%20Plan%20Pyme%20Conversión%20de%20$280." rel="noopener noreferrer" target="_blank">
        <span className="">Quiero mi web lista →</span>
      </a>
      <div className="flex items-center justify-center gap-2 mt-3 font-body-sm text-body-sm text-slate-500">
        <span className="material-symbols-outlined text-[16px] text-[#20BA5A]">check_circle</span>
        <span className="">Sin contratos de permanencia forzosa • Tu web es 100% tuya</span>
      </div>
    </div>
  </div>

</div>
</section>
{/*  =================================================================  */}
{/*  4. SECCIÓN #proceso - METODOLOGÍA EN 3 PASOS                       */}
{/*  =================================================================  */}
<section data-aos="fade-up" className="w-full bg-[#f8fafc] border-y border-slate-200 py-space-xl" id="proceso">
<div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-margin">
<div className="text-center max-w-2xl mx-auto mb-space-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-[#ff1a35] font-bold">PASO A PASO</span>
</div>
<h2 className="font-headline-xl text-headline-xl font-bold text-[#0f172a] tracking-tight">
        Rápido, predecible y sin dolores de cabeza
      </h2>
<p className="font-body-md text-body-md text-slate-600 mt-2">
        Nosotros hacemos todo el trabajo pesado. Tu único rol es contarnos sobre tu negocio y aprobar los resultados.
      </p>
</div>
{/*  Process Steps Grid with Visual Indicators  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg relative">
{/*  Step 1  */}
<div className="bg-white border border-slate-200 hover:border-[#ff1a35]/60 rounded-2xl p-space-lg shadow-sm hover:shadow-md flex flex-col justify-between relative group transition-all">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="text-4xl font-extrabold font-mono text-red-100 group-hover:text-[#ff1a35] transition-colors">01</span>
<div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-[#ff1a35]">
<span className="material-symbols-outlined text-[24px]">assignment_turned_in</span>
</div>
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-slate-900 mb-space-xs">
            Cuestionario rápido de 5 minutos
          </h3>
<p className="font-body-sm text-body-sm text-slate-600 leading-relaxed">
            Nos cuentas sobre tu negocio, tus productos estrella y a quién quieres venderle. No necesitas preparar especificaciones ni terminología técnica.
          </p>
</div>
<div className="pt-space-md mt-space-md bg-slate-50 border border-slate-200 rounded-lg p-2.5 flex items-center gap-2 font-body-sm text-body-sm text-slate-600">
<span className="material-symbols-outlined text-[18px] text-[#ff1a35]">timer</span>
<span className="font-medium">Día 1: Diagnóstico inicial</span>
</div>
</div>
{/*  Step 2  */}
<div className="bg-white border border-slate-200 hover:border-[#ff1a35]/60 rounded-2xl p-space-lg shadow-sm hover:shadow-md flex flex-col justify-between relative group transition-all">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="text-4xl font-extrabold font-mono text-red-100 group-hover:text-[#ff1a35] transition-colors">02</span>
<div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-[#ff1a35]">
<span className="material-symbols-outlined text-[24px]">desktop_mac</span>
</div>
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-slate-900 mb-space-xs">
            Revisión de tu demo interactiva
          </h3>
<p className="font-body-sm text-body-sm text-slate-600 leading-relaxed">
            En 72 horas te enviamos un enlace privado y protegido para que navegues tu nueva web real desde tu teléfono, pruebes los botones y solicites ajustes.
          </p>
</div>
<div className="pt-space-md mt-space-md bg-slate-50 border border-slate-200 rounded-lg p-2.5 flex items-center gap-2 font-body-sm text-body-sm text-slate-600">
<span className="material-symbols-outlined text-[18px] text-[#ff1a35]">visibility</span>
<span className="font-medium">Día 3-4: Enlace demo navegable</span>
</div>
</div>
{/*  Step 3  */}
<div className="bg-white border border-slate-200 hover:border-[#ff1a35]/60 rounded-2xl p-space-lg shadow-sm hover:shadow-md flex flex-col justify-between relative group transition-all">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="text-4xl font-extrabold font-mono text-red-100 group-hover:text-[#ff1a35] transition-colors">03</span>
<div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#20BA5A]">
<span className="material-symbols-outlined text-[24px]">rocket_launch</span>
</div>
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-slate-900 mb-space-xs">
            Lanzamiento oficial y puesta en marcha
          </h3>
<p className="font-body-sm text-body-sm text-slate-600 leading-relaxed">
            Conectamos tu dominio corporativo, configuramos los correos institucionales y empezamos a canalizar cotizaciones y prospectos directamente a tu WhatsApp.
          </p>
</div>
<div className="pt-space-md mt-space-md bg-slate-50 border border-slate-200 rounded-lg p-2.5 flex items-center gap-2 font-body-sm text-body-sm text-slate-600">
<span className="material-symbols-outlined text-[18px] text-[#20BA5A]">check_circle</span>
<span className="font-medium">Día 5-7: 100% Operativo en vivo</span>
</div>
</div>
</div>
</div>
</section>
{/*  =================================================================  */}
{/*  5. SECCIÓN #preguntas - FAQ ACCORDION                               */}
{/*  =================================================================  */}
<section data-aos="fade-up" className="w-full max-w-[1280px] mx-auto px-gutter-mobile md:px-margin py-space-xl" id="preguntas">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-space-lg">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 mb-space-xs">
<span className="material-symbols-outlined text-[16px] text-[#ff1a35]">help_outline</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-[#ff1a35] font-bold">RESOLVEMOS TUS INQUIETUDES</span>
</div>
<h2 className="font-headline-xl text-headline-xl font-bold text-[#0f172a] tracking-tight">
          ¿Tienes dudas? Te las respondemos aquí
        </h2>
<p className="font-body-md text-body-md text-slate-600 mt-2">
          Respuestas transparentes sobre entrega, tecnología, contenidos y metodologías de pago.
        </p>
</div>
{/*  FAQ Items (HTML5 details/summary styling)  */}
<div className="flex flex-col gap-space-sm">
{/*  FAQ 1  */}
<details className="group bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 open:shadow-sm open:border-[#ff1a35]/40">
<summary className="flex items-center justify-between p-space-md cursor-pointer list-none select-none font-headline-sm text-headline-sm font-semibold text-slate-900">
<span className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-[#ff1a35]"></span>
              ¿Necesito saber de computación o programación?
            </span>
<span className="material-symbols-outlined text-[#ff1a35] transition-transform duration-300 group-open:rotate-180">
              expand_more
            </span>
</summary>
<div className="px-space-md pb-space-md pt-0 text-slate-600 font-body-md text-body-md leading-relaxed">
            No, para nada. Entregamos la web 100% terminada, probada y lista para operar comercialmente. Te proporcionamos además un mini manual audiovisual de 3 minutos para que veas cómo recibir y responder mensajes, y cuentas con nuestro soporte técnico continuo para cualquier actualización.
          </div>
</details>
{/*  FAQ 2  */}
<details className="group bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 open:shadow-sm open:border-[#ff1a35]/40">
<summary className="flex items-center justify-between p-space-md cursor-pointer list-none select-none font-headline-sm text-headline-sm font-semibold text-slate-900">
<span className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-[#ff1a35]"></span>
              ¿Cómo funciona la demo visual gratis antes de pagar?
            </span>
<span className="material-symbols-outlined text-[#ff1a35] transition-transform duration-300 group-open:rotate-180">
              expand_more
            </span>
</summary>
<div className="px-space-md pb-space-md pt-0 text-slate-600 font-body-md text-body-md leading-relaxed">
            Te mostramos una propuesta visual adaptada a tu rubro sin ningún tipo de compromiso comercial para que compruebes en primera persona la calidad gráfica, velocidad y fluidez de nuestro trabajo antes de abonar el anticipo de inicio de proyecto.
          </div>
</details>
{/*  FAQ 3  */}
<details className="group bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 open:shadow-sm open:border-[#ff1a35]/40">
<summary className="flex items-center justify-between p-space-md cursor-pointer list-none select-none font-headline-sm text-headline-sm font-semibold text-slate-900">
<span className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-[#ff1a35]"></span>
              ¿Qué pasa si no tengo fotos profesionales ni textos listos?
            </span>
<span className="material-symbols-outlined text-[#ff1a35] transition-transform duration-300 group-open:rotate-180">
              expand_more
            </span>
</summary>
<div className="px-space-md pb-space-md pt-0 text-slate-600 font-body-md text-body-md leading-relaxed">
            Nosotros nos encargamos de resolverlo. Redactamos textos comerciales orientados a la conversión y seleccionamos fotografía licenciada en alta definición acorde al sector de tu negocio, sin costos adicionales en tu paquete.
          </div>
</details>
{/*  FAQ 4  */}
<details className="group bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 open:shadow-sm open:border-[#ff1a35]/40">
<summary className="flex items-center justify-between p-space-md cursor-pointer list-none select-none font-headline-sm text-headline-sm font-semibold text-slate-900">
<span className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-[#ff1a35]"></span>
              ¿Cuáles son las formas de pago?
            </span>
<span className="material-symbols-outlined text-[#ff1a35] transition-transform duration-300 group-open:rotate-180">
              expand_more
            </span>
</summary>
<div className="px-space-md pb-space-md pt-0 text-slate-600 font-body-md text-body-md leading-relaxed">
            Aceptamos transferencias bancarias locales, tarjetas de crédito y débito internacionales, Zelle y pagos en USDT/criptomonedas. La modalidad habitual es fraccionada: 50% para dar inicio al proyecto y el 50% restante al aprobar la web definitiva y lista para publicación.
          </div>
</details>
</div>
</div>
</section>
{/*  =================================================================  */}
{/*  6. SECCIÓN BANNER FINAL CTA (#contacto) & CIERRE                   */}
{/*  =================================================================  */}
<section data-aos="fade-up" className="w-full max-w-[1280px] mx-auto px-gutter-mobile md:px-margin py-space-xl" id="contacto">
<div className="relative bg-gradient-to-br from-white via-slate-50 to-red-50/40 border border-slate-200 rounded-3xl p-8 md:p-16 text-center shadow-xl overflow-hidden">
{/*  Top Decorative Accent  */}
<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#ff1a35] mb-space-md">
<span className="w-2 h-2 rounded-full bg-[#ff1a35] animate-pulse"></span>
<span className="font-label-sm text-label-sm uppercase tracking-widest font-bold">AGENDA DISPONIBLE ESTA SEMANA</span>
</div>
<h2 className="font-headline-xl text-headline-xl md:text-display-hero font-extrabold text-[#0f172a] tracking-tight leading-tight mb-space-sm">
          Tu competencia ya se está digitalizando.<br className="hidden sm:inline" />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#ff1a35] to-[#e11d48]">
            No te quedes atrás.
          </span>
</h2>
<p className="font-body-lg text-body-lg text-slate-600 max-w-xl mb-space-lg">
          Agenda una llamada técnica o escribe directamente a nuestros arquitectos digitales por WhatsApp. Respondemos en menos de 10 minutos.
        </p>
{/*  Contact Actions (WhatsApp & Contact Form)  */}
<div className="flex flex-col items-center gap-8 mb-space-lg w-full">
  <a className="group inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-5 rounded-2xl font-headline-sm text-headline-sm font-black shadow-[0_12px_36px_rgba(37,211,102,0.45)] hover:shadow-[0_16px_48px_rgba(37,211,102,0.6)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]" href="https://wa.me/584125063754?text=Hola%20Digital%20Drift,%20quiero%20chatear%20con%20un%20especialista%20ahora." rel="noopener noreferrer" target="_blank">
    <svg className="w-7 h-7 fill-current transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.582 1.954.914 2.8.914h.005c3.18 0 5.767-2.587 5.768-5.766.002-3.18-2.584-5.768-5.767-5.768zm3.392 8.234c-.144.405-.837.774-1.17.823-.312.045-.694.06-2.12-.533-1.708-.709-2.813-2.45-2.898-2.564-.085-.114-.698-.929-.698-1.772 0-.844.441-1.258.599-1.428.158-.171.345-.214.46-.214.115 0 .23.002.331.007.107.006.251-.041.393.299.144.405.49 1.196.533 1.282.043.086.072.186.014.3-.058.115-.086.186-.172.286-.086.1-.182.224-.26.3-.086.086-.176.18-.076.352.101.171.448.74 0.963 1.198.663.59 1.222.773 1.394.858.172.086.273.072.374-.043.101-.115.432-.503.547-.675.115-.172.23-.143.388-.086.158.058 1.007.474 1.179.56.173.086.288.129.331.2.043.072.043.418-.101.823zM12.004 2C6.479 2 2 6.479 2 12.004c0 1.905.534 3.684 1.458 5.207L2 22l4.945-1.296A9.957 9.957 0 0012.004 22c5.525 0 10.004-4.479 10.004-10.004C22.008 6.479 17.529 2 12.004 2z"  />
    </svg>
    <span className="">Chatear con un Especialista en WhatsApp</span>
    <span className="material-symbols-outlined text-[22px]">arrow_forward</span>
  </a>

  <div className="w-full max-w-xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 mt-2 text-left relative overflow-hidden group">
    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#ff1a35] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <h3 className="font-headline-sm text-headline-sm font-bold text-slate-900 mb-2">¿Prefieres detallarnos tu proyecto?</h3>
    <p className="text-sm text-slate-500 mb-6">Completa los datos y analizaremos tu caso para darte una cotización exacta a tu correo <strong className="font-semibold text-slate-700">DigitalDriftSoftware@gmail.com</strong>.</p>
    
    {/* Formulario conectado a formsubmit.co mediante AJAX */}
    {formStatus.state === 'success' ? (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center animate-fade-in">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined text-3xl">check_circle</span>
        </div>
        <h4 className="font-bold text-slate-900 text-lg mb-2">¡Solicitud Enviada!</h4>
        <p className="text-sm text-slate-600">Hemos recibido tus datos correctamente. Nuestro equipo analizará tu requerimiento y te contactará a la brevedad.</p>
        <button onClick={() => setFormStatus({ state: 'idle', message: '' })} className="mt-6 font-semibold text-sm text-emerald-700 hover:text-emerald-800 transition-colors">
          Enviar otra solicitud
        </button>
      </div>
    ) : (
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
        <input type="hidden" name="_subject" value="Nueva Solicitud de Cotización - Digital Drift" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Nombre</label>
            <input type="text" name="Nombre" required disabled={formStatus.state === 'loading'} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#ff1a35]/20 focus:border-[#ff1a35] transition-all disabled:opacity-50" placeholder="Tu nombre" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Correo</label>
            <input type="email" name="Correo" required disabled={formStatus.state === 'loading'} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#ff1a35]/20 focus:border-[#ff1a35] transition-all disabled:opacity-50" placeholder="tucorreo@empresa.com" />
          </div>
        </div>
        
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Presupuesto Estimado</label>
          <div className="relative">
            <select name="Presupuesto" disabled={formStatus.state === 'loading'} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#ff1a35]/20 focus:border-[#ff1a35] transition-all appearance-none cursor-pointer disabled:opacity-50">
              <option value="No estoy seguro, necesito asesoría">No estoy seguro, necesito asesoría</option>
              <option value="Menos de $300 USD">Menos de $300 USD</option>
              <option value="$300 - $600 USD">$300 - $600 USD</option>
              <option value="Más de $600 USD">Más de $600 USD</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Detalles del Proyecto</label>
          <textarea name="Mensaje" required disabled={formStatus.state === 'loading'} rows="4" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#ff1a35]/20 focus:border-[#ff1a35] transition-all resize-none disabled:opacity-50" placeholder="¿De qué trata tu negocio y qué necesitas lograr con la web?"></textarea>
        </div>

        {formStatus.state === 'error' && (
          <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm font-medium border border-red-200 text-center">
            {formStatus.message}
          </div>
        )}

        <button type="submit" disabled={formStatus.state === 'loading'} className="mt-2 w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-600 text-white font-bold text-sm py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
          {formStatus.state === 'loading' ? 'Enviando...' : 'Enviar Solicitud de Cotización'}
          {formStatus.state !== 'loading' && <span className="material-symbols-outlined text-[18px]">send</span>}
        </button>
      </form>
    )}
  </div>
</div>
{/*  Trust Guarantee Footnote  */}
<div className="flex flex-wrap items-center justify-center gap-4 text-slate-500 font-body-sm text-body-sm">
<span className="flex items-center gap-1 font-medium">
<span className="material-symbols-outlined text-[16px] text-[#20BA5A]">flash_on</span>
            Respuesta promedio: &lt; 10 min
          </span>
<span className="">•</span>
<span className="flex items-center gap-1 font-medium">
<span className="material-symbols-outlined text-[16px] text-[#ff1a35]">verified</span>
            Diagnóstico 100% gratuito y sin compromiso
          </span>
<span className="">•</span>
<span className="flex items-center gap-1 font-medium">
<span className="material-symbols-outlined text-[16px] text-[#20BA5A]">lock</span>
            Trato confidencial
          </span>
</div>
</div>
</div>
</section>
</div></main>
{/*  =================================================================  */}
{/*  NUEVA SECCIÓN: Equipo Fundador                                     */}
{/*  =================================================================  */}
<section data-aos="fade-up" id="equipo" className="w-full max-w-[1280px] mx-auto px-gutter-mobile md:px-margin py-space-xl">
  <div className="text-center max-w-2xl mx-auto mb-8">
    <div className="inline-block bg-red-50 text-[#ff1a35] border border-red-200 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-2">
      RESPALDO LOCAL
    </div>
    <h2 className="text-[#0f172a] font-bold text-3xl tracking-tight mt-2">
      El equipo detrás de Digital Drift
    </h2>
    <p className="font-body-md text-body-md text-slate-600 mt-2">
      Trato directo con los especialistas a cargo de tu proyecto, sin intermediarios.
    </p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
    {/*  Tarjeta 1  */}
    <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#ff1a35]/50 hover:shadow-md transition-all flex flex-col items-center text-center">
      <div className="h-12 w-12 rounded-xl bg-slate-900 text-white font-bold flex items-center justify-center mb-4 text-xl">SS</div>
      <h3 className="font-bold text-slate-900 text-lg">Santiago Sánchez</h3>
      <span className="text-[#ff1a35] font-semibold text-xs uppercase tracking-wide mt-1 mb-3">Desarrollo &amp; Infraestructura Web</span>
      <p className="text-slate-600 text-sm leading-relaxed">Garantiza tiempos de carga ultrarrápidos, seguridad SSL y conexión directa a WhatsApp.</p>
    </div>
    {/*  Tarjeta 2  */}
    <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#ff1a35]/50 hover:shadow-md transition-all flex flex-col items-center text-center">
      <div className="h-12 w-12 rounded-xl bg-slate-900 text-white font-bold flex items-center justify-center mb-4 text-xl">MP</div>
      <h3 className="font-bold text-slate-900 text-lg">Moisés Porras</h3>
      <span className="text-[#ff1a35] font-semibold text-xs uppercase tracking-wide mt-1 mb-3">Diseño &amp; Experiencia de Usuario (UI/UX)</span>
      <p className="text-slate-600 text-sm leading-relaxed">Interfaces limpias, estéticas modernas y diseño 100% optimizado para pantallas móviles.</p>
    </div>
    {/*  Tarjeta 3  */}
    <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#ff1a35]/50 hover:shadow-md transition-all flex flex-col items-center text-center">
      <div className="h-12 w-12 rounded-xl bg-slate-900 text-white font-bold flex items-center justify-center mb-4 text-xl">SV</div>
      <h3 className="font-bold text-slate-900 text-lg">Santihel Valero</h3>
      <span className="text-[#ff1a35] font-semibold text-xs uppercase tracking-wide mt-1 mb-3">Estrategia Comercial &amp; Cierre</span>
      <p className="text-slate-600 text-sm leading-relaxed">Estructura catálogos y propuestas visuales enfocadas en retorno de inversión para negocios.</p>
    </div>
  </div>
</section>

<footer className="w-full bg-slate-900 border-t border-slate-800 text-slate-300 mt-space-xl">
  <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-margin py-space-xl">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg mb-space-lg">
      <div className="md:col-span-5 flex flex-col gap-space-sm">
        <div className="flex items-center gap-space-xs">
          <img alt="Digital Drift Logo" className="h-8 w-auto object-contain" src="/img/logo-digital-drift-footer.png" />
          <div className="font-headline-sm text-headline-sm leading-none">
            <span className="text-white font-bold">Digital</span> <span className="text-[#ff1a35] font-bold">Drift</span>
          </div>
        </div>
        <p className="font-body-sm text-body-sm text-slate-400 max-w-sm">Arquitectura web hipermoderna y sistemas de adquisición B2B de alta conversión. Diseñado con precisión para escalar operaciones digitales empresariales.</p>
      </div>
      <div className="md:col-span-2 flex flex-col gap-space-xs">
        <span className="text-white font-bold uppercase tracking-wider text-xs mb-3">Soluciones</span>
        <a className="font-body-sm text-body-sm text-slate-400 hover:text-white transition-colors" href="#demos">Demos de Alto Rendimiento</a>
        <a className="font-body-sm text-body-sm text-slate-400 hover:text-white transition-colors" href="#paquetes">Paquetes Enterprise</a>
        <a className="font-body-sm text-body-sm text-slate-400 hover:text-white transition-colors" href="#proceso">Metodología Sprint</a>
      </div>
      <div className="md:col-span-2 flex flex-col gap-space-xs">
        <span className="text-white font-bold uppercase tracking-wider text-xs mb-3">Compañía</span>
        <a className="font-body-sm text-body-sm text-slate-400 hover:text-white transition-colors" href="#proceso">Acerca de Digital Drift</a>
        <a className="font-body-sm text-body-sm text-slate-400 hover:text-white transition-colors" href="#preguntas">FAQ &amp; Seguridad</a>
        <a className="font-body-sm text-body-sm text-slate-400 hover:text-white transition-colors" href="#contacto">Contacto Directo</a>
      </div>
      <div className="md:col-span-3 flex flex-col gap-space-sm">
        <span className="text-white font-bold uppercase tracking-wider text-xs mb-3">Conexión Ejecutiva</span>
        <p className="font-body-sm text-body-sm text-slate-400">Acceso prioritario y consultoría de conversión directa con nuestros arquitectos.</p>
        <div className="flex items-center gap-space-sm">
          <a className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-all" href="#"><span className="material-symbols-outlined text-[18px]">public</span></a>
          <a className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-all" href="#"><span className="material-symbols-outlined text-[18px]">share</span></a>
          <a className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-all" href="#"><span className="material-symbols-outlined text-[18px]">mail</span></a>
        </div>
      </div>
    </div>
    <div className="pt-space-md border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-space-sm text-slate-400 font-body-sm text-body-sm">
      <div className="">© 2026 Digital Drift. Todos los derechos reservados.</div>
      <div className="flex items-center gap-space-md">
        <a className="hover:text-white transition-colors" href="#">Términos de Servicio</a>
        <a className="hover:text-white transition-colors" href="#">Políticas de Privacidad</a>
        <a className="hover:text-white transition-colors" href="#">Garantía &amp; Soporte</a>
      </div>
    </div>
  </div>
</footer>

    </>
  );
}

export default App;
