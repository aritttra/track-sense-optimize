import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import LiveSection from "./pages/LiveSection";
import KPIs from "./pages/KPIs";
import Recommendations from "./pages/Recommendations";
import NetworkMap from "./pages/NetworkMap";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  // Set dark theme by default for control center operations
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SidebarProvider defaultOpen={true}>
            <div className="min-h-screen flex w-full bg-background">
              <AppSidebar />
              
              <div className="flex-1 flex flex-col">
                <header className="h-12 flex items-center border-b border-border bg-card px-4">
                  <SidebarTrigger className="mr-4" />
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-signal-green animate-pulse"></div>
                    <span className="text-sm font-medium text-foreground">
                      Railway Traffic Control System
                    </span>
                  </div>
                </header>

                <main className="flex-1 overflow-auto">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/live-section" element={<LiveSection />} />
                    <Route path="/kpis" element={<KPIs />} />
                    <Route path="/recommendations" element={<Recommendations />} />
                    <Route path="/network-map" element={<NetworkMap />} />
                    <Route path="/settings" element={<Settings />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </div>
            </div>
          </SidebarProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
