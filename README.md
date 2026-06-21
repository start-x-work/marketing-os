# Marketing-OS Unified CLI

Single entry point for the three Marketing-OS OSS pillars: SEO, Ads, and Social.

```bash
npx @start-x-work/marketing-os seo audit llmo https://example.com
npx @start-x-work/marketing-os ads campaign analyze '{"name":"Brand","budget":100000,"adGroups":[]}'
npx @start-x-work/marketing-os social post evaluate "Hello world" --platform x
```

Each pillar remains available standalone as `@start-x-work/mos-seo`, `mos-ads`, and `mos-social`.

## Scope

Decision support only — diagnosis, evaluation, and structured logs. No auto posting, auto submission, or auto budget changes.

Manifesto: [start-x-work/manifesto](https://github.com/start-x-work/manifesto)

Commercial Marketing-OS: [marketing-os.jp](https://marketing-os.jp)

## Development

```bash
npm install
npm run build
node dist/index.cjs seo audit site https://example.com --format json --quiet
```

## License

Apache-2.0
