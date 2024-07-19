import invest from "../../assets/invest.png";
import { advantageList } from "../../services/ContentList";
import { Advantage } from "../../services/Interface";

export const AdvantageSection = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-4xl my-10">
        Discover Our <span className="text-green-400">Advantages</span>
      </h1>
      <div className="grid lg:grid-cols-2 items-center gap-10 my-4 bg-white">
        <div>
          <img src={invest} alt="" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mx-auto w-full">
          {advantageList.map((advantage: Advantage, index: number) => (
            <div
              key={index}
              className="cursor-pointer hover:shadow-md transition-all duration-300 rounded-xl p-6 w-full flex flex-col justify-center items-center"
            >
              <div className="rounded-full bg-green-100 p-3 inline-block">
                {typeof advantage.icon === "function" && (
                  <advantage.icon className="w-12 h-12 text-green-600" />
                )}
              </div>

              <h3 className="font-bold mt-2 mb-2">
                {advantage.content}
              </h3>
              <p className="text-center font-normal inline-block text-sm">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
