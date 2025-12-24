import React from "react";
import { Youtube } from "lucide-react";

export const Videos = () => {
  const mediaItems = [
    {
      type: 'video',
      id: "wp7izqZmiWM",
      title: "«Open AI — это пузырь»! Откровения из Кремниевой долины",
      source: "Александр Соколовский",
      quote: "«Мы не создаем новое золото (как Биткоин), мы создаем топливо для AI будущего. Рынок AI-вычислений оценивается в десятки триллионов долларов.»"
    },
    {
      type: 'video',
      id: "J4dCu_HB5-M",
      title: "Gonka Protocol's David Liberman on Decentralized AI",
      source: "Bitcoin.com",
      quote: "«Централизованные игроки амортизируют GPU по 6 лет, а в крипте инновации обновляют железо каждый год. Децентрализация всегда выигрывает в скорости.»"
    },
    {
      type: 'article',
      url: "https://www.forbes.ru/tekhnologii/551177-bitfury-vlozit-v-obsej-sloznosti-50-mln-v-proekt-gonka-ai-brat-ev-libermanov",
      title: "Bitfury вложит в общей сложности $50 млн в проект Gonka AI братьев Либерманов",
      source: "Forbes Russia",
      quote: "«Владельцы GPU с помощью протокола Gonka могут сдавать их в аренду всем, кто нуждается в вычислительных мощностях для ИИ-проектов.»"
    },
    {
      type: 'article',
      url: "https://www.forbes.com/sites/kolawolesamueladebayo/2025/11/11/who-owns-the-future-of-compute-the-quest-to-make-ai-open-for-all/",
      title: "Кто владеет будущим вычислений? Стремление сделать ИИ открытым для всех",
      source: "Forbes",
      quote: "«Если ИИ — это новое электричество, то вычислительные мощности — это электросеть, питающая его. Тот, кто контролирует чипы, будет контролировать инновации следующего десятилетия.»"
    }
  ];

  return (
    <section id="media" className="py-20 relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
          Видео и <span className="text-primary">Интервью</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {mediaItems.map((item, i) => (
            <div key={i} className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-colors flex flex-col">
              {/* Media Embed / Thumbnail */}
              <div className="relative bg-black">
                {item.type === 'video' ? (
                  <div className="pt-[56.25%] relative">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${item.id}?rel=0`}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="block w-full h-64 bg-gradient-to-br from-gray-900 to-black relative group/link overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6">
                        <span className="text-3xl font-serif text-white/50 mb-2 block">{item.source}</span>
                        <div className="px-6 py-2 border border-white/20 rounded-full text-white/70 text-sm group-hover/link:bg-white group-hover/link:text-black transition-all">
                          Читать статью
                        </div>
                      </div>
                    </div>
                  </a>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-2 mb-3 text-red-500 font-medium text-xs uppercase tracking-wider">
                  {item.type === 'video' ? <Youtube className="w-4 h-4" /> : <span className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center text-[10px] font-bold">A</span>}
                  {item.source}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {item.type === 'article' ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                <blockquote className="text-gray-400 text-sm border-l-2 border-white/20 pl-4 italic mt-auto">
                  {item.quote}
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
