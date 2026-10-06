// Resolve public assets for both root hosting and a GitHub Pages subdirectory.
export function publicAsset(src: string) {
  if (src.startsWith("/") && !src.startsWith("//"))
    return `${import.meta.env.BASE_URL}${src.slice(1)}`;
  return src;
}
