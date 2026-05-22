export const dynamic = "force-dynamic";

import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { makeRouteHandler } = await import("@keystatic/next/route-handler");
  const { default: config } = await import("../../../../../keystatic.config");
  const { GET: handler } = makeRouteHandler({ config });
  return handler(request);
}

export async function POST(request: NextRequest) {
  const { makeRouteHandler } = await import("@keystatic/next/route-handler");
  const { default: config } = await import("../../../../../keystatic.config");
  const { POST: handler } = makeRouteHandler({ config });
  return handler(request);
}
