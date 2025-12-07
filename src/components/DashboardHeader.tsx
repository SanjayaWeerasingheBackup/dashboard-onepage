import { useState } from "react";

interface DashboardHeaderProps {
  isConnected?: boolean;
}

const DashboardHeader = ({ isConnected = false }: DashboardHeaderProps) => {
  return (
    <header className="header-gradient py-8 px-6 rounded-xl text-primary-foreground">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold italic mb-2">
          Inventory Management System
        </h1>
        <p className="text-primary-foreground/80 text-sm md:text-base mb-4">
          Powered by Hyperledger Fabric Blockchain
        </p>
        <div className="flex justify-center">
          <div className={`status-badge ${isConnected ? 'bg-success/30' : 'bg-primary-foreground/20'}`}>
            <span 
              className={`w-2 h-2 rounded-full ${isConnected ? 'bg-success' : 'bg-destructive'} animate-pulse-dot`}
            />
            <span className="text-primary-foreground text-sm">
              {isConnected ? 'Connected to server' : 'Cannot connect to server'}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
