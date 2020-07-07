// TODO: react to year changes
const hierarchyPlural = [
  'jurisdictions',
  'entities',
  'programs',
  'activities',
];

const hierarchySingular = [
  'jurisdiction',
  'entity',
  'program',
  'activity',
]

const convertToOptions = (entitiesOptions, selectedIds, selectedNames, entitiesObj, newId, depth=0) => {
  if (!newId && depth > 0) return;
  if (newId && depth + 1 > (newId.match(/_/g) || []).length) return;
  entitiesObj.children.forEach(child => {
    const { id, name } = child;
    const key = hierarchyPlural[depth];
    if (!entitiesOptions[key].find(savedEntity => savedEntity.name === name)) {
      entitiesOptions[key].push({ id, name, value: name })
    }
    if (!newId) {
      convertToOptions(entitiesOptions, selectedIds, selectedNames, child, newId, depth+1)
    } else if (newId && (newId === id || newId.startsWith(`${id}_`))) {
      selectedIds[hierarchySingular[depth]] = id;
      selectedNames[hierarchySingular[depth]] = name;
      convertToOptions(entitiesOptions, selectedIds, selectedNames, child, newId, depth+1)
    }
  })
};

const transformEntities = (hierarchyObj, newId) => {
  const { children: [entitiesObj] } = hierarchyObj

  const entitiesOptions = {
    jurisdictions: [],
    entities: [],
    programs: [],
    activities: [],
  };
  const selectedIds = { jurisdiction: null, entity: null, program: null, activity: null };
  const selectedNames = { jurisdiction: null, entity: null, program: null, activity: null };
  convertToOptions(entitiesOptions, selectedIds, selectedNames, entitiesObj, newId)

  return { entitiesOptions, selectedIds, selectedNames }
};

module.exports = ({ budgets, inflation, years, entities }, newId) => {
  const { entitiesOptions, selectedIds, selectedNames } = transformEntities(entities, newId);
  return {
    selectedIds,
    selectedNames,
    options: {
      budgets,
      inflation,
      years,
      ...entitiesOptions,
    }
  };
}
