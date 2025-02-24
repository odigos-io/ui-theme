import { keyframes } from 'styled-components'

export const slide = {
  in: {
    left: keyframes`
      from { transform: translateX(-100%); }
      to { transform: translateX(0); }
    `,
    right: keyframes`
      from { transform: translateX(100%); }
      to { transform: translateX(0); }
    `,
    top: keyframes`
      from { transform: translateY(-100%); }
      to { transform: translateY(0); }
    `,
    bottom: keyframes`
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    `,
    center: keyframes`
      from { transform: translate(-50%, 100%); }
      to { transform: translate(-50%, -50%); }
    `,
  },
  out: {
    left: keyframes`
      from { transform: translateX(0); }
      to { transform: translateX(-100%); }
    `,
    right: keyframes`
      from { transform: translateX(0); }
      to { transform: translateX(100%); }
    `,
    top: keyframes`
      from { transform: translateY(0); }
      to { transform: translateY(-100%); }
    `,
    bottom: keyframes`
      from { transform: translateY(0); }
      to { transform: translateY(100%); }
    `,
    center: keyframes`
      from { transform: translate(-50%, -50%); }
      to { transform: translate(-50%, 100%); }
    `,
  },
}

export const progress = {
  in: keyframes`
    from { width: 0%; }
    to { width: 100%; }
  `,
  out: keyframes`
    from { width: 100%; }
    to { width: 0%; }
  `,
}

export const ping = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
`

export const shimmer = keyframes<{ $width: string }>`
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
`
