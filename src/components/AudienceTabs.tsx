import React from 'react';

type AudienceTab = 'all' | 'residential' | 'commercial';

interface AudienceTabsProps {
  activeTab: AudienceTab;
  onChange: (tab: AudienceTab) => void;
}

const AudienceTabs: React.FC<AudienceTabsProps> = ({ activeTab, onChange }) => {
  return (
    <div className="flex justify-center">
      <div className="inline-flex bg-gray-100 rounded-xl p-1 gap-1 border border-gray-200/70 shadow-sm">
        {(['all', 'residential', 'commercial'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeTab === tab
                ? 'bg-sky-600 text-white shadow-sm border border-sky-500'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/80'
            }`}
            aria-pressed={activeTab === tab}
          >
            {tab === 'all' ? 'All Services' : tab === 'residential' ? '🏡 Residential' : '🏢 Commercial'}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AudienceTabs;

