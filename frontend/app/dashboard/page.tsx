import React from 'react'
import page from '../page'
import { StatsGrid, WelcomeBanner } from '@/components/dashboard'

const DashboardPage = () => {
  return (
    <div className="p-7 fade-up">
        <WelcomeBanner />
        <StatsGrid />
    </div>
  )
}

export default DashboardPage