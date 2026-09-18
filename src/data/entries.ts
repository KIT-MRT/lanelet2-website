import type { CategoryId } from './categories';
import { site } from './site';
import { withBase } from '../utils/paths';

export interface TeaserMedia {
  type: 'image' | 'video' | 'none';
  src?: string;
  alt?: string;
  poster?: string;
}

export interface TeaserLink {
  label: string;
  href: string;
  /** Defaults to true. */
  external?: boolean;
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
  /** Extra pills (paper, GitHub, project page, …). */
  links?: TeaserLink[];
  /** Caption for figures / video. */
  copyright?: string;
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
    href: site.github,
    external: true,
    cta: 'Open repository',
  },
  {
    id: 'docs',
    category: 'official',
    title: 'Documentation',
    teaser: 'Primitives, architecture, geometry, projections, and map tagging — the official docs site.',
    href: site.docs,
    external: true,
    cta: 'Read the docs',
  },
  {
    id: 'pypi',
    category: 'official',
    title: 'PyPI package',
    teaser: 'Install the Python bindings with pip: pip install lanelet2.',
    href: site.pypi,
    external: true,
    cta: 'View on PyPI',
  },
  {
    id: 'paper',
    category: 'official',
    title: 'Lanelet2 paper',
    teaser:
      'Poggenhans et al., IEEE ITSC 2018: the original HD-map framework paper — consistent primitives, routing, and an extensible model for autonomous driving.',
    href: site.paper,
    external: true,
    cta: 'PDF',
  },
  {
    id: 'routing-paper',
    category: 'official',
    title: 'Pathfinding and routing in Lanelet2',
    teaser:
      'Poggenhans & Janosovits, IEEE ITSC 2020: Lanelet2 builds the routing graph at runtime rather than storing it, so the same map can be queried for the ego vehicle, other road users, and changing traffic rules.',
    href: 'https://doi.org/10.1109/ITSC45102.2020.9294376',
    external: true,
    cta: 'Paper',
    links: [
      {
        label: 'Routing docs',
        href: 'https://fzi-forschungszentrum-informatik.github.io/Lanelet2/lanelet2_routing/',
      },
    ],
  },
  {
    id: 'josm-plugin',
    category: 'addons',
    title: 'Lanelet2 JOSM plugin',
    teaser:
      'Native Kotlin plugin for editing Lanelet2 maps in JOSM — lanelets, regulatory elements, routing debug, and a live 3D viewer.',
    media: {
      type: 'image',
      src: 'images/JOSM-LL2-Plugin.png',
      alt: 'JOSM with the Lanelet2 plugin editing a roundabout, plus the live 3D viewer',
    },
    copyright: '© KIT-MRT',
    page: true,
    cta: 'Learn more',
    repo: 'https://github.com/KIT-MRT/lanelet2-josm-plugin',
    links: [{ label: 'GitHub', href: 'https://github.com/KIT-MRT/lanelet2-josm-plugin' }],
    detail: [
      'The Lanelet2 JOSM plugin adds map-editing tools to JOSM as a native Kotlin plugin (lanelet2.jar). Create and merge lanelets, tag regulatory elements, inspect the routing graph, and preview the map in 3D.',
      'Most tools are self-contained. A few actions also use a local Python lanelet2 install. Ad-hoc Python scripts against JOSM objects are handled by the companion GraalPy plugin.',
    ],
  },
  {
    id: 'graalpy',
    category: 'addons',
    title: 'JOSM GraalPy scripting',
    teaser:
      'Companion JOSM plugin that runs Python 3 (GraalPy) against map objects — including numpy — without packing the engine into the plugin JAR.',
    href: 'https://github.com/KIT-MRT/josm-graalpy-scripting-plugin',
    external: true,
    cta: 'GitHub',
  },
  {
    id: 'ml-converter',
    category: 'addons',
    title: 'Lanelet2 ML converter',
    teaser:
      'Generate training labels from a single Lanelet2 map source so HD-map perception, inference, and driving share one format (Immel, Fehler, Bieder, Stiller, arXiv 2024).',
    media: {
      type: 'image',
      src: 'images/ml-converter-labels.png',
      alt: 'OpenLane-style training labels generated from a Lanelet2 map',
    },
    copyright: '© Immel et al., 2024',
    href: 'https://github.com/immel-f/Lanelet2/tree/ml_converter_rework',
    external: true,
    cta: 'GitHub',
    links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2407.17409' }],
  },
  {
    id: 'kitscenes',
    category: 'datasets',
    title: 'KITScenes Multimodal',
    teaser:
      'KIT-MRT multimodal dataset with production-grade Lanelet2 HD maps covering tens of km² of European roads — cameras, lidar, 4D radar, and GNSS/INS.',
    media: {
      type: 'video',
      src: 'videos/multimodal-teaser-1920_1080_crf28.mp4',
      poster: 'images/kitscenes-teaser.jpg',
      alt: 'KITScenes multimodal teaser of mapped European driving scenes',
    },
    copyright: '© KIT-MRT / KITScenes',
    href: 'https://kitscenes.com/multimodal/',
    external: true,
    featured: true,
    cta: 'Dataset',
    links: [
      { label: 'GitHub', href: 'https://github.com/KIT-MRT/kitscenes' },
      { label: 'Multimodal paper', href: 'https://arxiv.org/abs/2606.02956' },
      { label: 'Multimodal data', href: 'https://huggingface.co/datasets/KIT-MRT/KITScenes-Multimodal' },
      { label: 'Long-tail paper', href: 'https://arxiv.org/abs/2603.23607' },
      { label: 'LongTail data', href: 'https://huggingface.co/datasets/KIT-MRT/KITScenes-LongTail' },
      {
        label: 'Longtail-E2E challenge',
        href: 'https://kitscenes.com/benchmarks/longtail-e2e-driving/',
      },
    ],
  },
  {
    id: 'ind',
    category: 'datasets',
    title: 'inD',
    teaser:
      'Urban intersection drone dataset from ika / fka: more than 13,500 road users (vehicles, cyclists, pedestrians) across 10 hours at four German intersections.',
    href: 'https://levelxdata.com/ind-dataset/',
    external: true,
    cta: 'Dataset',
    links: [
      {
        label: 'Paper (IEEE IV 2020)',
        href: 'https://doi.org/10.1109/IV47402.2020.9304839',
      },
    ],
  },
  {
    id: 'round',
    category: 'datasets',
    title: 'rounD',
    teaser:
      'Drone trajectories at three German roundabouts (ika / fka): six hours, more than 13,700 road users, plus parsing code and maps.',
    href: 'https://levelxdata.com/round-dataset/',
    external: true,
    cta: 'Dataset',
    links: [
      { label: 'Paper (IEEE ITSC 2020)', href: 'https://doi.org/10.1109/ITSC45102.2020.9294728' },
    ],
  },
  {
    id: 'unid',
    category: 'datasets',
    title: 'uniD',
    teaser:
      'University-campus drone dataset from leveLXData / fka: about 1,380 vehicles and 8,600 VRUs in a shared space, with Lanelet2 and OpenDRIVE maps.',
    href: 'https://levelxdata.com/unid-dataset/',
    external: true,
    cta: 'Dataset',
  },
  {
    id: 'exid',
    category: 'datasets',
    title: 'exiD',
    teaser:
      'Highway drone dataset at Autobahn entries and exits: 69,172 road users and more than 16 hours of highly interactive merging scenarios.',
    href: 'https://levelxdata.com/exid-dataset/',
    external: true,
    cta: 'Dataset',
    links: [
      { label: 'Paper (IEEE IV 2022)', href: 'https://ieeexplore.ieee.org/document/9827305' },
    ],
  },
  {
    id: 'hetrod',
    category: 'datasets',
    title: 'hetroD',
    teaser:
      '17.5 hours of high-density Taiwanese urban traffic (ICRA 2026): more than 65,000 trajectories, about 70% VRUs, with Lanelet2 maps at six locations.',
    href: 'https://levelxdata.com/hetrod-dataset/',
    external: true,
    cta: 'Dataset',
    links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2602.03447' }],
  },
  {
    id: 'kit-ad',
    category: 'projects',
    title: 'KIT Autonomous Driving Project',
    teaser:
      `Lanelet2 is powering both the KIT in-house AD Stack as well as [Autoware](${site.autoware}) running on two research vehicles in weekly close-loop testdrive operations. Learn more at the KIT-MRT CITI project page.`,
    media: {
      type: 'video',
      src: 'videos/autoware_kitscenes_crf30-720p.mp4',
      alt: 'Autoware driving with Lanelet2 HD maps on the KITScenes route',
    },
    copyright: '© KIT-MRT / KITScenes',
    href: site.origin.citi,
    external: true,
    featured: true,
    cta: 'KIT CITI project',
    links: [
      { label: 'Autoware', href: site.autoware },
      { label: 'auto_e2e', href: 'https://github.com/autowarefoundation/auto_e2e' },
    ],
  },
  {
    id: 'sdtagnet',
    category: 'projects',
    title: 'SDTagNet',
    teaser:
      'Online HD map construction that uses text-annotated OpenStreetMap-style SD maps as a prior. NeurIPS 2025; up to +5.9 mAP versus construction without priors.',
    media: {
      type: 'image',
      src: 'images/sdtagnet-osm.png',
      alt: 'OpenStreetMap-style SD map used as a prior for SDTagNet',
    },
    copyright: '© Immel et al., NeurIPS 2025. Map © OpenStreetMap contributors',
    href: 'https://immel-f.github.io/SDTagNet/',
    external: true,
    cta: 'Project',
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2506.08997' },
      { label: 'GitHub', href: 'https://github.com/immel-f/SDTagNet' },
    ],
  },
  {
    id: 'm3tr',
    category: 'projects',
    title: 'M3TR',
    teaser:
      'A generalist Multi-Masking Map Transformer for real-world HD map completion with and without offline map priors. IEEE RA-L 2025.',
    media: {
      type: 'image',
      src: 'images/m3tr-map.png',
      alt: 'M3TR ground-truth HD map used in the map-completion benchmark',
    },
    copyright: '© Immel et al., IEEE RA-L 2025',
    href: 'https://arxiv.org/abs/2411.10316',
    external: true,
    cta: 'Paper',
    links: [
      { label: 'IEEE', href: 'https://doi.org/10.1109/LRA.2025.3621966' },
      { label: 'GitHub', href: 'https://github.com/immel-f/m3tr' },
    ],
  },
  {
    id: 'autoware-extension',
    category: 'autoware',
    title: 'Autoware Lanelet2 extension',
    teaser:
      'Autoware OSM tags, MGRS / Transverse Mercator projection, traffic lights, right-of-way, and Python utilities on top of Lanelet2.',
    media: {
      type: 'image',
      src: 'images/autoware-lanelet2-format.png',
      alt: 'Autoware Lanelet2 map with OSM tags, traffic lights, and regulatory elements',
    },
    copyright: '© Autoware Foundation',
    href: 'https://github.com/autowarefoundation/autoware_lanelet2_extension/blob/main/autoware_lanelet2_extension/docs/lanelet2_format_extension.md',
    external: true,
    cta: 'Format docs',
  },
  {
    id: 'creating-vector-map',
    category: 'autoware',
    title: 'Creating a vector map',
    teaser:
      'Official Autoware tutorial for building Lanelet2 maps with TIER IV Vector Map Builder — also points to JOSM and MapToolbox as alternatives.',
    href: 'https://docs.autoware.org/main/tutorials/integrating-autoware/creating-maps/creating-vector-map/',
    external: true,
    cta: 'Tutorial',
  },
  {
    id: 'vector-map-builder',
    category: 'autoware',
    title: 'TIER IV Vector Map Builder',
    teaser:
      'Browser-based editor for Autoware Lanelet2 maps (.osm). No local install; a TIER IV account is required.',
    href: 'https://tools.tier4.jp/feature/vector_map_builder_ll2',
    external: true,
    cta: 'Open tool',
  },
  {
    id: 'maptoolbox',
    category: 'autoware',
    title: 'MapToolbox',
    teaser:
      'Unity plugin from Autocore for creating Autoware Lanelet2 maps from PCD — lanelets, traffic lights, stop lines, and OSM export.',
    href: 'https://github.com/autocore-ai/MapToolbox',
    external: true,
    cta: 'GitHub',
  },
  {
    id: 'lanelet2anchors',
    category: 'community-code',
    title: 'lanelet2anchors',
    teaser:
      'Map-based anchor paths for a lanelet or vehicle pose. From the CVPRW 2023 paper “Lanelet2 for nuScenes”, with a PyPI package and project page.',
    href: 'https://felixhertlein.github.io/lanelet4nuscenes',
    external: true,
    cta: 'Project',
    links: [
      { label: 'Paper', href: 'https://openaccess.thecvf.com/content/CVPR2023W/E2EAD/html/Naumann_Lanelet2_for_nuScenes_Enabling_Spatial_Semantic_Relationships_and_Diverse_Map-Based_CVPRW_2023_paper.html' },
      { label: 'GitHub', href: 'https://github.com/FelixHertlein/lanelet2anchors' },
      { label: 'PyPI', href: 'https://pypi.org/project/lanelet2anchors/' },
    ],
  },
  {
    id: 'commonroad',
    category: 'community-code',
    title: 'CommonRoad Scenario Designer',
    teaser:
      'Open-source toolbox (TUM) that converts OSM, Lanelet/Lanelet2, OpenDRIVE, and SUMO into CommonRoad maps, plus a GUI for scenario editing. IEEE ITSC 2021.',
    href: 'https://commonroad.in.tum.de/tools/scenario-designer',
    external: true,
    cta: 'Project',
    links: [
      { label: 'Paper', href: 'https://doi.org/10.1109/ITSC48978.2021.9564885' },
      { label: 'GitHub', href: 'https://github.com/CommonRoad/commonroad-scenario-designer' },
    ],
  },
  {
    id: 'your-library',
    category: 'community-code',
    title: 'Your library here',
    teaser:
      'Built a library on Lanelet2? Open an issue or a pull request on this website’s repo to get it listed.',
    placeholder: true,
    href: site.hubIssue,
    external: true,
    cta: 'Open an issue',
    links: [{ label: 'Fork+PR', href: site.hubFork }],
  },
  {
    id: 'dissertation',
    category: 'community-papers',
    title: 'Generating HD maps for autonomous driving',
    teaser:
      'Fabian Poggenhans, Dr.-Ing. dissertation, KIT (2019, CC BY-SA 4.0): methods to generate HD maps from vehicle sensors, evaluated on 102 km around Karlsruhe.',
    media: {
      type: 'image',
      src: 'images/lanelet2-example.png',
      alt: 'Example Lanelet2 map with lanelets, areas, and regulatory elements',
    },
    copyright: '© Poggenhans et al. / FZI & KIT, 2018',
    href: 'https://publikationen.bibliothek.kit.edu/1000100719/51081322',
    external: true,
    cta: 'KIT library',
  },
  {
    id: 'your-paper',
    category: 'community-papers',
    title: 'Your paper here',
    teaser:
      'Using Lanelet2 in a paper or project? Open an issue or a pull request on this website’s repo to get it listed.',
    placeholder: true,
    href: site.hubIssue,
    external: true,
    cta: 'Open an issue',
    links: [{ label: 'Fork+PR', href: site.hubFork }],
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

export function entryLinks(entry: TeaserEntry): { label: string; href: string; external: boolean }[] {
  const extras = entry.links ?? [];
  const primary = entryHref(entry);
  const links: { label: string; href: string; external: boolean }[] = [];
  if (primary && extras.length > 0) {
    links.push({
      label: entry.cta ?? (entry.page ? 'Learn more' : 'Open'),
      href: primary,
      external: Boolean(entry.external && !entry.page),
    });
  }
  for (const link of extras) {
    links.push({
      label: link.label,
      href: link.href,
      external: link.external !== false,
    });
  }
  if (!primary && extras.length === 0) return [];
  if (extras.length === 0) return [];
  return links;
}

export function cardIsWrapped(entry: TeaserEntry): boolean {
  return Boolean(entryHref(entry)) && !(entry.links && entry.links.length > 0);
}

export function pagedEntries(): TeaserEntry[] {
  return entries.filter((e) => e.page);
}

const TEASER_LINK = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Strip `[label](url)` markup for meta descriptions. */
export function teaserPlain(teaser: string): string {
  return teaser.replace(TEASER_LINK, '$1');
}

/** Render `[label](url)` in teaser copy as safe HTML links. */
export function teaserHtml(teaser: string): string {
  const linkClass = 'text-kit font-semibold hover:underline';
  let html = '';
  let last = 0;
  for (const match of teaser.matchAll(new RegExp(TEASER_LINK.source, 'g'))) {
    const index = match.index ?? 0;
    html += escapeHtml(teaser.slice(last, index));
    html += `<a href="${escapeHtml(match[2])}" target="_blank" rel="noopener noreferrer" class="${linkClass}">${escapeHtml(match[1])}</a>`;
    last = index + match[0].length;
  }
  html += escapeHtml(teaser.slice(last));
  return html;
}
