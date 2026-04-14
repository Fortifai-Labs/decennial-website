import clsx from 'clsx';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { ReactNode } from 'react';
import { Section } from './Section';
import { Grid } from './Grid';
import { Card } from './Card';
import { Heading, Text } from './Typography';
import { GridCols, Gap, Padding, ShadowSize, Rounded, GradientConfig } from '../types';


interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

interface TeamMember {
  name: string;
  company?: string;
  role: string;
  bio?: string;
  avatar?: string;
  social?: SocialLinks;
  cardBgColor?: string;
  nameColor?: string;
  companyColor?: string;
  roleColor?: string;
  bioColor?: string;
  socialBgColor?: string;
  socialTextColor?: string;
  socialHoverBgColor?: string;
  socialHoverTextColor?: string;
}

interface TeamProps {
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
  cols?: GridCols;
  gap?: Gap;
  bgColor?: string;
  textColor?: string;
  cardBgColor?: string;
  cardShadow?: ShadowSize;
  cardRounded?: Rounded;
  paddingY?: Padding;
  variant?: 'cards' | 'simple' | 'compact';
  showBio?: boolean;
  showSocial?: boolean;
  gradient?: GradientConfig;
  className?: string;
  nameColor?: string;
  roleColor?: string;
  bioColor?: string;
  socialBgColor?: string;
  socialTextColor?: string;
  socialHoverBgColor?: string;
  socialHoverTextColor?: string;
  avatarRingColor?: string;
}

const defaultMembers: TeamMember[] = [];

interface AvatarProps {
  name: string;
  image?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

function Avatar({ name, image, size = 'lg' }: AvatarProps) {
  const sizes = {
    sm: 'w-12 h-12 text-lg',
    md: 'w-14 h-14 sm:w-16 sm:h-16 text-xl',
    lg: 'w-20 h-20 sm:w-24 sm:h-24 text-2xl sm:text-3xl',
    xl: 'w-24 h-24 sm:w-32 sm:h-32 text-3xl sm:text-4xl',
  };

  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const colors = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-amber-500',
    'from-red-500 to-rose-500',
    'from-indigo-500 to-violet-500',
  ];

  const colorIndex = name.length % colors.length;

  if (image) {
    return (
      <div className="rounded-full bg-white p-0.5">
        <img
          src={image}
          alt={name}
          className={clsx(
            'rounded-full object-cover',
            sizes[size]
          )}
        />
      </div>
    );
  }

  return (
    <div
      className={clsx(
        'rounded-full bg-gradient-to-br flex items-center justify-center text-white font-semibold',
        sizes[size],
        colors[colorIndex]
      )}
    >
      {initials}
    </div>
  );
}

function SocialIcon({
  platform,
  href,
  bgColor = 'bg-gray-100',
  textColor = 'text-gray-600',
  hoverBgColor = 'hover:bg-blue-100',
  hoverTextColor = 'hover:text-blue-600',
}: {
  platform: string;
  href: string;
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
}) {
  const icons: Record<string, ReactNode> = {
    twitter: <Twitter className="w-4 h-4" />,
    linkedin: <Linkedin className="w-4 h-4" />,
    github: <Github className="w-4 h-4" />,
    email: <Mail className="w-4 h-4" />,
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx('p-2 rounded-full transition-colors', bgColor, textColor, hoverBgColor, hoverTextColor)}
    >
      {icons[platform]}
    </a>
  );
}

