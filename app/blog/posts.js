
export const blogPosts = [
  {
    slug: 'future-of-structural-glazing',
    title: 'The Future of Structural Glazing in Modern Architecture',
    excerpt: 'Explore how advancements in glass technology are enabling architects to push the boundaries of design with larger, clearer, and stronger glass systems.',
    date: 'October 12, 2023',
    category: 'Architecture',
    readTime: '5 min read',
    author: 'SGD Group Team',
    image: '/project-nikshan.png',
    content: [
      'Structural glazing has moved from a specialist technique reserved for landmark towers to a mainstream expectation on commercial and high-end residential projects alike. Where a facade once needed visible mullions and transoms to carry its own weight, modern structural silicone and point-fixed systems let glass panels do the structural work themselves — creating uninterrupted, almost frameless elevations.',
      'The shift is being driven by three things: bigger glass panels from improved manufacturing and transport capability, stronger interlayers that make laminated and toughened glass safer at scale, and aluminium sub-frames engineered to hide almost entirely behind the glass line. Together, they let architects specify facades that read as a single continuous surface rather than a grid of framed windows.',
      'For SGD Group, this means every structural glazing project starts with the same question our clients ask: how much glass can we give this space without compromising thermal performance or long-term weathering? Our curtain wall and structural systems are engineered with continuous thermal breaks and drainage paths that keep performance high even as sightlines shrink.',
      'The result is architecture that feels lighter, lets in dramatically more daylight, and ages well — because the engineering behind an invisible frame has to be more precise, not less, than a visible one. As glass technology keeps improving, we expect structural glazing to become the default expectation for any building that wants to make a visual statement.',
    ],
  },
  {
    slug: 'guide-to-skylights',
    title: 'Maximizing Natural Light: A Guide to Skylights',
    excerpt: 'Discover the benefits of incorporating skylights into your commercial or residential projects, from energy efficiency to enhanced well-being.',
    date: 'November 05, 2023',
    category: 'Design',
    readTime: '4 min read',
    author: 'SGD Group Team',
    image: '/skylight.png',
    content: [
      'A well-placed skylight can transform a room more dramatically than almost any other single design decision — turning a dim interior space into one filled with soft, even daylight for most of the day. Unlike a vertical window, a skylight draws light from directly overhead, which reaches deeper into a floor plan and reduces the need for artificial lighting during daytime hours.',
      'Beyond the obvious energy savings, natural overhead light has a measurable effect on wellbeing. Studies on daylighting consistently link good access to natural light with better mood, improved focus, and healthier sleep cycles — which is why skylights are increasingly specified in offices, studios, and kitchens, not just traditional atriums.',
      'The engineering matters as much as the placement. A skylight is a hole in your roof, so weatherproofing, insulation, and glare control all have to be solved together. SGD Group\'s skylight systems use insulated, low-E glazing units to control heat gain, paired with precision-fabricated aluminium kerbs and flashing details that keep the installation fully weathertight through Kerala\'s monsoon season.',
      'Whether it\'s a single fixed skylight over a stairwell or a full glazed roof over an atrium, the same principle applies: get the orientation, glazing specification, and detailing right, and a skylight pays for itself in daylight, energy savings, and the way a space simply feels to be in.',
    ],
  },
  {
    slug: 'minimalist-frameless-doors',
    title: 'Minimalist Frameless Doors for Seamless Transitions',
    excerpt: 'Learn why frameless sliding doors are becoming the standard for luxury homes, offering unobstructed views and an elegant indoor-outdoor flow.',
    date: 'November 28, 2023',
    category: 'Trends',
    readTime: '4 min read',
    author: 'SGD Group Team',
    image: '/project-eham.png',
    content: [
      'Frameless sliding doors have become the signature detail of contemporary luxury homes — and it\'s easy to see why. By minimising the aluminium frame to an almost invisible sightline, they turn a door into what feels like a moving wall of glass, blurring the line between an interior living space and whatever sits beyond it: a garden, a pool deck, or a view.',
      'The appeal isn\'t purely aesthetic. A well-engineered frameless system still needs to deliver everything a conventional door does — weather sealing, security, and smooth day-to-day operation — just with far less visible hardware doing the work. That means heavier-duty rollers and tracks hidden within a slimmer profile, and drainage details engineered with less material to work with.',
      'For architects, frameless doors also change how a room is designed. With the threshold and sightlines minimised, floor finishes can run continuously from inside to outside, and the door stops reading as a "window" and starts reading as an open threshold. It\'s a detail that photographs beautifully, but more importantly, it changes how a space is actually lived in day to day.',
      'SGD Group\'s frameless and slim sliding systems are built to bring this look to Kerala\'s climate — engineered for monsoon-grade weather sealing without sacrificing the minimal sightlines that make the style work in the first place.',
    ],
  },
];

export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug);
}
