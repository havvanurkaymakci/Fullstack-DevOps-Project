import { Search } from 'react-feather';

const RightSide = () => {
  return (
    <div className="blog__bright__bar border border-clr_cusborder xl:p-[30px] py-5 px-[18px] rounded-lg relative">

      {/* Search Section */}
      <div className="scope__item xl:mb-[60px] mb-10">
        <h4 className="scope__title text-white border-b border-b-clr_cusborder pb-[14px] mb-[30px] text-2xl font-semibold">
          Search
        </h4>
        <form action="#0" className="flex content-center justify-between">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent py-[10px] pr-[10px] pl-5 h-[60px] border border-clr_cusborder rounded-lg outline-none"
          />
          <button
            type="submit"
            className="min-w-[60px] h-[60px] flex items-center justify-center bg-clr_base rounded-tr-lg rounded-br-lg"
          >
            <Search className="text-clr_title text-lg" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default RightSide;