export function Team({
  title = 'Meet our team',
  subtitle = 'The talented people behind our success.',
  members = defaultMembers,
  cols = 4,
  gap = 'lg',
  bgColor = 'bg-white',
  textColor = 'text-gray-900',
  cardBgColor = 'bg-white',
  cardShadow = 'md',
  cardRounded = 'xl',
  paddingY = 'xl',
  variant = 'cards',
  showBio = true,
  showSocial = true,
  gradient,
  className,
  nameColor = '!text-white',
  roleColor = 'text-[var(--decennial-secondary)]',
  bioColor = 'text-white',
  socialBgColor,
  socialTextColor,
  socialHoverBgColor,
  socialHoverTextColor,
}: TeamProps) {
  const renderMember = (member: TeamMember, index: number) => {
    // Per-member colors override section-level colors
    const mCardBg = member.cardBgColor || cardBgColor;
    const mNameColor = member.nameColor || nameColor;
    const mCompanyColor = member.companyColor || member.roleColor || roleColor;
    const mRoleColor = member.roleColor || roleColor;
    const mBioColor = member.bioColor || bioColor;
    const mSocialBg = member.socialBgColor || socialBgColor;
    const mSocialText = member.socialTextColor || socialTextColor;
    const mSocialHoverBg = member.socialHoverBgColor || socialHoverBgColor;
    const mSocialHoverText = member.socialHoverTextColor || socialHoverTextColor;

    if (variant === 'simple') {
      return (
        <div key={index} className="text-center">
          <div className="flex justify-center mb-4">
            <Avatar name={member.name} image={member.avatar} />
          </div>
          <Heading as="h3" fontSize="xl" fontWeight="semibold" textAlign="center" className="mb-1">
            {member.name}
          </Heading>
          {member.company && (
            <Text textAlign="center" textColor={mCompanyColor} fontSize="xs" fontWeight="semibold" className="mb-1 uppercase tracking-wider">
              {member.company}
            </Text>
          )}
          <Text textAlign="center" textColor={mRoleColor} fontSize="sm" className="mb-3">
            {member.role}
          </Text>
          {showBio && member.bio && (
            <Text textAlign="center" textColor="text-gray-600" fontSize="sm">
              {member.bio}
            </Text>
          )}
          {showSocial && member.social && (
            <div className="flex justify-center gap-2 mt-4">
              {Object.entries(member.social).map(([platform, href]) => (
                <SocialIcon key={platform} platform={platform} href={href} />
              ))}
            </div>
          )}
        </div>
      );
    }

    if (variant === 'compact') {
      return (
        <div key={index} className="flex items-center gap-4">
          <Avatar name={member.name} image={member.avatar} size="md" />
          <div>
            <Heading as="h3" fontSize="lg" fontWeight="semibold">
              {member.name}
            </Heading>
            <Text textColor="text-gray-500" fontSize="sm">
              {member.role}
            </Text>
          </div>
        </div>
      );
    }

    // Cards variant (default)
    return (
      <Card
        key={index}
        bgColor={mCardBg}
        shadow={cardShadow}
        rounded={cardRounded}
        padding="lg"
        hoverEffect
        className="text-center"
      >
        <div className="flex justify-center mb-4">
          <Avatar name={member.name} image={member.avatar} />
        </div>
        <Heading as="h3" fontSize="xl" fontWeight="semibold" textAlign="center" className={clsx('mb-1', mNameColor)}>
          {member.name}
        </Heading>
        {member.company && (
          <Text textAlign="center" textColor={mCompanyColor} fontSize="xs" fontWeight="semibold" className="mb-1 uppercase tracking-wider">
            {member.company}
          </Text>
        )}
        <Text textAlign="center" textColor={mRoleColor} fontSize="sm" fontWeight="medium" className="mb-3">
          {member.role}
        </Text>
        {showBio && member.bio && (
          <Text textAlign="center" textColor={mBioColor} fontSize="sm">
            {member.bio}
          </Text>
        )}
        {showSocial && member.social && (
          <div className="flex justify-center gap-2 mt-4">
            {Object.entries(member.social).map(([platform, href]) => (
              <SocialIcon
                key={platform}
                platform={platform}
                href={href}
                bgColor={mSocialBg}
                textColor={mSocialText}
                hoverBgColor={mSocialHoverBg}
                hoverTextColor={mSocialHoverText}
              />
            ))}
          </div>
        )}
      </Card>
    );
  };

  return (
    <Section bgColor={bgColor} textColor={textColor} paddingY={paddingY} gradient={gradient} className={className}>
      <div className="text-center mb-12">
        <Heading as="h2" fontSize="4xl" textAlign="center" className="mb-4">
          {title}
        </Heading>
        <Text fontSize="lg" textAlign="center" textColor="text-gray-600" className="max-w-2xl mx-auto">
          {subtitle}
        </Text>
      </div>

      <Grid cols={cols} gap={gap}>
        {members.map((member, index) => renderMember(member, index))}
      </Grid>
    </Section>
  );
}
