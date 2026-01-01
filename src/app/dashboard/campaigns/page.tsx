'use client';

export default function CampaignsPage() {
  const campaigns = [
    { id: 1, name: 'Early Bird Special', status: 'Active', impressions: 12500, clicks: 450, conversions: 23 },
    { id: 2, name: 'Social Media Blast', status: 'Active', impressions: 8500, clicks: 320, conversions: 15 },
    { id: 3, name: 'Email Newsletter', status: 'Paused', impressions: 3200, clicks: 180, conversions: 8 },
  ];

  return (
    <>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white">Campaigns</h1>
            <p className="text-gray-400">Marketing campaigns and promotions</p>
          </div>
          <button className="btn-gradient">
            + Create Campaign
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">{campaign.name}</h3>
              <span className={`px-3 py-1 rounded-full text-sm ${
                campaign.status === 'Active' 
                  ? 'bg-green-500/20 text-green-400' 
                  : 'bg-gray-500/20 text-gray-400'
              }`}>
                {campaign.status}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <div className="text-sm text-gray-400 mb-1">Impressions</div>
                <div className="text-2xl font-bold text-white">{campaign.impressions.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Clicks</div>
                <div className="text-2xl font-bold text-blue-400">{campaign.clicks}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Conversions</div>
                <div className="text-2xl font-bold text-green-400">{campaign.conversions}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                Edit
              </button>
              <button className="px-4 py-2 bg-[#f0425f] hover:bg-[#d63852] text-white rounded-lg transition-colors">
                View Analytics
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

