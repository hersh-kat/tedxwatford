export const eventInfo = {
  name: 'TEDxWatford',
  tagline: 'All You Need is Love.',
  description:
    "Inspired by the timeless message of The Beatles and hosted at Watford's Bhaktivedanta Manor, the iconic and historic estate gifted by George Harrison, TEDxWatford presents an unforgettable evening exploring the many dimensions of what we all need — love.",
  longDescription:
    'Human connection. Compassion. Purpose. Impact. This unique gathering brings together thought leaders, storytellers, and change-makers to share powerful ideas and personal journeys that challenge, inspire, and uplift. From science and spirituality to leadership and creativity (and music!), each talk examines how love, in its broadest sense, shapes our lives and the world around us.',
  startDate: '2026-07-18T16:00:00+01:00',
  endDate: '2026-07-18T21:00:00+01:00',
  displayDate: '18 July 2026',
  displayTime: '4:00 pm – 9:00 pm',
  ticketUrl: 'https://luma.com/tedxwatford',
  contactEmail: 'team@tedxwatford.com',
  siteUrl: 'https://tedxwatford.com',
  tedxProgramUrl: 'https://www.ted.com/about/programs-initiatives/tedx-program',
  venue: {
    name: 'Bhaktivedanta Manor',
    streetAddress: 'Dharam Marg, Radlett',
    addressLocality: 'Watford',
    postalCode: 'WD25 8EZ',
    addressCountry: 'GB',
    region: 'Hertfordshire',
    mapsUrl: 'https://maps.google.com/?q=Bhaktivedanta+Manor+Watford+WD25+8EZ',
    latitude: 51.6738,
    longitude: -0.3517,
  },
} as const;

export type EventInfo = typeof eventInfo;
