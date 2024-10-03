import InvestmentCard from "../../components/InvestmentCard";
import { PieChart, LineChart } from "../../components/Chart";
import TaskCards from "../../components/TaskCards";
import TopInvestors from "../../components/TopInvestors";
import { investors } from "../../constants/overview";

const Overview = () => {
  return (
    <div className="p-3 overflow-hidden bg-[#FCFCFD] border min-h-screen rounded-3xl">
      <p className="text-sm text-[#A3A3A3] mb-2">
        Here’s a quick overview of key performance metrics of Peaktower
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        <InvestmentCard
          title="Total Property Purchase"
          amount="N300,000,000.00"
          profit={true}
          icon="wallet"
        />
        <InvestmentCard
          title="Total Co-Ownership"
          amount="N60,000,000.00"
          profit={false}
          icon="wallet"
        />
        <InvestmentCard
          title="Total Customers "
          amount="3,000"
          profit={false}
          icon="people"
        />
        <InvestmentCard title="Total Properties" amount="300" icon="property" />
      </div>
      <div className="flex gap-3 p-1 mb-4">
        <div className="flex flex-col p-3 border bg-[#FCFCFD] rounded-lg w-full h-[290px]">
          <p className="text-sm text-[#3D3D3D] mb-2">Property Units</p>
          <div className="bg-white rounded-lg">
            <div className="flex h-[240px] p-3 border rounded-lg">
              <div>
                <PieChart />
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 flex flex-col bg-[#FCFCFD] border rounded-lg w-full container h-[290px]">
          <p className="text-sm text-[#3D3D3D] mb-2">Tasks</p>
          <div className="rounded-lg border bg-white p-2 h-[240px]">
            <TaskCards
              title="Rental Income Payment"
              subTitle="Rental Income payment is due in 20days"
            />
            <TaskCards
              title="Customer Verification Pending"
              subTitle="Customer's verification approval"
              button={true}
            />
            <TaskCards
              title="You have a new review"
              subTitle="Check out new review peak tower received"
              button={true}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 p-1">
        <div className="flex flex-col p-2 border bg-[#FCFCFD] rounded-lg w-full">
          <p className="text-sm text-[#3D3D3D] mb-2">Investment Analysis</p>
          <div className="rounded-lg border bg-white p-1 w-full">
            <LineChart />
          </div>
        </div>
        <div className="flex flex-col p-2 border bg-[#FCFCFD] rounded-lg w-full max-w-[404px]">
          <p className="text-sm text-[#3D3D3D] mb-2">Top Investors</p>
          <div className="rounded-lg border bg-white p-1">
            {investors.map(({ name, amount, title, slots, imgUrl }) => (
              <TopInvestors
                name={name}
                amount={amount}
                title={title}
                slots={slots}
                imgUrl={imgUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
