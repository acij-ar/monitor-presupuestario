const sortBy = require('lodash/sortBy');

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
  entitiesObj.children.forEach(child => {
    const { id, name } = child;
    const key = hierarchyPlural[depth];
    if (!entitiesOptions[key].find(savedEntity => savedEntity.name === name)) {
      entitiesOptions[key].push({ id, name, label: name, value: name })
    }
    if (!newId) {
      convertToOptions(entitiesOptions, selectedIds, selectedNames, child, newId, depth+1)
    } else if (newId && (newId === id || newId.startsWith(`${id}_`))) {
      selectedIds[hierarchySingular[depth]] = id;
      selectedNames[hierarchySingular[depth]] = name;
      convertToOptions(entitiesOptions, selectedIds, selectedNames, child, newId, depth+1)
    } else if (id.startsWith(`${newId}_`)) {
      convertToOptions(entitiesOptions, selectedIds, selectedNames, child, newId, depth+1)
    }
  })
};

const transformEntities = ({ entities, newId, year }) => {
  const { children: entitiesByYear } = entities
  const entitiesObj = entitiesByYear.find(({name}) => name === year);

  const entitiesOptions = {
    jurisdictions: [],
    entities: [],
    programs: [],
    activities: [],
  };
  const selectedIds = { jurisdiction: null, entity: null, program: null, activity: null };
  const selectedNames = { jurisdiction: null, entity: null, program: null, activity: null };
  convertToOptions(entitiesOptions, selectedIds, selectedNames, entitiesObj, newId)

  return {
    entitiesOptions: {
      jurisdictions: sortBy(entitiesOptions.jurisdictions, 'name'),
      entities: sortBy(entitiesOptions.entities, 'name'),
      programs: sortBy(entitiesOptions.programs, 'name'),
      activities: sortBy(entitiesOptions.activities, 'name'),
    },
    selectedIds,
    selectedNames
  }
};

module.exports = ({ rawOptions, newId, year }) => {
  const { budgets, inflation, years, entities } = rawOptions;
  const { entitiesOptions, selectedIds, selectedNames } = transformEntities({ entities, newId , year});
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
