import { useState } from "react"

export default function App() {
  const [step, setStep] = useState<"home" | "result">("home")
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(0)

  const handleStart = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setCount(Math.floor(Math.random() * 20) + 5)
      setStep("result")
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-bg text-ink">
      <header className="px-4 py-4 border-b border-bg-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🎨</span>
          <span className="font-bold text-lg">Buildo Logo</span>
        </div>
        <span className="text-xs text-ink-dim">v1.0</span>
      </header>

      <div className="px-4 py-6 max-w-md mx-auto">
        {step === "home" && (
          <div className="space-y-6">
            <div className="text-center pt-8">
              <div className="text-7xl mb-4">🎨</div>
              <h1 className="text-3xl font-bold mb-3 gradient-text">
                Логотип за минуту
              </h1>
              <p className="text-ink-muted text-sm leading-relaxed">
                AI-генератор логотипов для малого бизнеса и стартапов
              </p>
            </div>

            <div className="space-y-3">
              <div key={0} className="flex items-start gap-3 p-3 rounded-xl bg-bg-surface border border-bg-border">
                  <div className="text-2xl flex-shrink-0">💬</div>
                  <div>
                    <div className="font-semibold text-sm">Опиши бизнес</div>
                    <div className="text-xs text-ink-muted mt-0.5">2-3 предложения о сфере и аудитории</div>
                  </div>
                </div>,
              <div key={1} className="flex items-start gap-3 p-3 rounded-xl bg-bg-surface border border-bg-border">
                  <div className="text-2xl flex-shrink-0">🎭</div>
                  <div>
                    <div className="font-semibold text-sm">Выбери стиль</div>
                    <div className="text-xs text-ink-muted mt-0.5">12 направлений: от минимализма до ретро-винтажа</div>
                  </div>
                </div>,
              <div key={2} className="flex items-start gap-3 p-3 rounded-xl bg-bg-surface border border-bg-border">
                  <div className="text-2xl flex-shrink-0">📦</div>
                  <div>
                    <div className="font-semibold text-sm">Получи 10 вариантов</div>
                    <div className="text-xs text-ink-muted mt-0.5">PNG, SVG, в фирменных цветах. Готово к печати</div>
                  </div>
                </div>
            </div>

            <button
              onClick={handleStart}
              disabled={loading}
              className="w-full h-12 rounded-xl font-semibold text-white btn-primary disabled:opacity-50"
            >
              {loading ? "Генерируем..." : "Попробовать бесплатно →"}
            </button>

            <p className="text-xs text-center text-ink-dim">
              5 бесплатных генераций · без карты
            </p>
          </div>
        )}

        {step === "result" && (
          <div className="space-y-4 pt-8">
            <div className="text-center">
              <div className="text-6xl mb-3">✨</div>
              <h2 className="text-2xl font-bold mb-2">Готово!</h2>
              <p className="text-ink-muted text-sm">
                Сгенерировано {count} вариантов
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl border border-bg-border flex items-center justify-center text-4xl"
                  style={{ background: `linear-gradient(135deg, var(--color-primary), var(--color-accent))`, opacity: 0.1 + (i * 0.2) }}
                >
                  🎨
                </div>
              ))}
            </div>

            <button
              onClick={() => setStep("home")}
              className="w-full h-12 rounded-xl font-semibold border border-bg-border hover:bg-bg-surface"
            >
              ← Назад
            </button>

            <button className="w-full h-12 rounded-xl font-semibold text-white btn-primary">
              Скачать все
            </button>
          </div>
        )}
      </div>

      <footer className="px-4 py-4 text-center text-xs text-ink-dim border-t border-bg-border mt-8">
        © 2026 Buildo Logo · Часть экосистемы Buildo
      </footer>
    </main>
  )
}
