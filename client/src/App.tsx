import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import DeveloppementApplications from "@/pages/developpement-applications";
import SitesWebProfessionnels from "@/pages/sites-web-professionnels";
import TradingFormation from "@/pages/trading-formation";
import TransitMaritime from "@/pages/transit-maritime";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/developpement-applications" component={DeveloppementApplications} />
      <Route path="/sites-web-professionnels" component={SitesWebProfessionnels} />
      <Route path="/trading-formation" component={TradingFormation} />
      <Route path="/transit-maritime" component={TransitMaritime} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
