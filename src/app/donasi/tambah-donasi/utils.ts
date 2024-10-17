type AnyObject = Record<string, any>;

export type TransformOptions = {
  valueKey: string;
  labelKey: string;
  childrenKey?: string;
};

export const transformArrayToLabelValue = (
  items: AnyObject[],
  options: TransformOptions
): AnyObject[] => {
  if (!items) return [];
  const { valueKey, labelKey, childrenKey } = options;

  const transformItem = (item: AnyObject): AnyObject => {
    const transformedItem: AnyObject = {
      value: item[valueKey],
      label: item[labelKey],
    };

    if (childrenKey && item[childrenKey]?.length) {
      transformedItem.children = item[childrenKey].map((child: AnyObject) =>
        transformItem(child)
      );
    }

    return transformedItem;
  };

  return items.map(transformItem);
};
