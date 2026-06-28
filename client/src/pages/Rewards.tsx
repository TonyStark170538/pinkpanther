import { useMemo, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  BadgeCheck,
  CheckCircle2,
  Coffee,
  Gift,
  Sparkles,
  Star,
  TicketPercent,
  UserPlus,
  Zap,
} from 'lucide-react';

interface Tier {
  id: number;
  name: 'Bronze' | 'Silver' | 'Gold';
  description: string;
  points: number;
  benefits: string[];
  icon: typeof Star;
}

interface Reward {
  id: number;
  name: string;
  cost: number;
  description: string;
  icon: typeof Gift;
}

const tiers: Tier[] = [
  {
    id: 1,
    name: 'Bronze',
    description: 'Welcome to the club',
    points: 0,
    benefits: ['5% demo discount', 'Early product previews', 'Birthday bonus'],
    icon: Star,
  },
  {
    id: 2,
    name: 'Silver',
    description: 'Premium member',
    points: 250,
    benefits: ['10% demo discount', 'Monthly free item', 'Exclusive events', 'Priority support'],
    icon: Zap,
  },
  {
    id: 3,
    name: 'Gold',
    description: 'VIP experience',
    points: 650,
    benefits: ['15% demo discount', 'Weekly free item', 'Private tastings', 'Exclusive merchandise'],
    icon: Gift,
  },
];

const rewards: Reward[] = [
  {
    id: 1,
    name: 'Free Coffee',
    cost: 80,
    description: 'Redeem any hot coffee from the menu.',
    icon: Coffee,
  },
  {
    id: 2,
    name: 'Pink Upgrade',
    cost: 120,
    description: 'Add a premium smoothie boost or topping.',
    icon: Sparkles,
  },
  {
    id: 3,
    name: '20% Off Order',
    cost: 180,
    description: 'Apply a project-only discount to your next order.',
    icon: TicketPercent,
  },
];

