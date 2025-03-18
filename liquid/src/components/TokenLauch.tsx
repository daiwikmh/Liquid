import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useAccount } from "wagmi";

export function TokenLaunch() {
  const { address } = useAccount();
  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
    initialSupply: "",
    decimals: "18",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement token deployment logic
    console.log("Token Launch Data:", formData);
  };

  return (
    <div className="p-6 border rounded-lg bg-card">
      <h3 className="text-lg font-semibold mb-4">Launch New Token</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Token Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter token name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="symbol">Token Symbol</Label>
          <Input
            id="symbol"
            name="symbol"
            placeholder="Enter token symbol"
            value={formData.symbol}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="initialSupply">Initial Supply</Label>
          <Input
            id="initialSupply"
            name="initialSupply"
            type="number"
            placeholder="Enter initial supply"
            value={formData.initialSupply}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="decimals">Decimals</Label>
          <Input
            id="decimals"
            name="decimals"
            type="number"
            placeholder="Enter decimals"
            value={formData.decimals}
            onChange={handleInputChange}
            required
          />
        </div>

        <Button variant={"outline"} type="submit" className="w-full">
          Launch Token
        </Button>
      </form>
    </div>
  );
}