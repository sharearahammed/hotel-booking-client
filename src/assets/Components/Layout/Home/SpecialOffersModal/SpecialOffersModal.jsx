import { GrClose } from "react-icons/gr";

const SpecialOffersModal = () => {
  return (
    <dialog id="special_offers_modal" className="flex justify-center items-center modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-cover h-[500px]" style={{
            backgroundImage:
              'url("https://i.ibb.co/MCw3sk1/Your-paragraph-text.jpg")',
          }}
          >
            <div className="modal-action">
          <button className="text-2xl text-red-500 btn" onClick={() => document.getElementById('special_offers_modal').close()}><GrClose /></button>
        </div>
        
        
      </div>
    </dialog>
  );
};

export default SpecialOffersModal;
