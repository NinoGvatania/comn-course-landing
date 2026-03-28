"use client";

import { useEffect, useRef } from "react";

/* ─── Scroll-triggered fade-in ─── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-in-up");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useReveal();
  return (
    <section
      id={id}
      ref={ref}
      className={`opacity-0 py-16 md:py-24 px-4 ${className}`}
    >
      {children}
    </section>
  );
}

/* ─── Icons (inline SVG) ─── */
function TelegramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-3">
      <svg
        className="w-8 h-8 text-orange-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    </div>
  );
}

/* ─── Data ─── */
const problems = {
  buyers: [
    "Сложно найти качественные конспекты и материалы к экзаменам",
    "Нет гарантий при покупке у незнакомых студентов",
    "Дорогие подготовительные курсы",
  ],
  sellers: [
    "Сложно рекламировать свои курсы",
    "Приходится принимать оплату на личную карту",
    "Нет единой площадки для продажи",
  ],
};

const steps = [
  {
    num: "1",
    title: "Откройте бота",
    desc: "Запустите Common Course в Telegram",
  },
  {
    num: "2",
    title: "Найдите или создайте курс",
    desc: "Ищите нужный курс в ленте или разместите свой",
  },
  {
    num: "3",
    title: "Учитесь или зарабатывайте",
    desc: "Всё происходит внутри Telegram — быстро и удобно",
  },
];

const features = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    ),
    title: "Лента курсов с поиском",
    desc: "Находите нужные материалы за секунды",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    ),
    title: "Создание курсов",
    desc: "На базе Telegram-каналов — просто и быстро",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    ),
    title: "Профиль автора",
    desc: "Ваша репутация и портфолио в одном месте",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    ),
    title: "Авторизация через Telegram",
    desc: "Никаких паролей — всё автоматически",
  },
  {
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
        />
      </>
    ),
    title: "Светлая и тёмная тема",
    desc: "Адаптируется под настройки Telegram",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-6 18.75h6"
      />
    ),
    title: "Кроссплатформенность",
    desc: "iOS, Android, Desktop — везде, где есть Telegram",
  },
];

const team = [
  { name: "Ларин Александр Сергеевич", role: "CEO, продукт-менеджер" },
  { name: "Павлюков Владимир Антонович", role: "Директор по маркетингу" },
  { name: "Цветкова Мария Ильинична", role: "SMM-менеджер" },
  { name: "Царковная Елизавета Александровна", role: "Full-stack разработчик" },
  { name: "Алексин Дмитрий Евгеньевич", role: "Backend-разработчик" },
  { name: "Кононенко Даниил Константинович", role: "Юрист" },
  { name: "Акашкина Кристина Александровна", role: "UX/UI дизайнер" },
];

/* ─── Page ─── */
export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 bg-gradient-to-br from-orange-50 via-white to-orange-100">
        {/* decorative blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-8">
            <TelegramIcon className="w-4 h-4" />
            Telegram Mini App
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Common{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Course
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
            P2P маркетплейс образовательных курсов
            <br className="hidden md:block" /> для студентов в Telegram
          </p>

          <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
            Студенты создают и продают курсы другим студентам прямо в
            Telegram — быстро, удобно, безопасно.
          </p>

          <a
            href="https://t.me/ComnCourse"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg shadow-orange-200"
          >
            <TelegramIcon className="w-6 h-6" />
            Открыть в Telegram
          </a>
        </div>
      </section>

      {/* ═══ ПРОБЛЕМА / РЕШЕНИЕ ═══ */}
      <Section id="problem" className="bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Проблема
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Студенты сталкиваются с реальными трудностями при покупке и продаже
            учебных материалов
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Buyers */}
            <div className="bg-red-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-900">
                  Боли покупателей
                </h3>
              </div>
              <ul className="space-y-4">
                {problems.buyers.map((p, i) => (
                  <li key={i} className="flex gap-3 text-red-800">
                    <svg
                      className="w-5 h-5 text-red-400 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sellers */}
            <div className="bg-amber-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amber-900">
                  Боли продавцов
                </h3>
              </div>
              <ul className="space-y-4">
                {problems.sellers.map((p, i) => (
                  <li key={i} className="flex gap-3 text-amber-800">
                    <svg
                      className="w-5 h-5 text-amber-400 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Решение</h3>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Common Course объединяет покупателей и продавцов учебных материалов
              в одном удобном Telegram Mini App — с гарантиями, поиском и
              простыми платежами.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══ КАК ЭТО РАБОТАЕТ ═══ */}
      <Section id="how" className="bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Как это работает
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-orange-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-5">
                  {s.num}
                </div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══ ВОЗМОЖНОСТИ ═══ */}
      <Section id="features" className="bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Возможности платформы
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center mb-4 transition-colors">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    {f.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-1">{f.title}</h3>
                <p className="text-gray-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══ MVP И ТЕХНОЛОГИИ ═══ */}
      <Section id="mvp" className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            MVP и технологии
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-orange-500 mb-2">
                TRL 3
              </div>
              <p className="text-gray-500 text-sm">
                Экспериментальное подтверждение концепции
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="flex flex-wrap gap-2 justify-center mb-2">
                {["React", "Python", "MongoDB", "TG Web Apps"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 text-sm">Технологический стек</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-orange-500 mb-2">
                3
              </div>
              <p className="text-gray-500 text-sm">
                Курса размещены от авторов из Сеченовского университета и НИУ
                ВШЭ
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ КОМАНДА ═══ */}
      <Section id="team" className="bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Команда
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <div
                key={i}
                className="text-center p-4 rounded-2xl hover:bg-orange-50 transition-colors"
              >
                <UserIcon />
                <h3 className="font-semibold text-sm mb-1">{m.name}</h3>
                <p className="text-gray-500 text-xs">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══ ПОДДЕРЖКА ═══ */}
      <Section id="support" className="bg-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Поддержка</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
            Проект реализован при поддержке гранта Фонда содействия инновациям в
            рамках программы «Студенческий стартап» федерального проекта
            «Платформа университетского технологического предпринимательства»
          </p>

          <div className="flex items-center justify-center">
            <img
              src="/FASIE.SVG"
              alt="Фонд содействия инновациям"
              className="h-[80px] w-auto"
            />
          </div>
        </div>
      </Section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {/* Brand */}
            <div>
              <div className="text-white text-xl font-bold mb-2">
                Common Course
              </div>
              <p className="text-sm">
                P2P маркетплейс образовательных курсов для студентов в Telegram
              </p>
            </div>

            {/* Links */}
            <div>
              <div className="text-white font-semibold mb-3">Ссылки</div>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://t.me/ComnCourse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Telegram-канал
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/commoncourse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="text-white font-semibold mb-3">Контакты</div>
              <a
                href="mailto:commoncourse@mail.ru"
                className="text-sm hover:text-orange-400 transition-colors"
              >
                commoncourse@mail.ru
              </a>
            </div>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center mb-8 pt-8 border-t border-gray-800">
            <img
              src="/FASIE.SVG"
              alt="Фонд содействия инновациям"
              className="h-[60px] w-auto brightness-0 invert opacity-60"
            />
          </div>

          <p className="text-center text-xs text-gray-500">
            © 2024–2025 ООО «КОМН», ИНН 7743462181
          </p>
        </div>
      </footer>
    </main>
  );
}
