import { useReveal } from '../hooks/useReveal'
import { Activity, Users, Heart } from 'lucide-react'

const roles = [
  {
    tag: 'Specialist',
    title: 'TMJ / Orofacial Pain',
    icon: <Activity size={18} className="text-gold" />,
    description:
      'Assign exercises, track symptoms, and manage patients between visits from a single dashboard.',
    features: [
      'Patient symptom dashboard',
      'Video exercise library',
      'Urgent alert system',
    ],
  },
  {
    tag: 'General Dentist',
    title: 'DDS / DMD',
    icon: <Users size={18} className="text-gold" />,
    description:
      'Refer patients seamlessly and stay informed on their specialist-managed treatment progress.',
    features: [
      'Easy patient referrals',
      'Treatment progress view',
      'Secure messaging',
    ],
  },
  {
    tag: 'The One Who Matters Most',
    title: 'Patient',
    icon: <Heart size={18} className="text-gold" />,
    description:
      'Follow your treatment with clear video exercises, log symptoms in seconds, and stay connected to your provider.',
    features: [
      'Video-guided exercises',
      '60-second symptom log',
      'iOS & Android app',
    ],
    highlight: true,
  },
]

export default function ForWho() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="for-providers"
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div
          className={`text-center mb-10 sm:mb-12 lg:mb-14 reveal ${
            visible ? 'visible' : ''
          }`}
        >
          <span className="section-label text-xs sm:text-sm">
            Who It's For
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-navy mt-3 leading-tight">
            Built for every role
            <br className="hidden sm:block" />
            in the care team.
          </h2>

          <p className="text-navy/55 text-sm sm:text-base mt-4 max-w-md mx-auto">
            Whether you treat, refer, or recover — TMJConnect fits into your workflow.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {roles.map((role, i) => (
            <div
              key={role.title}
              style={{ transitionDelay: `${i * 100}ms` }} // fixes dynamic delay issue
              className={`reveal ${
                visible ? 'visible' : ''
              } rounded-2xl p-5 sm:p-6 flex flex-col gap-4 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                role.highlight
                  ? 'bg-navy border-navy text-white'
                  : 'bg-offwhite border-navy/8'
              }`}
            >
              {/* Icon */}
              <div
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center ${
                  role.highlight
                    ? 'bg-white/10'
                    : 'bg-white border border-navy/8'
                }`}
              >
                {role.icon}
              </div>

              {/* Tag + Title */}
              <div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-1 text-gold">
                  {role.tag}
                </div>

                <h3
                  className={`font-serif text-base sm:text-lg font-medium ${
                    role.highlight ? 'text-white' : 'text-navy'
                  }`}
                >
                  {role.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  role.highlight ? 'text-white/70' : 'text-navy/60'
                }`}
              >
                {role.description}
              </p>

              {/* Features */}
              <ul className="space-y-1.5 mt-auto">
                {role.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2 text-xs sm:text-sm ${
                      role.highlight ? 'text-white/80' : 'text-navy/65'
                    }`}
                  >
                    <span className="text-gold mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}