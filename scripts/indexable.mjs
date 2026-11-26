// Whether this build is the production site that search engines may index.
//
// Cloudflare Workers Builds sets WORKERS_CI_BRANCH to the branch being built.
// Only the production branch (PRODUCTION_BRANCH, default "master") is
// indexable; preview branches are not. Local builds (no WORKERS_CI_BRANCH)
// count as indexable. SITE_INDEXABLE=true|false overrides everything.
export function isIndexableBuild(env = process.env) {
    if (env.SITE_INDEXABLE === 'true') return true;
    if (env.SITE_INDEXABLE === 'false') return false;
    const branch = env.WORKERS_CI_BRANCH;
    if (!branch) return true;
    return branch === (env.PRODUCTION_BRANCH || 'master');
}
