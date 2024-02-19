import { NextRequest, NextResponse } from 'next/server';


async function getResponse(req: NextRequest): Promise<NextResponse> {
const data = await req.json();
const id = data.untrustedData.buttonIndex;

  return new NextResponse(`<!DOCTYPE html><html><head>
    <title>restart</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_BASE_URL}/0.png" />
    <meta property="fc:frame:button:1" content="Bullish" />
    <meta property="fc:frame:button:2" content="Bearish" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/run?${id}" />
  </head></html>`);

  export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req);
  }

  export const dynamic = 'force-dynamic';