import { useState } from "react";
import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import SidebarNav from "@/components/inventory/SidebarNav";
import StatsGrid from "@/components/inventory/StatsGrid";
import MovementForm from "@/components/inventory/MovementForm";
import RecentMovements from "@/components/inventory/RecentMovements";
import InventoryTable from "@/components/inventory/InventoryTable";
import QueryPanel from "@/components/inventory/QueryPanel";

const Index = () => {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      <SidebarNav activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="ml-64 min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-40 glass-card border-b border-border/30 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                {activeSection === "overview" && "Dashboard"}
                {activeSection === "movements" && "Stock Movements"}
                {activeSection === "inventory" && "Inventory"}
                {activeSection === "query" && "Query Blockchain"}
              </h2>
              <p className="text-sm text-muted-foreground">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <MovementForm />
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
              </Button>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <User className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8 space-y-8">
          {activeSection === "overview" && (
            <>
              <StatsGrid />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RecentMovements />
                <QueryPanel />
              </div>
              <InventoryTable />
            </>
          )}

          {activeSection === "movements" && (
            <>
              <StatsGrid />
              <RecentMovements />
            </>
          )}

          {activeSection === "inventory" && <InventoryTable />}

          {activeSection === "query" && (
            <div className="max-w-2xl">
              <QueryPanel />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
