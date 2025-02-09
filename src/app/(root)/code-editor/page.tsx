import React from "react";
import EditorPanel from "./_components/EditorPanel";
import OutputPanel from "./_components/OutputPanel";
import Header from "../_components/Header";

function DashboardPage() {
  return (
    <div className="min-h-screen">
      <div className="w-full">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-2 md:p-6">
          <EditorPanel />
          <OutputPanel />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
