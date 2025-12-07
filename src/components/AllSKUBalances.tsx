import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RefreshCw } from "lucide-react";

interface SKUBalance {
  sku: string;
  balance: number;
}

const AllSKUBalances = () => {
  const [balances, setBalances] = useState<SKUBalance[]>([
    { sku: "SKU001", balance: 50.0 },
    { sku: "SKU002", balance: 150.0 },
  ]);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    console.log("Refreshing balances...");
    // Simulate API call
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  const formatBalance = (balance: number) => {
    return balance.toFixed(2);
  };

  return (
    <div className="card-elevated p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">All SKU Balances</h2>
      </div>
      <div className="mb-4">
        <Button
          onClick={handleRefresh}
          variant="secondary"
          className="bg-muted hover:bg-muted/80"
          disabled={isRefreshing}
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
          Refresh Balances
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-semibold">SKU</TableHead>
              <TableHead className="font-semibold">Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {balances.map((item) => (
              <TableRow key={item.sku}>
                <TableCell className="font-medium">{item.sku}</TableCell>
                <TableCell className="text-primary font-medium">
                  {formatBalance(item.balance)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AllSKUBalances;
