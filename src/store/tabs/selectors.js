export const selectTabsState = (state) => state.tabs;
export const selectTabsIds = (state) => selectTabsState(state).ids;
export const selectCurrentTabId = (state) => selectTabsState(state).currentTabId;