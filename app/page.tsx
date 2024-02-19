import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Yes"
    },
    {
      label: "No"
    }
  ],
  // choosing the inital image
  image: `${process.env.NEXT_PUBLIC_BASE_URL}/00.png`,
  // post_url tells the frame where to send the metadata, and in this case, what the id is
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/run?id=1`,
});

// Description of the frame, not on the frame
export const metadata: Metadata = {
  title: 'Do you trade onchain?',
  description: 'A frame asking you if you trade onchain',
  openGraph: {
    title: 'Do you trade onchain?',
    description: 'A frame asking you if you trade onchain',
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/0.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Do you trade onchain?</h1>
    </>
  );
}