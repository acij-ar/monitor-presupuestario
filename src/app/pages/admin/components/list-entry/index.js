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

  const adminEntry = entry || { name: 'Agregar' }

  return (
    <div className="admin-entry-editor">
      <span onClick={openModal} className="admin-entry-edito-trigger">
        {adminEntry.name}
      </span>
      <ModalEditor
        isOpen={modalIsOpen}
        onUpdate={onUpdate}
        onCloseModal={onCloseModal}
        type={type}
        adminEntry={adminEntry}
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
