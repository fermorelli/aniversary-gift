export function photoRatio(aspectRatio = "4 / 3") {
  const [width, height = 1] = aspectRatio.split("/").map(Number);
  const ratio = width / height;
  return Number.isFinite(ratio) && ratio > 0 ? ratio : 4 / 3;
}
