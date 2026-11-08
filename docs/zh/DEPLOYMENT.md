# 部署

这篇讲怎样把网站放到网上。网站包括介绍站、组件陈列馆 Storybook 和所有演示页，它们一起上线。

注意，这和“把 UI 发布到 npm”是两回事。后者还没有做。

## 上线三步

```bash
pnpm install
pnpm check && pnpm test && pnpm e2e
pnpm run deploy
```

第一步安装依赖，第二步确认所有检查都通过，第三步打包并上传。

第一次上传时会打开浏览器，让你登录 Cloudflare 账号；之后就不用再登录了。

## 网址

网站地址是 https://ui.you-find.me。每次推送到 GitHub 的 `main` 分支，Cloudflare 也会自动构建并部署。

<details>
<summary>技术细节</summary>

站点是用 Void 部署的静态 Cloudflare Worker。配置在 `void.config.ts` 里；Void 会生成 Wrangler 配置，
所以仓库里没有 `wrangler.json`。

`pnpm build` 把整个站点写进 `dist/`：

| 路径          | 内容                                 |
| ------------- | ------------------------------------ |
| `/`           | 介绍站：项目介绍、实时预览和 `docs/` |
| `/zh/`        | 中文版介绍站                         |
| `/storybook/` | Storybook，每套 UI 的全部组件        |
| `/<ui>/`      | 该 UI 的 demo                        |

介绍站最先构建，因为它会清空 `dist/`。随后 Storybook 构建到 `dist/storybook/`，各 demo 构建到
`dist/<ui>/`，两者都用相对资源路径。其余路径回退到介绍站，由它渲染 `/docs/` 和 `/zh/docs/` 下的文档，
其他路径显示 404 页。

要用 `pnpm run deploy`，不能写 `pnpm deploy`（那是 pnpm 自带的命令）。它执行 `void deploy --platform cloudflare`：先跑 `pnpm run build`，再把 `dist/` 作为 Worker
的静态资源上传。Worker 名为 `my-ui`，只挂 `cloudflare.routes` 里的自定义域名，`workers.dev` 和预览地址都关闭。
Workers Builds 连接 `vesper-shop/my-ui`，先跑 `pnpm run build`，再跑 `pnpm exec void deploy --platform cloudflare`。

</details>
