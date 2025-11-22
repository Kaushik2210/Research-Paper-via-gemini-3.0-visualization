import React, { useState, useEffect } from 'react';
import { Section } from './components/Section';
import { Navigation } from './components/Navigation';
import { MechanismCard } from './components/MechanismCard';
import { DetectionChart } from './components/DetectionChart';
import { SectionId } from './types';
import { AlertTriangle, CheckCircle, Lock, Mic, Video, Globe, TrendingUp, Search, MonitorPlay, Brain } from 'lucide-react';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 overflow-x-hidden">
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />

      <div className="md:pl-64 transition-all duration-300">
        
        {/* HERO SECTION */}
        <Section id={SectionId.HERO} className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://picsum.photos/1920/1080?grayscale&blur=10')] bg-cover opacity-5 dark:opacity-10 z-0"></div>
          <div className="relative z-10 text-center md:text-left space-y-8">
            <div className="inline-block px-4 py-1 bg-indigo-100 border border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-500/20 rounded-full text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-widest uppercase mb-4">
              Research Visualization
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-slate-900 dark:text-white">
              Deepfakes & <br />
              <span className="gradient-text">Synthetic Media</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Navigating Emerging Trends, Challenges, and Future Directions through Empirical Case Studies.
            </p>
            <div className="flex flex-col md:flex-row gap-6 pt-8 text-sm text-slate-500">
              <div>
                <span className="block text-slate-800 dark:text-slate-300 font-semibold">Sodagum Venkata Kaushik</span>
                Department of Computer Science
              </div>
              <div className="hidden md:block w-px bg-slate-300 dark:bg-slate-800"></div>
              <div>
                <span className="block text-slate-800 dark:text-slate-300 font-semibold">A M Bojamma</span>
                Assistant Professor
              </div>
            </div>
          </div>
        </Section>

        {/* MECHANISMS SECTION */}
        <Section id={SectionId.MECHANISMS}>
          <div className="space-y-12">
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">The Engine of Deception</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Deep learning algorithms drive the creation of hyper-realistic media. The paper identifies four primary neural network architectures that make this possible.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MechanismCard 
                iconType="ann"
                title="Artificial Neural Network" 
                abbr="ANN"
                description="Inspired by the human brain, ANNs consist of input, hidden, and output layers. They form the foundational basis for deep learning computations."
              />
              <MechanismCard 
                iconType="cnn"
                title="Convolutional Neural Network" 
                abbr="CNN"
                description="Specialized for grid pattern processing like images. They automatically learn features from low to high-level patterns without human intervention."
              />
              <MechanismCard 
                iconType="rnn"
                title="Recurrent Neural Network" 
                abbr="RNN"
                description="Designed for sequential data like audio and time-series. A powerhouse for identifying fakes by detecting temporal inconsistencies in video."
              />
              <MechanismCard 
                iconType="gan"
                title="Generative Adversarial Network" 
                abbr="GAN"
                description="The core of modern deepfakes. A 'Generator' creates fakes while a 'Discriminator' tries to detect them, constantly improving each other in a zero-sum game."
              />
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-500/20 p-8 rounded-2xl mt-12">
               <div className="flex flex-col md:flex-row items-center gap-8">
                  <img src="https://picsum.photos/300/200?grayscale" alt="Deepfake process visualization" className="rounded-lg opacity-80 dark:opacity-70 mix-blend-normal dark:mix-blend-luminosity w-full md:w-1/3 object-cover h-48 shadow-md dark:shadow-none" />
                  <div>
                    <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">The 2016 Turning Point</h3>
                    <p className="text-slate-700 dark:text-slate-300">
                       While deep learning has roots going back decades, the term "Deepfake" exploded in late 2017 on Reddit. However, academic foundations were laid in 2016 by Justus Thies et al. regarding real-time face capture and re-enactment.
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </Section>

        {/* IMPACTS SECTION */}
        <Section id={SectionId.IMPACTS}>
          <div className="space-y-16">
            <div className="text-center max-w-4xl mx-auto">
               <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">Affordances & Constraints</h2>
               <p className="text-slate-600 dark:text-slate-400">The technology is a double-edged sword, offering creative revolution while posing severe societal risks.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Affordances */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-500/10 rounded-full text-emerald-600 dark:text-emerald-400">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">The Benefits</h3>
                </div>
                
                <div className="group relative p-6 bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:border-emerald-500/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10 dark:hover:shadow-emerald-900/20 overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/10 dark:group-hover:bg-emerald-500/20 transition-all duration-500"></div>
                  <div className="relative flex items-start gap-4 z-10">
                    <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-900/50 text-emerald-600 dark:text-emerald-500 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300">
                        <MonitorPlay className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">Entertainment Revolution</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">Resurrecting deceased actors, de-aging stars, and creating realistic fictional worlds at a fraction of the cost.</p>
                    </div>
                  </div>
                </div>

                <div className="group relative p-6 bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:border-emerald-500/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10 dark:hover:shadow-emerald-900/20 overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/10 dark:group-hover:bg-emerald-500/20 transition-all duration-500"></div>
                  <div className="relative flex items-start gap-4 z-10">
                    <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-900/50 text-emerald-600 dark:text-emerald-500 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300">
                        <Mic className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">Accessibility & Dubbing</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">Seamless lip-syncing for multi-language movie dubbing and assisting individuals with voice loss.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Constraints */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-rose-100 dark:bg-rose-500/10 rounded-full text-rose-600 dark:text-rose-400">
                    <AlertTriangle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-rose-600 dark:text-rose-400">The Risks</h3>
                </div>
                
                <div className="group relative p-6 bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:border-rose-500/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-500/10 dark:hover:shadow-rose-900/20 overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-rose-500/5 dark:bg-rose-500/10 rounded-full blur-2xl group-hover:bg-rose-500/10 dark:group-hover:bg-rose-500/20 transition-all duration-500"></div>
                  <div className="relative flex items-start gap-4 z-10">
                    <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-900/50 text-rose-600 dark:text-rose-500 group-hover:bg-rose-100 dark:group-hover:bg-rose-500/20 group-hover:scale-110 transition-all duration-300">
                        <Lock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-slate-200 group-hover:text-rose-600 dark:group-hover:text-rose-300 transition-colors">Psychological & Social Harm</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">Non-consensual pornography, reputation damage, and distress caused by realistic fake scenarios involving individuals.</p>
                    </div>
                  </div>
                </div>

                <div className="group relative p-6 bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:border-rose-500/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-500/10 dark:hover:shadow-rose-900/20 overflow-hidden">
                   <div className="absolute -right-10 -top-10 w-32 h-32 bg-rose-500/5 dark:bg-rose-500/10 rounded-full blur-2xl group-hover:bg-rose-500/10 dark:group-hover:bg-rose-500/20 transition-all duration-500"></div>
                  <div className="relative flex items-start gap-4 z-10">
                    <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-900/50 text-rose-600 dark:text-rose-500 group-hover:bg-rose-100 dark:group-hover:bg-rose-500/20 group-hover:scale-110 transition-all duration-300">
                        <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-slate-200 group-hover:text-rose-600 dark:group-hover:text-rose-300 transition-colors">Financial Fraud</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">Impersonating CEOs for illicit transactions (CEO Fraud) and manipulating stock markets via fake news.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* POLITICS SECTION */}
        <Section id={SectionId.POLITICS}>
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-600/10 dark:bg-indigo-600/20 rounded-full blur-3xl"></div>
            <h2 className="text-4xl font-bold mb-12 relative z-10 text-slate-900 dark:text-white">Case Study: Democracy at Risk</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-t-4 border-blue-500 shadow-lg border-x border-b border-slate-200 dark:border-slate-700">
                <div className="text-xs font-bold text-blue-500 dark:text-blue-400 uppercase tracking-widest mb-2">USA</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">The Election Integrity</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Deepfakes of Joe Biden and Donald Trump have circulated, from singing songs to fake arrests. Integrity Institute notes major elections affect 3.65 billion people.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-t-4 border-red-500 shadow-lg border-x border-b border-slate-200 dark:border-slate-700">
                <div className="text-xs font-bold text-red-500 dark:text-red-400 uppercase tracking-widest mb-2">Turkiye</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">Presidential Feud</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  In 2023, opposition leaders were accused via AI montages. A candidate withdrew due to deepfake pornographic content circulation.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-t-4 border-sky-400 shadow-lg border-x border-b border-slate-200 dark:border-slate-700">
                <div className="text-xs font-bold text-sky-500 dark:text-sky-400 uppercase tracking-widest mb-2">Argentina</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">The Meme War</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                   Candidates depicted as zombies or madmen in AI posters. Used abundantly to discredit opposition self-esteem during campaigning.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-t-4 border-orange-500 shadow-lg border-x border-b border-slate-200 dark:border-slate-700">
                <div className="text-xs font-bold text-orange-500 dark:text-orange-400 uppercase tracking-widest mb-2">India</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">Audio Scandals</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Audio clips of politicians (e.g., Palanivel Thiagarajan) admitting to corruption were circulated and later denied as deepfakes.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* DETECTION SECTION */}
        <Section id={SectionId.DETECTION}>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">The Detection Arms Race</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Can "Beautification Filters" fool AI detectors? The paper analyzes three models: <strong>CADDM, RECCE, and FTCN</strong>.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                The study found that when deepfakes are overlayed with social media beautification filters (like those on Instagram), detection accuracy drops significantly.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-3">
                   <Search className="text-indigo-600 dark:text-indigo-400 shrink-0 mt-1" />
                   <div>
                     <h4 className="font-bold text-slate-900 dark:text-slate-200">CADDM</h4>
                     <p className="text-xs text-slate-500">Traces forgery on frame levels using EfficientNet-b4.</p>
                   </div>
                </div>
                <div className="flex items-start gap-3">
                   <Video className="text-indigo-600 dark:text-indigo-400 shrink-0 mt-1" />
                   <div>
                     <h4 className="font-bold text-slate-900 dark:text-slate-200">RECCE</h4>
                     <p className="text-xs text-slate-500">Reconstruction-classification learning based on Xception.</p>
                   </div>
                </div>
                <div className="flex items-start gap-3">
                   <Globe className="text-indigo-600 dark:text-indigo-400 shrink-0 mt-1" />
                   <div>
                     <h4 className="font-bold text-slate-900 dark:text-slate-200">FTCN</h4>
                     <p className="text-xs text-slate-500">Finds temporal inconsistencies using 3DCNN.</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
               <DetectionChart isDark={isDark} />
               <p className="text-center text-xs text-slate-500 mt-4 italic">
                 Data Source: Table 2 from the research paper (AUC scores). Note the significant drop in the red bars.
               </p>
            </div>
          </div>
        </Section>

        {/* FUTURE SECTION */}
        <Section id={SectionId.FUTURE} className="bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-950 dark:to-slate-900">
          <div className="max-w-4xl mx-auto text-center space-y-12">
             <div className="inline-block p-4 bg-white dark:bg-slate-800 rounded-full mb-6 shadow-lg">
               <Brain className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
             </div>
             
             <h2 className="text-5xl font-bold font-serif text-slate-900 dark:text-white">Future Directions</h2>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="bg-white/80 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-300 mb-3">Transfer Learning</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Improvising knowledge acquired by studying one dataset to solve problems in others, optimizing data usage.</p>
                </div>
                <div className="bg-white/80 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-300 mb-3">Anomaly Detection</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Focusing on finding patterns that deviate from the norm to better identify synthesized flaws like blinking irregularities.</p>
                </div>
                <div className="bg-white/80 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-300 mb-3">Reinforcement Learning</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Using Deep Reinforcement Learning to reduce wait times and computation costs for real-time detection.</p>
                </div>
             </div>

             <div className="pt-16 border-t border-slate-200 dark:border-slate-800">
               <p className="text-slate-500 italic">
                 "Deepfake detection has greatly evolved... presenting both potential risks with benefits."
               </p>
               <p className="text-xs text-slate-600 dark:text-slate-600 mt-4">
                 Visualized based on: Sodagum Venkata Kaushik & A M Bojamma, 2024.
               </p>
             </div>
          </div>
        </Section>

      </div>
    </div>
  );
};

export default App;