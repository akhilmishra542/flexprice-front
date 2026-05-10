interface Tier {
  upto: string;
  price: string;
}

interface PricingTierTableProps {
  title?: string;
  tiers: Tier[];
}

const PricingTierTable = ({
  title = 'Pricing Tiers',
  tiers,
}: PricingTierTableProps) => {
  return (
    <div className="border rounded-xl overflow-hidden bg-white w-full max-w-2xl">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-4">Usage Range</th>
            <th className="text-left p-4">Price</th>
          </tr>
        </thead>

        <tbody>
          {tiers.map((tier, index) => (
            <tr key={index} className="border-t">
              <td className="p-4">{tier.upto}</td>
              <td className="p-4 font-medium">{tier.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTierTable;
