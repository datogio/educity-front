import { MouseEventHandler, ReactNode } from 'react';
import { Times } from '../../components';

interface OverlayProps {
  onCloseClick: MouseEventHandler<HTMLOrSVGElement>;
  children: ReactNode;
}

const Overlay = (props: OverlayProps) => {
  return (
    <div className="fixed z-50 bottom-0 left-0 right-0 bg-green-600 top-[-40px] md:top-0 md:left-[-20px]">
      <div className="flex justify-end paddings">
        <Times onClick={props.onCloseClick} />
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Overlay;
