const React = require('react');
const PropTypes = require('prop-types');
const Modal = require('react-modal');
const submitToDB = require('../helpers/submit-to-db');

Modal.setAppElement('#root');

const { useRef } = React;

const ModalEditor = ({ isOpen, onUpdate, onCloseModal, type, adminEntry }) => {
  const modalForm = useRef(null);

  const onSave = async () => {
    const newContent = {};
    const updatedEntries = await submitToDB(type, newContent);
    onUpdate(updatedEntries);
  }

  return isOpen && (
    <Modal
      isOpen
      className="admin-modal"
      overlayClassName="admin-modal-overlay"
    >
      <div ref={modalForm}>
        <input type="text" value={ adminEntry.name } />
        <textarea>{ adminEntry.content }</textarea>
        <div className="admin-modal-actions">
          <button onClick={onCloseModal} className="admin-modal-cancel">CANCELAR</button>
          <button onClick={onSave} className="admin-modal-save">GUARDAR</button>
        </div>
      </div>
    </Modal>
  );
};

ModalEditor.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  adminEntry: PropTypes.object,
};

ModalEditor.defaultProps = {
  entry: null,
};

module.exports = ModalEditor;
