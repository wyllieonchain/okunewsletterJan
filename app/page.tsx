import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Multichain Volume"
    },
    {
      label: "Layer1/Layer2"
    },
    {
      label: "Protocol Efficiency"
    }
  ],
  // choosing the inital image
  image: `${process.env.NEXT_PUBLIC_BASE_URL}/ujan0.png`,
  // post_url tells the frame where to send the metadata, and in this case, what the id is
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/run?id=1`,
});

// Description of the frame, not on the frame
export const metadata: Metadata = {
  title: 'Uniswap Monthly Financial Report',
  description: 'A frame displaying Uniswap report data',
  openGraph: {
    title: 'Uniswap Monthly Financial Report',
    description: 'A frame displaying Uniswap report data',
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/ujan0.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <a href= "https://www.newsletter.oku.trade"> Newsletter</a>
    </>
  );
}