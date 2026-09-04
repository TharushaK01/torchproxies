const environments = {
  development: {
    CHATWOOT_TOKEN: "8BwAvZu9ggvbbcvWCGpmSUz5",
    MS_CLARITY_TOKEN: "pxuryuozmt",
  },
  production: {
    CHATWOOT_TOKEN: "aztRT5iLVEs5KKKku5cUyTBR",
    MS_CLARITY_TOKEN: "pxuyhe3gjf",
  },
};

export const currentEnvs: { CHATWOOT_TOKEN: string; MS_CLARITY_TOKEN: string } =
  process.env.NODE_ENV === "production"
    ? environments.production
    : environments.development;
