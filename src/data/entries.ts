import type { CategoryId } from './categories';
import { withBase } from '../lib/paths';

export interface TeaserMedia {
  type: 'image' | 'video' | 'none';
  src?: string;
  alt?: string;
}

export interface TeaserEntry {
  id: string;
  category: CategoryId;
  title: string;
  teaser: string;
  media?: TeaserMedia;
  /** External URL, or omit when `page` is true. */
  href?: string;
  external?: boolean;
  /** Generate an internal detail page at /[category]/[id]. */
  page?: boolean;
  /** Span the category grid (e.g. a video feature). */
  featured?: boolean;
  /** Dashed empty-state card — content is a stub, not a finished listing. */
  placeholder?: boolean;
  cta?: string;
  repo?: string;
  detail?: string[];
}

export const entries: TeaserEntry[] = [
  {
    id: 'github',
    category: 'official',
    title: 'Lanelet2 on GitHub',
    teaser: 'The C++ library with Python bindings, ROS/ROS2, Docker, and Conan. BSD-3 licensed.',
    href: 'https://github.com/fzi-forschungszentrum-informatik/Lanelet2',
    external: true,
    cta: 'Open repository',
  },
  {
    id: 'docs',
    category: 'official',
    title: 'Documentation',
    teaser: 'Primitives, architecture, geometry, projections, and map tagging — the official docs site.',
    href: 'https://fzi-forschungszentrum-informatik.github.io/Lanelet2',
    external: true,
    cta: 'Read the docs',
  },
  {
    id: 'pypi',
    category: 'official',
    title: 'PyPI package',
    teaser: 'Install the Python bindings with pip: pip install lanelet2.',
    href: 'https://pypi.org/project/lanelet2/',
    external: true,
    cta: 'View on PyPI',
  },
  {
    id: 'josm-plugin',
    category: 'addons',
    title: 'Lanelet2 JOSM plugin',
    teaser: 'Native Kotlin plugin for editing Lanelet2 maps in JOSM — lanelets, regulatory elements, routing debug, and a live 3D viewer.',
    media: {
      type: 'image',
      src: 'images/JOSM-LL2-Plugin.png',
      alt: 'JOSM with the Lanelet2 plugin editing a roundabout, plus the live 3D viewer',
    },
    page: true,
    cta: 'Learn more',
    repo: 'https://github.com/KIT-MRT/lanelet2-josm-plugin',
    detail: [
      'The Lanelet2 JOSM plugin adds map-editing tools to JOSM as a native Kotlin plugin (lanelet2.jar). Create and merge lanelets, tag regulatory elements, inspect the routing graph, and preview the map in 3D.',
      'Most tools are self-contained. A few actions also use a local Python lanelet2 install. Ad-hoc Python scripts against JOSM objects are handled by the companion GraalPy plugin.',
    ],
  },
  {
    id: 'graalpy',
    category: 'addons',
    title: 'JOSM GraalPy scripting',
    teaser: 'Companion JOSM plugin for Python 3 (GraalPy) scripts against map objects. Placeholder.',
    href: 'https://github.com/KIT-MRT/josm-graalpy-scripting-plugin',
    external: true,
    placeholder: true,
  },
  {
    id: 'kitscenes',
    category: 'datasets',
    title: 'KITScenes',
    teaser: 'Autonomous driving datasets from KIT-MRT, with production-grade HD maps. Placeholder.',
    href: 'https://kitscenes.com',
    external: true,
    placeholder: true,
  },
  {
    id: 'ind',
    category: 'datasets',
    title: 'inD',
    teaser: 'Intersection drone trajectories. Placeholder — dataset page and Lanelet2 maps to come.',
    placeholder: true,
  },
  {
    id: 'round',
    category: 'datasets',
    title: 'rounD',
    teaser: 'Roundabout drone trajectories. Placeholder — dataset page and Lanelet2 maps to come.',
    placeholder: true,
  },
  {
    id: 'highd',
    category: 'datasets',
    title: 'highD',
    teaser: 'Highway drone trajectories. Placeholder — dataset page and Lanelet2 maps to come.',
    placeholder: true,
  },
  {
    id: 'exid',
    category: 'datasets',
    title: 'exiD',
    teaser: 'Highly interactive highway scenarios. Placeholder — dataset page and Lanelet2 maps to come.',
    placeholder: true,
  },
  {
    id: 'kit-ad',
    category: 'projects',
    title: 'KIT Autonomous Driving Project',
    teaser:
      'Lanelet2 HD maps in a real-world autonomous driving stack at KIT — onboard Autoware, research vehicles, and closed-course operation. Learn more at the MRT CITI project page.',
    media: {
      type: 'video',
      src: 'videos/autoware_kitscenes_crf30-720p.mp4',
      alt: 'Autoware driving with Lanelet2 HD maps on the KITScenes route',
    },
    href: 'https://www.mrt.kit.edu/english/CITI.php',
    external: true,
    featured: true,
    cta: 'KIT CITI project',
  },
  {
    id: 'ml-converter',
    category: 'projects',
    title: 'Lanelet2 ML converter',
    teaser: 'Generation of training data from HD maps in the Lanelet2 framework. Placeholder.',
    placeholder: true,
  },
  {
    id: 'sdtagnet',
    category: 'projects',
    title: 'SDTagNet',
    teaser: 'Online HD map construction from text-annotated navigation maps. Placeholder.',
    href: 'https://immel-f.github.io/SDTagNet/',
    external: true,
    placeholder: true,
  },
  {
    id: 'm3tr',
    category: 'projects',
    title: 'M3TR',
    teaser: 'A generalist model for real-world HD map completion. Placeholder.',
    href: 'https://github.com/immel-f/m3tr',
    external: true,
    placeholder: true,
  },
  {
    id: 'autoware-extension',
    category: 'autoware',
    title: 'Autoware Lanelet2 extension',
    teaser: 'Autoware OSM tags, projections, traffic lights, and Python bindings on top of Lanelet2. Placeholder.',
    href: 'https://github.com/autowarefoundation/autoware_lanelet2_extension',
    external: true,
    placeholder: true,
  },
  {
    id: 'maptoolbox',
    category: 'autoware',
    title: 'MapToolbox',
    teaser: 'Unity plugin to create Lanelet2 maps for Autoware. Placeholder.',
    href: 'https://github.com/autocore-ai/MapToolbox',
    external: true,
    placeholder: true,
  },
  {
    id: 'your-library',
    category: 'community-code',
    title: 'Your library here',
    teaser: 'Built a library on Lanelet2? This slot is a placeholder for community packages we will list next.',
    placeholder: true,
  },
  {
    id: 'your-paper',
    category: 'community-papers',
    title: 'Your paper here',
    teaser: 'Using Lanelet2 in a paper or project? This slot is a placeholder for community work we will feature next.',
    placeholder: true,
  },
];

export function entriesFor(category: CategoryId): TeaserEntry[] {
  return entries.filter((e) => e.category === category);
}

export function getEntry(category: string, id: string): TeaserEntry | undefined {
  return entries.find((e) => e.category === category && e.id === id);
}

export function entryHref(entry: TeaserEntry): string | undefined {
  if (entry.page) return withBase(`${entry.category}/${entry.id}`);
  if (!entry.href) return undefined;
  return entry.external ? entry.href : withBase(entry.href);
}

export function pagedEntries(): TeaserEntry[] {
  return entries.filter((e) => e.page);
}
