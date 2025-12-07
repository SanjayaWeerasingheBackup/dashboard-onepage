import { useState } from "react";
import { Plus, Calendar } from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const movementTypes = [
  { value: "GR", label: "Goods Receipt", color: "text-primary" },
  { value: "GI", label: "Goods Issue", color: "text-destructive" },
  { value: "TR", label: "Transfer", color: "text-accent" },
  { value: "AD", label: "Adjustment", color: "text-muted-foreground" },
];

const MovementForm = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    movementId: "",
    sku: "",
    material: "",
    movementType: "",
    quantity: "",
    timestamp: new Date().toISOString().slice(0, 16),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting movement:", formData);
    toast.success("Stock movement recorded successfully", {
      description: `Movement ${formData.movementId} has been added to the blockchain.`,
    });
    setOpen(false);
    setFormData({
      movementId: "",
      sku: "",
      material: "",
      movementType: "",
      quantity: "",
      timestamp: new Date().toISOString().slice(0, 16),
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity glow-primary">
          <Plus className="w-4 h-4 mr-2" />
          New Movement
        </Button>
      </DialogTrigger>
      <DialogContent className="glass-card-strong border-border/50 max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Add Stock Movement</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-muted-foreground">Movement ID</Label>
              <Input
                value={formData.movementId}
                onChange={(e) => setFormData({ ...formData, movementId: e.target.value })}
                placeholder="MOV001"
                className="input-modern"
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-muted-foreground">SKU</Label>
              <Input
                value={formData.sku}
                onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                placeholder="SKU001"
                className="input-modern"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-muted-foreground">Material</Label>
              <Input
                value={formData.material}
                onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                placeholder="Steel, Copper..."
                className="input-modern"
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-muted-foreground">Type</Label>
              <Select
                value={formData.movementType}
                onValueChange={(value) => setFormData({ ...formData, movementType: value })}
              >
                <SelectTrigger className="input-modern">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="glass-card-strong border-border/50">
                  {movementTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      <span className={type.color}>{type.label}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-muted-foreground">Quantity</Label>
              <Input
                type="number"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                placeholder="100"
                className="input-modern"
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-muted-foreground">Timestamp</Label>
              <div className="relative">
                <Input
                  type="datetime-local"
                  value={formData.timestamp}
                  onChange={(e) => setFormData({ ...formData, timestamp: e.target.value })}
                  className="input-modern pr-10"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold h-12 hover:opacity-90 transition-opacity"
          >
            Record Movement
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default MovementForm;
