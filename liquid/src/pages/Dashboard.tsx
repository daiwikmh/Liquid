import { Sidebar } from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 transition-all duration-300 ease-in-out bg-background">
          <div className="h-full px-4 py-6 lg:px-8">
            <div className="h-full space-y-6">
              <div className="space-y-0.5">
                <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
                <p className="text-muted-foreground">
                  Welcome to your dashboard - manage your profile and settings here.
                </p>
              </div>
              <div className="border-t" />
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <h3 className="tracking-tight text-sm font-medium">Total Revenue</h3>
                  </div>
                  <div className="text-2xl font-bold">$15,231.89</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <h3 className="tracking-tight text-sm font-medium">Subscriptions</h3>
                  </div>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <h3 className="tracking-tight text-sm font-medium">Sales</h3>
                  </div>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground">
                    +19% from last month
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <h3 className="tracking-tight text-sm font-medium">Active Now</h3>
                  </div>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">
                    +201 since last hour
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}