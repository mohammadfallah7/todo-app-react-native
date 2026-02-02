export const calculateProgress = (
  allTodosCount: number,
  completedTodosCount: number,
) => {
  return allTodosCount > 0 ? (completedTodosCount / allTodosCount) * 100 : 0;
};
