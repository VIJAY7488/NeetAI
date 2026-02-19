
import { StatsGrid, SubjectProgress, TodayTasks, WelcomeBanner } from '@/components/dashboard'

const DashboardPage = () => {
  return (
    <div className="p-7 fade-up">
        <WelcomeBanner />
        <StatsGrid />

        <div className="flex flex-col gap-5">
            <SubjectProgress />
            <TodayTasks />
        </div>

    </div>
  )
}

export default DashboardPage
