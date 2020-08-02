const React = require('react');
const PropTypes = require('prop-types');
const Modal = require('react-modal');
const ModalEditor = require('../modal-editor');

Modal.setAppElement('#root');

const { useState } = React;

const AdminEntryEditor = ({ type, onUpdate, entry }) => {
  const [modalIsOpen, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const onCloseModal = () => setShowModal(false);

  return (
    <div className="admin-entry-editor">
      <span onClick={openModal} className="admin-entry-edito-trigger">
        {entry && (entry.pregunta || entry.palabra) || 'Agregar'}
      </span>
      <ModalEditor
        isOpen={modalIsOpen}
        onUpdate={onUpdate}
        onCloseModal={onCloseModal}
        type={type}
        entry={entry}
      />
    </div>
  );
};

AdminEntryEditor.propTypes = {
  type: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  entry: PropTypes.object,
};

AdminEntryEditor.defaultProps = {
  entry: null,
};

module.exports = AdminEntryEditor;
