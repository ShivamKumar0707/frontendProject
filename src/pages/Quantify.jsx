import React from 'react';
import MultiLineChart from '../components/charts/MultiAreaChart';
import BarChartExample from '../components/charts/BarChartExample';
import MultiAreaChart from '../components/charts/MultiAreaChart';
import CombinedChart from '../components/charts/CombinedChart';

const Quantify = () => {
  return (
    <div className="p-6 space-y-12">
      <h2 className="text-3xl font-bold"> 💹Quantify Dashboard </h2>

      <section>
        <h3 className="text-xl font-semibold mb-2">Multi Line Chart</h3>
        <MultiLineChart />
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Bar Chart</h3>
        <BarChartExample />
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Area Chart</h3>
        <MultiAreaChart />
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Combined Chart</h3>
        <CombinedChart />
      </section>
    </div>
  );
};

export default Quantify;
