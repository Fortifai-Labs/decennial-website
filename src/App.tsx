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
import DavidPavlik from './assets/Headshots/David_Pavlik.png';
import JohnKrappman from './assets/Headshots/John_Krappman.png';
import PaulRambo from './assets/Headshots/Paul_Rambo.png';
import ZachPena from './assets/Headshots/Zach_Pena.png';
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
        <Team
          title="Leadership Team"
          subtitle="World-class expertise across energy infrastructure, real estate development, and capital markets"
          cols={4}
          variant="cards"
          showSocial={false}
          textColor='text-white'
          cardBgColor='bg-[var(--decennial-primary)]'
          members={[
            {
              name: 'Dave Pavlik',
              role: 'Managing Partner & Co-Founder',
              bio: '15+ years energy infrastructure experience. Structured over $2.0B in renewable energy and infrastructure projects.',
              avatar: DavidPavlik,
              social: { linkedin: '#' },
            },
            {
              name: 'John Krappman',
              role: 'Managing Partner & Co-Founder',
              bio: '35+ years real estate investment and development experience. Successfully developed over $2B of commercial real estate.',
              avatar: JohnKrappman,
              social: { linkedin: '#' },
            },
            {
              name: 'Paul Rambo',
              role: 'Partner, Project Delivery',
              bio: '10+ years data center industry experience. Former Critical Facilities Manager at T5 Data Centers and Senior Engineer at Equinix.',
              avatar: PaulRambo,
              social: { linkedin: '#' },
            },
            {
              name: 'Zachary Peña',
              role: 'CEO, Empirix Partners',
              bio: '12+ years supply chain experience. Former Senior Director at NTT Global Data Centers and Construction Supply Chain Manager at Microsoft.',
              avatar: ZachPena,
              social: { linkedin: '#' },
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