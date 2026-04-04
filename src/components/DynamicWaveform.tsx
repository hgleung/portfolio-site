'use client';

import dynamic from 'next/dynamic';

const WaveformImpl = dynamic(() => import('./Waveform'), { ssr: false });

export default function Waveform() {
  return <WaveformImpl />;
}
