
export const Types = {
  navigationUpdated: 'NAVIGATION_UPDATED'
};

const Actions = {
  navigationUpdated: (screen) => ({ type: Types.navigationUpdated, payload: { screen }})
}

export default Actions;
