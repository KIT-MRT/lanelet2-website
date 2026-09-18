/** Prefix an internal path with Astro's GitHub Pages base. */
export function withBase(path = ''): string {
  const raw = import.meta.env.BASE_URL || '/';
  const base = raw.endsWith('/') ? raw : `${raw}/`;
  if (!path || path === '/') return base;
  if (/^https?:\/\//.test(path)) return path;
  return `${base}${path.replace(/^\//, '')}`;
}

export function assetUrl(src: string): string {
  if (/^https?:\/\//.test(src) || src.startsWith('data:')) return src;
  return withBase(src);
}

export function normalizePath(path: string): string {
  if (!path) return '/';
  return path.endsWith('/') ? path : `${path}/`;
}

export function isCurrentPath(pathname: string, href: string): boolean {
  const current = normalizePath(pathname);
  const target = normalizePath(withBase(href === '/' ? '' : href));
  if (href === '/') return current === target;
  return current.startsWith(target);
}
