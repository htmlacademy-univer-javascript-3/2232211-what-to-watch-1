import { PropsWithChildren } from 'react';

type SpinnerProps = PropsWithChildren;

export default function Spinner({ children }: SpinnerProps) {
  return (
    <div>
      {children}
    </div>
  );
}
