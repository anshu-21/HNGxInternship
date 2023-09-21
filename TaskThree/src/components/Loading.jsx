/* eslint-disable no-unused-vars */
import { ColorRing } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="absolute z-10 top-0 left-0 bg-[#00000073] h-screen w-screen flex items-center justify-center">
      <div className="bg-white rounded-xl h-[172px] w-[172px] text-center p-2">
        <div className="w-[120px] mx-auto">
          <ColorRing
            visible={true}
            height="150"
            width="150"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#403d3d", "#5c4e4a", "#aba095", "#9da38e", "#adbaaf"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
