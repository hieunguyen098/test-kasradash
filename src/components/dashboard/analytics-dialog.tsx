import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface AnalyticsData {
  totalUsers: number;
  activeUsers: number;
  newUsers: number;
  revenue: string;
}

interface AnalyticsDialogProps {
  data: AnalyticsData;
}

export function AnalyticsDialog({ data }: AnalyticsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Analytics Report</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Analytics Report</DialogTitle>
          <DialogDescription>
            View detailed analytics for your dashboard metrics.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <p className="text-sm font-medium">Total Users</p>
            <p className="col-span-3 text-sm">{data.totalUsers}</p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <p className="text-sm font-medium">Active Users</p>
            <p className="col-span-3 text-sm">{data.activeUsers}</p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <p className="text-sm font-medium">New Users</p>
            <p className="col-span-3 text-sm">{data.newUsers}</p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <p className="text-sm font-medium">Revenue</p>
            <p className="col-span-3 text-sm">{data.revenue}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
