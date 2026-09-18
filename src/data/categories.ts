export const categoryIds = [
  'official',
  'addons',
  'datasets',
  'projects',
  'autoware',
  'community-code',
  'community-papers',
] as const;

export type CategoryId = (typeof categoryIds)[number];

export interface Category {
  id: CategoryId;
  title: string;
  blurb: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: 'official',
    title: 'Official',
    blurb: 'The Lanelet2 library, documentation, and Python package — start here.',
    icon: 'ti-book',
  },
  {
    id: 'addons',
    title: 'Official addons',
    blurb: 'First-party tools from the Lanelet2 maintainers for mapping, editing, and workflows.',
    icon: 'ti-puzzle',
  },
  {
    id: 'datasets',
    title: 'Datasets',
    blurb: 'Public driving and map datasets that ship with, or are expressed in, Lanelet2.',
    icon: 'ti-map',
  },
  {
    id: 'projects',
    title: 'Official projects',
    blurb: 'Research from our groups that builds on Lanelet2 — converters, map learning, and more.',
    icon: 'ti-flask',
  },
  {
    id: 'autoware',
    title: 'Semi-official',
    blurb: 'Autoware extensions and mapping tools that are widely used with Lanelet2 in the stack.',
    icon: 'ti-car',
  },
  {
    id: 'community-code',
    title: 'Community code & libraries',
    blurb: 'Open-source libraries built around Lanelet2 by the wider community.',
    icon: 'ti-code',
  },
  {
    id: 'community-papers',
    title: 'Community projects & papers',
    blurb: 'Papers, theses, and projects that adopt Lanelet2 in robotics and autonomous driving research.',
    icon: 'ti-article',
  },
];

export function getCategory(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
