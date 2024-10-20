export function transformCapitalPlaceNames(
  places: { id: number; name: string }[],
  options: { asOptions?: boolean }
) {
  if (options?.asOptions) {
    return places.map((place) => {
      var name = capitalizeWords(place.name);
      return {
        ...place,
        value: name,
        label: name,
      };
    });
  }
  return places.map((place) => ({
    ...place,
    name: capitalizeWords(place.name),
  }));
}

export function capitalizeWords(str: string) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
