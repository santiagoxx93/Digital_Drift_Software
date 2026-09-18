import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DemoImage = ({ src, alt }) => {
  return (
    <div className="w-full aspect-video mb-space-sm rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
      <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
    </div>
  );
};

function App() {
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ state: 'loading', message: 'Enviando solicitud...' });
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/contacto@digitaldriftagency.lat", {
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

  const carouselRef = useRef(null);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    let animationId;
    let isHoveredOrTouched = false;
    const scrollSpeed = 1;

    const scroll = () => {
      if (!isHoveredOrTouched && container) {
        container.scrollLeft += scrollSpeed;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    // Small delay to let cards render before starting
    setTimeout(() => {
      animationId = requestAnimationFrame(scroll);
    }, 500);

    const handleEnter = () => isHoveredOrTouched = true;
    const handleLeave = () => isHoveredOrTouched = false;

    container.addEventListener('mouseenter', handleEnter);
    container.addEventListener('mouseleave', handleLeave);
    container.addEventListener('touchstart', handleEnter, { passive: true });
    container.addEventListener('touchend', handleLeave);
    container.addEventListener('touchcancel', handleLeave);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mouseenter', handleEnter);
      container.removeEventListener('mouseleave', handleLeave);
      container.removeEventListener('touchstart', handleEnter);
      container.removeEventListener('touchend', handleLeave);
      container.removeEventListener('touchcancel', handleLeave);
    };
  }, []);

  return (
    <>
<div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-50/40 via-slate-50/60 to-white"></div><div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-red-100/50 rounded-full blur-[140px] pointer-events-none -z-10"></div><header data-aos="fade-down" data-aos-duration="500" className="fixed top-0 left-0 w-full z-50 px-gutter-mobile md:px-margin pt- space-sm py-2"><div className="max-w-[1280px] mx-auto h-20 px-gutter rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm flex items-center justify-between transition-all duration-300"><div className="flex items-center gap-space-sm"><img alt="Digital Drift Logo" className="h-14 w-auto object-contain" src="/img/logo-digital-drift.webp" /><div className="flex flex-col"><div className="font-headline-sm text-headline-sm tracking-tight leading-none"><span className="font-bold text-[#0f172a]">Digital</span> <span className="text-[#e11d2e] font-bold">Drift</span></div><span className="font-label-sm text-label-sm uppercase text-[#e11d2e] tracking-widest leading-none mt-1 font-bold">SOFTWARE</span></div></div><nav className="hidden lg:flex items-center gap-space-md"><a aria-current="page" className="px-space-xs py-1 transition-colors bg-red-50 text-[#e11d2e] font-label-lg rounded-lg border border-red-200" data-path="demos" href="#demos">Demos</a><a className="font-label-lg text-label-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 px-space-xs py-1 rounded-lg transition-colors" data-path="paquetes" href="#paquetes">Paquetes</a><a className="font-label-lg text-label-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 px-space-xs py-1 rounded-lg transition-colors" data-path="proceso" href="#proceso">Proceso</a><a className="font-label-lg text-label-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 px-space-xs py-1 rounded-lg transition-colors" data-path="preguntas" href="#preguntas">Preguntas</a><a className="font-label-lg text-label-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 px-space-xs py-1 rounded-lg transition-colors" data-path="contacto" href="#contacto">Contacto</a></nav><div className="flex items-center gap-space-sm"><a className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-label-sm text-label-sm font-semibold transition-all shadow-sm" href="https://wa.me/584125063754?text=Hola%20Digital%20Drift,%20quiero%20consultar%20sobre%20sus%20servicios" target="_blank" rel="noopener noreferrer">Consultar Ahora</a></div></div></header><main className="w-full pt-20 bg-transparent"><div className="flex flex-col w-full overflow-hidden text-slate-900">
{/*  =================================================================  */}
{/*  1. HERO SECTION                                                    */}
{/*  =================================================================  */}
<section className="relative w-full max-w-[1440px] mx-auto px-gutter-mobile md:px-margin min-h-[90vh] flex items-center overflow-hidden py-24 md:py-32 lg:py-0">
{/*  Subtle Atmosphere Glows  */}
<div className="absolute -top-12 left-1/4 w-[420px] h-[420px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
<div className="absolute top-1/3 right-5 w-[360px] h-[360px] bg-rose-500/5 rounded-full blur-[110px] pointer-events-none -z-10"></div>
{/*  Watermark Logo Background  */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  <div className="w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] lg:w-[950px] lg:h-[950px] xl:w-[1100px] xl:h-[1100px] opacity-[0.04] animate-float">
    <img src="/img/logo-digital-drift-footer.webp" alt="" className="w-full h-full object-contain" aria-hidden="true" />
  </div>
</div>

{/* Floating Social Bar in Hero */}
<div className="absolute left-4 md:left-6 xl:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50 hidden sm:flex">
  <a href="https://wa.me/584125063754?text=Hola%20Digital%20Drift" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform" aria-label="WhatsApp">
    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.582 1.954.914 2.8.914h.005c3.18 0 5.767-2.587 5.768-5.766.002-3.18-2.584-5.768-5.767-5.768zm3.392 8.234c-.144.405-.837.774-1.17.823-.312.045-.694.06-2.12-.533-1.708-.709-2.813-2.45-2.898-2.564-.085-.114-.698-.929-.698-1.772 0-.844.441-1.258.599-1.428.158-.171.345-.214.46-.214.115 0 .23.002.331.007.107.006.251-.041.393.299.144.405.49 1.196.533 1.282.043.086.072.186.014.3-.058.115-.086.186-.172.286-.086.1-.182.224-.26.3-.086.086-.176.18-.076.352.101.171.448.74 0.963 1.198.663.59 1.222.773 1.394.858.172.086.273.072.374-.043.101-.115.432-.503.547-.675.115-.172.23-.143.388-.086.158.058 1.007.474 1.179.56.173.086.288.129.331.2.043.072.043.418-.101.823zM12.004 2C6.479 2 2 6.479 2 12.004c0 1.905.534 3.684 1.458 5.207L2 22l4.945-1.296A9.957 9.957 0 0012.004 22c5.525 0 10.004-4.479 10.004-10.004C22.008 6.479 17.529 2 12.004 2z"  />
    </svg>
  </a>
  <a href="https://www.facebook.com/share/18YjrMjL1J/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform" aria-label="Facebook">
    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
    </svg>
  </a>
  <a href="https://www.instagram.com/digitaldrift_agency/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform" aria-label="Instagram">
    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  </a>
</div>
<div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-8 items-center">
{/*  Left Column: Copy & Immediate Action  */}
<div data-aos="fade-up" className="lg:col-span-7 xl:col-span-8 flex flex-col items-start">
{/*  Live Status Badge  */}
<div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 backdrop-blur-md shadow-sm mb-space-md">
<span className="font-label-sm text-label-sm text-slate-700 tracking-wider font-bold uppercase">IDEAS QUE ACELERAN TU MUNDO DIGITAL</span>
</div>
{/*  High-Impact H1 Headline  */}
<h1 className="font-display-hero text-5xl md:text-6xl lg:text-[54px] xl:text-[68px] font-extrabold text-[#0f172a] tracking-tight leading-[1.05] mb-6 lg:mb-10">
          <span className="lg:whitespace-nowrap">Convertimos tu negocio</span> <br className="hidden lg:block" />
          <span className="lg:whitespace-nowrap">en una máquina de cerrar</span> <br className="hidden lg:block" />
          <span className="lg:whitespace-nowrap">clientes por{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20ba5a] via-emerald-500 to-[#22c55e]">
              WhatsApp
            </span>
          </span>
</h1>
{/*  Persuasive Subtitle  */}
<p className="font-body-lg text-lg md:text-xl lg:text-[22px] xl:text-[26px] text-slate-600 max-w-4xl mb-12 leading-relaxed">
          Diseñamos la plataforma web de tu empresa: ultrarrápida, moderna y con dominio, correos corporativos y catálogo incluidos. Sin complicaciones técnicas.
        </p>
{/*  CTAs  */}
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm w-full sm:w-auto mb-space-lg">
{/*  Primary CTA (WhatsApp High Conversion)  */}
<a className="group relative inline-flex items-center justify-center gap-space-xs bg-[#25D366] hover:bg-[#20BA5A] text-white px-7 py-4 rounded-xl font-label-lg text-label-lg font-bold shadow-[0_8px_24px_-2px_rgba(37,211,102,0.38)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.5)] transition-all duration-200 active:scale-[0.98]" href="https://wa.me/584125063754?text=Hola%20Digital%20Drift,%20quiero%20solicitar%20mi%20demo%20visual%20gratis." rel="noopener noreferrer" target="_blank">
<svg className="w-5 h-5 fill-current transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
<path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.582 1.954.914 2.8.914h.005c3.18 0 5.767-2.587 5.768-5.766.002-3.18-2.584-5.768-5.767-5.768zm3.392 8.234c-.144.405-.837.774-1.17.823-.312.045-.694.06-2.12-.533-1.708-.709-2.813-2.45-2.898-2.564-.085-.114-.698-.929-.698-1.772 0-.844.441-1.258.599-1.428.158-.171.345-.214.46-.214.115 0 .23.002.331.007.107.006.251-.041.393.299.144.405.49 1.196.533 1.282.043.086.072.186.014.3-.058.115-.086.186-.172.286-.086.1-.182.224-.26.3-.086.086-.176.18-.076.352.101.171.448.74 0.963 1.198.663.59 1.222.773 1.394.858.172.086.273.072.374-.043.101-.115.432-.503.547-.675.115-.172.23-.143.388-.086.158.058 1.007.474 1.179.56.173.086.288.129.331.2.043.072.043.418-.101.823zM12.004 2C6.479 2 2 6.479 2 12.004c0 1.905.534 3.684 1.458 5.207L2 22l4.945-1.296A9.957 9.957 0 0012.004 22c5.525 0 10.004-4.479 10.004-10.004C22.008 6.479 17.529 2 12.004 2z"  />
</svg>
<span className="">Solicitar Demo Gratis</span>
</a>
{/*  Secondary Ghost CTA  */}
<a className="inline-flex items-center justify-center gap-space-xs bg-white hover:bg-slate-50 border border-slate-300 hover:border-[#e11d2e] hover:shadow-[0_4px_16px_rgba(255,26,53,0.12)] text-slate-800 px-6 py-4 rounded-xl font-label-lg text-label-lg font-semibold shadow-sm transition-all duration-200" href="#demos">
<span className="">Ver demos</span>
</a>
</div>
<p className="text-slate-500 font-body-sm text-body-sm pt-2 font-medium">
  Entrega rápida · Sin letra pequeña · Optimizado para celulares
</p>
</div>
{/*  Right Column: Logo Display  */}
<div data-aos="fade-left" data-aos-delay="200" className="lg:col-span-5 xl:col-span-4 relative mt-6 lg:mt-0 flex items-center justify-center xl:justify-end">
<div className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[450px] lg:h-[450px] xl:w-[750px] xl:h-[750px] animate-float">
  <img src="/img/logo-digital-drift-footer.webp" alt="Digital Drift Software" className="w-full h-full object-contain drop-shadow-[0_25px_50px_rgba(255,26,53,0.15)]" />
</div>
</div>
</div>
</section>

{/*  =================================================================  */}
{/*  1.5 SECCIÓN SERVICIOS BRANDING                                     */}
{/*  =================================================================  */}
<section className="w-full bg-[#0F172A] py-space-xl border-t border-slate-800 relative overflow-hidden">
  {/* Subtle red glow on the right */}
  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#e11d2e]/10 rounded-full blur-[120px] pointer-events-none"></div>

  <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-margin relative z-10">
    {/* Heading */}
    <div className="max-w-4xl" data-aos="fade-up">
      <h2 className="font-display-hero text-[32px] md:text-[42px] font-extrabold text-white leading-tight italic tracking-tight">
        Desarrollo de software,<br className="hidden sm:inline" /> páginas web y soluciones<br className="hidden sm:inline" /> digitales a tu medida.
      </h2>
      <div className="h-1 w-64 bg-gradient-to-r from-[#e11d2e] to-transparent mt-6"></div>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 mt-16 md:divide-x divide-[#e11d2e]/30 gap-y-12">
      {/* Item 1 */}
      <div className="flex flex-col items-center justify-center text-center px-4" data-aos="fade-up" data-aos-delay="100">
        <span className="material-symbols-outlined text-[#e11d2e] text-[56px] mb-4 font-light">code</span>
        <span className="font-label-sm uppercase text-slate-300 font-bold tracking-widest text-xs leading-relaxed max-w-[140px]">Desarrollo de software</span>
      </div>
      {/* Item 2 */}
      <div className="flex flex-col items-center justify-center text-center px-4" data-aos="fade-up" data-aos-delay="200">
        <span className="material-symbols-outlined text-[#e11d2e] text-[56px] mb-4 font-light">language</span>
        <span className="font-label-sm uppercase text-slate-300 font-bold tracking-widest text-xs leading-relaxed max-w-[140px]">Páginas web</span>
      </div>
      {/* Item 3 */}
      <div className="flex flex-col items-center justify-center text-center px-4" data-aos="fade-up" data-aos-delay="300">
        <span className="material-symbols-outlined text-[#e11d2e] text-[56px] mb-4 font-light">cloud</span>
        <span className="font-label-sm uppercase text-slate-300 font-bold tracking-widest text-xs leading-relaxed max-w-[140px]">Soluciones en la nube</span>
      </div>
      {/* Item 4 */}
      <div className="flex flex-col items-center justify-center text-center px-4" data-aos="fade-up" data-aos-delay="400">
        <span className="material-symbols-outlined text-[#e11d2e] text-[56px] mb-4 font-light">rocket_launch</span>
        <span className="font-label-sm uppercase text-slate-300 font-bold tracking-widest text-xs leading-relaxed max-w-[140px]">Automatización y más</span>
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

<h2 className="font-headline-xl text-headline-xl font-bold text-[#0f172a] tracking-tight">
          Demos interactivas listas para probar
        </h2>
<p className="font-body-md text-body-md text-slate-600 mt-space-xs">
          Cada demo está lista para usar. Tócala, pruébala y decide.
        </p>
</div>
<div className="flex items-center gap-space-xs">
<span className="font-label-md text-label-md text-slate-600">¿No ves tu industria?</span>
<a className="font-label-md text-label-md text-[#e11d2e] hover:text-[#e11d48] hover:underline flex items-center font-bold" href="https://wa.me/584125063754?text=Hola%20Digital%20Drift,%20mi%20negocio%20es%20de%20otro%20rubro%20y%20quiero%20ver%20un%20ejemplo.">
          Diseñamos a medida →
</a>
</div>
</div>
{/*  4-Card Demo Grid  */}
<div className="w-full relative -mx-4 px-4 lg:mx-0 lg:px-0 py-4">
  <div className="absolute inset-y-0 left-0 w-12 lg:w-32 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none hidden lg:block"></div>
  <div className="absolute inset-y-0 right-0 w-12 lg:w-32 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none hidden lg:block"></div>
  <div ref={carouselRef} className="flex gap-space-md overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" style={{ scrollBehavior: 'auto', WebkitOverflowScrolling: 'touch' }}>
    {[...Array(2)].map((_, i) => (
      <React.Fragment key={i}>

{/*  Card 1: Industria & Construcción  */}
<div className="w-[85vw] sm:w-[450px] lg:w-[500px] flex-shrink-0 group bg-white hover:bg-white border border-slate-200 hover:border-[#e11d2e]/60 rounded-2xl p-space-md shadow-sm hover:shadow-[0_12px_30px_rgba(255,26,53,0.12)] transition-all duration-300 flex flex-col justify-between">
<div>
<DemoImage src="/img/servitencavzla.webp" alt="Vista previa demo Industria y Construcción - Servinteca Vzla" />
<h3 className="font-headline-sm text-headline-sm font-bold text-slate-900 group-hover:text-[#e11d2e] transition-colors">
  Industria &amp; Construcción
</h3>
<p className="font-body-sm text-body-sm text-slate-600 mt-1 mb-space-sm">
  Página institucional para empresa de ingeniería civil, estructuras de acero y obras industriales. Incluye cotización por WhatsApp, galería de proyectos y formulario de contacto directo.
</p>
<div className="flex flex-wrap gap-1.5 mb-space-md">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-medium">Cotización WhatsApp</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-medium">Galería de Proyectos</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-medium">Formulario de Contacto</span>
</div>
</div>
<a className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-[#e11d2e] hover:text-white font-label-md text-label-md text-slate-800 font-semibold flex items-center justify-center gap-1.5 transition-colors border border-slate-200 hover:border-transparent" href="https://web-constructora-servintecavzla.vercel.app/" target="_blank" rel="noopener noreferrer">
<span>Ver demo</span>
</a>
</div>

{/*  Card 2: Clínicas & Salud Dental  */}
<div className="w-[85vw] sm:w-[450px] lg:w-[500px] flex-shrink-0 group bg-white hover:bg-white border border-slate-200 hover:border-[#e11d2e]/60 rounded-2xl p-space-md shadow-sm hover:shadow-[0_12px_30px_rgba(255,26,53,0.12)] transition-all duration-300 flex flex-col justify-between">
<div>
<DemoImage src="/img/clinica_dental.webp" alt="Vista previa demo Clínicas y Salud Dental" />
<h3 className="font-headline-sm text-headline-sm font-bold text-slate-900 group-hover:text-[#e11d2e] transition-colors">
  Clínicas &amp; Salud Dental
</h3>
<p className="font-body-sm text-body-sm text-slate-600 mt-1 mb-space-sm">
  Web médica diseñada para especialistas y odontología, orientada al agendamiento rápido de citas y consultas por WhatsApp.
</p>
<div className="flex flex-wrap gap-1.5 mb-space-md">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-medium">Agenda Médica</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-medium">Especialidades</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-medium">Citas Directas</span>
</div>
</div>
<a className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-[#e11d2e] hover:text-white font-label-md text-label-md text-slate-800 font-semibold flex items-center justify-center gap-1.5 transition-colors border border-slate-200 hover:border-transparent" href="https://demo-clinica-dental-sigma.vercel.app/" target="_blank" rel="noopener noreferrer">
<span>Ver demo</span>
</a>
</div>

{/*  Card 3: Gastronomía & Menú Digital  */}
<div className="w-[85vw] sm:w-[450px] lg:w-[500px] flex-shrink-0 snap-center group bg-white hover:bg-white border border-slate-200 hover:border-[#e11d2e]/60 rounded-2xl p-space-md shadow-sm hover:shadow-[0_12px_30px_rgba(255,26,53,0.12)] transition-all duration-300 flex flex-col justify-between">
<div>
<DemoImage src="/img/demo-comida.webp" alt="Vista previa demo Gastronomía y Menú Digital" />
<h3 className="font-headline-sm text-headline-sm font-bold text-slate-900 group-hover:text-[#e11d2e] transition-colors">
  Gastronomía &amp; Menú Digital
</h3>
<p className="font-body-sm text-body-sm text-slate-600 mt-1 mb-space-sm">
  Menú interactivo optimizado para locales de comida rápida y delivery con recepción de pedidos directos a WhatsApp sin comisiones.
</p>
<div className="flex flex-wrap gap-1.5 mb-space-md">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-medium">Menú Digital</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-medium">Carrito Rápido</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-medium">0% Comisión</span>
</div>
</div>
<a className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-[#e11d2e] hover:text-white font-label-md text-label-md text-slate-800 font-semibold flex items-center justify-center gap-1.5 transition-colors border border-slate-200 hover:border-transparent" href="https://demo-comida.vercel.app/" target="_blank" rel="noopener noreferrer">
<span>Ver demo</span>
</a>
</div>

{/*  Card 4: Calzado & Tiendas Retail  */}
<div className="w-[85vw] sm:w-[450px] lg:w-[500px] flex-shrink-0 group bg-white hover:bg-white border border-slate-200 hover:border-[#e11d2e]/60 rounded-2xl p-space-md shadow-sm hover:shadow-[0_12px_30px_rgba(255,26,53,0.12)] transition-all duration-300 flex flex-col justify-between">
<div>
<DemoImage src="/img/demo-zapatos.webp" alt="Vista previa demo Calzado y Tiendas Retail" />
<h3 className="font-headline-sm text-headline-sm font-bold text-slate-900 group-hover:text-[#e11d2e] transition-colors">
  Calzado &amp; Tiendas Retail
</h3>
<p className="font-body-sm text-body-sm text-slate-600 mt-1 mb-space-sm">
  Catálogo dinámico de productos con filtros de modelos, selección rápida y botón de compra directa al equipo de ventas.
</p>
<div className="flex flex-wrap gap-1.5 mb-space-md">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-medium">Catálogo Visual</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-medium">Filtro de Modelos</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-medium">Cierre en 1 Clic</span>
</div>
</div>
<a className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-[#e11d2e] hover:text-white font-label-md text-label-md text-slate-800 font-semibold flex items-center justify-center gap-1.5 transition-colors border border-slate-200 hover:border-transparent" href="https://demozapatos.vercel.app/" target="_blank" rel="noopener noreferrer">
<span>Ver demo</span>
</a>
</div>

{/*  Card 5: Floristerías & Regalos  */}
<div className="w-[85vw] sm:w-[450px] lg:w-[500px] flex-shrink-0 group bg-white hover:bg-white border border-slate-200 hover:border-[#e11d2e]/60 rounded-2xl p-space-md shadow-sm hover:shadow-[0_12px_30px_rgba(255,26,53,0.12)] transition-all duration-300 flex flex-col justify-between">
<div>
<DemoImage src="/img/floreriaweb.webp" alt="Vista previa demo Floristerías y Regalos" />
<h3 className="font-headline-sm text-headline-sm font-bold text-slate-900 group-hover:text-[#e11d2e] transition-colors">
  Floristerías &amp; Regalos
</h3>
<p className="font-body-sm text-body-sm text-slate-600 mt-1 mb-space-sm">
  Tienda online elegante para floristerías y venta de regalos. Catálogo visual atractivo y recepción de pedidos directos a WhatsApp.
</p>
<div className="flex flex-wrap gap-1.5 mb-space-md">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-medium">Diseño Elegante</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-medium">Catálogo Visual</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-medium">Pedidos Directos</span>
</div>
</div>
<a className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-[#e11d2e] hover:text-white font-label-md text-label-md text-slate-800 font-semibold flex items-center justify-center gap-1.5 transition-colors border border-slate-200 hover:border-transparent" href="https://demo-floristeria-mocha.vercel.app/" target="_blank" rel="noopener noreferrer">
<span>Ver demo</span>
</a>
</div>

      </React.Fragment>
    ))}
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
  <div className="h-full flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 hover:border-slate-800/60 hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)] transition-all duration-300 relative overflow-hidden">
    {/* Top Accent Ribbon */}
    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700"></div>
    
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
            <span className="text-xl font-bold text-slate-900">USD</span>
          </div>
          <span className="text-xs text-slate-500 font-medium mt-1">o 2 cuotas de $80 USD</span>
        </div>
      </div>
      
      {/* Lista de características */}
      <div className="space-y-4 py-6">
        <div className="flex items-start gap-3.5">
          <span className="text-slate-900 font-bold mr-1">—</span>
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-slate-900 font-semibold">Diseño moderno 100% adaptable</span>
            <span className="font-body-sm text-body-sm text-slate-600">Optimizado para celulares y computadoras sin perder velocidad.</span>
          </div>
        </div>
        <div className="flex items-start gap-3.5">
          <span className="text-slate-900 font-bold mr-1">—</span>
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-slate-900 font-semibold">Catálogo interactivo</span>
            <span className="font-body-sm text-body-sm text-slate-600">Muestra organizada de tus productos o servicios con fotos y detalles.</span>
          </div>
        </div>
        <div className="flex items-start gap-3.5">
          <span className="text-slate-900 font-bold mr-1">—</span>
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-slate-900 font-semibold">Botón directo a WhatsApp</span>
            <span className="font-body-sm text-body-sm text-slate-600">Tus clientes te piden o cotizan con un solo clic.</span>
          </div>
        </div>
        <div className="flex items-start gap-3.5">
          <span className="text-slate-900 font-bold mr-1">—</span>
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-slate-900 font-semibold">Dominio (.com) y hosting ultra rápido</span>
            <span className="font-body-sm text-body-sm text-slate-600">Incluidos por 1 año completo con certificado de seguridad SSL.</span>
          </div>
        </div>
        <div className="flex items-start gap-3.5">
          <span className="text-slate-900 font-bold mr-1">—</span>
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-slate-900 font-semibold">Integración con redes sociales</span>
            <span className="font-body-sm text-body-sm text-slate-600">Conexión directa a perfiles de Instagram, Facebook y TikTok.</span>
          </div>
        </div>
        <div className="flex items-start gap-3.5">
          <span className="text-slate-900 font-bold mr-1">—</span>
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
        <span className="">Sin mensualidades • 100% tuya</span>
      </div>
    </div>
  </div>

  {/* Tarjeta 2: Plan Pyme Conversión (Actual) */}
  <div className="h-full flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 hover:border-[#e11d2e]/60 hover:shadow-[0_20px_40px_rgba(255,26,53,0.12)] transition-all duration-300 relative overflow-hidden">
    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#e11d2e] via-[#e11d48] to-[#f43f5e]"></div>
    
    <div>
      <div className="flex justify-between items-center mb-6">
        <span className="px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#e11d2e] font-label-sm text-label-sm font-extrabold uppercase tracking-wider">
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
            <span className="text-xl font-bold text-[#e11d2e]">USD</span>
          </div>
          <span className="text-xs text-slate-500 font-medium mt-1">Pago único (o 2 cuotas de $145)</span>
        </div>
      </div>
      
      <div className="space-y-4 py-6">
        <div className="flex items-start gap-3.5">
          <div className="w-6 h-6 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-[#e11d2e] text-[16px] font-bold">check</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-slate-900 font-semibold">Diseño a medida adaptado a móviles y PC</span>
            <span className="font-body-sm text-body-sm text-slate-600">Interfaz moderna, 100% responsiva y optimizada para máxima velocidad en redes 4G/5G.</span>
          </div>
        </div>
        <div className="flex items-start gap-3.5">
          <span className="text-[#e11d2e] font-bold mr-1">—</span>
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-slate-900 font-semibold">Dominio .com y hosting cloud ultrarrápido incluido</span>
            <span className="font-body-sm text-body-sm text-slate-600">1 año completo de servidor SSD con certificado de seguridad SSL y protección DDoS.</span>
          </div>
        </div>
        <div className="flex items-start gap-3.5">
          <span className="text-[#e11d2e] font-bold mr-1">—</span>
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-slate-900 font-semibold">4 correos corporativos configurados</span>
            <span className="font-body-sm text-body-sm text-slate-600">ventas@, gerencia@, info@, soporte@ configurados en tus dispositivos de escritorio y móvil.</span>
          </div>
        </div>
        <div className="flex items-start gap-3.5">
          <span className="text-[#e11d2e] font-bold mr-1">—</span>
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-slate-900 font-semibold">Botones inteligentes de cotización directa a WhatsApp</span>
            <span className="font-body-sm text-body-sm text-slate-600">Mensajes prellenados con el servicio o producto específico de consulta para facilitar el cierre.</span>
          </div>
        </div>
        <div className="flex items-start gap-3.5">
          <span className="text-[#e11d2e] font-bold mr-1">—</span>
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-slate-900 font-semibold">Soporte técnico preferencial y alta en Google</span>
            <span className="font-body-sm text-body-sm text-slate-600">Indexación inicial en motores de búsqueda y acompañamiento prioritario post-entrega.</span>
          </div>
        </div>
      </div>
      
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex items-center gap-3 my-4">
        <div className="text-xs text-slate-600">
          <strong className="text-slate-900 font-semibold">Póliza opcional de tranquilidad:</strong> Mantenimiento mensual, copias de seguridad semanales y cambios de contenido por solo <span className="text-[#e11d2e] font-bold">$25/mes</span> (totalmente opcional).
        </div>
      </div>
    </div>

    <div className="pt-3 mt-auto">
      <a className="w-full flex items-center justify-center gap-2 bg-[#e11d2e] hover:bg-[#b81524] text-white py-4 px-6 rounded-xl font-headline-sm text-headline-sm font-bold shadow-[0_8px_24px_-2px_rgba(225,29,46,0.35)] transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]" href="https://wa.me/584125063754?text=Hola%20Digital%20Drift,%20quiero%20empezar%20con%20el%20Plan%20Pyme%20Conversión%20de%20$280." rel="noopener noreferrer" target="_blank">
        <span className="">Quiero mi web lista →</span>
      </a>
      <div className="flex items-center justify-center gap-2 mt-3 font-body-sm text-body-sm text-slate-500">
        <span className="">Sin contratos • 100% tuya</span>
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
<div className="bg-white border border-slate-200 hover:border-[#e11d2e]/60 rounded-2xl p-space-lg shadow-sm hover:shadow-md flex flex-col justify-between relative group transition-all">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="text-4xl font-extrabold font-mono text-red-100 group-hover:text-[#e11d2e] transition-colors">01</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-slate-900 mb-space-xs">
            Cuestionario rápido de 5 minutos
          </h3>
<p className="font-body-sm text-body-sm text-slate-600 leading-relaxed">
            Nos cuentas sobre tu negocio, tus productos estrella y a quién quieres venderle. No necesitas preparar especificaciones ni terminología técnica.
          </p>
</div>

</div>
{/*  Step 2  */}
<div className="bg-white border border-slate-200 hover:border-[#e11d2e]/60 rounded-2xl p-space-lg shadow-sm hover:shadow-md flex flex-col justify-between relative group transition-all">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="text-4xl font-extrabold font-mono text-red-100 group-hover:text-[#e11d2e] transition-colors">02</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-slate-900 mb-space-xs">
            Revisión de tu demo interactiva
          </h3>
<p className="font-body-sm text-body-sm text-slate-600 leading-relaxed">
            Te enviamos un enlace privado y protegido para que navegues tu nueva web real desde tu teléfono, pruebes los botones y solicites ajustes.
          </p>
</div>

</div>
{/*  Step 3  */}
<div className="bg-white border border-slate-200 hover:border-[#e11d2e]/60 rounded-2xl p-space-lg shadow-sm hover:shadow-md flex flex-col justify-between relative group transition-all">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="text-4xl font-extrabold font-mono text-red-100 group-hover:text-[#e11d2e] transition-colors">03</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-slate-900 mb-space-xs">
            Lanzamiento oficial y puesta en marcha
          </h3>
<p className="font-body-sm text-body-sm text-slate-600 leading-relaxed">
            Conectamos tu dominio corporativo, configuramos los correos institucionales y empezamos a canalizar cotizaciones y prospectos directamente a tu WhatsApp.
          </p>
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
<h2 className="font-headline-xl text-headline-xl font-bold text-[#0f172a] tracking-tight">
          ¿Tienes dudas? Te las respondemos aquí
        </h2>
<p className="font-body-md text-body-md text-slate-600 mt-2">
          Lo que más nos preguntan antes de empezar.
        </p>
</div>
{/*  FAQ Items (HTML5 details/summary styling)  */}
<div className="flex flex-col gap-space-sm">
{/*  FAQ 1  */}
<details className="group bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 open:shadow-sm open:border-[#e11d2e]/40">
<summary className="flex items-center justify-between p-space-md cursor-pointer list-none select-none font-headline-sm text-headline-sm font-semibold text-slate-900">
<span className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-[#e11d2e]"></span>
              ¿Necesito saber de computación o programación?
            </span>
<span className="material-symbols-outlined text-[#e11d2e] transition-transform duration-300 group-open:rotate-180">
              expand_more
            </span>
</summary>
<div className="px-space-md pb-space-md pt-0 text-slate-600 font-body-md text-body-md leading-relaxed">
            No, para nada. Entregamos la web 100% terminada, probada y lista para operar comercialmente. Te proporcionamos además un mini manual audiovisual de 3 minutos para que veas cómo recibir y responder mensajes, y cuentas con nuestro soporte técnico continuo para cualquier actualización.
          </div>
</details>
{/*  FAQ 2  */}
<details className="group bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 open:shadow-sm open:border-[#e11d2e]/40">
<summary className="flex items-center justify-between p-space-md cursor-pointer list-none select-none font-headline-sm text-headline-sm font-semibold text-slate-900">
<span className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-[#e11d2e]"></span>
              ¿Cómo funciona la demo visual gratis antes de pagar?
            </span>
<span className="material-symbols-outlined text-[#e11d2e] transition-transform duration-300 group-open:rotate-180">
              expand_more
            </span>
</summary>
<div className="px-space-md pb-space-md pt-0 text-slate-600 font-body-md text-body-md leading-relaxed">
            Te mostramos una propuesta visual adaptada a tu rubro sin ningún tipo de compromiso comercial para que compruebes en primera persona la calidad gráfica, velocidad y fluidez de nuestro trabajo antes de abonar el anticipo de inicio de proyecto.
          </div>
</details>
{/*  FAQ 3  */}
<details className="group bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 open:shadow-sm open:border-[#e11d2e]/40">
<summary className="flex items-center justify-between p-space-md cursor-pointer list-none select-none font-headline-sm text-headline-sm font-semibold text-slate-900">
<span className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-[#e11d2e]"></span>
              ¿Qué pasa si no tengo fotos profesionales ni textos listos?
            </span>
<span className="material-symbols-outlined text-[#e11d2e] transition-transform duration-300 group-open:rotate-180">
              expand_more
            </span>
</summary>
<div className="px-space-md pb-space-md pt-0 text-slate-600 font-body-md text-body-md leading-relaxed">
            Nosotros nos encargamos de resolverlo. Redactamos textos comerciales orientados a la conversión y seleccionamos fotografía licenciada en alta definición acorde al sector de tu negocio, sin costos adicionales en tu paquete.
          </div>
</details>
{/*  FAQ 4  */}
<details className="group bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 open:shadow-sm open:border-[#e11d2e]/40">
<summary className="flex items-center justify-between p-space-md cursor-pointer list-none select-none font-headline-sm text-headline-sm font-semibold text-slate-900">
<span className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-[#e11d2e]"></span>
              ¿Cuáles son las formas de pago?
            </span>
<span className="material-symbols-outlined text-[#e11d2e] transition-transform duration-300 group-open:rotate-180">
              expand_more
            </span>
</summary>
<div className="px-space-md pb-space-md pt-0 text-slate-600 font-body-md text-body-md leading-relaxed">
            Aceptamos transferencias bancarias locales y pagos en USDT. La modalidad habitual es fraccionada: 50% para dar inicio al proyecto y el 50% restante al aprobar la web definitiva y lista para publicación.
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

<h2 className="font-headline-xl text-headline-xl md:text-display-hero font-extrabold text-[#0f172a] tracking-tight leading-tight mb-space-sm">
          Tu competencia ya se está digitalizando.<br className="hidden sm:inline" />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#e11d2e] to-[#e11d48]">
            No te quedes atrás.
          </span>
</h2>
<p className="font-body-lg text-body-lg text-slate-600 max-w-xl mb-space-lg">
          Escríbenos por WhatsApp o déjanos tus datos. Respondemos en menos de 10 minutos.
        </p>
{/*  Contact Actions (WhatsApp & Contact Form)  */}
<div className="flex flex-col items-center gap-8 mb-space-lg w-full">
  <a className="group inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-5 rounded-2xl font-headline-sm text-headline-sm font-black shadow-[0_12px_36px_rgba(37,211,102,0.45)] hover:shadow-[0_16px_48px_rgba(37,211,102,0.6)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]" href="https://wa.me/584125063754?text=Hola%20Digital%20Drift,%20quiero%20chatear%20con%20un%20especialista%20ahora." rel="noopener noreferrer" target="_blank">
    <svg className="w-7 h-7 fill-current transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.582 1.954.914 2.8.914h.005c3.18 0 5.767-2.587 5.768-5.766.002-3.18-2.584-5.768-5.767-5.768zm3.392 8.234c-.144.405-.837.774-1.17.823-.312.045-.694.06-2.12-.533-1.708-.709-2.813-2.45-2.898-2.564-.085-.114-.698-.929-.698-1.772 0-.844.441-1.258.599-1.428.158-.171.345-.214.46-.214.115 0 .23.002.331.007.107.006.251-.041.393.299.144.405.49 1.196.533 1.282.043.086.072.186.014.3-.058.115-.086.186-.172.286-.086.1-.182.224-.26.3-.086.086-.176.18-.076.352.101.171.448.74 0.963 1.198.663.59 1.222.773 1.394.858.172.086.273.072.374-.043.101-.115.432-.503.547-.675.115-.172.23-.143.388-.086.158.058 1.007.474 1.179.56.173.086.288.129.331.2.043.072.043.418-.101.823zM12.004 2C6.479 2 2 6.479 2 12.004c0 1.905.534 3.684 1.458 5.207L2 22l4.945-1.296A9.957 9.957 0 0012.004 22c5.525 0 10.004-4.479 10.004-10.004C22.008 6.479 17.529 2 12.004 2z"  />
    </svg>
    <span className="">Chatear por WhatsApp</span>
  </a>

  <div className="w-full max-w-xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 mt-2 text-left relative overflow-hidden group">
    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#e11d2e] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <h3 className="font-headline-sm text-headline-sm font-bold text-slate-900 mb-2">¿Prefieres detallarnos tu proyecto?</h3>
    <p className="text-sm text-slate-500 mb-6">Completa los datos y analizaremos tu caso para enviarte una cotización exacta. O escríbenos directamente a <strong className="font-semibold text-slate-700">contacto@digitaldriftagency.lat</strong>.</p>
    
    {/* Formulario conectado a formsubmit.co mediante AJAX */}
    {formStatus.state === 'success' ? (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center animate-fade-in">
        <h4 className="font-bold text-slate-900 text-lg mb-2">Solicitud enviada</h4>
        <p className="text-sm text-slate-600">Recibimos tus datos. Te contactaremos pronto.</p>
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
            <input type="text" name="Nombre" required disabled={formStatus.state === 'loading'} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#e11d2e]/20 focus:border-[#e11d2e] transition-all disabled:opacity-50" placeholder="Tu nombre" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Correo</label>
            <input type="email" name="Correo" required disabled={formStatus.state === 'loading'} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#e11d2e]/20 focus:border-[#e11d2e] transition-all disabled:opacity-50" placeholder="tucorreo@empresa.com" />
          </div>
        </div>
        
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Presupuesto Estimado</label>
          <div className="relative">
            <select name="Presupuesto" disabled={formStatus.state === 'loading'} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#e11d2e]/20 focus:border-[#e11d2e] transition-all appearance-none cursor-pointer disabled:opacity-50">
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
          <textarea name="Mensaje" required disabled={formStatus.state === 'loading'} rows="4" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#e11d2e]/20 focus:border-[#e11d2e] transition-all resize-none disabled:opacity-50" placeholder="¿De qué trata tu negocio y qué necesitas lograr con la web?"></textarea>
        </div>

        {formStatus.state === 'error' && (
          <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm font-medium border border-red-200 text-center">
            {formStatus.message}
          </div>
        )}

        <button type="submit" disabled={formStatus.state === 'loading'} className="mt-2 w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-600 text-white font-bold text-sm py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
          {formStatus.state === 'loading' ? 'Enviando...' : 'Enviar Solicitud de Cotización'}
          {formStatus.state !== 'loading' && <span className="">→</span>}
        </button>
      </form>
    )}
  </div>
</div>
{/*  Trust Guarantee Footnote  */}
<p className="text-slate-500 font-body-sm text-body-sm mt-6">
  Respuesta promedio: menos de 10 min · Diagnóstico gratuito · Trato confidencial
</p>
</div>
</div>
</section>
</div></main>
{/*  =================================================================  */}
{/*  NUEVA SECCIÓN: Equipo Fundador                                     */}
{/*  =================================================================  */}
<section data-aos="fade-up" id="equipo" className="w-full max-w-[1280px] mx-auto px-gutter-mobile md:px-margin py-space-xl">
  <div className="text-center max-w-2xl mx-auto mb-8">
    <div className="inline-block bg-red-50 text-[#e11d2e] border border-red-200 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-2">
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
    <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#e11d2e]/50 hover:shadow-md transition-all flex flex-col items-center text-center">
      <div className="h-12 w-12 rounded-xl bg-slate-900 text-white font-bold flex items-center justify-center mb-4 text-xl">SS</div>
      <h3 className="font-bold text-slate-900 text-lg">Santiago Sánchez</h3>
      <span className="text-[#e11d2e] font-semibold text-xs uppercase tracking-wide mt-1 mb-3">Desarrollo &amp; Infraestructura Web</span>
      <p className="text-slate-600 text-sm leading-relaxed">Garantiza tiempos de carga ultrarrápidos, seguridad SSL y conexión directa a WhatsApp.</p>
    </div>
    {/*  Tarjeta 2  */}
    <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#e11d2e]/50 hover:shadow-md transition-all flex flex-col items-center text-center">
      <div className="h-12 w-12 rounded-xl bg-slate-900 text-white font-bold flex items-center justify-center mb-4 text-xl">MP</div>
      <h3 className="font-bold text-slate-900 text-lg">Moisés Porras</h3>
      <span className="text-[#e11d2e] font-semibold text-xs uppercase tracking-wide mt-1 mb-3">Diseño &amp; Experiencia de Usuario (UI/UX)</span>
      <p className="text-slate-600 text-sm leading-relaxed">Interfaces limpias, estéticas modernas y diseño 100% optimizado para pantallas móviles.</p>
    </div>
    {/*  Tarjeta 3  */}
    <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#e11d2e]/50 hover:shadow-md transition-all flex flex-col items-center text-center">
      <div className="h-12 w-12 rounded-xl bg-slate-900 text-white font-bold flex items-center justify-center mb-4 text-xl">SV</div>
      <h3 className="font-bold text-slate-900 text-lg">Santihel Valero</h3>
      <span className="text-[#e11d2e] font-semibold text-xs uppercase tracking-wide mt-1 mb-3">Estrategia Comercial &amp; Cierre</span>
      <p className="text-slate-600 text-sm leading-relaxed">Estructura catálogos y propuestas visuales enfocadas en retorno de inversión para negocios.</p>
    </div>
  </div>
</section>

<footer className="w-full bg-slate-900 border-t border-slate-800 text-slate-300 mt-space-xl">
  <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-margin py-space-xl">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg mb-space-lg">
      <div className="md:col-span-5 flex flex-col gap-space-sm">
        <div className="flex items-center gap-space-xs">
          <img alt="Digital Drift Logo" className="h-8 w-auto object-contain" src="/img/logo-digital-drift-footer.webp" />
          <div className="font-headline-sm text-headline-sm leading-none">
            <span className="text-white font-bold">Digital</span> <span className="text-[#e11d2e] font-bold">Drift</span>
          </div>
        </div>
        <p className="font-body-sm text-body-sm text-slate-400 max-w-sm">Diseño web profesional para negocios que quieren vender más.</p>
      </div>
      <div className="md:col-span-2 flex flex-col gap-space-xs">
        <span className="text-white font-bold uppercase tracking-wider text-xs mb-3">Soluciones</span>
        <a className="font-body-sm text-body-sm text-slate-400 hover:text-white transition-colors" href="#demos">Demos</a>
        <a className="font-body-sm text-body-sm text-slate-400 hover:text-white transition-colors" href="#paquetes">Paquetes</a>
        <a className="font-body-sm text-body-sm text-slate-400 hover:text-white transition-colors" href="#proceso">Proceso</a>
      </div>
      <div className="md:col-span-2 flex flex-col gap-space-xs">
        <span className="text-white font-bold uppercase tracking-wider text-xs mb-3">Compañía</span>
        <a className="font-body-sm text-body-sm text-slate-400 hover:text-white transition-colors" href="#proceso">Acerca de Digital Drift</a>
        <a className="font-body-sm text-body-sm text-slate-400 hover:text-white transition-colors" href="#preguntas">FAQ &amp; Seguridad</a>
        <a className="font-body-sm text-body-sm text-slate-400 hover:text-white transition-colors" href="#contacto">Contacto Directo</a>
      </div>
      <div className="md:col-span-3 flex flex-col gap-space-sm">
        <span className="text-white font-bold uppercase tracking-wider text-xs mb-3">Contacto</span>
        <p className="font-body-sm text-body-sm text-slate-400">Escríbenos para cualquier consulta.</p>
        <div className="flex items-center gap-4 mt-2">
          <a href="https://www.facebook.com/share/18YjrMjL1J/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#e11d2e] transition-colors" aria-label="Facebook de Digital Drift Agency">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/digitaldrift_agency/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#e11d2e] transition-colors" aria-label="Instagram de Digital Drift Agency">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
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
