# Quickstart — Marketing-OS Unified CLI

3 編（SEO / Ads / Social）を 1 コマンドで使う統合 CLI です。

## Install & run

```bash
npx @start-x-work/marketing-os seo audit site https://example.com --format json --quiet
npx @start-x-work/marketing-os ads campaign analyze '{"name":"Brand","budget":100000,"adGroups":[]}'
npx @start-x-work/marketing-os social post evaluate "Hello" --platform x
```

## 環境変数（pillar 共通）

| 変数 | 用途 |
|---|---|
| `GEMINI_API_KEY` | AI 機能（brief / evaluate / keyword map 等） |
| `OPENAI_API_KEY` | `--model openai` 時 |
| `ANTHROPIC_API_KEY` | `--model anthropic` 時 |
| `YAHOO_ADS_ACCESS_TOKEN` | Ads: `platform yahoo list` |
| `YAHOO_ADS_ACCOUNT_ID` | Ads: Yahoo アカウント ID |

## Web UI（BYOK 推奨）

運営側 AI コストを避けるため、Web では CLI キーの代わりにブラウザ設定（BYOK）を使えます。

| Pillar | URL | クイックスタート |
|---|---|---|
| SEO | https://marketing-os-seo.pages.dev | [docs/QUICKSTART.md](https://github.com/start-x-work/marketing-os-seo/blob/main/docs/QUICKSTART.md) |
| Ads | https://marketing-os-ads.pages.dev | [docs/QUICKSTART.md](https://github.com/start-x-work/marketing-os-ads/blob/main/docs/QUICKSTART.md) |
| Social | https://marketing-os-social.pages.dev | [docs/QUICKSTART.md](https://github.com/start-x-work/marketing-os-social/blob/main/docs/QUICKSTART.md) |

## OSS と商用

各 pillar は npm 単体でも利用可能です。組織規模の運用・伴走は [Marketing-OS 商用](https://marketing-os.jp) を参照してください。

Manifesto: [start-x-work/manifesto](https://github.com/start-x-work/manifesto)
