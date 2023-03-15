export function useAsset(path: string): string {
  const assets = import.meta.glob('../assets/images/category/*', {
    eager: true,
    import: 'default',
  })
  // @ts-expect-error: wrong type info
  return assets['/assets/images/category/' + path]
}

