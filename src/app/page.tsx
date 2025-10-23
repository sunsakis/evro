import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="break-words tracking-tighter">
      {/* Header */}
      <header 
        className="py-7 px-4 sm:px-8 bg-hero bg-cover bg-top"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/assets/Evro-Logo-wordmark.svg" height={0} width={0} alt="Evro Logo" className="w-38 h-auto" />
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <button>
              <Link href="https://github.com/evro-finance" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-10 h-10 md:text-[#F5889B]" />
              </Link>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative z-1 bg-hero bg-cover bg-no-repeat bg-top px-2 sm:px-8 py-16 h-100 mt-[-64px]">
          <div>
            <h1 className="display-lg heading text-gray-900 mb-6 sm:mb-8 uppercase">
              AUTONOMOUS, <br/>
              OPEN SOURCE, 
              VALUE.
            </h1>
            
            <p className="tx-3xl font-thin">
              <b>EVRO</b> stands for <b>EVOLUTIONARY RESONATING ORGANISM</b>. 
              An open-source protocol that maintains synthetic value units through
              fully decentralized smart-contract mechanics. Built on Liquity V2 principles
              and deployed on Gnosis, it enables on-chain users to <b>CREATE,
              MANAGE AND BALANCE COLLATERALIZED VAULTS</b>, without issuers, custodians
              or intermediaries.
            </p>
            <br/>
            <button className="hover:-translate-y-2 transition-transform duration-300 bg-black text-[#F5889B] border border-1 p-4 tx-3xl heading w-full md:w-100 flex items-center justify-center uppercase">
              <b>GET ON EVRO</b>
              <ArrowRight className="w-6 h-6 ml-2" />
            </button>
          </div>
        </section>
        {/* Motivation Section */}
        <section className="relative z-2 bg-motivation bg-cover bg-no-repeat bg-center py-24 px-2 sm:px-8">
          <div className="md:grid md:grid-cols-2 gap-16 space-y-16">
            <div>
              <h2 className="text-5xl heading uppercase">
                EVRO EXISTS FOR BUILDERS, SAVERS, AND PROTOCOLS THAT RELY ON AUTONOMOUS LIQUIDITY.
              </h2>
            </div>
            <div>
                <p className="tx-3xl font-thin pb-8">
                  By aligning incentives among vault creators, liquidators, and integrators,
                  the system sustains value stability through transparent, trustless automation.
                </p>
                <p className="tx-3xl font-thin">
                  Decentralized design ensures that once deployed, the protocol operates independently.
                  EVRO is governed by code, not counterparties.
                </p>
              </div>
            </div>
        </section>
        {/* Stats Section */}
        <section className="relative z-3 bg-stats text-white py-16 px-2 md:py-24">
  <div className="mx-auto">
    <div className="md:grid md:grid-cols-3 gap-10 md:gap-12 md:px-28 justify-items-center">
      <div className="text-center mb-36 md:mb-0">
        <div className="display-sm heading my-6 uppercase">1.2M</div>
        <div className="tx-3xl heading uppercase">LOCKED IN CONTRACT</div>
      </div>
      <div className="text-center mb-36 md:mb-0">
        <div className="display-sm heading my-6 uppercase">8.7K</div>
        <div className="tx-3xl heading uppercase">OPERATIONS EXECUTED</div>
      </div>
      <div className="text-center">
        <div className="display-sm heading my-6 uppercase">75%</div>
        <div className="tx-3xl heading uppercase">COLLATERAL RATIO</div>
      </div>
    </div>
  </div>
</section>
        {/* Core Features */}
       <section className="relative z-4 bg-corefeatures bg-cover bg-no-repeat bg-center py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="display-lg heading text-center mb-16 uppercase">
      CORE FEATURES
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Stability Pools - Top Left */}
      <div className="bg-[#ECF2E8BF] p-12 md:pt-20 border">
        <h4 className="heading mb-4 uppercase">
          Stability Pools
        </h4>
        <p className="tx-3xl font-thin">
          Autonomous pools distribute collateral proceeds according to deterministic
          smart contract rules. No discretionary control or managed yield.
        </p>
      </div>

      {/* Multi-Collateral Mechanism - Top Right */}
      <div className="bg-[#ECF2E8BF] p-12 md:pt-20 border md:row-span-2 md:mt-16">
        <h4 className="heading mb-4 uppercase">
          Multi-Collateral Mechanism
        </h4>
        <p className="tx-3xl font-thin">
          Vaults automatically generate synthetic value units backed by digital collateral.
          All parameters are enforced on-chain and transparent to every participant.
        </p>
      </div>

      {/* Seamless Integration - Middle Left */}
      <div className="bg-[#ECF2E8BF] p-12 md:pb-20 border md:row-span-2 md:mb-36">
        <h4 className="heading mb-4 uppercase">
          Seamless Integration
        </h4>
        <p className="tx-3xl font-thin">
          Designed for composability — wallets, interfaces, and DeFi tools
          can interact with EVRO contracts directly through permissionless endpoints.
        </p>
      </div>

      {/* Immutable Protocol - Bottom Right */}
      <div className="bg-[#ECF2E8BF] p-12 md:pb-20 border">
        <h4 className="heading mb-4 uppercase">
          Immutable Protocol
        </h4>
        <p className="tx-3xl font-thin">
          EVRO's contracts operate without administrative control or upgrade authority. The
          immutability of the protocol is a foundational primitive that digital economies can
          rely on for predictable, censorship-resistant liquidity.
        </p>
      </div>
    </div>
  </div>
