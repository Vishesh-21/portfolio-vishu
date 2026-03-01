const GITHUB_API = "https://api.github.com";

export async function GET() {
  try {
    const username = process.env.GITHUB_USERNAME;
    const token = process.env.GITHUB_TOKEN;

    console.log("Fetching GitHub repo count for user:", username);
    console.log("Using token:", !!token);

    if (!username) {
      return Response.json({ repoCount: 0 });
    }

    const headers: HeadersInit = {};

    if (token) {
      headers.Authorization = `token ${token}`;
    }

    const res = await fetch(`${GITHUB_API}/users/${username}`, {
      headers,
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return Response.json({
        repoCount: 0,
        res: res,
        error: `GitHub API error: ${res.status} ${res.statusText}`,
      });
    }

    const data = await res.json();

    return Response.json({
      repoCount: data.public_repos ?? 0,
    });
  } catch (error) {
    return Response.json({
      repoCount: 0,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
