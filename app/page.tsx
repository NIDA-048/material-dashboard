import Sidebar from "@/components/ui/layout/Sidebar";
import WelcomeCard from "@/components/ui/dashboard/WelcomeCard";
import AnalyticsCard from "@/components/ui/dashboard/AnalyticsCard";
import ProjectsTable from "@/components/ui/dashboard/ProjectsTable";
import SalesChart from "@/components/ui/dashboard/SalesChart";
import UserActivityChart from "@/components/ui/dashboard/UserActivityChart";
import TrafficSourcesChart from "@/components/ui/dashboard/TrafficSources";
import QuarterlyPerformanceChart from "@/components/ui/dashboard/QuarterlyPerformance";
import Footer from "@/components/ui/layout/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F4] p-6">
  <div className="mx-auto max-w-[1440px]">

    <div className="flex gap-6">
      <Sidebar />

      <section className="flex-1 rounded-[24px] bg-white p-8 space-y-8">
        <WelcomeCard />
        <AnalyticsCard />
        <ProjectsTable />

        <div className="mt-8 grid grid-cols-2 gap-6">
          <SalesChart />
          <UserActivityChart />
          <TrafficSourcesChart />
          <QuarterlyPerformanceChart />
        </div>
      </section>
    </div>

    {/* Footer */}
    <div className="ml-[296px] mt-8">
      <Footer />
    </div>

  </div>
</main>
  );
}