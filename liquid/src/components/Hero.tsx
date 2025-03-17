import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { useAccount, useConnect, useDisconnect } from "wagmi"
import { metaMask } from "wagmi/connectors"

export function Hero() {
  const { address, isConnected } = useAccount(); // Get the current account address
  const { connect } = useConnect(); // Hook to connect to MetaMask
      const { disconnect } = useDisconnect(); // Hook to disconnect from MetaMask
  
  
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#f6f6f6]">
      <div className="mx-auto w-full max-w-4xl px-6 text-center bg-[#b3b99d] rounded-3xl shadow-lg p-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Unlock Web3 Liquidity with Confidence
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Experience seamless liquidity management in the decentralized world. Our platform provides advanced tools and insights for optimal DeFi operations.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          {/* Conditional Rendering */}
          {!isConnected ? (
            <Button
              variant="outline"
              size="lg"
              onClick={() => connect({ connector:metaMask() })}
            >
              Get Started
            </Button>
          ) : (
            <div className="flex items-center space-x-4">
              <div className="text-lg font-medium text-green-600">
                Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
              </div>
              <Button
                variant="outline" // Use a different style for disconnect button
                size="sm"
                onClick={() => disconnect()}
              >
                Disconnect
              </Button>
            </div>
          )}
          {/* Learn More Button */}
          <Link to="/learn-more">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}