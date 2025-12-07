import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, MoreHorizontal, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Movement {
  id: string;
  sku: string;
  material: string;
  type: "GR" | "GI" | "TR" | "AD";
  quantity: number;
  timestamp: string;
}

const mockMovements: Movement[] = [
  { id: "MOV008", sku: "SKU001", material: "Steel", type: "GI", quantity: 51, timestamp: "2025-12-07 09:40" },
  { id: "MOV007", sku: "SKU003", material: "Aluminum", type: "GR", quantity: 200, timestamp: "2025-12-07 08:15" },
  { id: "MOV006", sku: "SKU002", material: "Copper", type: "TR", quantity: 75, timestamp: "2025-12-06 16:30" },
  { id: "MOV005", sku: "SKU001", material: "Steel", type: "GR", quantity: 150, timestamp: "2025-12-06 14:20" },
  { id: "MOV004", sku: "SKU004", material: "Brass", type: "AD", quantity: -10, timestamp: "2025-12-06 11:00" },
];

const typeStyles = {
  GR: { label: "Receipt", bg: "bg-primary/20", text: "text-primary", icon: ArrowDownRight },
  GI: { label: "Issue", bg: "bg-destructive/20", text: "text-destructive", icon: ArrowUpRight },
  TR: { label: "Transfer", bg: "bg-accent/20", text: "text-accent", icon: MoreHorizontal },
  AD: { label: "Adjust", bg: "bg-muted", text: "text-muted-foreground", icon: RefreshCw },
};

const RecentMovements = () => {
  const [movements] = useState<Movement[]>(mockMovements);

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Recent Movements</h3>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          View All
        </Button>
      </div>

      <div className="space-y-3">
        {movements.map((movement, index) => {
          const style = typeStyles[movement.type];
          const Icon = style.icon;
          
          return (
            <div
              key={movement.id}
              className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-10 h-10 rounded-lg ${style.bg} flex items-center justify-center`}>
                <Icon className={`w-5 h-5 ${style.text}`} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{movement.id}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${style.bg} ${style.text}`}>
                    {style.label}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {movement.material} • {movement.sku}
                </p>
              </div>

              <div className="text-right">
                <p className={`font-semibold ${movement.type === "GI" ? "text-destructive" : "text-primary"}`}>
                  {movement.type === "GI" || movement.quantity < 0 ? "-" : "+"}{Math.abs(movement.quantity)}
                </p>
                <p className="text-xs text-muted-foreground">{movement.timestamp}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentMovements;
