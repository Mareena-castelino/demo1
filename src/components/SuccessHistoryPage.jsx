import SuccessHistory from "./SuccessHistory";
import SuccessHistoryMobile from "./SuccessHistoryMobile";

const SuccessHistoryPage = () => {
  return (
    <>
      <div className="hidden sm:block">
        <SuccessHistory />
      </div>
      <div className="block sm:hidden">
        <SuccessHistoryMobile />
      </div>
    </>
  );
};

export default SuccessHistoryPage;
