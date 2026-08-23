import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { contactInfo } from '../../data/content';
import { fadeInUp, viewportOnce } from '../../lib/motion';
import { container } from '../../lib/styles';
import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';

function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log('Form submitted:', data);
    reset();
  };

  return (
    <section
      className="py-20 md:py-28 lg:py-36"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className={container}>
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          {/* Left column — info */}
          <div className="lg:w-5/12">
            <Reveal as="div">
              <SectionLabel>Get in touch</SectionLabel>
            </Reveal>
            <Reveal
              as="h2"
              id="contact-title"
              delay={0.08}
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-neutral-900 md:text-4xl lg:text-[2.75rem]"
            >
              Tell us what you're looking to build.
            </Reveal>
            <Reveal
              as="p"
              delay={0.14}
              className="mt-6 max-w-md text-base leading-relaxed text-neutral-500"
            >
              Whether you have a fully documented brief or just an initial
              concept, let's discuss how we can engineer the right solution.
            </Reveal>

            <Reveal delay={0.2} className="mt-10 flex flex-col gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Email
                </span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="mt-1 block text-base font-semibold text-neutral-900 transition-colors duration-200 hover:text-neutral-600"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Location
                </span>
                <p className="mt-1 text-base font-semibold text-neutral-900">
                  {contactInfo.location}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right column — form */}
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp(0.1)}
          >
            {isSubmitSuccessful ? (
              <motion.div
                className="flex min-h-[400px] items-center justify-center rounded-sm border border-neutral-200 bg-white p-12"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-neutral-900 text-white">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">
                    Enquiry Submitted
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500">
                    Thank you! We'll get back to you within 24 hours.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-sm border border-neutral-200 bg-white p-8 md:p-10"
                noValidate
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-neutral-900"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Jane Doe"
                      className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                      {...register('name', {
                        required: 'Name is required',
                      })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-neutral-900"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="jane@company.com"
                      className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>


                {/* Project details */}
                <div className="mt-6">
                  <label
                    htmlFor="details"
                    className="mb-2 block text-sm font-semibold text-neutral-900"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="details"
                    rows={5}
                    placeholder="Tell us about your objectives, timeline, and any specific requirements..."
                    className={`form-input resize-none ${errors.details ? 'border-red-500' : ''}`}
                    {...register('details', {
                      required: 'Please describe your project',
                    })}
                  />
                  {errors.details && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.details.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div className="mt-8">
                  <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="2"
                            opacity="0.3"
                          />
                          <path
                            d="M12 2a10 10 0 0 1 10 10"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      'Submit Enquiry'
                    )}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
