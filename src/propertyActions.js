// Action Types
export const UPDATE_SELECTED_PROPERTIES = 'UPDATE_SELECTED_PROPERTIES';
export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const FILTER_BY_PROPERTY_TYPE = 'FILTER_BY_PROPERTY_TYPE';

// Action Creators
export const updateSelectedProperties = (selectedProperties) => {
  return {
    type: UPDATE_SELECTED_PROPERTIES,
    payload: selectedProperties,
  };
};

export const updateSearchTerm = (searchTerm) => {
  return {
    type: UPDATE_SEARCH_TERM,
    payload: searchTerm,
  };
};

export const filterByPropertyType = (propertyType) => {
  return {
    type: FILTER_BY_PROPERTY_TYPE,
    payload: propertyType,
  };
};
