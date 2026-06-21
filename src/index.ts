#!/usr/bin/env node
import { defineCommand, runMain } from "citty";
import pc from "picocolors";

const main = defineCommand({
  meta: {
    name: "marketing-os",
    description:
      "Marketing-OS unified CLI — diagnosis and evaluation across SEO, Ads, Social",
  },
  subCommands: {
    seo: () => import("@start-x-work/mos-seo/command").then((m) => m.default),
    ads: () => import("@start-x-work/mos-ads/command").then((m) => m.default),
    social: () =>
      import("@start-x-work/mos-social/command").then((m) => m.default),
  },
});

runMain(main).catch((error: unknown) => {
  if (error instanceof Error) {
    console.error(pc.red(`Error: ${error.message}`));
    process.exit(1);
  }
  throw error;
});
