import React from 'react'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import TradingViewWidget from '@/components/TradingViewWidget'
import { MARKET_DATA_WIDGET_CONFIG, TOP_STORIES_WIDGET_CONFIG } from '@/lib/constants'
const Home = () => {
  const scriptUrl=`https://s3.tradingview.com/external-embedding/embed-widget-`
  return (
    <>
    <Header />
    <div className='sm:flex-row min-h-screen'>

      <section className='mt-4'> 
        <TradingViewWidget
        scriptUrl={`${scriptUrl}ticker-tape.js`}
        config={MARKET_DATA_WIDGET_CONFIG} //make its custom config
        />
      </section>
      
      <section className='sm:grid grid-cols-3 w-full gap-8'>
        <div className='mt-4 col-span-1'>
          <TradingViewWidget
          title='Market Overview'
          scriptUrl={`${scriptUrl}market-overview.js`}
          config={MARKET_DATA_WIDGET_CONFIG}
          height={600}
          />

          {/* <TradingViewWidget
          title='Market Overview'
          scriptUrl='https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
          config={MARKET_DATA_WIDGET_CONFIG}
          height={600}
          /> */}

        </div>
        <div className='col-span-2 mt-4'>
          <TradingViewWidget
          title='Stock Heatmap'
          scriptUrl={`${scriptUrl}stock-heatmap.js`}
          config={MARKET_DATA_WIDGET_CONFIG}
          height={600}
          />
        </div>
      </section>
      <section className='sm:grid grid-cols-2 w-full gap-8'>
        <div className='mt-4 col-span-1'>
          <TradingViewWidget
          scriptUrl={`${scriptUrl}market-quotes.js`}
          config={MARKET_DATA_WIDGET_CONFIG}
          height={600}
          />
        </div>
        <div className='col-span-1 mt-4'>
          <TradingViewWidget
          scriptUrl={`${scriptUrl}timeline.js`}
          config={TOP_STORIES_WIDGET_CONFIG}
          height={600}
          />

        </div>
      </section>
    </div>
    </>
  )
}

export default Home