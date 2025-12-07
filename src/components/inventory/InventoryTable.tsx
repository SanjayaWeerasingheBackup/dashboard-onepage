import { useState } from "react";
import { Search, ArrowUpDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SKUBalance {
  sku: string;
  material: string;
  balance: number;
  lastUpdate: string;
}

const mockBalances: SKUBalance[] = [
  { sku: "SKU001", material: "Steel", balance: 1250, lastUpdate: "2 min ago" },
  { sku: "SKU002", material: "Copper", balance: 850, lastUpdate: "5 min ago" },
  { sku: "SKU003", material: "Aluminum", balance: 2100, lastUpdate: "12 min ago" },
  { sku: "SKU004", material: "Brass", balance: 320, lastUpdate: "1 hour ago" },
  { sku: "SKU005", material: "Iron", balance: 45, lastUpdate: "2 hours ago" },
];

const InventoryTable = () => {
  const [balances] = useState<SKUBalance[]>(mockBalances);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBalances = balances.filter(
    (b) =>
      b.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.material.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getBalanceColor = (balance: number) => {
    if (balance < 100) return "text-destructive";
    if (balance < 500) return "text-amber-500";
    return "text-primary";
  };

  return (
    <div className="glass-card p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h3 className="text-lg font-semibold">Inventory Balances</h3>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search SKU or material..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 input-modern"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                <Button variant="ghost" size="sm" className="h-auto p-0 hover:bg-transparent">
                  SKU <ArrowUpDown className="w-3 h-3 ml-1 inline" />
                </Button>
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Material</th>
              <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Balance</th>
              <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Last Update</th>
            </tr>
          </thead>
          <tbody>
            {filteredBalances.map((item, index) => (
              <tr
                key={item.sku}
                className="border-b border-border/30 hover:bg-secondary/30 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <td className="py-4 px-4">
                  <span className="font-semibold">{item.sku}</span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>{item.material}</span>
                  </div>
                </td>
                <td className={`py-4 px-4 text-right font-bold ${getBalanceColor(item.balance)}`}>
                  {item.balance.toLocaleString()}
                </td>
                <td className="py-4 px-4 text-right text-sm text-muted-foreground">
                  {item.lastUpdate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryTable;
