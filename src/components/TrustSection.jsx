import React from 'react';
import { ShieldCheck, CheckCircle, FileText, Info } from 'lucide-react';

const TrustSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-charcoal-900 dark:bg-charcoal-950 text-white relative overflow-hidden transition-colors duration-500">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      {/* Abstract glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent-slate/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent-emerald/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 max-w-6xl mx-auto">
          
          <div className="md:w-1/3 text-center md:text-left">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/5 text-ivory-100 mb-8 border border-white/10 shadow-premium-dark backdrop-blur-sm">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">How this guide stays reliable</h2>
            <p className="text-charcoal-300 text-lg md:text-xl font-light leading-relaxed">
              We believe in civic education that is accessible, transparent, and completely neutral.
            </p>
          </div>
          
          <div className="md:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-300 group">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent-emerald/10 flex items-center justify-center border border-accent-emerald/20 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 text-accent-emerald" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white mb-2">Strictly Educational</h3>
                  <p className="text-base text-charcoal-300 font-light leading-relaxed">Designed solely to explain the process, not to influence outcomes or promote any ideology.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-300 group">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent-slate/10 flex items-center justify-center border border-accent-slate/20 group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6 text-accent-slate" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white mb-2">Factual & Source-Based</h3>
                  <p className="text-base text-charcoal-300 font-light leading-relaxed">Information is structured around standard democratic processes and official guidelines.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-300 group">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent-violet/10 flex items-center justify-center border border-accent-violet/20 group-hover:scale-110 transition-transform">
                  <Info className="w-6 h-6 text-accent-violet" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white mb-2">Plain Language</h3>
                  <p className="text-base text-charcoal-300 font-light leading-relaxed">We translate complex legal and political jargon into simple terms everyone can understand.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-300 group">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent-gold/10 flex items-center justify-center border border-accent-gold/20 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-accent-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white mb-2">Non-Partisan</h3>
                  <p className="text-base text-charcoal-300 font-light leading-relaxed">No party logos, no candidate bias. Just the clear facts about how the system works.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
