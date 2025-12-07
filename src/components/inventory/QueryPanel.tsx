import { useState } from "react";
import { Search, ArrowRight, Copy, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const QueryPanel = () => {
  const [skuQuery, setSkuQuery] = useState("SKU001");
  const [movementQuery, setMovementQuery] = useState("");
  const [skuResult, setSkuResult] = useState<object | null>({ sku: "SKU001", balance: 1250, material: "Steel" });
  const [movementResult, setMovementResult] = useState<object | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSkuSearch = () => {
    setSkuResult({ sku: skuQuery, balance: 1250, material: "Steel", lastMovement: "2025-12-07T09:40:00Z" });
  };

  const handleMovementSearch = () => {
    if (movementQuery) {
      setMovementResult({
        movementId: movementQuery,
        sku: "SKU001",
        material: "Steel",
        type: "GI",
        quantity: 51,
        timestamp: "2025-12-07T09:40:00Z",
        txHash: "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead",
      });
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-6">Query Blockchain</h3>

      <Tabs defaultValue="sku" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-secondary/50 p-1 rounded-xl mb-6">
          <TabsTrigger value="sku" className="rounded-lg data-[state=active]:bg-card">
            SKU Balance
          </TabsTrigger>
          <TabsTrigger value="movement" className="rounded-lg data-[state=active]:bg-card">
            Movement Details
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sku" className="space-y-4">
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Enter SKU</Label>
            <div className="flex gap-2">
              <Input
                value={skuQuery}
                onChange={(e) => setSkuQuery(e.target.value)}
                placeholder="SKU001"
                className="input-modern flex-1"
              />
              <Button onClick={handleSkuSearch} className="bg-primary hover:bg-primary/90">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {skuResult && (
            <div className="relative">
              <div className="bg-secondary/50 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-foreground/80">
                  {JSON.stringify(skuResult, null, 2)}
                </pre>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => copyToClipboard(JSON.stringify(skuResult, null, 2))}
              >
                {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="movement" className="space-y-4">
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Enter Movement ID</Label>
            <div className="flex gap-2">
              <Input
                value={movementQuery}
                onChange={(e) => setMovementQuery(e.target.value)}
                placeholder="MOV001"
                className="input-modern flex-1"
              />
              <Button onClick={handleMovementSearch} className="bg-primary hover:bg-primary/90">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {movementResult && (
            <div className="relative">
              <div className="bg-secondary/50 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-foreground/80">
                  {JSON.stringify(movementResult, null, 2)}
                </pre>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => copyToClipboard(JSON.stringify(movementResult, null, 2))}
              >
                {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default QueryPanel;
