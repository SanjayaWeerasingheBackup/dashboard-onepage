import DashboardHeader from "@/components/DashboardHeader";
import AddStockMovement from "@/components/AddStockMovement";
import QuerySKUBalance from "@/components/QuerySKUBalance";
import QueryStockMovement from "@/components/QueryStockMovement";
import AllSKUBalances from "@/components/AllSKUBalances";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <DashboardHeader isConnected={false} />
        
        <AddStockMovement />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <QuerySKUBalance />
          <QueryStockMovement />
        </div>
        
        <AllSKUBalances />
      </div>
    </div>
  );
};

export default Index;
