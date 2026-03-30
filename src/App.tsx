/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  ChefHat, 
  Clock, 
  Users, 
  Flame, 
  Heart, 
  ChevronRight, 
  Menu as MenuIcon,
  X,
  Instagram,
  Facebook,
  Share2,
  Palette,
  Type,
  Layout as LayoutIcon,
  MessageSquare,
  ArrowRight,
  Leaf
} from "lucide-react";

const RECIPES = [
  {
    id: 1,
    title: "Massa Artesanal com Molho de Sálvia",
    category: "Massas",
    time: "45 min",
    servings: "2 pessoas",
    calories: "420 kcal",
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=800",
    description: "Uma massa leve e aromática, perfeita para um jantar tranquilo."
  },
  {
    id: 2,
    title: "Bowl de Quinoa e Legumes Assados",
    category: "Vegetariano",
    time: "30 min",
    servings: "1 pessoa",
    calories: "350 kcal",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    description: "Nutrição e cor em um prato equilibrado e cheio de texturas."
  },
  {
    id: 3,
    title: "Torta Rústica de Frutas Vermelhas",
    category: "Sobremesas",
    time: "60 min",
    servings: "8 fatias",
    calories: "280 kcal/fat",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=800",
    description: "A doçura natural das frutas em uma massa crocante e amanteigada."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showStyleGuide, setShowStyleGuide] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-recipe-primary/20">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-recipe-bg/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ChefHat className="w-6 h-6 text-recipe-primary" />
            <span className="font-serif text-2xl font-medium tracking-tight">Sabor & Arte</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {["Receitas", "Categorias", "Sobre", "Contato"].map((item) => (
              <a key={item} href="#" className="text-sm font-medium uppercase tracking-widest hover:text-recipe-primary transition-colors">
                {item}
              </a>
            ))}
            <button className="p-2 hover:bg-recipe-accent rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-recipe-bg pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {["Receitas", "Categorias", "Sobre", "Contato"].map((item) => (
                <a key={item} href="#" className="text-2xl font-serif" onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero" 
            className="w-full h-full object-cover opacity-20 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-recipe-bg/0 via-recipe-bg/50 to-recipe-bg" />
        </div>

        <div className="max-w-7xl mx-auto px-6 z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-recipe-accent text-recipe-primary text-xs font-bold uppercase tracking-widest mb-6">
              Destaque da Estação
            </span>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8">
              A Arte de Cozinhar com <span className="italic text-recipe-primary">Alma</span>.
            </h1>
            <p className="text-lg md:text-xl text-recipe-dark/70 mb-10 leading-relaxed font-light">
              Descubra receitas que celebram ingredientes frescos, técnicas artesanais e o prazer de compartilhar uma boa mesa.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-recipe-primary text-white rounded-full font-medium flex items-center gap-2 hover:bg-recipe-primary/90 transition-all group">
                Explorar Receitas <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-recipe-dark/10 rounded-full font-medium hover:bg-recipe-dark hover:text-white transition-all">
                Nossa História
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-20 bg-gradient-to-b from-recipe-primary to-transparent"
          />
        </div>
      </header>

      {/* Categories / Features */}
      <section className="py-24 bg-recipe-accent/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Leaf, title: "Ingredientes Orgânicos", desc: "Priorizamos produtores locais e sazonais." },
              { icon: ChefHat, title: "Técnicas Clássicas", desc: "O segredo está nos detalhes da preparação." },
              { icon: MessageSquare, title: "Comunidade Viva", desc: "Troque experiências e dicas com outros chefs." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                  <item.icon className="w-6 h-6 text-recipe-primary" />
                </div>
                <h3 className="text-xl font-serif mb-3">{item.title}</h3>
                <p className="text-recipe-dark/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Grid */}
      <main className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Últimas do Blog</h2>
            <p className="text-recipe-dark/60">Inspirações semanais para transformar sua rotina na cozinha em momentos extraordinários.</p>
          </div>
          <div className="flex gap-4">
            {["Tudo", "Massas", "Doces", "Saudável"].map((cat) => (
              <button key={cat} className="px-6 py-2 rounded-full border border-recipe-dark/5 text-sm hover:border-recipe-primary hover:text-recipe-primary transition-all">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {RECIPES.map((recipe, i) => (
            <motion.article 
              key={recipe.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6">
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {recipe.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <ChevronRight className="w-5 h-5 text-recipe-dark" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-recipe-dark/40 font-bold">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {recipe.time}</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {recipe.servings}</span>
                </div>
                <h3 className="text-2xl font-serif group-hover:text-recipe-primary transition-colors leading-tight">
                  {recipe.title}
                </h3>
                <p className="text-recipe-dark/60 text-sm line-clamp-2 font-light leading-relaxed">
                  {recipe.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </main>

      {/* Newsletter */}
      <section className="bg-recipe-dark text-recipe-bg py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-recipe-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif mb-8">Receba Inspiração na sua Caixa de Entrada</h2>
          <p className="text-recipe-bg/60 mb-12 text-lg font-light">
            Assine nossa newsletter e receba receitas exclusivas, dicas de chefs e histórias sobre a cultura gastronômica.
          </p>
          <form className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="flex-1 px-8 py-4 rounded-full bg-white/5 border border-white/10 focus:outline-none focus:border-recipe-primary transition-colors text-white"
            />
            <button className="px-10 py-4 bg-recipe-primary text-white rounded-full font-medium hover:bg-recipe-primary/90 transition-all">
              Inscrever-se
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-recipe-dark/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <ChefHat className="w-6 h-6 text-recipe-primary" />
                <span className="font-serif text-2xl font-medium">Sabor & Arte</span>
              </div>
              <p className="text-recipe-dark/50 max-w-sm leading-relaxed font-light">
                Um espaço dedicado a quem acredita que a cozinha é o coração da casa e que cada refeição é uma oportunidade de criar memórias.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Links</h4>
              <ul className="space-y-4 text-sm text-recipe-dark/60">
                <li><a href="#" className="hover:text-recipe-primary transition-colors">Receitas</a></li>
                <li><a href="#" className="hover:text-recipe-primary transition-colors">Categorias</a></li>
                <li><a href="#" className="hover:text-recipe-primary transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-recipe-primary transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Social</h4>
              <div className="flex gap-6">
                <Instagram className="w-5 h-5 text-recipe-dark/40 hover:text-recipe-primary cursor-pointer transition-colors" />
                <Facebook className="w-5 h-5 text-recipe-dark/40 hover:text-recipe-primary cursor-pointer transition-colors" />
                <Share2 className="w-5 h-5 text-recipe-dark/40 hover:text-recipe-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-recipe-dark/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-recipe-dark/30 font-bold">
            <p>© 2026 Sabor & Arte. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-recipe-dark transition-colors">Privacidade</a>
              <a href="#" className="hover:text-recipe-dark transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Style Guide Toggle Button */}
      <button 
        onClick={() => setShowStyleGuide(!showStyleGuide)}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-recipe-dark text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
      >
        <Palette className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </button>

      {/* Style Guide Overlay */}
      <AnimatePresence>
        {showStyleGuide && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-y-0 right-0 w-full md:w-[450px] bg-white z-[60] shadow-[-20px_0_60px_rgba(0,0,0,0.1)] overflow-y-auto p-10"
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-serif">Guia de Estilo</h2>
              <button onClick={() => setShowStyleGuide(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-12">
              {/* Colors */}
              <section>
                <div className="flex items-center gap-2 mb-6 text-recipe-dark/40">
                  <Palette className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Paleta de Cores</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Terracota", hex: "#C2410C", bg: "bg-[#C2410C]", text: "text-white" },
                    { name: "Verde Oliva", hex: "#3F6212", bg: "bg-[#3F6212]", text: "text-white" },
                    { name: "Creme Papel", hex: "#FDFCF7", bg: "bg-[#FDFCF7]", text: "text-recipe-dark" },
                    { name: "Carvão", hex: "#18181B", bg: "bg-[#18181B]", text: "text-white" }
                  ].map((color) => (
                    <div key={color.hex} className="space-y-2">
                      <div className={`h-20 rounded-2xl ${color.bg} border border-black/5 shadow-inner`} />
                      <div className="flex justify-between items-center px-1">
                        <span className="text-xs font-medium">{color.name}</span>
                        <span className="text-[10px] font-mono opacity-50">{color.hex}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Typography */}
              <section>
                <div className="flex items-center gap-2 mb-6 text-recipe-dark/40">
                  <Type className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Tipografia</span>
                </div>
                <div className="space-y-8">
                  <div className="p-6 bg-recipe-accent/30 rounded-2xl">
                    <span className="text-[10px] font-bold text-recipe-primary uppercase tracking-widest block mb-4">Títulos / Cormorant Garamond</span>
                    <p className="text-4xl font-serif leading-tight">A arte de cozinhar com alma e tradição.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-2xl">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-4">Corpo / Inter</span>
                    <p className="text-sm leading-relaxed">
                      Utilizamos uma tipografia sans-serif moderna para garantir que as instruções das receitas sejam claras e fáceis de seguir em qualquer dispositivo.
                    </p>
                  </div>
                </div>
              </section>

              {/* Voice */}
              <section>
                <div className="flex items-center gap-2 mb-6 text-recipe-dark/40">
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Tom de Voz</span>
                </div>
                <div className="space-y-4">
                  <div className="border-l-2 border-recipe-primary pl-6 py-2">
                    <p className="italic text-lg font-serif">"Sinta o aroma do manjericão fresco colhido direto da nossa horta urbana."</p>
                  </div>
                  <p className="text-sm text-recipe-dark/60 font-light leading-relaxed">
                    Nosso tom é **acolhedor**, **sensorial** e **inspirador**. Falamos com o leitor como um amigo experiente na cozinha.
                  </p>
                </div>
              </section>

              {/* Layout */}
              <section>
                <div className="flex items-center gap-2 mb-6 text-recipe-dark/40">
                  <LayoutIcon className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Layout & Componentes</span>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <button className="px-6 py-2 bg-recipe-primary text-white rounded-full text-xs font-medium">Botão Primário</button>
                    <button className="px-6 py-2 border border-recipe-dark/10 rounded-full text-xs font-medium">Botão Secundário</button>
                  </div>
                  <p className="text-xs text-recipe-dark/50 leading-relaxed">
                    Uso de bordas arredondadas generosas (3xl), sombras suaves e micro-interações para uma experiência premium e fluida.
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
