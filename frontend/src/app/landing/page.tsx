'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
    ArrowRight,
    CheckCircle2,
    Sparkles,
    LayoutDashboard,
    Users,
    Zap,
    Brain,
    Target,
    TrendingUp,
    Clock,
    Calendar,
    BarChart3,
    Plus,
    MoreHorizontal
} from 'lucide-react'
import Image from 'next/image'

export default function LandingPage() {
    const router = useRouter()

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="border-b border-zinc-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/fission-logo.jpg"
                                alt="Fission"
                                width={32}
                                height={32}
                                className="rounded-full"
                            />
                            <span className="text-xl font-bold text-black">Fission</span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-6">
                            <a href="#features" className="text-sm text-zinc-600 hover:text-black transition-colors">
                                Возможности
                            </a>
                            <a href="#pricing" className="text-sm text-zinc-600 hover:text-black transition-colors">
                                Тарифы
                            </a>
                            <a href="#demo" className="text-sm text-zinc-600 hover:text-black transition-colors">
                                О нас
                            </a>
                            <button
                                onClick={() => router.push('/auth')}
                                className="text-sm text-zinc-600 hover:text-black transition-colors"
                            >
                                Войти
                            </button>
                            <button
                                onClick={() => router.push('/auth')}
                                className="bg-black text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors"
                            >
                                Начать бесплатно
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-zinc-100 px-3 py-1.5 rounded-full mb-6 text-sm">
                            <Sparkles className="w-4 h-4" />
                            <span className="font-medium">AI-Powered Task Management</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 tracking-tight">
                            Управляйте проектами<br />с силой искусственного интеллекта
                        </h1>

                        <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl mx-auto">
                            Fission — современная платформа для команд, которые ценят продуктивность и инновации
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                onClick={() => router.push('/auth')}
                                className="group bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-zinc-800 transition-all flex items-center space-x-2"
                            >
                                <span>Начать бесплатно</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => {
                                    const demoSection = document.getElementById('demo')
                                    demoSection?.scrollIntoView({ behavior: 'smooth' })
                                }}
                                className="border-2 border-black text-black px-8 py-3 rounded-lg font-medium hover:bg-zinc-50 transition-colors"
                            >
                                Смотреть демо
                            </button>
                        </div>

                        <p className="text-sm text-zinc-500 mt-6">
                            Кредитная карта не требуется • Бесплатный план навсегда
                        </p>
                    </div>
                </div>
            </section>

            {/* AI Smart Assignment Section */}
            <section id="demo" className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full mb-4 border border-zinc-200">
                            <Brain className="w-4 h-4" />
                            <span className="text-sm font-medium">AI-Powered Intelligence</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            Умное распределение задач с AI
                        </h2>
                        <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
                            Наш AI-агент анализирует требования задачи и автоматически подбирает идеального исполнителя на основе навыков, опыта и загруженности
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Left: How it works */}
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center font-bold">
                                    1
                                </div>
                                <div>
                                    <h3 className="font-semibold text-black mb-2">Анализ требований задачи</h3>
                                    <p className="text-sm text-zinc-600">
                                        AI сканирует описание задачи, выделяя ключевые технологии, навыки и сложность. Например: FastAPI, Docker, PostgreSQL, Redis, Celery.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center font-bold">
                                    2
                                </div>
                                <div>
                                    <h3 className="font-semibold text-black mb-2">Сопоставление с профилями команды</h3>
                                    <p className="text-sm text-zinc-600">
                                        Система сравнивает требования с навыками каждого члена команды, учитывая их опыт работы с конкретными технологиями и успешность предыдущих задач.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center font-bold">
                                    3
                                </div>
                                <div>
                                    <h3 className="font-semibold text-black mb-2">Оценка сложности и времени</h3>
                                    <p className="text-sm text-zinc-600">
                                        AI рассчитывает сложность задачи (по шкале 1-10) и оценивает необходимое время выполнения, учитывая объём работы и интеграции.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center font-bold">
                                    4
                                </div>
                                <div>
                                    <h3 className="font-semibold text-black mb-2">Аргументированное назначение</h3>
                                    <p className="text-sm text-zinc-600">
                                        Система предоставляет детальное обоснование выбора исполнителя, объясняя почему именно этот человек идеально подходит для задачи.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Task Card Example */}
                        <div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm">
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                                    <h3 className="text-xl font-semibold text-black">
                                        Backend — RAG Pipeline & REST API
                                    </h3>
                                </div>
                                <span className="inline-block bg-red-50 text-red-600 text-xs font-medium px-2.5 py-1 rounded-full border border-red-200 flex-shrink-0">
                                    High Priority
                                </span>
                            </div>

                            <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                                Реализовать сервисы для инжеста документов и индексирования в векторное хранилище, вычисление embeddings и обновление индексов, реализацию retrieval и aggregation логики, реализацию бизнес-логики R/A/G (бизнес-логика), CRUD API для задач и эндпоинты получения RAG-статусов, webhooks/streams для push уведомлений. Написать unit и интеграционные тесты, подготовить Dockerfile, скрипты миграций БД и базовые deployment artifacts (docker-compose/helm stub). Обеспечить очереди/фоновые задачи (embeddings, индексирование) с retry и мониторингом.
                            </p>

                            <div className="grid grid-cols-2 gap-4 text-xs text-zinc-600 border-t border-zinc-200 pt-4 mb-4">
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4" />
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">
                                            I
                                        </div>
                                        <span className="font-medium text-black">Ilyas</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>2-3 недели (~100ч)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>Due in 21 days</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BarChart3 className="w-4 h-4" />
                                    <span>Сложность: 6/10</span>
                                </div>
                            </div>

                            <div className="bg-zinc-50 p-3 rounded-lg border-l-4 border-black">
                                <p className="text-zinc-600 italic text-xs leading-relaxed">
                                    "Ilyas — backend Python разработчик с опытом FastAPI, Docker, PostgreSQL, Redis и Celery — идеально подходит для реализации серверной части, фоновых задач и очередей для embeddings. С учётом объёма интеграций и тестирования сложность средняя/высокая — 6/10."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="mt-12 grid md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-white rounded-xl border border-zinc-200">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Target className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="font-semibold text-black mb-2">Точное соответствие</h4>
                            <p className="text-sm text-zinc-600">
                                95% точность подбора исполнителя на основе навыков и опыта
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-xl border border-zinc-200">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="font-semibold text-black mb-2">Экономия времени</h4>
                            <p className="text-sm text-zinc-600">
                                Автоматическое назначение за секунды вместо часов ручного подбора
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-xl border border-zinc-200">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="font-semibold text-black mb-2">Рост эффективности</h4>
                            <p className="text-sm text-zinc-600">
                                40% увеличение скорости выполнения задач благодаря правильному распределению
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kanban Board Demo */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            Визуализируйте рабочий процесс
                        </h2>
                        <p className="text-lg text-zinc-600">
                            Интуитивные Kanban-доски для эффективного управления задачами
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* To Do Column */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between px-1">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-lg font-semibold text-black">To Do</h3>
                                    <span className="text-sm font-medium bg-zinc-100 text-zinc-600 rounded-full px-2.5 py-0.5">
                                        4
                                    </span>
                                </div>
                                <div className="flex items-center gap-1 text-zinc-500">
                                    <button className="p-1.5 hover:bg-zinc-100 rounded-md transition-colors">
                                        <Plus className="w-4 h-4" />
                                    </button>
                                    <button className="p-1.5 hover:bg-zinc-100 rounded-md transition-colors">
                                        <MoreHorizontal className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <TaskCard
                                    priority="medium"
                                    title="Интеграция внешних API и бизнес-логика (OpenAI и прочие сервисы)"
                                    description="Реализовать модуль(и) для взаимодействия с внешними сервисами (например, OpenAI): слой-абстракция для вызовов API, управление ключами и лимитами..."
                                    date="27.11.2025"
                                    assignee="M"
                                />
                                <TaskCard
                                    priority="high"
                                    title="Интеграция с Telegram Bot API: вебхуки/polling, безопасность токена"
                                    description="Настроить взаимодействие с Telegram Bot API: выбрать и реализовать стратегию (webhook vs long-polling)..."
                                    date="27.11.2025"
                                    assignee="M"
                                />
                            </div>
                        </div>

                        {/* In Progress Column */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between px-1">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-lg font-semibold text-black">In Progress</h3>
                                    <span className="text-sm font-medium bg-zinc-100 text-zinc-600 rounded-full px-2.5 py-0.5">
                                        1
                                    </span>
                                </div>
                                <div className="flex items-center gap-1 text-zinc-500">
                                    <button className="p-1.5 hover:bg-zinc-100 rounded-md transition-colors">
                                        <Plus className="w-4 h-4" />
                                    </button>
                                    <button className="p-1.5 hover:bg-zinc-100 rounded-md transition-colors">
                                        <MoreHorizontal className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <TaskCard
                                    priority="medium"
                                    title="Деплой, CI/CD, тестирование и документация"
                                    description="Подготовить Dockerfile(ы) и конфигурацию деплоя (Docker Compose или k8s-манифесты при необходимости)..."
                                    date="27.11.2025"
                                    assignee="J"
                                    assigneeColor="blue"
                                />
                            </div>
                        </div>

                        {/* Done Column */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between px-1">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-lg font-semibold text-black">Done</h3>
                                    <span className="text-sm font-medium bg-zinc-100 text-zinc-600 rounded-full px-2.5 py-0.5">
                                        1
                                    </span>
                                </div>
                                <div className="flex items-center gap-1 text-zinc-500">
                                    <button className="p-1.5 hover:bg-zinc-100 rounded-md transition-colors">
                                        <Plus className="w-4 h-4" />
                                    </button>
                                    <button className="p-1.5 hover:bg-zinc-100 rounded-md transition-colors">
                                        <MoreHorizontal className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <TaskCard
                                    priority="completed"
                                    title="Ядро бота: обработка сообщений и маршрутизация команд (backend)"
                                    description="Реализовать серверную часть бота: схемы обработки входящих сообщений, маршрутизация команд (/start, /help и основные флоу)..."
                                    date="27.11.2025"
                                    assignee="I"
                                    assigneeColor="green"
                                    completed
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            Все что нужно для продуктивной работы
                        </h2>
                        <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                            Мощные инструменты для управления задачами и командной работы
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <FeatureCard
                            icon={LayoutDashboard}
                            title="Kanban-доски"
                            description="Визуализируйте рабочий процесс с помощью интуитивных досок. Перетаскивайте задачи и отслеживайте прогресс в реальном времени."
                        />
                        <FeatureCard
                            icon={Brain}
                            title="AI-ассистент"
                            description="Искусственный интеллект анализирует резюме, декомпозирует сложные задачи и помогает принимать решения."
                        />
                        <FeatureCard
                            icon={Users}
                            title="Рабочие пространства"
                            description="Создавайте выделенные пространства для каждого проекта. Все задачи и обсуждения в одном месте."
                        />
                        <FeatureCard
                            icon={Zap}
                            title="Реальное время"
                            description="Мгновенные уведомления, совместное редактирование и прозрачность для всей команды."
                        />
                        <FeatureCard
                            icon={Target}
                            title="Умный подбор"
                            description="Автоматический анализ резюме с извлечением ключевых навыков для быстрого принятия решений."
                        />
                        <FeatureCard
                            icon={TrendingUp}
                            title="Аналитика"
                            description="Отслеживайте продуктивность команды, анализируйте метрики и оптимизируйте процессы."
                        />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-black mb-2">10,000+</div>
                            <div className="text-zinc-600">Активных пользователей</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-black mb-2">500K+</div>
                            <div className="text-zinc-600">Выполненных задач</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-black mb-2">99.9%</div>
                            <div className="text-zinc-600">Uptime</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-black mb-2">50%</div>
                            <div className="text-zinc-600">Рост продуктивности</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            Простые и прозрачные тарифы
                        </h2>
                        <p className="text-lg text-zinc-600">
                            Выберите план, который подходит вашей команде
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <PricingCard
                            name="Free"
                            price="$0"
                            period="/месяц"
                            description="Для небольших команд"
                            features={[
                                'До 5 участников',
                                '3 рабочих пространства',
                                'Базовые Kanban-доски',
                                'Ограниченный AI (10 запросов/месяц)',
                                'Email поддержка'
                            ]}
                            cta="Начать бесплатно"
                            onCTAClick={() => router.push('/auth')}
                        />
                        <PricingCard
                            name="Pro"
                            price="$12"
                            period="/пользователь/месяц"
                            description="Для растущих команд"
                            features={[
                                'До 50 участников',
                                'Неограниченные пространства',
                                'Продвинутая аналитика',
                                'Полный доступ к AI',
                                'Приоритетная поддержка',
                                'Интеграции'
                            ]}
                            cta="Попробовать Pro"
                            popular
                            onCTAClick={() => router.push('/auth')}
                        />
                        <PricingCard
                            name="Enterprise"
                            price="Custom"
                            period=""
                            description="Для крупных организаций"
                            features={[
                                'Неограниченные участники',
                                'Кастомизация и брендинг',
                                'Dedicated AI models',
                                'SLA гарантии',
                                'Персональный менеджер',
                                'On-premise опция'
                            ]}
                            cta="Связаться с нами"
                            onCTAClick={() => router.push('/auth')}
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                        Готовы трансформировать свою продуктивность?
                    </h2>
                    <p className="text-lg text-zinc-600 mb-10">
                        Присоединяйтесь к тысячам команд, которые уже используют Fission
                    </p>
                    <button
                        onClick={() => router.push('/auth')}
                        className="group bg-black text-white px-10 py-4 rounded-lg font-medium text-lg hover:bg-zinc-800 transition-all inline-flex items-center space-x-2"
                    >
                        <span>Начать бесплатно</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-sm text-zinc-500 mt-6">
                        Кредитная карта не требуется
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <Image
                                    src="/fission-logo.jpg"
                                    alt="Fission"
                                    width={28}
                                    height={28}
                                    className="rounded-full"
                                />
                                <span className="text-lg font-bold">Fission</span>
                            </div>
                            <p className="text-zinc-400 text-sm">
                                AI-powered платформа управления задачами
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4 text-sm">Продукт</h4>
                            <ul className="space-y-2 text-sm text-zinc-400">
                                <li><a href="#features" className="hover:text-white transition-colors">Возможности</a></li>
                                <li><a href="#pricing" className="hover:text-white transition-colors">Тарифы</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Обновления</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4 text-sm">Ресурсы</h4>
                            <ul className="space-y-2 text-sm text-zinc-400">
                                <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4 text-sm">Компания</h4>
                            <ul className="space-y-2 text-sm text-zinc-400">
                                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Пресса</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-400">
                        <p>© 2024 Fission. Все права защищены.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

// Task Card Component
function TaskCard({
    priority,
    title,
    description,
    date,
    assignee,
    assigneeColor = 'black',
    completed = false
}: {
    priority: 'high' | 'medium' | 'completed'
    title: string
    description: string
    date: string
    assignee: string
    assigneeColor?: string
    completed?: boolean
}) {
    const priorityStyles = {
        high: 'bg-red-50 text-red-600 border-red-200',
        medium: 'bg-yellow-50 text-yellow-600 border-yellow-200',
        completed: 'bg-green-50 text-green-600 border-green-200'
    }

    const assigneeStyles = {
        black: 'bg-black text-white',
        blue: 'bg-blue-600 text-white',
        green: 'bg-green-600 text-white'
    }

    return (
        <div className={`bg-white rounded-lg border border-zinc-200 p-4 space-y-3 transition-all hover:border-black hover:shadow-md cursor-pointer ${completed ? 'opacity-60' : ''}`}>
            <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full border ${priorityStyles[priority]}`}>
                {priority === 'high' ? 'High' : priority === 'medium' ? 'Medium' : 'Completed'}
            </span>
            <h4 className={`font-semibold text-black text-sm ${completed ? 'line-through' : ''}`}>
                {title}
            </h4>
            <p className="text-xs text-zinc-600 line-clamp-2">
                {description}
            </p>
            <div className="flex items-center justify-between pt-2 border-t border-zinc-200">
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{date}</span>
                </div>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${assigneeStyles[assigneeColor as keyof typeof assigneeStyles] || assigneeStyles.black}`}>
                    {assignee}
                </div>
            </div>
        </div>
    )
}

// Feature Card Component
function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <div className="group p-6 bg-white border border-zinc-200 rounded-xl hover:border-black hover:shadow-lg transition-all duration-300">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-black mb-2">{title}</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">{description}</p>
        </div>
    )
}

// Pricing Card Component
function PricingCard({
    name,
    price,
    period,
    description,
    features,
    cta,
    popular = false,
    onCTAClick
}: {
    name: string
    price: string
    period: string
    description: string
    features: string[]
    cta: string
    popular?: boolean
    onCTAClick: () => void
}) {
    return (
        <div className={`relative bg-white rounded-xl p-6 ${popular ? 'border-2 border-black shadow-xl' : 'border border-zinc-200'
            }`}>
            {popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                    Популярный
                </div>
            )}

            <div className="mb-6">
                <h3 className="text-xl font-bold text-black mb-1">{name}</h3>
                <p className="text-zinc-600 text-sm">{description}</p>
            </div>

            <div className="mb-6">
                <span className="text-4xl font-bold text-black">{price}</span>
                <span className="text-zinc-600 text-sm">{period}</span>
            </div>

            <button
                onClick={onCTAClick}
                className={`w-full py-2.5 rounded-lg font-medium transition-colors mb-6 text-sm ${popular
                    ? 'bg-black text-white hover:bg-zinc-800'
                    : 'border-2 border-black text-black hover:bg-zinc-50'
                    }`}
            >
                {cta}
            </button>

            <div className="space-y-3">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-black flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-700 text-sm">{feature}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
