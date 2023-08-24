export const split = <T>(items: T[], splitFn: (item: T) => boolean) => {
  const firstGroup: T[] = [];
  const secondGroup: T[] = [];

  items.forEach((item) => {
    if (splitFn(item)) {
      firstGroup.push(item);
    } else {
      secondGroup.push(item);
    }
  });

  return { firstGroup, secondGroup };
};
