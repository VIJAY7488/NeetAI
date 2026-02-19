import SidebarLayout from "@/components/layout/sidebar"

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen">
            <SidebarLayout />
            <main className="flex-1 ml-60 bg-bg">
                {children}
            </main>
        </div>
    )
}