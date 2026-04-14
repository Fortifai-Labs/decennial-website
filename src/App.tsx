import {
  Navbar,
  Hero,
  LogoCloud,
  Features,
  Stats,
  Timeline,
  Footer,
  Divider,
  Team,
  CTA,
} from './components';
import { Building, CircleDollarSign, Handshake} from 'lucide-react'
import { Contact } from './components/Contact';
import DecennialLogo from './assets/Logos/Decennial_White_Horizontal.png';
import DecennialNegativeLogo from './assets/Logos/Decennial_Negative_Logo.png';
// Headshots — existing
import DavidPavlik from './assets/Headshots/David_Pavlik.png';
import JohnKrappman from './assets/Headshots/John_Krappman.png';
import PaulRambo from './assets/Headshots/Paul_Rambo.png';
import ZachPena from './assets/Headshots/Zach_Pena.png';
// Headshots — to be added as camelCase firstLast.png
import adamPleasant from './assets/Headshots/adamPleasant.png';
import ajKrappman from './assets/Headshots/ajKrappman.png';
import angelaArriaga from './assets/Headshots/angelaArriaga.png';
import angelaDuncan from './assets/Headshots/angelaDuncan.png';
import audreySimpson from './assets/Headshots/audreySimpson.png';
import benKroll from './assets/Headshots/benKroll.png';
import carterBarczak from './assets/Headshots/carterBarczak.png';
import chaseCook from './assets/Headshots/chaseCook.png';
import drewWorkheiser from './assets/Headshots/drewWorkheiser.png';
import elizabethCarter from './assets/Headshots/elizabethCarter.png';
import ethanSummers from './assets/Headshots/ethanSummers.png';
import joeKreeger from './assets/Headshots/joeKreeger.png';
import johnKellam from './assets/Headshots/johnKellam.png';
import kaitlynLeahy from './assets/Headshots/kaitlynLeahy.png';
import kevinKennedy from './assets/Headshots/kevinKennedy.png';
import kostaHontos from './assets/Headshots/kostaHontos.png';
import lukeLyons from './assets/Headshots/lukeLyons.png';
import malcolmWeems from './assets/Headshots/malcolmWeems.png';
import markPruitt from './assets/Headshots/markPruitt.png';
import mattPowers from './assets/Headshots/mattPowers.png';
import nateDziwulski from './assets/Headshots/nateDziwulski.png';
import owenMcCarthy from './assets/Headshots/owenMcCarthy.png';
import rebeccaRose from './assets/Headshots/rebeccaRose.png';
import robCumbelich from './assets/Headshots/robCumbelich.png';
import scottGoodman from './assets/Headshots/scottGoodman.png';
import scottHagood from './assets/Headshots/scottHagood.png';
import tateFerguson from './assets/Headshots/tateFerguson.png';
import williamCarter from './assets/Headshots/williamCarter.png';
import willWebb from './assets/Headshots/willWebb.png';
import { AnimatedTimeline } from './components/AnimatedTimeline';
import { DecennialHeroImage } from './components/DecennialHeroImage';
import GlobalReachSection from './components/GlobalReachSection';
import FultonMarketDistrict from './assets/Other/FultonMarketDistrict.jpg';
import DigitalCrossroads from './assets/Other/DigitalCrossroads.jpg';
import IndustrialAgCropProduction from './assets/Other/IndustrialAgCropProduction.png';
import PerpetualGrid from './assets/Other/PerpetualGrid.png'
import Datacenter1 from './assets/Other/Datacenter1.jpg';
import Datacenter2 from './assets/Other/Datacenter2.jpg';
import Datacenter3 from './assets/Other/Datacenter3.jpg';
import LakeviewGreen from './assets/Other/LakeviewGreen.jpg';
import LakeviewGreen1 from './assets/Other/LakeviewGreen1.jpg';
import Soli1 from './assets/Other/Soli1.png';
import Soli2 from './assets/Other/Soli2.jpg';
import Soli3 from './assets/Other/Soli3.jpg';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar
        logo={<img src={DecennialLogo} alt="Decennial Group" className="h-16 w-auto" />}
        logoText=''
        textColor='text-white'
        links={[
          { label: 'Platform', href: '#platform' },
          { label: 'Our Story', href: '#journey' },
          { label: 'Global Reach', href: '#global' },
          { label: 'Leadership', href: '#team' },
          { label: 'Contact', href: '#contact' },
        ]}
        ctaText="Get Started"
        ctaHref="#contact"
        sticky={true}
        bgColor="bg-[var(--decennial-primary)]"
      />

      {/* Hero Section */}
      <section>
        <Hero
          badge=''
          variant="split"
          primaryHref='#contact'
          title="Building the Infrastructure of Tomorrow"
          textColor='text-white'
          subtitle="Decennial Group is a multi-strategy investment management and development firm solving the largest challenges at the center of energy, critical infrastructure, and digital real estate."
          subtitleColor='text-white'
          bgColor='bg-[var(--decennial-primary)]'
          secondaryCta=''
          image={
            <DecennialHeroImage
              images={[FultonMarketDistrict, DigitalCrossroads, Soli1, Datacenter1, LakeviewGreen, Soli2, Datacenter2, LakeviewGreen1, Soli3, Datacenter3]}
              rotateImages={true}
              interval={5000}
              strokeColor="var(--decennial-primary)"
              strokeWidth={5}
            />
          }
        />
      </section>

      <Divider spacing="lg" />

      {/* Platform - Three Pillars */}
      <section id="platform">
        <Features
          title="Our Integrated Platform"
          subtitle="Three complementary pillars delivering comprehensive digital infrastructure solutions"
          cols={3}
          gap="lg"
          variant="cards"
          cardHover={true}
          features={[
            {
              title: 'Decennial Development',
              description: 'In-house real estate development capabilities spanning site due diligence, land entitlement, construction management, and turnkey delivery for mission-critical facilities.',
              icon: <Building />,
            },
            {
              title: 'Decennial Capital',
              description: 'Full-stack capital management via discretionary commingled funds, separately managed accounts, and joint ventures optimizing structure, returns, and execution certainty.',
              icon: <CircleDollarSign />,
            },
            {
              title: 'Tactical Operations',
              description: 'Differentiated critical services in data, energy, and supply chain through Perpetual Grid and Empirix Partners—converting cost centers into profit centers.',
              icon: <Handshake />,
            },
          ]}
        />
      </section>

      {/* Stats */}
      <Stats
        title="Proven Performance"
        subtitle="Delivering consistent value creation across multiple economic cycles with zero investor defaults"
        variant="simple"
        cols={4}
        stats={[
          { value: '$500M+', label: 'Deployed Capital' },
          { value: '$702M', label: 'Current Portfolio Value' },
          { value: '$2.8B', label: 'Development Pipeline' },
          { value: '57%', label: 'Value Appreciation' },
        ]}
        valueColor='text-[var(--decennial-secondary)]'
      />

      {/* Timeline */}
      <section id="journey">
        <AnimatedTimeline
          title="Our Journey"
          subtitle="From foundation to digital infrastructure leadership"
          bgColor="bg-[var(--decennial-primary)]"
          textColor='text-white'
          items={[
            {
              date: '2019',
              title: 'Foundation',
              description: 'Decennial Group launched as a multi-strategy investment management and development firm designed to solve complex challenges at the intersection of energy, critical infrastructure, and real estate. Co-founders Dave Pavlik and John Krappman brought together complementary expertise—Pavlik\'s 15+ years in energy infrastructure development and Krappman\'s 35+ years in real estate investment—creating an integrated platform capable of identifying massive market opportunities and executing sophisticated solutions that traditional developers couldn\'t deliver.',
              image: FultonMarketDistrict,
            },
            {
              date: '2020',
              title:'First Proof of Concept',
              description: 'Decennial became one of the first investment managers to achieve $100 million in assets under management in qualified opportunity zone investments, demonstrating early validation of their five-step process. The team identified unprecedented tax advantages and community development potential before widespread market adoption, developed specialized legal and tax expertise, and structured innovative capital solutions that attracted patient capital aligned with long-term hold requirements—establishing their reputation for identifying transformational opportunities ahead of the broader market.',
              image: LakeviewGreen,
            },
            {
              date: '2021',
              title: 'Entry into Digital Infrastructure',
              description: 'Decennial acquired the Digital Crossroads campus in July through a joint venture with Principal Real Estate Investors, purchasing the asset when it was mid-development and less than 1% occupied with significant operational inefficiencies. This flagship acquisition marked their entry into mission-critical digital infrastructure and established the foundation for their data center expertise. Simultaneously, Decennial became the largest investor-developer of controlled environment agriculture facilities in the United States through their Soli program, with over 250,000 square feet of specialized growing operations across multiple markets.',
              image: DigitalCrossroads,
            },
            {
              date: '2022',
              title: 'Building Tactical Capabilities',
              description: 'Decennial established Perpetual Grid as their dedicated energy infrastructure and utility solutions company, led by Tommy Greer with 37 years of experience at Insight Sourcing Group, Accenture, and GE Commercial Finance. This tactical operations company specializes in power procurement, interconnection management, and regulatory navigation specifically for data center applications—providing competitive advantages in power-constrained markets that would become increasingly critical as AI demand strained utility infrastructure.',
              image: PerpetualGrid,
            },
            {
              date: '2023',
              title: 'Strategic Pivot',
              description: 'In a defining year, Decennial made the deliberate decision to "burn the boats" and focus entirely on digital infrastructure, recognizing this sector as an irrefutable megatrend capable of absorbing all their ambitions and capabilities. They established Empirix Partners as their mission-critical supply chain specialist led by Zachary Peña, identified CoreWeave as the "hyperscaler of tomorrow" when most operators didn\'t understand what a neocloud was, and achieved stabilized occupancy at Digital Crossroads in just 22 months—attracting world-class customers including CoreWeave, Sony, and Cloudflare while generating $337.6 million in estimated value from $218.5 million invested.',
              image: Datacenter1,
            },
            {
              date: '2024',
              title: 'Scaling the Platform',
              description: 'Decennial\'s CoreWeave relationship evolved into a $2.3 billion development program, validating their early-mover strategy in AI infrastructure. The platform expanded to 43 professionals supported by 200+ employees through joint ventures including their global delivery partnership with DECI, providing coverage across 15+ countries. Their Tactical Operations Group formalized as an integrated service platform, converting traditional cost centers into profit centers while enhancing execution capabilities across the development lifecycle.',
              image: Datacenter3,
            },
            {
              date: '2025',
              title: 'Industry Leadership',
              description: 'Decennial\'s platform has scaled to $500 million in deployed capital with a current estimated portfolio value of $702 million—representing 57% appreciation with zero investor or lender defaults across all investment periods. Their immediate development pipeline represents $2.8 billion in project costs with an additional 2GW of power capacity in due diligence, and their total contracted pipeline exceeds $3 billion in projected revenue. The company continues expanding capabilities through planned tactical operations launches including DECI USA, immersion cooling technologies, and a capital advisory group.',
              image: Datacenter2,
            },
          ]}
        />
      </section>

      <section id="global">
        <GlobalReachSection />
      </section>

      {/* Leadership Team */}
      <section id="team">
        {/* Decennial Group */}
        <Team
          title="Decennial Group"
          subtitle="Multi-strategy investment management and development leadership"
          cols={4}
          variant="cards"
          showSocial={true}
          showBio={true}
          textColor='text-white'
          cardBgColor='bg-[var(--decennial-primary)]'
          nameColor='!text-white'
          roleColor='text-[var(--decennial-secondary)]'
          bioColor='text-white'
          socialBgColor='bg-white/10'
          socialTextColor='text-[var(--decennial-secondary)]'
          socialHoverBgColor='hover:bg-[var(--decennial-secondary)]'
          socialHoverTextColor='hover:text-[var(--decennial-primary)]'
          members={[
            {
              name: 'Adam Pleasant',
              role: 'AI Chief',
              bio: 'Drives AI strategy and automation across enterprise operations, building intelligent systems for infrastructure firms.',
              avatar: adamPleasant,
              social: { linkedin: 'https://www.linkedin.com/in/adampleasant/' },
            },
            {
              name: 'AJ Krappman',
              role: 'Associate, Marketing',
              bio: 'Supports brand development and marketing initiatives, creating compelling narratives for infrastructure investment audiences.',
              avatar: ajKrappman,
              social: { linkedin: 'https://www.linkedin.com/in/aj-krappman/' },
            },
            {
              name: 'Angela Duncan',
              role: 'Controller',
              bio: 'Oversees financial reporting and accounting operations, ensuring accuracy across complex investment fund structures.',
              avatar: angelaDuncan,
              social: { linkedin: 'https://www.linkedin.com/in/angela-duncan-cpa/' },
            },
            {
              name: 'Audrey Simpson',
              role: 'Vice President, Asset Management',
              bio: 'Leads asset management strategy maximizing portfolio value across digital infrastructure and real estate investments.',
              avatar: audreySimpson,
              social: { linkedin: 'https://www.linkedin.com/in/audrey-simpson/' },
            },
            {
              name: 'David Pavlik',
              role: 'Managing Partner & Co-Founder',
              bio: '15+ years energy infrastructure experience. Structured over $2.0B in renewable energy and infrastructure projects.',
              avatar: DavidPavlik,
              social: { linkedin: 'https://www.linkedin.com/in/david-pavlik/' },
            },
            {
              name: 'Elizabeth Carter',
              role: 'Intern',
              bio: 'Supports operational and research initiatives, gaining hands-on experience in infrastructure investment management.',
              avatar: elizabethCarter,
              social: { linkedin: 'https://www.linkedin.com/in/elizabeth-carter/' },
            },
            {
              name: 'Joe Kreeger',
              role: 'Partner, Operations & General Counsel',
              bio: 'Manages legal operations and corporate governance, bringing extensive counsel experience to infrastructure transactions.',
              avatar: joeKreeger,
              social: { linkedin: 'https://www.linkedin.com/in/joe-kreeger/' },
            },
            {
              name: 'John Kellam',
              role: 'Intern',
              bio: 'Contributes to deal analysis and project research, developing expertise in critical infrastructure development.',
              avatar: johnKellam,
              social: { linkedin: 'https://www.linkedin.com/in/john-kellam/' },
            },
            {
              name: 'John Krappman',
              role: 'Managing Partner & Co-Founder',
              bio: '35+ years real estate investment and development experience. Successfully developed over $2B of commercial real estate.',
              avatar: JohnKrappman,
              social: { linkedin: 'https://www.linkedin.com/in/john-krappman/' },
            },
            {
              name: 'Kevin Kennedy',
              role: 'Project Lead, Project 3Gigs',
              bio: 'Leads the 3Gigs data center development initiative, coordinating multi-disciplinary teams for mission-critical delivery.',
              avatar: kevinKennedy,
              social: { linkedin: 'https://www.linkedin.com/in/kevin-kennedy/' },
            },
            {
              name: 'Kosta Hontos',
              role: 'Director of Information Technology',
              bio: 'Directs IT infrastructure and cybersecurity strategy, enabling secure digital operations across the enterprise.',
              avatar: kostaHontos,
              social: { linkedin: 'https://www.linkedin.com/in/kosta-hontos/' },
            },
            {
              name: 'Malcolm Weems',
              role: 'Partner, Community Involvement',
              bio: 'Leads community engagement and stakeholder relations, building partnerships that strengthen infrastructure project outcomes.',
              avatar: malcolmWeems,
              social: { linkedin: 'https://www.linkedin.com/in/malcolm-weems/' },
            },
            {
              name: 'Mark Pruitt',
              role: 'Partner, Energy',
              bio: 'Drives energy strategy and power procurement, leveraging deep utility industry relationships for competitive advantage.',
              avatar: markPruitt,
              social: { linkedin: 'https://www.linkedin.com/in/mark-pruitt/' },
            },
            {
              name: 'Owen McCarthy',
              role: 'Partner, Investment Strategy',
              bio: 'Shapes investment thesis and portfolio construction, identifying high-conviction opportunities in digital infrastructure.',
              avatar: owenMcCarthy,
              social: { linkedin: 'https://www.linkedin.com/in/owen-mccarthy/' },
            },
            {
              name: 'Paul Rambo',
              role: 'Partner, Delivery',
              bio: '10+ years data center industry experience. Former Critical Facilities Manager at T5 Data Centers and Equinix.',
              avatar: PaulRambo,
              social: { linkedin: 'https://www.linkedin.com/in/paul-rambo/' },
            },
            {
              name: 'Scott Goodman',
              role: 'Co-Founder & Advisor',
              bio: 'Provides strategic guidance as co-founder, bringing decades of entrepreneurial and investment advisory experience.',
              avatar: scottGoodman,
              social: { linkedin: 'https://www.linkedin.com/in/scott-goodman/' },
            },
            {
              name: 'William Carter',
              role: 'Intern',
              bio: 'Assists with financial modeling and due diligence, building foundational skills in infrastructure investment analysis.',
              avatar: williamCarter,
              social: { linkedin: 'https://www.linkedin.com/in/william-carter/' },
            },
          ]}
        />

        {/* Empirix Partners */}
        <Team
          title="Empirix Partners"
          subtitle="Mission-critical supply chain solutions for digital infrastructure"
          cols={4}
          variant="cards"
          showSocial={true}
          showBio={true}
          bgColor='bg-[#F7FBFF]'
          textColor='text-[#013823]'
          cardBgColor='bg-[#013823]'
          nameColor='!text-[#F7FBFF]'
          roleColor='text-[#94d4b6]'
          bioColor='text-[#D3D3D3]'
          socialBgColor='bg-white/10'
          socialTextColor='text-[#94d4b6]'
          socialHoverBgColor='hover:bg-[#94d4b6]'
          socialHoverTextColor='hover:text-[#013823]'
          avatarRingColor='bg-[#94d4b6]'
          members={[
            {
              name: 'Carter Barczak',
              role: 'Associate',
              bio: 'Supports procurement operations and vendor management for mission-critical data center supply chain programs.',
              avatar: carterBarczak,
              social: { linkedin: 'https://www.linkedin.com/in/carter-barczak/' },
            },
            {
              name: 'Chase Cook',
              role: 'Vice President',
              bio: 'Leads strategic sourcing and client engagements, delivering cost-effective supply chain solutions for data centers.',
              avatar: chaseCook,
              social: { linkedin: 'https://www.linkedin.com/in/chase-cook/' },
            },
            {
              name: 'Ethan Summers',
              role: 'Chief of Staff - Empirix Partners & Perpetual Grid',
              bio: 'Drives cross-functional operations for both Empirix and Perpetual Grid, aligning strategy with tactical execution.',
              avatar: ethanSummers,
              social: { linkedin: 'https://www.linkedin.com/in/ethan-summers/' },
            },
            {
              name: 'Luke Lyons',
              role: 'Senior Analyst',
              bio: 'Performs data-driven supply chain analysis and market research supporting strategic procurement decisions at scale.',
              avatar: lukeLyons,
              social: { linkedin: 'https://www.linkedin.com/in/luke-lyons/' },
            },
            {
              name: 'Nate Dziwulski',
              role: 'Senior Analyst',
              bio: 'Analyzes supply chain data and vendor performance metrics, enabling informed sourcing decisions for infrastructure.',
              avatar: nateDziwulski,
              social: { linkedin: 'https://www.linkedin.com/in/nate-dziwulski/' },
            },
            {
              name: 'Rebecca Rose',
              role: 'Manager',
              bio: 'Manages procurement workflows and team operations, ensuring seamless delivery of critical supply chain services.',
              avatar: rebeccaRose,
              social: { linkedin: 'https://www.linkedin.com/in/rebecca-rose/' },
            },
            {
              name: 'Rob Cumbelich',
              role: 'Senior Associate',
              bio: 'Executes strategic sourcing initiatives and vendor negotiations for large-scale data center construction projects.',
              avatar: robCumbelich,
              social: { linkedin: 'https://www.linkedin.com/in/rob-cumbelich/' },
            },
            {
              name: 'Scott Hagood',
              role: 'Senior Vice President',
              bio: 'Oversees enterprise client relationships and business development, expanding Empirix supply chain service offerings.',
              avatar: scottHagood,
              social: { linkedin: 'https://www.linkedin.com/in/scott-hagood/' },
            },
            {
              name: 'Tate Ferguson',
              role: 'Associate',
              bio: 'Supports procurement analysis and operational projects, contributing to supply chain optimization across client programs.',
              avatar: tateFerguson,
              social: { linkedin: 'https://www.linkedin.com/in/tate-ferguson/' },
            },
            {
              name: 'Zachary Pena',
              role: 'CEO - Empirix Partners & Perpetual Grid',
              bio: '12+ years supply chain experience. Former Senior Director at NTT and Construction Supply Chain Manager at Microsoft.',
              avatar: ZachPena,
              social: { linkedin: 'https://www.linkedin.com/in/zachary-pena/' },
            },
          ]}
        />

        {/* Perpetual Grid */}
        <Team
          title="Perpetual Grid"
          subtitle="Energy infrastructure and utility solutions for data centers"
          cols={4}
          variant="cards"
          showSocial={true}
          showBio={true}
          bgColor='bg-[#F8F8F8]'
          textColor='text-[#1F035B]'
          cardBgColor='bg-[#1F035B]'
          nameColor='!text-white'
          roleColor='text-[#9883E5]'
          bioColor='text-gray-300'
          socialBgColor='bg-white/10'
          socialTextColor='text-[#9883E5]'
          socialHoverBgColor='hover:bg-[#9883E5]'
          socialHoverTextColor='hover:text-[#1F035B]'
          avatarRingColor='bg-[#9883E5]'
          members={[
            {
              name: 'Kaitlyn Leahy',
              role: 'Associate',
              bio: 'Supports energy procurement and regulatory analysis, helping navigate complex utility landscapes for infrastructure.',
              avatar: kaitlynLeahy,
              social: { linkedin: 'https://www.linkedin.com/in/kaitlyn-leahy/' },
            },
            {
              name: 'Will Webb',
              role: 'Vice President',
              bio: 'Leads power procurement strategy and utility negotiations, securing competitive energy solutions for data centers.',
              avatar: willWebb,
              social: { linkedin: 'https://www.linkedin.com/in/will-webb/' },
            },
          ]}
        />

        {/* DX Management */}
        <Team
          title="DX Management"
          subtitle="Digital infrastructure management services"
          cols={4}
          variant="cards"
          showSocial={true}
          showBio={true}
          textColor='text-white'
          cardBgColor='bg-[var(--decennial-primary)]'
          nameColor='!text-white'
          roleColor='text-[var(--decennial-secondary)]'
          bioColor='text-white'
          socialBgColor='bg-white/10'
          socialTextColor='text-[var(--decennial-secondary)]'
          socialHoverBgColor='hover:bg-[var(--decennial-secondary)]'
          socialHoverTextColor='hover:text-[var(--decennial-primary)]'
          members={[
            {
              name: 'Angela Arriaga',
              role: 'Associate, Finance',
              bio: 'Manages financial operations and reporting for DX Management, supporting infrastructure asset performance tracking.',
              avatar: angelaArriaga,
              social: { linkedin: 'https://www.linkedin.com/in/angela-arriaga/' },
            },
          ]}
        />

        {/* Trillium */}
        <Team
          title="Trillium"
          subtitle="Strategic capital advisory and principal investment"
          cols={4}
          variant="cards"
          showSocial={true}
          showBio={true}
          bgColor='bg-[#f0f4f8]'
          textColor='text-[#2a3d5c]'
          cardBgColor='bg-[#2a3d5c]'
          nameColor='!text-white'
          roleColor='text-[#4eace9]'
          bioColor='text-gray-300'
          socialBgColor='bg-white/10'
          socialTextColor='text-[#4eace9]'
          socialHoverBgColor='hover:bg-[#4eace9]'
          socialHoverTextColor='hover:text-[#2a3d5c]'
          avatarRingColor='bg-[#4eace9]'
          members={[
            {
              name: 'Ben Kroll',
              role: 'Partner',
              bio: 'Leads principal investments and strategic advisory engagements, structuring capital solutions for infrastructure assets.',
              avatar: benKroll,
              social: { linkedin: 'https://www.linkedin.com/in/ben-kroll/' },
            },
            {
              name: 'Drew Workheiser',
              role: 'Principal',
              bio: 'Drives deal origination and execution, sourcing high-conviction investment opportunities in digital infrastructure.',
              avatar: drewWorkheiser,
              social: { linkedin: 'https://www.linkedin.com/in/drew-workheiser/' },
            },
            {
              name: 'Matt Powers',
              role: 'Associate',
              bio: 'Supports financial analysis and transaction diligence, contributing to underwriting across Trillium investment mandates.',
              avatar: mattPowers,
              social: { linkedin: 'https://www.linkedin.com/in/matt-powers/' },
            },
          ]}
        />
      </section>

      {/* CTA 
      <CTA
        title="Partner With Us"
        subtitle="Whether you're an investor seeking exposure to digital infrastructure or a customer requiring mission-critical facilities, we'd like to hear from you."
        primaryCta="Contact Our Team"
        variant="gradient"
      />
      */}

      {/* Contact */}
      <section id="contact">
        <Contact 
          buttonBgColor='bg-[var(--decennial-secondary)]'
          buttonTextColor='text-[var(--decennial-primary)]'
          variant="minimal"
          title="Get in Touch"
          subtitle="Reach out to discuss partnership opportunities"
        />
      </section>

      {/* Footer */}
      <Footer
        logo={<img src={DecennialLogo} alt="Decennial Group" className="h-12 w-auto"/>}
        logoText=""
        tagline="Building the infrastructure of tomorrow through integrated development, capital, and operations."
        variant="columns"
        showNewsletter={false}
        socialLinks={[]}
        policyLinks={[]}
        columns={[
 
          {
            title: 'Companies',
            links: [
              { label: 'Perpetual Grid', href: 'https://perpetualgrid.com' },
              { label: 'Empirix Partners', href: 'https://empirixpartners.com' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'Our Story', href: '#journey' },
              { label: 'Leadership', href: '#team' },
              { label: 'Contact', href: '#contact' },
            ],
          },
        ]}
        copyright="© 2026 Decennial Group. All rights reserved."
        bgColor='bg-[var(--decennial-primary)]'
      />
    </div>
  );
}

export default App;