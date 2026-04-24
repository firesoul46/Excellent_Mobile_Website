import { useState } from "react";
import { 
  Phone, Clock, ShieldCheck, MapPin, Star, Smartphone, 
  Battery, Zap, Droplets, CheckCircle2, Menu, X, 
  MessageCircle, ChevronRight, Wrench 
} from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phone1 = "9620177228";
  const phone1Display = "96201 77228";
  const phone2 = "8147053866";
  const phone2Display = "81470 53866";

  const services = [
    { 
      name: "Screen Replacement", 
      desc: "Same-day display replacement with original parts.", 
      icon: Smartphone,
      img: "https://d3nevzfk7ii3be.cloudfront.net/igi/nKTJX11kD1JwUlnk.full" 
    },
    { 
      name: "Battery Replacement", 
      desc: "Genuine batteries to restore your phone's life.", 
      icon: Battery,
      img: "https://www.imore.com/sites/imore.com/files/styles/larger_wm_brw/public/field/image/2014/04/battery_removal_diy_howto_7.jpg?itok=Yp37L9Ux" 
    },
    { 
      name: "Charging Issues", 
      desc: "Quick fixes for loose or non-working charging ports.", 
      icon: Zap,
      img: "https://cdn.shopify.com/s/files/1/0027/5683/7411/files/img-bp-usb-cable-text-1c-mb.jpg" 
    },
    { 
      name: "Water Damage", 
      desc: "Professional drying and component repair.", 
      icon: Droplets,
      img: "https://mljjxqhpratf.i.optimole.com/w:1024/h:1024/q:100/f:best/https://www.mobile-experts.com.au/wp-content/uploads/2020/11/phone-battery-replacement.jpg" 
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#1D1D1F] selection:bg-[#0A84FF]/20 selection:text-[#1D1D1F]">
      
      {/* 1. HEADER */}
      <header className="sticky top-0 z-[100] bg-white/80 backdrop-blur-md border-b border-[#F5F5F7]">
        <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Smartphone size={20} strokeWidth={2.5} />
            <span className="font-bold text-lg tracking-tight">Excellent Mobile</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-[12px] font-semibold text-[#6E6E73] uppercase tracking-wider">
            <a href="#services" className="hover:text-[#0A84FF] transition-colors">Services</a>
            <a href="#why-us" className="hover:text-[#0A84FF] transition-colors">Quality</a>
            <a href="#testimonials" className="hover:text-[#0A84FF] transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-[#0A84FF] transition-colors">Store</a>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a href={`tel:${phone1}`} className="text-[13px] font-medium text-[#1D1D1F] hover:text-[#0A84FF]">{phone1Display}</a>
            <a href={`tel:${phone1}`} className="bg-[#0A84FF] text-white px-4 py-1.5 rounded-full text-[13px] font-semibold hover:bg-[#0071E3] transition-all">Call Shop</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-[#F5F5F7] p-8 space-y-6">
            <a href="#services" className="block text-2xl font-semibold" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#why-us" className="block text-2xl font-semibold" onClick={() => setIsMenuOpen(false)}>Quality</a>
            <a href="#testimonials" className="block text-2xl font-semibold" onClick={() => setIsMenuOpen(false)}>Reviews</a>
            <a href="#contact" className="block text-2xl font-semibold" onClick={() => setIsMenuOpen(false)}>Store</a>
          </div>
        )}
      </header>

      {/* 2. HERO */}
      <section className="relative pt-24 pb-32 md:pt-40 md:pb-48 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-[#6E6E73] text-[14px] font-semibold uppercase tracking-widest">
                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                <span>5.0 Rated Jayanagar Expert</span>
              </div>
              <h1 className="text-[48px] md:text-[72px] font-bold leading-[1.05] tracking-tight text-[#1D1D1F]">
                Phone Repair. <br />
                <span className="text-[#6E6E73]">Done in 1 Hour.</span>
              </h1>
              <p className="text-[19px] md:text-[21px] text-[#6E6E73] leading-relaxed max-w-[480px] mx-auto md:mx-0">
                Trusted mobile repair in Jayanagar with original parts and guaranteed service. Same-day restoration for all major brands.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a href={`tel:${phone1}`} className="bg-[#1D1D1F] text-white px-8 py-4 rounded-full font-semibold text-[17px] hover:bg-[#333336] transition-all">Call Now</a>
                <a href={`https://wa.me/91${phone1}`} target="_blank" className="bg-white text-[#30D158] border border-[#30D158] px-8 py-4 rounded-full font-semibold text-[17px] hover:bg-[#25b84c] hover:text-white transition-all">WhatsApp Us</a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F7] to-white rounded-[4rem] -rotate-3 blur-sm"></div>
              <div className="relative z-10 w-full max-w-[400px] mx-auto bg-white rounded-[3rem] p-4 shadow-2xl border border-[#F5F5F7]">
                <div className="aspect-[9/16] bg-[#F5F5F7] rounded-[2.5rem] flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F7] to-white"></div>
                  <div className="relative z-10 flex flex-col items-center gap-6">
                    <div className="relative">
                      <Smartphone size={120} strokeWidth={0.5} className="text-[#D2D2D7]" />
                      <Wrench size={48} strokeWidth={1.5} className="absolute -bottom-2 -right-2 text-[#0A84FF] animate-bounce" />
                    </div>
                    <div className="text-center space-y-1">
                      <p className="text-[12px] font-bold text-[#86868B] uppercase tracking-widest">Certified Service</p>
                      <p className="text-[16px] font-bold text-[#1D1D1F]">Master Technician</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRO SERVICES */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-[40px] md:text-[56px] font-bold tracking-tight text-[#1D1D1F] mb-4">Pro Services.</h2>
            <p className="text-[21px] text-[#6E6E73] max-w-[600px]">Precision engineering meets master-level technical skill.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, i) => (
              <div key={i} className="group relative bg-[#1D1D1F] rounded-[2.5rem] overflow-hidden aspect-[16/9] hover:shadow-2xl transition-all duration-700">
                <img src={service.img} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-10 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-2 text-white/80">
                    <service.icon size={24} strokeWidth={2} />
                  </div>
                  <p className="text-[18px] font-bold text-white max-w-[320px] leading-relaxed mb-6">{service.desc}</p>
                  <a href={`tel:${phone1}`} className="inline-flex items-center text-white font-semibold text-[15px] group/link">
                    Book Repair <ChevronRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. QUALITY TEMPLATE (WHY US) */}
      <section id="why-us" className="py-32 bg-[#F5F5F7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-[40px] md:text-[56px] font-bold tracking-tight text-[#1D1D1F] leading-[1.1] mb-10 text-center md:text-left">
                We don’t just repair. <br /><span className="text-[#6E6E73]">We restore.</span>
              </h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0"><ShieldCheck className="text-[#0A84FF]" /></div>
                  <div>
                    <h4 className="text-[19px] font-bold text-[#1D1D1F] mb-1">Original Parts Only</h4>
                    <p className="text-[#6E6E73]">We use genuine components to maintain your device's integrity.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0"><Zap className="text-[#0A84FF]" /></div>
                  <div>
                    <h4 className="text-[19px] font-bold text-[#1D1D1F] mb-1">Precision Repairs</h4>
                    <p className="text-[#6E6E73]">Every screw and gasket is handled with master-level technical skill.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0"><Clock className="text-[#0A84FF]" /></div>
                  <div>
                    <h4 className="text-[19px] font-bold text-[#1D1D1F] mb-1">1-Hour Turnaround</h4>
                    <p className="text-[#6E6E73]">Our process means you're back on your feet in under 60 minutes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex bg-white rounded-[3rem] p-12 shadow-sm border border-[#E5E5E7] aspect-square items-center justify-center">
              <div className="relative">
                <Smartphone size={200} strokeWidth={0.5} className="text-[#D2D2D7] rotate-6" />
                <Wrench size={60} strokeWidth={1} className="absolute bottom-0 right-0 text-[#1D1D1F] translate-x-4 translate-y-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CUSTOMER REVIEWS */}
      <section id="testimonials" className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[40px] md:text-[56px] font-bold tracking-tight text-[#1D1D1F] mb-4">Trusted by Thousands.</h2>
            <div className="flex justify-center gap-1 text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Best service and repair of mobile in 1 hour. Experience was great.", name: "Syed Asif" },
              { text: "Best service in one day for display and good guarantee accessories.", name: "Local Customer" },
              { text: "Best quality products with guarantee. Original parts used.", name: "Happy Client" },
            ].map((t, i) => (
              <div key={i} className="bg-white border border-[#F5F5F7] p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="flex text-[#0A84FF] mb-6 gap-0.5">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <p className="text-[17px] text-[#1D1D1F] font-medium leading-relaxed mb-8 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F5F5F7] flex items-center justify-center text-[11px] font-bold text-[#6E6E73]">{t.name[0]}</div>
                  <span className="text-[15px] font-bold text-[#6E6E73]">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STORE LOCATION */}
      <section id="contact" className="py-32 bg-[#F5F5F7]">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-[40px] md:text-[56px] font-bold tracking-tight">Our Store. <br /><span className="text-[#6E6E73]">In Jayanagar.</span></h2>
            <p className="text-[21px] font-medium leading-relaxed max-w-[400px]">
              #36, 8th Cross Rd, opp. Meraj School, Jayanagar 1st Block, Bengaluru, 560011
            </p>
            <div className="space-y-4">
              <p className="text-[12px] font-bold text-[#6E6E73] uppercase tracking-widest">Store Hotlines</p>
              <div className="flex flex-col gap-1 text-[17px] font-bold text-[#0A84FF]">
                <a href={`tel:${phone1}`}>{phone1Display}</a>
                <a href={`tel:${phone2}`}>{phone2Display}</a>
              </div>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=Excellent+Mobile+Jayanagar" target="_blank" className="inline-flex items-center bg-[#1D1D1F] text-white px-8 py-4 rounded-full font-semibold text-[17px] hover:bg-[#333336] transition-all">Get Directions <ChevronRight size={18} className="ml-2" /></a>
          </div>
          <div className="aspect-square bg-white rounded-[3rem] overflow-hidden border border-[#E5E5E7] shadow-2xl">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.583321528624!2d77.589885!3d12.934485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15082d688463%3A0xc39542c94318712e!2sExcellent%20Mobile!5e0!3m2!1sen!2sin!4v1713695245892!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" className="grayscale hover:grayscale-0 transition-all duration-1000"></iframe>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-20 border-t border-[#F5F5F7]">
        <div className="max-w-[1200px] mx-auto px-6 text-center text-[12px] text-[#86868B] font-medium">
          <p>© {new Date().getFullYear()} Excellent Mobile. Trusted mobile repair in Jayanagar, Bengaluru.</p>
        </div>
      </footer>

      {/* MOBILE BAR */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-[100] flex gap-3">
        <a href={`tel:${phone1}`} className="flex-1 bg-[#1D1D1F] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-2xl active:scale-[0.98] transition-transform">
          <Phone size={20} fill="white" /> Call Now
        </a>
        <a href={`https://wa.me/91${phone1}`} target="_blank" className="bg-[#30D158] text-white p-4 rounded-2xl shadow-2xl flex items-center justify-center active:scale-[0.98] transition-transform">
          <MessageCircle size={24} fill="white" />
        </a>
      </div>

    </div>
  );
}
