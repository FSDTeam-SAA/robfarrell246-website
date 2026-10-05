import React from "react";
import DashboardOverviewHeader from "../_components/dashboard-overview-header";



const DashboardOverviewPage = () => {
  return (
    <div className="min-h-screen bg-[#F7FAFE]">
      <DashboardOverviewHeader
        title="Overview"
        description="Welcome back! Here's what's happening with VELARI today."
      />
      
    </div>
  );
};

export default DashboardOverviewPage;
