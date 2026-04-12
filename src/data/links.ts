// Artist-level profile links (used in Follow section)
// To update: change the url for each platform
export const artistLinks = [
  { name: "Spotify",       url: "https://open.spotify.com/artist/6fvpctR3TvJWAnRI0Q8wWe" },
  { name: "Apple Music",   url: "https://music.apple.com/us/artist/empire-eyes/1672824701" },
  { name: "YouTube Music", url: "https://music.youtube.com/channel/UCsqBvJcVsGXQg0yzxqJAZZA" },
  { name: "TIDAL",         url: "https://listen.tidal.com/artist/37490305" },
  { name: "Bandcamp",      url: "https://empireeyes.bandcamp.com/" },
  { name: "SoundCloud",    url: "https://soundcloud.com/empireeyes" },
  { name: "Deezer",        url: "https://link.deezer.com/s/32X2QWbJZKyGa8RAUaydg" },
] as const;

export const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/empire.eyes/",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@empire.eyes.official",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@empireeyes",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/empireeyesmusic",
  },
] as const;

export const videos = [
  {
    id: "XbyrTjEagsU",
    title: "In Time",
    label: "Official Music Video",
    year: 2024,
  },
  {
    id: "u6ERoY_wHrM",
    title: "Set Me Free",
    label: "Music Video",
    year: 2026,
  },
  {
    id: "kSdhvDhXHv8",
    title: "Satori 悟り",
    label: "Music Video",
    year: 2026,
  },
] as const;

export const releases = [
  {
    title: "In Time",
    type: "Single",
    year: 2023,
    datePublished: "2023-02-03",
    genre: "Alternative / Future Pop",
    artwork: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b7d426ba878feddd1ebf844e",
    lore: "SELL YOUR SOUL TO YOURSELF... DON'T LEAVE ANYTHING BEHIND",
    platforms: [
      { name: "Spotify",       url: "https://open.spotify.com/track/5K7fXLvPYSHA1R7MQa9qdL" },
      { name: "Apple Music",   url: "https://music.apple.com/au/album/in-time/1672839376?i=1672839377" },
      { name: "YouTube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_lLTp_ZvOhdUVPwQtcywo1A64TAf8Dk7NM" },
      { name: "TIDAL",         url: "https://tidal.com/browse/track/277682490" },
      { name: "Bandcamp",      url: "https://empireeyes.bandcamp.com/track/in-time" },
      { name: "SoundCloud",    url: "https://soundcloud.com/empireeyes/in-time" },
      { name: "Deezer",        url: "https://deezer.page.link/8nG6TR2d9YHGMcFLA" },
    ],
  },
  {
    title: "TILT",
    type: "Album",
    year: 2024,
    datePublished: "2024-11-22",
    genre: "Alternative / Future Pop",
    tracks: 8,
    artwork: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0224aef36d2462017b385c2c0a",
    lore: `The album is named after the permanent condition - the distance between what we've built and what's actually there. Not a crisis. Not a breakdown. The quiet hum of a world still running but no longer running on what it thinks it's running on.\n\nEverything looks normal. The lights are on. The systems hold. But something underneath has shifted, and the music knows it before you do.\n\nEach track moves through degrees of awareness. The early sound is held, coherent - compensation working invisibly, a cost you feel in the texture before you hear it in the melody. Then something gives. Not all at once - a sound that shouldn't be there, a silence where the structure used to hold, a moment where the ground you were standing on reveals itself as something built, not something real.\n\nThe album doesn't resolve into answers. It thins the walls. It stays close enough to the edge that whatever lives on the other side - raw, ancient, indifferent to everything we've constructed - can reach through.\n\nTILT is not the sound of things falling apart. It is the sound of finally seeing what was always underneath. And choosing to keep listening.`,
    platforms: [
      { name: "Spotify",       url: "https://open.spotify.com/album/5DFrs1CRPRYn0Xu0canyOH" },
      { name: "Apple Music",   url: "https://music.apple.com/au/album/tilt/1777806382" },
      { name: "YouTube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_meY1niEwsg7StKn0dP8AdCpbOe8Q0v-9k" },
      { name: "TIDAL",         url: "https://tidal.com/browse/album/397376823" },
      { name: "Bandcamp",      url: "https://empireeyes.bandcamp.com/album/tilt" },
      { name: "SoundCloud",    url: "https://soundcloud.com/empireeyes/sets/tilt" },
      { name: "Deezer",        url: "https://deezer.page.link/31CDv2kKLhAqJVGG9" },
    ],
  },
] as const;

export const artist = {
  name: "Empire Eyes",
  label: "ArteMusique",
  subscribeUrl: "https://empireeyesmusic.substack.com",
} as const;
