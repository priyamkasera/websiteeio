import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Users,
  Zap,
  Globe,
} from "lucide-react";

export default function Index() {
  const services = [
    {
      icon: Building2,
      title: "Infrastructure Projects",
      description:
        "Large-scale infrastructure development including roads, bridges, and utilities",
    },
    {
      icon: Zap,
      title: "Engineering Solutions",
      description:
        "Advanced engineering consulting and technical expertise for complex projects",
    },
    {
      icon: Users,
      title: "Project Management",
      description:
        "End-to-end project management with proven delivery excellence",
    },
    {
      icon: Globe,
      title: "Construction Services",
      description:
        "Complete construction execution with quality assurance and safety standards",
    },
  ];

  const highlights = [
    "Ready for Projects",
    "Expert Team",
    "Modern Technology",
    "Quality Assured",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-sm font-medium text-blue-700">
                    Building the Future
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                  Agroha Infrastructure
                </h1>
                <p className="text-xl text-slate-600">
                  Ready to take on all infrastructure projects with expertise,
                  innovation, and commitment to excellence
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all hover:shadow-xl hover:shadow-blue-600/20 group"
                >
                  Start Your Project
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-900 text-slate-900 font-semibold rounded-lg hover:bg-slate-900 hover:text-white transition-all"
                >
                  Learn More
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-200">
                <div>
                  <p className="text-3xl font-bold text-blue-600">0+</p>
                  <p className="text-sm text-slate-600">Projects Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">100%</p>
                  <p className="text-sm text-slate-600">Project Ready</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-[500px] hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <Building2 className="h-24 w-24 mx-auto mb-6 opacity-80" />
                  <p className="text-lg font-semibold">
                    Infrastructure Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              About Agroha Infrastructure
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Led by Mukesh Gupta, we bring vision and expertise to every
              infrastructure project. Though new, we're equipped with the latest
              technology and experienced team to handle complex infrastructure
              challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">
                  Our Vision
                </h3>
                <p className="text-slate-600">
                  To be a leading infrastructure developer delivering
                  world-class projects that transform communities and drive
                  economic growth.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">
                  Our Mission
                </h3>
                <p className="text-slate-600">
                  To execute infrastructure projects with uncompromising
                  quality, innovation, and commitment to sustainable
                  development.
                </p>
              </div>

              {/* Leadership */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Leadership
                </h4>
                <p className="text-slate-700">
                  <span className="font-semibold">Mukesh Gupta</span> - Founder
                  & Chief
                </p>
                <p className="text-sm text-slate-600 mt-2">
                  Driving Agroha Infrastructure with passion for excellence and
                  innovation in infrastructure development.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {highlight}
                    </h4>
                    <p className="text-sm text-slate-600 mt-1">
                      {highlight === "Ready for Projects" &&
                        "Fully equipped to undertake any infrastructure project"}
                      {highlight === "Expert Team" &&
                        "Experienced professionals in all disciplines"}
                      {highlight === "Modern Technology" &&
                        "Latest tools and methodologies"}
                      {highlight === "Quality Assured" &&
                        "Commitment to excellence at every stage"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive infrastructure solutions from concept to completion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Your Next Project?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            We're equipped with expertise, technology, and passion to execute
            your infrastructure projects successfully.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all hover:shadow-lg group"
          >
            Get in Touch Today
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
