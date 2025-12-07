import { TrendingUp, TrendingDown, Package, ArrowUpDown, Boxes } from "lucide-react";

const stats = [
  {
    label: "Total SKUs",
    value: "247",
    change: "+12%",
    trend: "up",
    icon: Package,
  },
  {
    label: "Today's Movements",
    value: "38",
    change: "+5",
    trend: "up",
    icon: ArrowUpDown,
  },
  {
    label: "Low Stock Items",
    value: "8",
    change: "-3",
    trend: "down",
    icon: Boxes,
  },
];

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="stat-card animate-slide-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className={`flex items-center gap-1 text-sm ${
                stat.trend === "up" ? "text-primary" : "text-destructive"
              }`}>
                {stat.trend === "up" ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                <span className="font-medium">{stat.change}</span>
              </div>
            </div>
            <p className="text-3xl font-bold mb-1">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
