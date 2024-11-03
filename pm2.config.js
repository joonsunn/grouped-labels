module.exports = {
  apps: [
    {
      name: 'backend-grouped-labels',
      cwd: './',
      script: 'pnpm start:dev',
    },
    {
      name: 'frontend-grouped-labels',
      cwd: './frontend',
      script: 'pnpm run dev',
    },
  ],
};
