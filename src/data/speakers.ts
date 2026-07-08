import type { ImageMetadata } from 'astro';

// To add a speaker:
//   1. Drop their photo in src/images/speakers/ (square works best, e.g. 800×800).
//   2. Import it below, matching the file name.
//   3. Add (or update) an entry in the `speakers` array, setting `image` to that import.
// Speakers without an `image` show a silhouette placeholder until a photo is added.
// Only add speakers once they're confirmed — everything in this array is shown publicly.

import harpreetKaur from '../images/speakers/harpreet-kaur.jpg';
import radhikaDas from '../images/speakers/radhika-das.jpg';
import tomMeyer from '../images/speakers/tom-meyer.jpg';
import lawrenceRosenberg from '../images/speakers/lawrence-rosenberg.jpg';
import giancarloGanglione from '../images/speakers/giancarlo-ganglione.jpg';
import kapilChawla from '../images/speakers/kapil-chawla.jpg';
import premierLeagueKicks from '../images/speakers/premier-league-kicks.jpg';
import vrindaKishori from '../images/speakers/vrinda-kishori.jpg';

export interface Speaker {
  /** Full name, as it should appear on the card. */
  name: string;
  /** Short role / one-liner shown under the name, e.g. "Neuroscientist & Author". Optional. */
  role?: string;
  /** One-line talk topic / title shown on the card, e.g. "How compassion rewires the brain". */
  topic?: string;
  /** Imported image (ImageMetadata). Optional — a placeholder is shown until a photo is added. */
  image?: ImageMetadata;
  /** Which part of the photo to keep when cropped to a square. Defaults to 'center'. */
  focus?: 'top' | 'center' | 'bottom' | 'left' | 'right';
}

export const speakers: Speaker[] = [
  {
    name: 'Harpreet Kaur',
    role: 'BBC Apprentice winner',
    topic: 'Who taught you about love?',
    image: harpreetKaur,
    focus: 'top',
  },
  {
    name: 'Tom Meyer',
    role: 'Ex-Meta engineer',
    topic: 'Does AI need your attention?',
    image: tomMeyer,
  },
  {
    name: 'Radhika Das',
    role: 'International kirtan artist',
    topic: 'The ultimate love language',
    image: radhikaDas,
    focus: 'right',
  },

  {
    name: 'Lawrence Rosenberg',
    role: 'Media commentator',
    topic: 'What makes the world go around',
    image: lawrenceRosenberg,
  },
  {
    name: 'Giancarlo Gaglione',
    role: 'Founder, Mental Health World Cup',
    topic: 'How I won the World Cup',
    image: giancarloGanglione,
  },
  {
    name: 'Dr Kapil Chawla',
    role: 'Family physician',
    topic: 'The Disease of Disconnection',
    image: kapilChawla,
    focus: 'right',
  },
  {
    name: 'Elliot Bird, Jeffrey and Hannah',
    role: 'Members of Premier League Kicks Charity',
    topic: 'Kicks that change lives',
    image: premierLeagueKicks,
    focus: 'top',
  },
  {
    name: 'Vrinda Kishori, Lali and Jani',
    role: "Interactive children's storyteller",
    topic: 'The Story between Us',
    image: vrindaKishori,
    focus: 'bottom',
  },
];
