export type HeroImage = {
  src: string;
  alt: string;
  photographer?: string;
  creditUrl?: string;
};

const PEXELS_API_KEY = process.env.PEXELS_API_KEY;

export async function fetchHeroImage(query: string): Promise<HeroImage | null> {
  if (!PEXELS_API_KEY) {
    return null;
  }

  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1`,
      {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
        next: { revalidate: 86400 },
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    const photo = data?.photos?.[0];
    if (!photo) {
      return null;
    }

    const src = photo.src?.landscape || photo.src?.large || photo.src?.medium || photo.src?.original;
    if (!src) {
      return null;
    }

    return {
      src,
      alt: photo.alt || query,
      photographer: photo.photographer,
      creditUrl: photo.url,
    };
  } catch {
    return null;
  }
}
