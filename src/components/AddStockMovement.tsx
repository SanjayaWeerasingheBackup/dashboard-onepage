import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "lucide-react";

interface StockMovement {
  movementId: string;
  sku: string;
  material: string;
  movementType: string;
  quantity: string;
  timestamp: string;
}

const AddStockMovement = () => {
  const [formData, setFormData] = useState<StockMovement>({
    movementId: "MOV008",
    sku: "SKU001",
    material: "Steel",
    movementType: "GI",
    quantity: "51",
    timestamp: new Date().toISOString().slice(0, 16),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding stock movement:", formData);
  };

  const handleChange = (field: keyof StockMovement, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="card-elevated p-6">
      <h2 className="text-xl font-semibold text-foreground mb-6">Add Stock Movement</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="movementId">
              Movement ID <span className="text-destructive">*</span>
            </Label>
            <Input
              id="movementId"
              value={formData.movementId}
              onChange={(e) => handleChange("movementId", e.target.value)}
              placeholder="e.g., MOV001"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sku">
              SKU <span className="text-destructive">*</span>
            </Label>
            <Input
              id="sku"
              value={formData.sku}
              onChange={(e) => handleChange("sku", e.target.value)}
              placeholder="e.g., SKU001"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="material">
              Material <span className="text-destructive">*</span>
            </Label>
            <Input
              id="material"
              value={formData.material}
              onChange={(e) => handleChange("material", e.target.value)}
              placeholder="e.g., Steel"
              className="bg-primary/10 border-primary/30"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="movementType">
              Movement Type <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.movementType}
              onValueChange={(value) => handleChange("movementType", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select movement type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="GR">GR - Goods Receipt (Inbound)</SelectItem>
                <SelectItem value="GI">GI - Goods Issue (Outbound)</SelectItem>
                <SelectItem value="TR">TR - Transfer</SelectItem>
                <SelectItem value="AD">AD - Adjustment</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="quantity">
              Quantity <span className="text-destructive">*</span>
            </Label>
            <Input
              id="quantity"
              type="number"
              value={formData.quantity}
              onChange={(e) => handleChange("quantity", e.target.value)}
              placeholder="e.g., 100"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="timestamp">Timestamp</Label>
            <div className="relative">
              <Input
                id="timestamp"
                type="datetime-local"
                value={formData.timestamp}
                onChange={(e) => handleChange("timestamp", e.target.value)}
                className="pr-10"
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full btn-primary-gradient">
          Add Stock Movement
        </Button>
      </form>
    </div>
  );
};

export default AddStockMovement;
