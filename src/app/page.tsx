"use client";

import { StatCard } from "@/components/dashboard/stat-card";
import { ListCard } from "@/components/dashboard/list-card";
import { AnalyticsDialog } from "@/components/dashboard/analytics-dialog";

const mockData = {
  totalUsers: 1234,
  activeUsers: 890,
  newUsers: 123,
  revenue: "$12,345",
  topProducts: [
    { title: "Product A", value: "$4,321", trend: "up" as const },
    { title: "Product B", value: "$3,210", trend: "up" as const },
    { title: "Product C", value: "$2,109", trend: "down" as const },
    { title: "Product D", value: "$1,987", trend: "neutral" as const },
  ],
  recentActivity: [
    {
      title: "New User Registration",
      value: "2 min ago",
      trend: "up" as const,
    },
    { title: "Product Purchase", value: "5 min ago", trend: "up" as const },
    { title: "Support Ticket", value: "10 min ago", trend: "neutral" as const },
    { title: "User Logout", value: "15 min ago", trend: "down" as const },
  ],
  systemStatus: [
    { title: "Server Load", value: "45%", trend: "neutral" as const },
    { title: "Database", value: "Healthy", trend: "up" as const },
    { title: "Cache Hit Rate", value: "92%", trend: "up" as const },
    { title: "API Response Time", value: "120ms", trend: "down" as const },
  ],
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          description="All registered users"
          value={mockData.totalUsers}
        />
        <StatCard
          title="Active Users"
          description="Users active in last 30 days"
          value={mockData.activeUsers}
        />
        <StatCard
          title="New Users"
          description="Users joined this month"
          value={mockData.newUsers}
        />
        <StatCard
          title="Revenue"
          description="Total revenue this month"
          value={mockData.revenue}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ListCard
          title="Top Products"
          description="Best performing products this month"
          items={mockData.topProducts}
        />
        <ListCard
          title="Recent Activity"
          description="Latest user activities"
          items={mockData.recentActivity}
        />
        <ListCard
          title="System Status"
          description="Current system metrics"
          items={mockData.systemStatus}
        />
      </div>

      <div className="flex justify-center">
        <AnalyticsDialog data={mockData} />
      </div>
    </div>
  );
}
