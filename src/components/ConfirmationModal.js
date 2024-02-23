
import './Modal.css';

const ConfirmationModal = ({ closeModal }) => {


  return (
    <div className="ModalOverlay">
      <div className="ConfirmationModal">
        <h2>Order Submitted! </h2>
        <p>Thank you for shopping with us. Your order is on its way!</p>
        <button onClick={closeModal} className="PrimaryButton">OK</button>
      
      </div>
    </div>
  );
};

export default ConfirmationModal;
