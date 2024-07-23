import { CampaignCard } from "../components/card/CampaignCard";
import notFound from "../assets/notFound.mp4";
import { useEffect, useState } from "react";
import { CampaignInterface } from "../services/Interface";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "../components/small/SearchBar";
import { getCampaigns } from "../services/Blockchain";
import loading from "../assets/loading.mp4";
import { setGlobalState } from "../services/Helper";

export const Campaign = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [campaigns, setCampaigns] = useState<CampaignInterface[]>([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState<
    CampaignInterface[]
  >([]);
  const [loadingContent, setLoadingContent] = useState(true);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClick = (id: number) => {
    navigate(`/campaign/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCampaigns();
      setCampaigns(data);
      setLoadingContent(false);
    };
    fetchData();
  }, [campaigns]);

  useEffect(() => {
    if (campaigns) {
      const filtered = campaigns.filter((campaign) =>
        campaign.campaignTitle.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCampaigns(filtered);
    }
  }, [query, campaigns]);

  useEffect(() => {
    if (loadingContent) {
      setGlobalState("loadingModalScale", "scale-100");
    } else {
      setGlobalState("loadingModalScale", "scale-0");
    }
  }, [loadingContent]);

  return (
    <div className="relative">
      <div className={`opacity-100`}>
        <SearchBar query={query} actionSearch={handleSearch} />
        <div id="elections" className="mb-16">
          <h1 className="font-semibold text-2xl mb-3"> All Campaigns </h1>
          {loadingContent ? (
            <div className="flex justify-center items-center">
              <video src={loading} autoPlay loop className="size-40" />
            </div>
          ) : filteredCampaigns.length === 0 ? (
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
              {filteredCampaigns.map((campaign, index) => (
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
    </div>
  );
};

export default Campaign;
