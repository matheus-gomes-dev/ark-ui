
export const Types = {
  fieldUpdated: 'IMPORT_WALLET_FIELD_UPDATED'
};

const Actions = {
  fieldUpdated: (value) => ({ type: Types.fieldUpdated, payload: { value }})
};

export default Actions;
