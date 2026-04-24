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
    <div className="min-h-screen bg-white font-sans text-[#1D1D1F]">
      {/* HEADER */}
      <header className="sticky top-0 z-[100] bg-white/80 backdrop-blur-md border-b border-[#F5F5F7]">
        <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-lg"><Smartphone size={20}/> Excellent Mobile</div>
          <nav className="hidden md:flex gap-8 text-[12px] font-semibold text-[#6E6E73] uppercase tracking-wider">
            <a href="#services">Services</a>
            <a href="#contact">Store</a>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${phone1}`} className="bg-[#0A84FF] text-white px-4 py-1.5 rounded-full text-[13px] font-semibold">Call Shop</a>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X/> : <Menu/>}</button>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-24 pb-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-[#6E6E73] text-[14px] font-semibold uppercase">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <span>5.0 Rated Jayanagar Expert</span>
            </div>
            <h1 className="text-[48px] md:text-[72px] font-bold leading-tight">Phone Repair. <br /><span className="text-[#6E6E73]">Done in 1 Hour.</span></h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href={`tel:${phone1}`} className="bg-[#1D1D1F] text-white px-8 py-4 rounded-full font-semibold">Call Now</a>
              <a href={`https://wa.me/91${phone1}`} target="_blank" className="bg-[#30D158] text-white px-8 py-4 rounded-full font-semibold">WhatsApp Us</a>
            </div>
          </div>
          <div className="aspect-[9/16] bg-[#F5F5F7] rounded-[3rem] p-8 shadow-2xl flex flex-col items-center justify-center gap-6">
            <Smartphone size={120} strokeWidth={0.5} className="text-[#D2D2D7]" />
            <Wrench size={48} className="text-[#0A84FF] animate-bounce" />
            <p className="font-bold text-[#1D1D1F]">Master Technician</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[40px] md:text-[56px] font-bold mb-20">Pro Services.</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, i) => (
              <div key={i} className="group relative bg-[#1D1D1F] rounded-[2.5rem] overflow-hidden aspect-[16/9] hover:shadow-2xl transition-all">
                <img src={service.img} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 p-10 flex flex-col justify-end">
                  <service.icon size={24} className="text-white/80 mb-4" />
                  <p className="text-[18px] font-bold text-white max-w-[320px] mb-6">{service.desc}</p>
                  <a href={`tel:${phone1}`} className="text-white font-semibold flex items-center group-hover:translate-x-1 transition-transform">Book Repair <ChevronRight size={16} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section id="contact" className="py-32 bg-[#F5F5F7]">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-[40px] md:text-[56px] font-bold">Our Store. <br /><span className="text-[#6E6E73]">In Jayanagar.</span></h2>
            <p className="text-[21px] font-medium">#36, 8th Cross Rd, Jayanagar 1st Block, Bengaluru, 560011</p>
            <a href="https://www.google.com/maps/search/?api=1&query=Excellent+Mobile+Jayanagar" target="_blank" className="bg-[#1D1D1F] text-white px-8 py-4 rounded-full font-semibold inline-block">Get Directions</a>
          </div>
          <div className="aspect-square bg-white rounded-[3rem] overflow-hidden shadow-2xl">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.583321528624!2d77.589885!3d12.934485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15082d688463%3A0xc39542c94318712e!2sExcellent%20Mobile!5e0!3m2!1sen!2sin!4v1713695245892!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" className="grayscale hover:grayscale-0 transition-all duration-1000"></iframe>
          </div>
        </div>
      </section>

      {/* MOBILE BAR */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-[100] flex gap-3">
        <a href={`tel:${phone1}`} className="flex-1 bg-[#1D1D1F] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-2xl">
          <Phone size={20} fill="white" /> Call Now
        </a>
        <a href={`https://wa.me/91${phone1}`} target="_blank" className="bg-[#30D158] text-white p-4 rounded-2xl shadow-2xl flex items-center justify-center">
          <MessageCircle size={24} fill="white" />
        </a>
      </div>
    </div>
  );
}
