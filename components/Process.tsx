import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Discovery',
    description: 'We dive deep into understanding your business, goals, and challenges through comprehensive consultations.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategy',
    description: 'Our team crafts a tailored roadmap with technical architecture, timelines, and measurable milestones.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Development',
    description: 'Agile development with regular demos, iterative feedback, and transparent communication throughout.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch & Scale',
    description: 'Seamless deployment with ongoing support, optimization, and scaling strategies for long-term success.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#F54E02] font-semibold mb-4 block">Our Process</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            From Idea to{' '}
            <span className="bg-gradient-to-r from-[#F54E02]/70 via-[#F54E02]/40 to-[#F54E02]/70 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#F54E02]/30 to-transparent -translate-y-1/2" />

          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex-1 ${index % 2 === 1 ? 'lg:mt-24' : ''}`}
              >
                {/* Card */}
                <div className="relative bg-white border border-[#F54E02]/20 rounded-3xl p-8 hover:bg-gradient-to-br hover:from-[#F54E02]/10 hover:to-[#F54E02]/20 hover:shadow-lg transition-all duration-500 group">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-8 px-4 py-1 bg-[#F54E02] rounded-full">
                    <span className="font-display font-bold text-white">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-[#F54E02]/10 flex items-center justify-center mb-6 mt-2 group-hover:bg-[#F54E02]/20 transition-colors">
                    <step.icon className="w-7 h-7 text-[#F54E02]" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#333] mb-4 group-hover:text-[#F54E02] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>

                  {/* Decorative Gradient */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#F54E02]/5 rounded-full blur-2xl -z-10 group-hover:bg-[#F54E02]/10 transition-colors" />
                </div>

                {/* Connection Dot */}
                <div
                  className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#F54E02] glow-primary"
                  style={{ transform: 'translate(-50%, -400%)' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
