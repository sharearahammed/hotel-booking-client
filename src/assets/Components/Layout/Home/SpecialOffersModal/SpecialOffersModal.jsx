import { GrClose } from "react-icons/gr";

const SpecialOffersModal = () => {
  return (
    <dialog id="special_offers_modal" className="rounded-none flex justify-center items-center modal modal-bottom sm:modal-middle">
      <div className="bg-cover h-[200px] w-[200px] lg:h-[500px] lg:w-[500px] rounded-none" style={{
            backgroundImage:
              'url("https://i.ibb.co/MCw3sk1/Your-paragraph-text.jpg")',

          }}
          >
            <div className="modal-action absolute">
          <button className="text-2xl -top-5 relative left-[140px] lg:top-0 lg:left-[440px] text-red-500 btn rounded-none" onClick={() => document.getElementById('special_offers_modal').close()}><GrClose /></button>
        </div>
        
        
      </div>
    </dialog>
  );
};

export default SpecialOffersModal;
