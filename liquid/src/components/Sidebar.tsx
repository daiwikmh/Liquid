import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, User, Home, Settings, LogOut } from "lucide-react";
import { createContext, useContext, useState } from "react";

interface SidebarContextType {
  selected: string;
  setSelected: (value: string) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState<string>("dashboard");

  return (
    <SidebarContext.Provider value={{ selected, setSelected }}>
      {children}
    </SidebarContext.Provider>
  );
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const { selected, setSelected } = useSidebar();

  return (
    <div className={cn("h-screen bg-gray-100", className)}>
      <div className="space-y-4 py-4 h-full flex flex-col justify-between">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Navigation</h2>
          <div className="space-y-1">
            <Button
              variant={selected === "dashboard" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setSelected("dashboard")}
            >
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button
              variant={selected === "profile" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setSelected("profile")}
            >
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
            <Button
              variant={selected === "settings" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setSelected("settings")}
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>
        <div className="px-3 py-2 mt-auto">
          <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-100">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}