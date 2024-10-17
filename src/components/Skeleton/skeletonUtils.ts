export const getSkeletonStyles = (baseColor: string, highlightColor: string) => ({
  background: `linear-gradient(90deg, ${baseColor} 25%, ${highlightColor} 50%, ${baseColor} 75%)`,
  backgroundSize: "200% 100%",
});
