import React from "react";
import { Youtube } from "lucide-react";

export const Videos = () => {
  const videos = [
    {
      id: "wp7izqZmiWM",
      title: "«Open AI — это пузырь»! Откровения из Кремниевой долины",
      channel: "Александр Соколовский",
      quote: "«Мы не создаем новое золото (как Биткоин), мы создаем топливо для AI будущего. Рынок AI-вычислений оценивается в десятки триллионов долларов.»"
    },
    {
      id: "J4dCu_HB5-M",
      title: "Gonka Protocol's David Liberman on Decentralized AI",
      channel: "Bitcoin.com",
      quote: "«Централизованные игроки амортизируют GPU по 6 лет, а в крипте инновации обновляют железо каждый год. Децентрализация всегда выигрывает в скорости.»"
    }
  ];

  return (
    <section id="media" className="py-20 relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
          Видео и <span className="text-primary">Интервью</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video) => (
            <div key={video.id} className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-colors">
              {/* Video Embed */}
              <div className="relative pt-[56.25%] bg-black">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-red-500 font-medium text-xs uppercase tracking-wider">
                  <Youtube className="w-4 h-4" />
                  {video.channel}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <blockquote className="text-gray-400 text-sm border-l-2 border-white/20 pl-4 italic">
                  {video.quote}
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
