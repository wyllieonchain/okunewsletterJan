import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Bullish"
    },
    {
      label: "Bearish"
    }
  ],
  // choosing the inital image
  image: `${process.env.NEXT_PUBLIC_BASE_URL}/0.png`,
  // post_url tells the frame where to send the metadata, and in this case, what the id is
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api?id=1`,
});

// Description of the frame, not on the frame
export const metadata: Metadata = {
  title: 'Bullish or Bearish',
  description: 'A frame asking you about the market',
  openGraph: {
    title: 'Bullish or Bearish',
    description: 'A frame asking you about the market',
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/0.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Bullish or Bearish</h1>
    </>
  );
}
