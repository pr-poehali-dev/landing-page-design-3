import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import CyberpunkParticles from "@/components/CyberpunkParticles";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: "Layout",
      title: "Веб-дизайн",
      description: "Создание уникальных и запоминающихся дизайнов, которые отражают вашу индивидуальность"
    },
    {
      icon: "Code",
      title: "Разработка сайтов",
      description: "Современные технологии и чистый код для быстрой и надежной работы"
    },
    {
      icon: "Smartphone",
      title: "Адаптивность",
      description: "Идеальное отображение на всех устройствах — от смартфона до десктопа"
    },
    {
      icon: "Sparkles",
      title: "Индивидуальный подход",
      description: "Каждый проект особенный, работаю с учетом ваших пожеланий и целей"
    }
  ];

  const portfolio = [
    {
      title: "Корпоративный сайт",
      category: "Веб-дизайн",
      image: "https://cdn.poehali.dev/projects/2994505c-e537-46e4-98ad-975907b818d8/files/2b6582f6-5981-4e53-a874-d09c4d75f1c3.jpg"
    },
    {
      title: "Премиум бренд",
      category: "Лендинг",
      image: "https://cdn.poehali.dev/projects/2994505c-e537-46e4-98ad-975907b818d8/files/8902bcc0-8da2-4b34-ad9d-309239f87dda.jpg"
    },
    {
      title: "E-commerce",
      category: "Интернет-магазин",
      image: "https://cdn.poehali.dev/projects/2994505c-e537-46e4-98ad-975907b818d8/files/a3496933-94f7-471a-9e86-126f5999ad4b.jpg"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background relative">
      <CyberpunkParticles />
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-secondary neon-text animate-flicker">Sofia</h1>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('hero')} className="text-sm hover:text-secondary transition-all hover:neon-text">Главная</button>
              <button onClick={() => scrollToSection('about')} className="text-sm hover:text-secondary transition-all hover:neon-text">Обо мне</button>
              <button onClick={() => scrollToSection('services')} className="text-sm hover:text-secondary transition-all hover:neon-text">Услуги</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-sm hover:text-secondary transition-all hover:neon-text">Портфолио</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-secondary transition-all hover:neon-text">Контакты</button>
            </div>
            <button 
              className="md:hidden p-2 hover:bg-secondary/50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Меню"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} className="text-primary" />
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
              <button onClick={() => scrollToSection('hero')} className="text-left py-2 hover:text-secondary transition-all hover:neon-text">Главная</button>
              <button onClick={() => scrollToSection('about')} className="text-left py-2 hover:text-secondary transition-all hover:neon-text">Обо мне</button>
              <button onClick={() => scrollToSection('services')} className="text-left py-2 hover:text-secondary transition-all hover:neon-text">Услуги</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left py-2 hover:text-secondary transition-all hover:neon-text">Портфолио</button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 hover:text-secondary transition-all hover:neon-text">Контакты</button>
            </div>
          )}
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary opacity-50" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/2994505c-e537-46e4-98ad-975907b818d8/files/a3496933-94f7-471a-9e86-126f5999ad4b.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance">
              Создаю сайты,<br />которые <span className="text-primary neon-text-pink animate-pulse-glow">вдохновляют</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in-up">
              Уникальный веб-дизайн для ваших потребностей.<br />Высокое качество и индивидуальный подход.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button size="lg" onClick={() => scrollToSection('portfolio')} className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 neon-glow animate-pulse-glow border-0">
                Посмотреть работы
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')} className="text-lg px-8 neon-border text-secondary hover:bg-secondary/20">
                Связаться со мной
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center">Обо мне</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Я веб-дизайнер с страстью к созданию уникальных и современных сайтов. 
                  Каждый проект для меня — это возможность воплотить ваше видение в жизнь.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Работаю с вниманием к деталям, создавая не просто красивые, 
                  но и функциональные решения, которые помогают вашему бизнесу расти.
                </p>
                <div className="flex gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2"></div>
                    <div className="text-sm text-muted-foreground"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Проектов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Качество</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-lg overflow-hidden neon-border">
                  <img 
                    src="https://cdn.poehali.dev/projects/2994505c-e537-46e4-98ad-975907b818d8/files/2b6582f6-5981-4e53-a874-d09c4d75f1c3.jpg" 
                    alt="About" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-lg -z-10 animate-pulse-glow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">Услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-secondary transition-all duration-300 hover:scale-105 group hover:neon-border"
              >
                <div className="mb-6 inline-block p-4 bg-primary/10 rounded-lg group-hover:bg-secondary/20 transition-colors group-hover:neon-glow">
                  <Icon name={service.icon} size={32} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">Портфолио</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {portfolio.map((project, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg border border-border hover:border-secondary transition-all duration-300 hover:scale-105 hover:neon-border"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <div className="text-sm text-secondary mb-2">{project.category}</div>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Свяжитесь со мной</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Готова обсудить ваш проект и воплотить ваши идеи в жизнь
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <a href="mailto:contact@example.com" className="flex flex-col items-center gap-4 p-6 rounded-lg hover:bg-secondary/20 transition-all group neon-border hover:neon-glow">
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Icon name="Mail" size={28} className="text-secondary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <div className="text-sm text-muted-foreground">contact@example.com</div>
                </div>
              </a>
              
              <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 p-6 rounded-lg hover:bg-secondary/20 transition-all group neon-border hover:neon-glow">
                <div className="p-4 bg-secondary/10 rounded-full group-hover:bg-secondary/30 transition-colors">
                  <Icon name="Send" size={28} className="text-secondary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Telegram</div>
                  <div className="text-sm text-muted-foreground">@username</div>
                </div>
              </a>
              
              <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 p-6 rounded-lg hover:bg-secondary/20 transition-all group neon-border hover:neon-glow">
                <div className="p-4 bg-secondary/10 rounded-full group-hover:bg-secondary/30 transition-colors">
                  <Icon name="Instagram" size={28} className="text-secondary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Instagram</div>
                  <div className="text-sm text-muted-foreground">@username</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>© 2024 Sofia. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;