export const UPDATE_CHART = 'UPDATE_CHART';
export const UPDATE_CHART_ALL = 'UPDATE_CHART_ALL';

export function updateChart(key) {
  return {
    type: UPDATE_CHART,
    key: key
  };
}

export function updateDataChart(pie) {
  return {
    type: UPDATE_CHART_ALL,
    pie
  };
}