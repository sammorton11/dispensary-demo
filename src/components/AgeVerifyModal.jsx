import React from 'react';

const AgeVerifyModal = ({ onSuccess, onClose }) => {

   return (
      <div className="av-modal">
         <div className="av-modal-content bg-green-200">
            <h2 className='text-2xl font-semibold p-5 mb-5'>Are you 21 or older?</h2>
            <button className="mx-2 py-2 w-[100px] bg-green-400 text-black rounded-lg hover:bg-green-600" onClick={onSuccess}>Yes</button>
            <button className="mx-2 py-2 w-[100px] bg-green-400 text-black rounded-lg hover:bg-green-600" onClick={onClose}>No</button>
         </div>
      </div>
   );
};

export default AgeVerifyModal;
