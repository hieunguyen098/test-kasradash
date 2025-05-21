import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ListItem {
  title: string;
  value: string | number;
  trend?: "up" | "down" | "neutral";
}

interface ListCardProps {
  title: string;
  description: string;
  items: ListItem[];
}

export function ListCard({ title, description, items }: ListCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {item.title}
              </span>
              <div className="flex items-center gap-2">
                <span className="font-medium">{item.value}</span>
                {item.trend && (
                  <span
                    className={`text-xs ${
                      item.trend === "up"
                        ? "text-green-500"
                        : item.trend === "down"
                        ? "text-red-500"
                        : "text-gray-500"
                    }`}
                  >
                    {item.trend === "up"
                      ? "↑"
                      : item.trend === "down"
                      ? "↓"
                      : "→"}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
