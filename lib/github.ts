const GITHUB_API = "https://api.github.com";

export async function getPublicRepoCount() {
  if (!process.env.GITHUB_USERNAME) return 0;

  try {
    const res = await fetch(
      `${GITHUB_API}/users/${process.env.GITHUB_USERNAME}`,
      {
        headers: process.env.GITHUB_TOKEN
          ? {
              Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            }
          : {},
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) return 0;

    const data = await res.json();
    return data.public_repos ?? 0;
  } catch (error) {
    console.error("Error fetching GitHub repo count:", error);
    return 0;
  }
}
