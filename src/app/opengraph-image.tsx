import { ImageResponse } from 'next/og';
import { COMPANY } from '@/lib/constants';

export const runtime = 'edge';

export const alt = `${COMPANY.name} — ${COMPANY.tagline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          background: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #450a0a 100%)',
          padding: '60px 80px',
          position: 'relative',
        }}
      >
        {/* Background pattern overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(239, 68, 68, 0.2) 0%, transparent 50%)',
          }}
        />

        {/* Yellow accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #facc15, #eab308, #facc15)',
          }}
        />

        {/* Company name */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            {COMPANY.name}
          </div>

          <div
            style={{
              fontSize: 36,
              fontWeight: 500,
              background: 'linear-gradient(90deg, #facc15, #eab308)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {COMPANY.tagline}
          </div>

          {/* Trust indicators */}
          <div
            style={{
              display: 'flex',
              gap: '32px',
              marginTop: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: 24,
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              <span style={{ color: '#facc15' }}>★</span>
              5.0 Google Rating
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: 24,
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              <span style={{ color: '#facc15' }}>✓</span>
              Licensed & Insured
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: 24,
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              <span style={{ color: '#facc15' }}>✓</span>
              Free Estimates
            </div>
          </div>
        </div>

        {/* Phone number */}
        <div
          style={{
            position: 'absolute',
            top: '60px',
            right: '80px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px 28px',
            background: 'rgba(250, 204, 21, 0.2)',
            borderRadius: '12px',
            border: '1px solid rgba(250, 204, 21, 0.3)',
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: '#facc15',
            }}
          >
            {COMPANY.phone}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
