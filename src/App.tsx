import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OrganizingCommittee from "./pages/OrganizingCommittee";
import PreviousSpeakers from "./pages/PreviousSpeakers";
import PastEventsGallery from "./pages/PastEventsGallery";
import PastConferenceGallery from "./pages/PastConferenceGallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/organizing-committee" element={<OrganizingCommittee />} />
          <Route path="/previous-speakers" element={<PreviousSpeakers />} />
          <Route path="/past-events-gallery" element={<PastEventsGallery />} />
          <Route path="/past-conference-gallery" element={<PastConferenceGallery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
