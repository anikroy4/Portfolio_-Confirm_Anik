/* global process */

const githubUsername = process.env.GITHUB_USERNAME || 'anikroy4';

export default async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  try {
    const githubResponse = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          'User-Agent': 'portfolio-projects'
        }
      }
    );

    if (!githubResponse.ok) {
      return response.status(githubResponse.status).json({ error: 'GitHub repositories could not be loaded.' });
    }

    const repositories = await githubResponse.json();
    const projects = repositories
      .filter(repository => !repository.fork && repository.stargazers_count > 0)
      .slice(0, 12)
      .map(repository => ({
        name: repository.name,
        description: repository.description,
        language: repository.language,
        topics: repository.topics || [],
        homepage: repository.homepage,
        html_url: repository.html_url
      }));

    response.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=86400');
    return response.status(200).json({ projects });
  } catch (error) {
    console.error('Could not load GitHub projects:', error);
    return response.status(502).json({ error: 'GitHub is temporarily unavailable.' });
  }
}
