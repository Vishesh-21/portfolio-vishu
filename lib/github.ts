const GITHUB_API = "https://api.github.com";

const headers = {
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
};

//get public repo count
export async function getPublicRepoCount() {
  const res = await fetch(
    `${GITHUB_API}/users/${process.env.GITHUB_USERNAME}`,
    {
      headers,
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch user");

  const data = await res.json();
  return data.public_repos as number;
}
