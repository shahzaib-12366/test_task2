import { UPDATE_SELECTED_PROPERTIES, UPDATE_SEARCH_TERM, FILTER_BY_PROPERTY_TYPE } from './propertyActions';

const initialState = {
  properties: [
    { id: 1, address: 'Main St', propertyType: 'House', selected: false },
    { id: 2, address: '456 Oak St', propertyType: 'Flat', selected: false },

    // Add more properties as needed
  ],
  selectedProperties: [],
  searchTerm: '',
  filteredPropertyType: null,
};

const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_PROPERTIES:
      return {
        ...state,
        selectedProperties: action.payload,
      };
    case UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case FILTER_BY_PROPERTY_TYPE:
      return {
        ...state,
        filteredPropertyType: action.payload,
      };
    default:
      return state;
  }
};

export default propertyReducer;
