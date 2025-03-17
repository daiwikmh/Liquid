import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { metaMask } from "wagmi/connectors";
import AfterLogin from "../pages/AfterLogin";


export function Navbar() {

    const { address, isConnected } = useAccount(); // Get the current account address
    const { connect } = useConnect();
    const { disconnect } = useDisconnect(); // Hook to disconnect from MetaMask
 

  return (
    <nav className="fixed top-0 bg-[#e6e8df] text-black z-50 flex h-13 w-full items-center border-b bg-[#1b1e15] px-2 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-black"
          >
            <path d="M12 22a8 8 0 0 0 8-8" />
            <path d="M2 12h20" />
            <path d="M12 2v20" />
            <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
          </svg>
          <span>Liquid</span>
        </Link>
          <ul className="flex items-center text-black justify-center gap-6">
            <li>
              <Link
                to="/"
                className="text-sm font-medium text-black hover:text-gray-900"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-sm font-medium text-black"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-sm font-medium transition-colors hover:text-gray-900"
              >
                About
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-4">
                    {!isConnected ? (
                        <Link to="/AfterLogin">
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => connect({ connector: metaMask() })}
                            >
                                Get Started
                            </Button>
                        </Link>
                    ) : (
                        <div className="text-lg font-medium text-green-600">
                            Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
                        </div>
            
          )}
        </div>
      </div>
    </nav>
  );
}