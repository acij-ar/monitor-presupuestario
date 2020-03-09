const markAllChildrenAsPossiblyModified = (jsonObject) => {
  if (jsonObject && jsonObject.dependencias) {
    Object.keys(jsonObject.dependencias).map(name => {
      jsonObject.dependencias[name].credito_original_posiblemente_modificado = true;
      markAllChildrenAsPossiblyModified(jsonObject.dependencias[name]);
    });
  }
};

module.exports = markAllChildrenAsPossiblyModified;
