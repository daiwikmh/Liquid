import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Menu,
  Home,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { metaMask } from "wagmi/connectors";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router";

interface SidebarProps {
  className?: string;
}

export function Sidebar() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={cn(
        "relative h-screen bg-gray-100 transition-all duration-300 ease-in-out border-r",
        isSidebarOpen ? "w-64" : "w-16"
      )}
    >
      <div className="flex flex-col justify-between h-full py-4 overflow-hidden">
        <div className="px-3 space-y-4">
          {/* Toggle Button */}
          <div className="flex justify-end mb-2">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "bg-gray-100 hover:bg-gray-200 transition-all duration-300 ease-in-out",
                !isSidebarOpen && "rotate-180"
              )}
              onClick={toggleSidebar}
            >
              <ChevronDown className="h-4 w-4 transform -rotate-90" />
            </Button>
          </div>

          <div
            className={cn(
              "text-lg font-semibold px-4 transition-opacity duration-300",
              !isSidebarOpen ? "opacity-0" : "opacity-100"
            )}
          >
            Liquid
          </div>

          <Button
            variant="ghost"
            className={cn(
              "w-full flex items-center gap-3 px-4 py-2 transition-all duration-300 hover:bg-gray-200",
              !isSidebarOpen ? "justify-center px-2" : "justify-start"
            )}
            onClick={() => navigate("/Dashboard")}
          >
            <Home className="h-5 w-5 flex-shrink-0" />
            <span
              className={cn(
                "whitespace-nowrap transition-all duration-300",
                !isSidebarOpen ? "w-0 opacity-0" : "w-auto opacity-100"
              )}
            >
              Dashboard
            </span>
          </Button>

          <Button
            variant="ghost"
            className={cn(
              "w-full flex items-center gap-3 px-4 py-2 transition-all duration-300 hover:bg-gray-200",
              !isSidebarOpen ? "justify-center px-2" : "justify-start"
            )}
          >
            <User className="h-5 w-5 flex-shrink-0" />
            <span
              className={cn(
                "whitespace-nowrap transition-all duration-300",
                !isSidebarOpen ? "w-0 opacity-0" : "w-auto opacity-100"
              )}
            >
              Profile
            </span>
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "w-full flex items-center gap-3 px-4 py-2 transition-all duration-300 hover:bg-gray-200",
              !isSidebarOpen ? "justify-center px-2" : "justify-start"
            )}
            onClick={() => navigate("/Analytics")}
          >
            <User className="h-5 w-5 flex-shrink-0" />
            <span
              className={cn(
                "whitespace-nowrap transition-all duration-300",
                !isSidebarOpen ? "w-0 opacity-0" : "w-auto opacity-100"
              )}
            >
              Analytics
            </span>
          </Button>

          <Button
            variant="ghost"
            className={cn(
              "w-full flex items-center gap-3 px-4 py-2 transition-all duration-300 hover:bg-gray-200",
              !isSidebarOpen ? "justify-center px-2" : "justify-start"
            )}
          >
            <Settings className="h-5 w-5 flex-shrink-0" />
            <span
              className={cn(
                "whitespace-nowrap transition-all duration-300",
                !isSidebarOpen ? "w-0 opacity-0" : "w-auto opacity-100"
              )}
            >
              Settings
            </span>
          </Button>
        </div>

        {/* Footer Section */}
        <div className="px-3 mt-auto">
          <Separator className="my-4" />

          {isConnected ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-2 transition-all duration-300 hover:bg-gray-200",
                    !isSidebarOpen ? "justify-center px-2" : "justify-start"
                  )}
                >
                  <LogOut className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span
                    className={cn(
                      "whitespace-nowrap transition-all duration-300",
                      !isSidebarOpen ? "w-0 opacity-0" : "w-auto opacity-100"
                    )}
                  >
                    Logout
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <div className="p-2 text-sm text-gray-700">
                  Connected:{" "}
                  <span className="font-medium">
                    {address?.slice(0, 6)}...{address?.slice(-4)}
                  </span>
                </div>
                <DropdownMenuItem
                  className="text-red-500 cursor-pointer"
                  onClick={() => disconnect()}
                >
                  Disconnect
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant="outline"
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2 transition-all duration-300",
                !isSidebarOpen ? "justify-center px-2" : "justify-start"
              )}
              onClick={() => connect({ connector: metaMask() })}
            >
              <LogOut className="h-5 w-5 flex-shrink-0" />
              <span
                className={cn(
                  "whitespace-nowrap transition-all duration-300",
                  !isSidebarOpen ? "w-0 opacity-0" : "w-auto opacity-100"
                )}
              >
                Connect Wallet
              </span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}