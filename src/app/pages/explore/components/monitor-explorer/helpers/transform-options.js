// TODO: react to year changes
const hierarchyPlural = [
  'jurisdictions',
  'entities',
  'programs',
  'activities',
  'functions',
];

const hierarchySingular = [
  'jurisdiction',
  'entity',
  'program',
  'activity',
  'function',
]

const convertToOptions = (entitiesOptions, selected, entitiesObj, newId, depth=0) => {
  if (!newId && depth > 0) return;
  if (newId && depth + 1 > (newId.match(/_/g) || []).length) return;
  entitiesObj.children.forEach(child => {
    const { id, name } = child;
    const key = hierarchyPlural[depth];
    if (!entitiesOptions[key].find(savedEntity => savedEntity.name === name)) {
      entitiesOptions[key].push({ id, name, value: name })
    }
    if (!newId) {
      convertToOptions(entitiesOptions, selected, child, newId, depth+1)
    } else if (newId && newId.startsWith(id)) {
      selected[hierarchySingular[depth]] = id;
      convertToOptions(entitiesOptions, selected, child, newId, depth+1)
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
    functions: [],
  };
  const selected = { jurisdiction: null, entity: null, program: null, activity: null, function: null };
  convertToOptions(entitiesOptions, selected, entitiesObj, newId)

  return { entitiesOptions, selected }
};

module.exports = ({ budgets, inflation, years, entities }, newId) => {
  const { entitiesOptions, selected } = transformEntities(entities, newId);
  return {
    selected,
    options: {
      budgets,
      inflation,
      years,
      ...entitiesOptions,
    }
  };
}
