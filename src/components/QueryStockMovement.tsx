import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface MovementResult {
  movementId: string;
  sku: string;
  material: string;
  movementType: string;
  quantity: number;
  timestamp: string;
}

const QueryStockMovement = () => {
  const [movementId, setMovementId] = useState("");
  const [result, setResult] = useState<MovementResult | null>(null);

  const handleQuery = () => {
    console.log("Querying movement:", movementId);
    // Simulated response
    if (movementId) {
      setResult({
        movementId: movementId,
        sku: "SKU001",
        material: "Steel",
        movementType: "GI",
        quantity: 51,
        timestamp: new Date().toISOString(),
      });
    }
  };

  return (
    <div className="card-elevated p-6 h-full">
      <h2 className="text-xl font-semibold text-foreground mb-6">Query Stock Movement</h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="queryMovementId">Movement ID</Label>
          <Input
            id="queryMovementId"
            value={movementId}
            onChange={(e) => setMovementId(e.target.value)}
            placeholder="e.g., MOV001"
          />
        </div>
        <Button onClick={handleQuery} className="w-full btn-primary-gradient">
          Get Movement
        </Button>
        {result && (
          <div className="code-block">
            <pre className="text-sm">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default QueryStockMovement;