export default function Rewards() {
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);
  const [memberName, setMemberName] = useState('Pink Panther Guest');
  const [email, setEmail] = useState('guest@pinkpanther.test');
  const [memberTier, setMemberTier] = useState<Tier | null>(null);
  const [points, setPoints] = useState(0);
  const [claimedRewards, setClaimedRewards] = useState<number[]>([]);

  const memberNumber = useMemo(() => `PP-${Math.floor(100000 + Math.random() * 900000)}`, []);
  const nextTier = memberTier?.name === 'Gold'
    ? null
    : tiers.find((tier) => tier.points > points) ?? null;
  const progressTarget = nextTier?.points ?? Math.max(points, tiers[2].points);
  const progress = progressTarget > 0 ? Math.min(100, Math.round((points / progressTarget) * 100)) : 100;

  const handleJoin = (tier: Tier) => {
    setSelectedTier(tier);
  };

  const handleCreateMembership = () => {
    if (!selectedTier) return;

    setMemberTier(selectedTier);
    setPoints(selectedTier.points + 120);
    setClaimedRewards([]);
  };

  const handleClaimReward = (reward: Reward) => {
    if (claimedRewards.includes(reward.id) || points < reward.cost) return;

    setPoints((currentPoints) => currentPoints - reward.cost);
    setClaimedRewards((currentRewards) => [...currentRewards, reward.id]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="px-6 pb-12 pt-32 md:px-8 md:pb-16 md:pt-40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1fr_26rem] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Pink Panther Club
            </p>
            <h1
              className="mb-6 text-5xl font-bold md:text-7xl lg:text-8xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Rewards Program
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
              Join the demo loyalty program, collect points, and claim project rewards without any real payment or account connection.
            </p>
          </div>

          <div className="border border-border bg-card p-6">
            <div className="mb-5 flex items-center gap-3">
              <BadgeCheck className="h-6 w-6 text-accent" />
              <div>
                <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Member status</p>
                <p className="text-2xl font-bold">{memberTier ? memberTier.name : 'Not joined yet'}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-background p-4">
                <p className="text-muted-foreground">Points</p>
                <p className="text-3xl font-bold text-accent">{points}</p>
              </div>
              <div className="bg-background p-4">
                <p className="text-muted-foreground">Member No.</p>
                <p className="text-lg font-semibold">{memberTier ? memberNumber : 'Pending'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {tiers.map((tier) => {
              const Icon = tier.icon;
              const isActive = memberTier?.id === tier.id;

              return (
                <div
                  key={tier.id}
                  className={`border bg-card p-8 transition-all duration-300 ${
                    isActive ? 'border-accent shadow-[0_0_0_1px_#FBC9D3]' : 'border-border hover:border-accent'
                  }`}
                >
                  <Icon size={46} className="mb-6 text-accent" />
                  <div className="mb-6">
                    <h2
                      className="mb-2 text-3xl font-bold"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {tier.name}
                    </h2>
                    <p className="text-muted-foreground">{tier.description}</p>
                    <p className="mt-3 text-sm text-accent">{tier.points}+ points</p>
                  </div>

                  <ul className="mb-8 space-y-3">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleJoin(tier)}
                    className="w-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition-colors duration-300 hover:bg-pink-600"
                  >
                    {isActive ? 'Current Tier' : `Join ${tier.name}`}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[26rem_1fr]">
          <div className="border border-border bg-card p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <UserPlus className="h-5 w-5 text-accent" />
              <h2 className="text-2xl font-bold">Join Program</h2>
            </div>

            {selectedTier ? (
              <div className="space-y-4">
                <div className="bg-background p-4">
                  <p className="text-sm text-muted-foreground">Selected tier</p>
                  <p className="text-2xl font-bold text-accent">{selectedTier.name}</p>
                </div>
                <label className="block space-y-2">
                  <span className="text-sm text-muted-foreground">Name</span>
                  <input
                    value={memberName}
                    onChange={(event) => setMemberName(event.target.value)}
                    className="w-full border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-accent"
                  />
                </label>
                <label className="block space-y-2">
                  <span className="text-sm text-muted-foreground">Email</span>
                  <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-accent"
                  />
                </label>
                <button
                  onClick={handleCreateMembership}
                  disabled={!memberName.trim() || !email.trim()}
                  className="w-full bg-accent px-6 py-4 font-semibold text-accent-foreground transition-colors duration-300 hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Create Demo Membership
                </button>
              </div>
            ) : (
              <div className="bg-background p-5 text-muted-foreground">
                Pick a tier above to start the demo membership.
              </div>
            )}
          </div>

          <div className="space-y-8">
            {memberTier ? (
              <div className="border border-accent bg-accent/10 p-6 md:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="mb-2 text-sm uppercase tracking-[0.16em] text-accent">Digital member card</p>
                    <h2 className="text-3xl font-bold">{memberName}</h2>
                    <p className="mt-2 text-muted-foreground">
                      {memberTier.name} member - {memberNumber}
                    </p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-sm text-muted-foreground">Available points</p>
                    <p className="text-5xl font-bold text-accent">{points}</p>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="mb-2 flex justify-between text-sm text-muted-foreground">
                    <span>{memberTier.name}</span>
                    <span>{nextTier ? `${nextTier.points - points} points to ${nextTier.name}` : 'Top tier reached'}</span>
                  </div>
                  <div className="h-3 overflow-hidden bg-background">
                    <div className="h-full bg-accent transition-all duration-500" style={{ width: `${progress}%` }} />
                  </div>
                </div>
              </div>
            ) : null}

            <div className="border border-border bg-card p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <Gift className="h-5 w-5 text-accent" />
                <h2 className="text-2xl font-bold">Claim Rewards</h2>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {rewards.map((reward) => {
                  const Icon = reward.icon;
                  const isClaimed = claimedRewards.includes(reward.id);
                  const canClaim = memberTier && points >= reward.cost && !isClaimed;

                  return (
                    <div key={reward.id} className="border border-border bg-background p-5">
                      <Icon className="mb-4 h-7 w-7 text-accent" />
                      <h3 className="mb-2 text-lg font-semibold">{reward.name}</h3>
                      <p className="mb-4 text-sm text-muted-foreground">{reward.description}</p>
                      <p className="mb-4 text-sm font-semibold text-accent">{reward.cost} points</p>
                      <button
                        onClick={() => handleClaimReward(reward)}
                        disabled={!canClaim}
                        className="w-full border border-accent px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground disabled:cursor-not-allowed disabled:border-border disabled:text-muted-foreground disabled:hover:bg-transparent"
                      >
                        {isClaimed ? 'Claimed' : canClaim ? 'Claim' : 'Locked'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
