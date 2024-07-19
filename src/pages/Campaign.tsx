import { CampaignCard } from "../components/card/CampaignCard";
import { SearchBar } from "../components/small/SearchBar";
import { campaignsData } from "../services/ContentList";
import notFound from "../assets/notFound.mp4";
import { useEffect, useState } from "react";
import { CampaignInterface } from "../services/Interface";

export const Campaign = () => {
  const [query, setQuery] = useState("");
  const [campaigns, setCampaigns] = useState<CampaignInterface[]>([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState<
    CampaignInterface[]
  >([]);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClick = (id: number) => {
    setShowDetailModal(true);
    setSelectedId(id);
  };

  const handleParticipate = async () => {};

  useEffect(() => {
    const fetchData = async () => {
      const data = await campaignsData;
      setCampaigns(data);
    };
    fetchData();
  }, [campaigns]);

  useEffect(() => {}, []);

  return (
    <div>
      <SearchBar />
      <div id="elections" className="mb-16">
        <h1 className="font-semibold text-2xl mb-3"> All Campaigns </h1>
        {campaigns.length === 0 ? (
          <div>
            <div className="flex justify-center items-center">
              <video src={notFound} autoPlay loop className="size-80" />
            </div>
            <div className="flex justify-center items-center">
              <h1 className="font-bold text-4xl text-center">
                Don't have any campaigns currently.
              </h1>
            </div>
          </div>
        ) : (
          <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {campaigns.map((campaign, index) => (
              <CampaignCard
                key={index}
                campaign={campaign}
                actionClick={handleClick}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Campaign;
