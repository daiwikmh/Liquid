import { Sidebar } from "@/components/Sidebar";
import {MetricsCard} from "@/components/cards/MetricsCard"; // Import the MetricsCard component
import {StatsChart} from "@/components/cards/StatsChart"; // Import the StatsChart component
import {VaultTable} from "@/components/cards/VaultTable"; // Import the VaultTable component

export default function Analytics() {
  return (
    <div className="min-h-screen">
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 transition-all duration-300 ease-in-out bg-background">
          <div className="h-full px-4 py-6 lg:px-8">
            <div className="h-full space-y-6">
              {/* Header */}
              <div className="space-y-0.5">
                <h2 className="text-2xl font-bold tracking-tight">Analytics</h2>
                <p className="text-muted-foreground">
                  Track your performance and market trends.
                </p>
              </div>
              <div className="border-t" />

              {/* Metrics Cards Section */}
              <div className="grid gap-4 md:grid-cols-3">
                <MetricsCard
                  title="Your Balance"
                  value="$74,892"
                  change={{ value: "$1,340", percentage: "-2.1%", isPositive: false }}
                />
                <MetricsCard
                  title="Your Deposits"
                  value="$54,892"
                  change={{ value: "$1,340", percentage: "+13.2%", isPositive: true }}
                />
                <MetricsCard
                  title="Accrued Yield"
                  value="$20,892"
                  change={{ value: "$1,340", percentage: "+1.2%", isPositive: true }}
                />
              </div>

              {/* General Statistics Section */}
              <div className="rounded-lg border bg-card p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold">General Statistics</h2>
                  <div className="flex gap-2">
                    <button className="px-2 py-1 text-sm rounded-md hover:bg-accent">Today</button>
                    <button className="px-2 py-1 text-sm rounded-md hover:bg-accent">Last week</button>
                    <button className="px-2 py-1 text-sm rounded-md hover:bg-accent">Last month</button>
                    <button className="px-2 py-1 text-sm rounded-md hover:bg-accent">Last 6 months</button>
                    <button className="px-2 py-1 text-sm rounded-md hover:bg-accent">Year</button>
                  </div>
                </div>
                <StatsChart />
              </div>

              {/* Vault Table Section */}
              <div>
                <VaultTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}