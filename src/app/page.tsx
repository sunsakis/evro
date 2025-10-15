export default function Home() {
  return (
    <div className="min-h-screen bg-white px-8">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-4xl font-black tracking-tight">EVRO</div>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors">
              APP
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="max-w-5xl">
            <h1 className="text-2xl sm:text-5xl font-black tracking-tight text-gray-900 mb-6 sm:mb-8 leading-tight uppercase">
              THE TRUSTED FOUNDATION OF OPEN EURO FINANCE.
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 mb-10 max-w-3xl leading-relaxed">
              Evro Finance is an open liquidity protocol built on Liquity V2 that lets DeFi users borrow a euro 
              stablecoin using crypto as collateral. Built on Gnosis, Evro provides access to decentralized euro 
              liquidity by combining stability, yield, and transparency for a new era of onchain finance.
            </p>
            
            <button className="bg-black text-white px-8 p-4 text-sm font-medium hover:bg-gray-800 transition-colors inline-flex items-center">
              LAUNCH APP
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl grid md:grid-cols-2 gap-6 md:gap-8 mx-auto">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 leading-normal">
                EVRO IS BUILT FOR THE BUILDERS, THE SAVERS, AND THE STAKERS WHO SEE DECENTRALIZATION 
                AS MORE THAN A FEATURE. IT'S A MOVEMENT TOWARD LASTING ECONOMIC INDEPENDENCE.
              </h2>
              
              <div className="space-y-5 text-sm text-gray-600 leading-loose">
                <p>
                  DeFi gave the world permissionless access to money, yet euro liquidity 
                  remains in the hands of institutions. Evro challenges that imbalance.
                </p>
                
                <p>
                  We believe financial sovereignty starts with open infrastructure. By 
                  unlocking euro liquidity on Gnosis, Evro turns dormant capital into active 
                  stability, creating a system where people, not banks, shape the value of 
                  their money.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">25%</div>
                <div className="text-xs uppercase text-gray-600 leading-tight">APY</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">1.2M</div>
                <div className="text-xs uppercase text-gray-600 leading-tight">TVL</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">8.7K</div>
                <div className="text-xs uppercase text-gray-600 leading-tight">TX COUNT</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">75%</div>
                <div className="text-xs uppercase text-gray-600 leading-tight">COLLATERAL</div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-16 leading-normal uppercase">
              CORE FEATURES
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 md:p-10 border -ml-6 mr-6 md:ml-0 md:mr-0 mt-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-normal">
                  Stability Pools
                </h3>
                <p className="text-sm text-gray-600">
                  Earn sustainable, recurring yield backed by onchain collateral. 
                  Stability pools distribute interest and liquidation rewards in a transparent, decentralized way.
                </p>
              </div>
          
              <div className="bg-white p-8 md:p-10 border ml-6 -mr-6 md:ml-0 md:mr-0 mt-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-normal">
                  Collateralized Euro Borrowing
                </h3>
                <p className="text-sm text-gray-600">
                  Borrow euro-pegged stablecoins backed by ETH, BTC, 
                  and Gnosis native assets, like GNO and staked GNO, fully
                  on-chain and non-custodial.
                </p>
              </div>
              
              <div className="bg-white p-8 md:p-10 border -ml-6 mr-6 md:ml-0 md:mr-0 mt-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-normal">
                  Sustainable Yield Design
                </h3>
                <p className="text-sm text-gray-600">
                  Evro's yield design ensures rewards remain stable
                  and inflation-resistant, helping users grow their
                  assets reliably over time.
                </p>
              </div>
              
              <div className="bg-white p-8 md:p-10 border ml-6 -mr-6 md:ml-0 md:mr-0 mt-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-normal">
                  Seamless Integration
                </h3>
                <p className="text-sm text-gray-600">
                  Easily Connect with Gnosis Safe, wallets and DeFi tools 
                  to manage liquidity and earn yield without friction. Hold and spend using Gnosis Pay.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-12">
          <div className="max-w-7xl mx-auto px-5">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 leading-normal uppercase">
                EVRO IS COMMUNITY-DRIVEN AND OPEN-SOURCE. BY ALIGNING 
                INCENTIVES AMONG LIQUIDITY PROVIDERS, BORROWERS, AND 
                STABLECOIN USERS, EVRO FOSTERS A TRANSPARENT, 
                SUSTAINABLE EURO DEFI ECOSYSTEM.
              </h2>
              <br/>
              <div className="text-center">
              <button className="bg-black text-white px-8 py-4 text-sm font-medium hover:bg-gray-800 transition-colors">
                JOIN THE COMMUNITY
              </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-gray-600">
              ©2025 Evro Finance. <br/>All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              
              <a 
                href="/docs" 
                className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Docs
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}