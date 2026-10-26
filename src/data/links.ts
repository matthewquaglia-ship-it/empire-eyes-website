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
    // No YouTube id yet: the still opens the Forever viewer instead of linking out.
    // When the video is up, set id to its YouTube id (and drop thumb to use YouTube's).
    id: "",
    title: "Forever",
    label: "Music Video",
    year: "Coming soon",
    thumb: "/images/forever-frame.jpg",
    sat: "MEDIASAT",
    // READ write-up (paragraphs split on a blank line), shown above the viewer
    lore: `The film for Forever started with a scoreboard. Our friend Jordan Lennon had bought an old LED score board and set it up at the back of his studio, and when the beautiful mind and dear friend Michael Spagnoletti and I saw it, the ideas started sparking. We'd use it like those old films where the car sits still and the screen behind it does the driving. So we put together some visuals and parked my car in front of it (Jordan needed a 367-point reverse parallel to get it in).\n\nThen, during a test shoot, we found something by accident: a visual delay that fed my performance back into the screen behind me, a beat late. It solved the thing I'd been struggling to show. The song is about letting go: "I don't mind it, cos now and then, forever's gonna fall apart." And here was the present, fading further and further into the past, right there in the frame.\n\nAfter hours of experimenting and a few more happy accidents, that's the film.`,
    reel: [
      { url: "/media/tv/teaser-forever.mp4", title: "FOREVER", sub: "MUSIC VIDEO · TEASER", file: "FOREVER_TEASER.MP4", focus: 0.35 },
      { url: "/media/tv/bts-forever.mp4", title: "FOREVER", sub: "ON SET · MV SHOOT", date: "NOV 11 2025", file: "FOREVER_ON_SET.MP4" },
      { url: "/media/tv/bts-forever-setup.mp4", title: "FOREVER", sub: "SETTING UP", date: "NOV 11 2025", file: "FOREVER_SETUP.MP4", focus: 0.45 },
      { url: "/media/tv/bts-3766.mp4", title: "FOREVER", sub: "ON SET · MV SHOOT #2", file: "THE_CAR_SHOT.MP4" },
      { url: "/media/tv/bts-forever-car.mp4", title: "FOREVER", sub: "THE CAR", date: "NOV 11 2025", file: "FOREVER_CAR.MP4", focus: 0.65 },
      { url: "/media/tv/bts-forever-crew.mp4", title: "FOREVER", sub: "DIRECTOR: MICHAEL SPAGNOLETTI", date: "NOV 11 2025", file: "FOREVER_CREW.MP4", focus: 0.3 },
    ],
  },
  {
    id: "XbyrTjEagsU",
    title: "In Time",
    label: "Official Music Video",
    year: 2024,
    // READ write-up (paragraphs split on a blank line) and the clips shown in its viewer
    lore: `In Time was shot on a warm weeknight in the city, in Adelaide, with my siblings helping out. We hung out and played with shots that looked cool, and it was the first time I'd turned my filmmaking toward one of my own songs.\n\nI wasn't chasing a narrative. The film came more from my love of the photography of cinema, and I wanted something that would sit alongside the music rather than pull attention from it. Each shot tells a piece of a story without a clear direction, drifting into abstraction, and that suits what the song is about.\n\n"In Time" is about the swing between feeling deeply connected, to myself and to something bigger, and losing that clarity altogether. It closes on a kind of certainty: "Even when you doubt me, I'll be out here floating In Time." The moments when I'm lost, running or doubtful are exactly when to reach for that connection, not turn away and spiral down.\n\nThat's the escalator scene, where I'm moving up and down at the same time. You can watch it being edited below, in IN TIME · IN THE EDIT.`,
    reel: [
      { url: "/media/tv/cin-intime-02.mp4", title: "IN TIME", sub: "STILL 01", file: "IN_TIME_SHOOT_01.MP4" },
      { url: "/media/tv/bts-intime-01.mp4", title: "IN TIME SHOOT", sub: "BTS 01", file: "IN_TIME_BTS_01.MP4" },
      { url: "/media/tv/cin-intime-03.mp4", title: "IN TIME", sub: "STILL 02", file: "IN_TIME_SHOOT_02.MP4" },
      { url: "/media/tv/cin-intime-04.mp4", title: "IN TIME", sub: "STILL 03", file: "IN_TIME_SHOOT_03.MP4" },
      { url: "/media/tv/bts-intime-02.mp4", title: "IN TIME", sub: "BTS 02", file: "IN_TIME_BTS_02.MP4" },
      { url: "/media/tv/cin-intime-05.mp4", title: "IN TIME", sub: "STILL 04", file: "IN_TIME_SHOOT_04.MP4" },
      { url: "/media/tv/cin-intime-06.mp4", title: "IN TIME", sub: "STILL 05", file: "IN_TIME_SHOOT_05.MP4" },
      { url: "/media/tv/bts-intime-03.mp4", title: "IN TIME", sub: "BTS 03", file: "IN_TIME_BTS_03.MP4" },
      { url: "/media/tv/cin-intime-07.mp4", title: "IN TIME", sub: "STILL 06", file: "IN_TIME_SHOOT_06.MP4" },
      { url: "/media/tv/bts-0141.mp4", title: "IN TIME", sub: "IN THE EDIT", file: "IN_THE_EDIT.MP4" },
      { url: "/media/tv/cin-intime-08.mp4", title: "IN TIME", sub: "STILL 07", file: "IN_TIME_SHOOT_07.MP4" },
      { url: "/media/tv/bts-intime-04.mp4", title: "IN TIME", sub: "BTS 04", file: "IN_TIME_BTS_04.MP4" },
      { url: "/media/tv/cin-intime-09.mp4", title: "IN TIME", sub: "STILL 08", file: "IN_TIME_SHOOT_08.MP4" },
      { url: "/media/tv/cin-intime-10.mp4", title: "IN TIME", sub: "STILL 09", file: "IN_TIME_SHOOT_09.MP4" },
    ],
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
    datePublished: "2023-03-24",
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
    tracklist: ["Intro", "Set Me Free", "Save The World", "Even When", "TILT", "In Time", "Modues", "Satori"],
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
  {
    title: "Disco Volante",
    type: "Album",
    year: "Pre-Release",
    genre: "Alternative / Future Pop",
    artwork: "/images/disco-volante.jpg",
    listenUrl: "/listening-room",
    tracklist: ["This Road", "Kiss Yourself", "Forever", "See It All", "Divided by Me", "Consolation", "Space Time", "Take Me There"],
    platforms: [],
  },
] as const;

export const artist = {
  name: "Empire Eyes",
  label: "ArteMusique",
  subscribeUrl: "https://empireeyesmusic.substack.com",
} as const;
