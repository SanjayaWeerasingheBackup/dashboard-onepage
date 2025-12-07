import { Package, Search, BarChart3, Settings, Layers, ArrowRightLeft, Database } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: "overview", label: "Overview", icon: BarChart3 },
  { id: "movements", label: "Stock Movements", icon: ArrowRightLeft },
  { id: "inventory", label: "Inventory", icon: Package },
  { id: "query", label: "Query", icon: Search },
];

const SidebarNav = ({ activeSection, onSectionChange }: SidebarNavProps) => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 glass-card-strong border-r border-border/30 p-6 flex flex-col z-50">
      <div className="mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary">
            <Layers className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-lg">InventoryX</h1>
            <p className="text-xs text-muted-foreground">Blockchain Powered</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={cn(
              "nav-item w-full text-left",
              activeSection === item.id && "nav-item-active"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="pt-6 border-t border-border/30">
        <div className="glass-card p-4 relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
          <div className="flex items-center gap-2 mb-2">
            <Database className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-muted-foreground">Hyperledger Status</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-semibold">Connected</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarNav;
