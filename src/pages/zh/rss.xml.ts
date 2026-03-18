import type { APIRoute } from "astro";
import { site } from "../../data/site";
import { getLogs } from "../../lib/content";

export const GET: APIRoute = async () => {
  const posts = await getLogs("zh");
  const items = posts
    .map(
      (post) => `
      <item>
        <title><![CDATA[${post.data.title}]]></title>
        <link>${site.url}/zh/logs/${post.data.translationKey}/</link>
        <guid>${site.url}/zh/logs/${post.data.translationKey}/</guid>
        <pubDate>${post.data.date.toUTCString()}</pubDate>
        <description><![CDATA[${post.data.description}]]></description>
      </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${site.title} (zh)</title>
    <link>${site.url}/zh/</link>
    <description>${site.description.zh}</description>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
