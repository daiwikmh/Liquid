import { Link, useNavigate } from "react-router"; // Import `useNavigate` for programmatic navigation
import { Button } from "@/components/ui/button";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { metaMask } from "wagmi/connectors";

export function Navbar() {
  const navigate = useNavigate(); // Hook for programmatic navigation
  const { address, isConnected } = useAccount(); // Get the current account address and connection status
  const { connect } = useConnect(); // Hook to connect to MetaMask
  const { disconnect } = useDisconnect(); // Hook to disconnect from MetaMask

  // Function to handle MetaMask connection
  const handleConnect = async () => {
    try {
      // Attempt to connect to MetaMask
      await connect({ connector: metaMask() });

      // If connection is successful, navigate to /Dashboard
      navigate("/Dashboard");
    } catch (err) {
      console.error("Failed to connect to MetaMask:", err);
      // Optionally, display an error message to the user
    }
  };

  return (
    <nav className="fixed top-0 bg-[#e6e8df] text-black z-50 flex h-13 w-full items-center border-b bg-[#1b1e15] px-2 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
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

        {/* Navigation Links */}
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
              to="/about"
              className="text-sm font-medium transition-colors hover:text-gray-900"
            >
              About
            </Link>
          </li>
        </ul>

        {/* Connect/Connected Status */}
        <div className="flex items-center gap-4">
          {!isConnected ? (
            <Button
              variant="outline"
              size="lg"
              onClick={handleConnect} // Call handleConnect on click
            >
              Get Started
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <div className="text-lg font-medium text-green-600">
                Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
              </div>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => disconnect()} // Disconnect from MetaMask
              >
                Disconnect
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}