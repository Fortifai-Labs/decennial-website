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
import { Contact } from './components/Contact';
import DecennialLogo from './assets/Logos/Decennial_White_Horizontal.png';
import DecennialNegativeLogo from './assets/Logos/Decennial_Negative_Logo.png';
import DavidPavlik from './assets/Headshots/David_Pavlik.png';
import JohnKrappman from './assets/Headshots/John_Krappman.png';
import PaulRambo from './assets/Headshots/Paul_Rambo.png';
import ZachPena from './assets/Headshots/Zach_Pena.png';
import { AnimatedTimeline } from './components/AnimatedTimeline';
import { DecennialHeroImage } from './components/DecennialHeroImage';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar
        logo={<img src={DecennialLogo} alt="Decennial Group" className="h-16 w-auto" />}
        logoText=''
        textColor='text-white'
        links={[
          { label: 'About', href: '#about' },
          { label: 'Platform', href: '#platform' },
          { label: 'Portfolio', href: '#portfolio' },
          { label: 'Leadership', href: '#team' },
          { label: 'Contact', href: '#contact' },
        ]}
        ctaText="Get Started"
        ctaHref="#contact"
        sticky={true}
        bgColor="bg-[var(--decennial-primary)]"
      />

      {/* Hero Section */}
     <Hero
        badge=''
        variant="split"
        title="Building the Infrastructure of Tomorrow"
        textColor='text-white'
        subtitle="Decennial Group is a multi-strategy investment management and development firm solving the largest challenges at the center of energy, critical infrastructure, and digital real estate."
        subtitleColor='text-white'
        bgColor='bg-[var(--decennial-primary)]'
        image={
          <DecennialHeroImage
            images={[DavidPavlik, JohnKrappman, PaulRambo, ZachPena]}
            rotateImages={true}
            interval={3000}
            strokeColor="var(--decennial-primary)"
            strokeWidth={18}
          />
        }
      />

      <Divider spacing="lg" />

      {/* Platform - Three Pillars */}
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
            icon: 'Building2',
          },
          {
            title: 'Decennial Capital',
            description: 'Full-stack capital management via discretionary commingled funds, separately managed accounts, and joint ventures optimizing structure, returns, and execution certainty.',
            icon: 'TrendingUp',
          },
          {
            title: 'Tactical Operations',
            description: 'Differentiated critical services in data, energy, and supply chain through Perpetual Grid and Empirix Partners—converting cost centers into profit centers.',
            icon: 'Cog',
          },
        ]}
      />

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
      <AnimatedTimeline
        title="Our Journey"
        subtitle="From foundation to digital infrastructure leadership"
        bgColor="bg-[var(--decennial-primary)]"
        textColor='text-white'
        items={[
          {
            date: '2019',
            title: 'Foundation',
            description: 'Decennial Group formed to address convergence of energy, critical infrastructure, and real estate challenges.',
          },
          {
            date: '2021',
            title: 'Digital Crossroads Acquisition',
            description: 'Acquired flagship data center campus through JV with Principal Real Estate Investors. Achieved full stabilization in 22 months.',
          },
          {
            date: '2022',
            title: 'Perpetual Grid Launch',
            description: 'Established dedicated energy infrastructure and utility solutions company for power procurement and regulatory navigation.',
          },
          {
            date: '2023',
            title: 'Strategic Focus on Digital Infrastructure',
            description: ' Decennial Group decided to responsibly exit all new activity in other sectors to focus entirely on digital infrastructure. We recognized this market, at this time, as the largest and most accessible opportunity for our collective capability set in our lifetime.',
          },
          {
            date: '2024',
            title: 'Scale & Expansion',
            description: ' Integrated tactical operations companies including Empirix Partners (mission-critical supply chain) and Perpetual Grid (energy infrastructure solutions). CoreWeave program expanded to $2.3B development pipeline. Team grown to 43 professionals with 200+ through joint ventures.',
          },
        ]}
      />

      {/* Leadership Team */}
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

      {/* CTA 
      <CTA
        title="Partner With Us"
        subtitle="Whether you're an investor seeking exposure to digital infrastructure or a customer requiring mission-critical facilities, we'd like to hear from you."
        primaryCta="Contact Our Team"
        variant="gradient"
      />
      */}

      {/* Contact */}
      <Contact 
        buttonBgColor='bg-[var(--decennial-secondary)]'
        buttonTextColor='text-[var(--decennial-primary)]'
        variant="minimal"
        title="Get in Touch"
        subtitle="Reach out to discuss partnership opportunities"
      />

      {/* Footer */}
      <Footer
        logo={<img src={DecennialLogo} alt="Decennial Group" className="h-12 w-auto" />}
        logoText=""
        tagline="Building the infrastructure of tomorrow through integrated development, capital, and operations."
        variant="columns"
        showNewsletter={false}
        columns={[
          {
            title: 'Platform',
            links: [
              { label: 'Decennial Development', href: '#' },
              { label: 'Decennial Capital', href: '#' },
              { label: 'Tactical Operations', href: '#' },
            ],
          },
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
              { label: 'About', href: '#about' },
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