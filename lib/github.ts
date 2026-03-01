export async function getPublicRepoCount() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/github`);
    const data = await res.json();
    return data.repoCount;
  } catch {
    return 0;
  }
}
