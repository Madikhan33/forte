'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useApp } from '@/contexts/AppContext'
import LandingPage from './landing/page'

export default function Home() {
    const { isAuthenticated, isLoading } = useApp()
    const router = useRouter()

    useEffect(() => {
        if (!isLoading && isAuthenticated) {
            router.push('/dashboard')
        }
    }, [isAuthenticated, isLoading, router])

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-zinc-500">Loading...</div>
            </div>
        )
    }

    // Show landing page for non-authenticated users
    if (!isAuthenticated) {
        return <LandingPage />
    }

    return null
}
