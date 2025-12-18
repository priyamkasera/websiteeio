import Layout from "@/components/Layout";
import { Building2, Zap, Users, Globe, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: "Infrastructure Projects",
      description: "Large-scale infrastructure development including roads, bridges, ports, and utilities"
    },
    {
      icon: Zap,
      title: "Engineering Solutions",
      description: "Advanced engineering consulting, design, and technical expertise for complex projects"
    },
    {
      icon: Users,
      title: "Project Management",
      description: "End-to-end project management with proven delivery excellence and quality assurance"
    },
    {
      icon: Globe,
      title: "Construction Services",
      description: "Complete construction execution with adherence to safety standards and timelines"
    },
    {
      icon: TrendingUp,
      title: "Infrastructure Development",
      description: "Strategic planning and development of sustainable infrastructure solutions"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control and compliance monitoring throughout project lifecycle"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Our Services</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive infrastructure solutions from planning and design through execution and completion
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Process</h2>
            <p className="text-lg text-slate-600">
              A structured approach to project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Planning", desc: "Detailed project analysis and strategic planning" },
              { num: "02", title: "Design", desc: "Comprehensive design and engineering solutions" },
              { num: "03", title: "Execution", desc: "Quality construction and implementation" },
              { num: "04", title: "Completion", desc: "Handover and ongoing support" }
            ].map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-slate-200 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-4">{step.num}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Bring Your Project to Life</h2>
          <p className="text-lg text-blue-100 mb-8">
            We're ready to take on infrastructure projects of any scale
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </section>
    </Layout>
  );
}
