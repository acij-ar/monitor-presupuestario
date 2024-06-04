const React = require('react');
const PropTypes = require('prop-types');
const Modal = require('react-modal');
const submitToDB = require('../helpers/submit-to-db');
const deleteEntry = require('../helpers/delete-entry');

Modal.setAppElement('#root');

const { useRef } = React;

const ModalEditor = ({ isOpen, onUpdate, onCloseModal, type, entry }) => {
  const modalForm = useRef(null);

  const onSave = async () => {
    const newContent = {
      id: entry && entry.id,
      name: modalForm.current.querySelector('input').value,
      content: modalForm.current.querySelector('textarea').value,
    };
    const updatedEntries = await submitToDB(type, newContent);
    onCloseModal();
    onUpdate(updatedEntries);
  }

  const onDelete = async () => {
    const updatedEntries = await deleteEntry(type, entry);
    onCloseModal();
    onUpdate(updatedEntries);
  }

  return isOpen && (
    <Modal
      isOpen
      className="admin-modal"
      overlayClassName="admin-modal-overlay"
    >
      <div ref={modalForm}>
        <input
          type="text"
          defaultValue={ entry && (entry.pregunta || entry.palabra) }
          placeholder={type === 'glosario' ? 'Termino' : 'Pregunta'}
        />
        <textarea placeholder={type === 'glosario' ? 'Significado' : 'Respuesta'}>
          { entry && (entry.respuesta || entry.significado) }
        </textarea>
        <div className="admin-modal-actions">
          <button onClick={onCloseModal} className="admin-modal-cancel">CANCELAR</button>
          { entry && entry.id && <button onClick={onDelete} className="admin-modal-delete">ELIMINAR</button> }
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
  entry: PropTypes.object,
};

ModalEditor.defaultProps = {
  entry: null,
};

module.exports = ModalEditor;