</section>

               <section className="relative bg-community bg-cover bg-no-repeat bg-center py-6">
          <div className="max-w-7xl mx-auto px-5">
            <div className="text-center">
              <h2 className="text-5xl heading mt-22 uppercase">
                EVRO IS COMMUNITY GOVERNED AND OPEN-SOURCE
              </h2>
              <br/><br/>
              <p className="tx-3xl font-medium">
                THE PROTOCOL OPERATES WITHOUT CENTRAL CUSTODY OR MANAGEMENT. ITS ONLY ROLE IS ALIGNING
                INCENTIVES AMONG USERS TO FOSTER A TRANSPARENT, SUSTAINABLE DEFI ECOSYSTEM.
              </p>
              <br/>
              <div className="flex justify-center">
                <button className="hover:-translate-y-2 transition-transform duration-300 bg-black text-white p-2 sm:p-4 tx-3xl heading w-full max-w-lg flex items-center justify-center uppercase">
                  <b>PARTICIPATE</b>
                  <ArrowRight className="w-8 h-8 ml-2" />
                </button>
              </div>
            </div>
            <br/>
            <div className="text-center">
              <i className="tx-lg font-medium">*Participation in governance does not involve offering, custodying or managing assets
                - it concerns the evolution of the code itself.
              </i>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-[#757BA3]">
        <Image src="/assets/img-logo-pattern.png" height={1920} width={400} alt="footer-connector" className="w-full h-auto" />
        <div className="text-center mx-auto px-2 py-8">
          <div className="">
              <p className="font-extralight tx-2xl text-gray-600">
                EVRO IS AN AUTONOMOUS SOFTWARE DEPLOYED ON PUBLIC BLOCKCHAINS. 
                IT DOES NOT ISSUE, HOLD OR REDEEM ASSETS AND IS NOT A FINANCIAL
                SERVICE OR PRODUCT. INTERACTIONS WITH THE PROTOCOL OCCUR DIRECTLY
                THROUGH SMART CONTRACTS AT THE USER'S INITIATIVE. NO ENTITY PROVIDES
                INVESTMENT ADVICE, CUSTODY or GUARANTEES OF VALUE STABILITY.
              </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
