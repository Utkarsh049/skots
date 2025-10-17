'use client'
import useTradingViewWidget from '@/hooks/useTradingViewWidget';
import React, { memo } from 'react';
import { cn } from '@/lib/utils';

interface TradingViewWidgetProps {
  title?: string;
  scriptUrl: string;
  config: Record<string, unknown>;
  /** height in pixels (number) or any CSS height string (e.g. '50vh', '600px') */
  height?: number | string;
  className?: string;
}

const TradingViewWidget = ({title,scriptUrl,config,height=600,className}:TradingViewWidgetProps) => {
  const heightCss = typeof height === 'number' ? `${height}px` : height;
  const containerRef = useTradingViewWidget(scriptUrl, config, heightCss);



  return (
    <div className='w-full'>
      {title && <h2 className='text-2xl text-gray-100 mb-5'>{title}</h2>}
      <div
        className={cn('tradingview-widget-container w-full', className)}
        ref={containerRef}
        style={{ height: heightCss }}
      >
      <div className="tradingview-widget-container__widget" style={{ height: heightCss, width: "100%" }}></div>
    </div>
    </div>
  );
}

export default memo(TradingViewWidget);
