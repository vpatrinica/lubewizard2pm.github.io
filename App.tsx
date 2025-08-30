import React, { useState, useMemo } from 'react';
// FIX: The BomItem type was being imported from './data/bomData', but it is defined and exported from './types'.
import { bomData } from './data/bomData';
import Header from './components/Header';
import SummaryCard from './components/SummaryCard';
import CostBreakdownChart from './components/CostBreakdownChart';
import CategoryDistributionChart from './components/CategoryDistributionChart';
import BomTable from './components/BomTable';
import type { BomItem, Volume } from './types';
import Hero from './components/Hero';

const App: React.FC = () => {
  const [selectedVolume, setSelectedVolume] = useState<Volume>(1000);

  const totals = useMemo(() => {
    return bomData.reduce(
      (acc, item) => {
        acc.total20 += item.total20 || 0;
        acc.total200 += item.total200 || 0;
        acc.total1k += item.total1k || 0;
        return acc;
      },
      { total20: 0, total200: 0, total1k: 0 }
    );
  }, []);

  const categoryData = useMemo(() => {
    const costKey: keyof BomItem = `total${selectedVolume === 20 ? '20' : selectedVolume === 200 ? '200' : '1k'}` as keyof BomItem;
    
    const aggregated = bomData.reduce((acc, item) => {
      if(typeof item[costKey] === 'number') {
          const cost = item[costKey] as number;
          if (!acc[item.category]) {
            acc[item.category] = 0;
          }
          acc[item.category] += cost;
      }
      return acc;
    }, {} as { [key: string]: number });

    return Object.entries(aggregated)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value);
  }, [selectedVolume]);

  const perUnitCosts = {
    unit20: totals.total20 / 20,
    unit200: totals.total200 / 200,
    unit1k: totals.total1k / 1000,
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Vollbild-Hintergrundbild */}
      <img
        src="/background.png"
        alt="Excavator"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(1.15) contrast(1.05)' }}
        loading="eager"
      />
      {/* leichte Tönung für Textlesbarkeit */}
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative min-h-screen text-gray-200 font-sans p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <Header />
          <Hero />

          <main className="space-y-6 mt-4">
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <SummaryCard title="Total Cost per Unit (20 units)" value={perUnitCosts.unit20} prefix="€" decimals={2} />
              <SummaryCard title="Total Cost per Unit (200 units)" value={perUnitCosts.unit200} prefix="€" decimals={2} />
              <SummaryCard title="Total Cost per Unit (1k units)" value={perUnitCosts.unit1k} prefix="€" decimals={2} />
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-3 bg-slate-850/90 backdrop-blur-sm border border-slate-700/80 p-5 rounded-xl shadow-lg">
                 <h2 className="text-lg font-bold mb-3 text-amber-400">Component Cost Per Unit by Volume</h2>
                 <p className="text-xs text-slate-300/80 mb-4">Comparison of the cost per unit for each component across different production volumes.</p>
                <CostBreakdownChart data={bomData} />
              </div>
              <div className="lg:col-span-2 bg-slate-850/90 backdrop-blur-sm border border-slate-700/80 p-5 rounded-xl shadow-lg">
                <h2 className="text-lg font-bold mb-3 text-amber-400">Cost Distribution by Category</h2>
                 <p className="text-xs text-slate-300/80 mb-1">Percentage of total cost per component category for the selected production volume.</p>
                <div className="flex justify-center flex-wrap gap-2 my-3">
                  {([20, 200, 1000] as Volume[]).map((volume) => (
                    <button
                      key={volume}
                      onClick={() => setSelectedVolume(volume)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${
                        selectedVolume === volume
                          ? 'bg-amber-500 text-white shadow-md'
                          : 'bg-slate-700/80 hover:bg-slate-600 text-slate-200'
                      }`}
                    >
                      {volume} units
                    </button>
                  ))}
                </div>
                <CategoryDistributionChart data={categoryData} />
              </div>
            </section>
            
            <section className="bg-slate-850/90 backdrop-blur-sm border border-slate-700/80 p-4 sm:p-5 rounded-xl shadow-lg">
               <h2 className="text-lg font-bold mb-3 text-amber-400">Detailed Bill of Materials</h2>
              <BomTable data={bomData} />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;