import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BalanceResult {
  sku: string;
  balance: number;
}

const QuerySKUBalance = () => {
  const [sku, setSku] = useState("SKU001");
  const [result, setResult] = useState<BalanceResult | null>({
    sku: "SKU001",
    balance: -1950,
  });

  const handleQuery = () => {
    console.log("Querying balance for SKU:", sku);
    // Simulated response
    setResult({
      sku: sku,
      balance: -1950,
    });
  };

  return (
    <div className="card-elevated p-6 h-full">
      <h2 className="text-xl font-semibold text-foreground mb-6">Query SKU Balance</h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="querySku">SKU</Label>
          <Input
            id="querySku"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            placeholder="e.g., SKU001"
          />
        </div>
        <Button onClick={handleQuery} className="w-full btn-primary-gradient">
          Get Balance
        </Button>
        {result && (
          <div className="code-block">
            <pre className="text-sm">
              {`{`}
              {`\n  "sku": "${result.sku}",`}
              {`\n  "balance": ${result.balance}`}
              {`\n}`}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuerySKUBalance;
