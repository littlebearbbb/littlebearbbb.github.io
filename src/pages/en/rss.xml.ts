import type { APIRoute } from "astro";
import { site } from "../../data/site";
import { getLogs } from "../../lib/content";

export const GET: APIRoute = async () => {
  const posts = await getLogs("en");
  const items = posts
    .map(
      (post) => `
      <item>
        <title><![CDATA[${post.data.title}]]></title>
        <link>${site.url}/en/logs/${post.data.translationKey}/</link>
        <guid>${site.url}/en/logs/${post.data.translationKey}/</guid>
        <pubDate>${post.data.date.toUTCString()}</pubDate>
        <description><![CDATA[${post.data.description}]]></description>
      </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${site.title} (en)</title>
    <link>${site.url}/en/</link>
    <description>${site.description.en}</description>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
