import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mnjnapry");

  return (
    <section className="relative w-full bg-transparent px-6 py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Heading */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-5/12 pt-4"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#cca027]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#666]">
              Contact Us
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#291b03] font-medium leading-[1.1] mb-4">
            Ready to take the next step <br className="hidden lg:block" /> in your business?
          </h2>
          
          <h3 className="font-serif text-5xl md:text-6xl lg:text-7xl">
            <span className="text-[#cca027] italic font-bold">
              Let's Talk.
            </span>
          </h3>
        </motion.div>

        {/* Right Column: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-7/12"
        >
          {state.succeeded ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#cca027]/20 shadow-lg">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#cca027]/10 border-2 border-[#cca027] flex items-center justify-center">
                <span className="text-[#cca027] text-4xl">✓</span>
              </div>
              <p className="text-[#291b03] text-2xl font-serif mb-2">Thank you for reaching out!</p>
              <p className="text-[#666] text-base">We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <FloatingInput label="Name" name="name" required errors={state.errors} />
                <FloatingInput label="Email" name="email" type="email" required errors={state.errors} />
                
                <FloatingInput label="Mobile Number" name="mobile" type="tel" required errors={state.errors} />
                <FloatingInput label="Website/Social Media Link" name="website" errors={state.errors} />
                
                <div className="col-span-1 md:col-span-2 mt-4">
                  <FloatingInput label="Services Interested In" name="services" errors={state.errors} />
                </div>
                
                <div className="col-span-1 md:col-span-2 mt-4">
                  <FloatingInput label="Your Objective" name="objective" errors={state.errors} />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={state.submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-16 px-10 py-4 rounded-full border border-[#291b03] text-[#291b03] font-bold tracking-[0.2em] text-xs uppercase transition-all duration-300 hover:bg-[#cca027] hover:border-[#cca027] hover:text-white flex items-center gap-4 group w-fit disabled:opacity-50"
              >
                {state.submitting ? 'SUBMITTING...' : 'SUBMIT'}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}

/* ================= FLOATING INPUT COMPONENT ================= */

function FloatingInput({ label, name, type = "text", required = false, errors }) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative w-full group"
    >
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder=" "
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value !== '');
        }}
        onChange={(e) => setHasValue(e.target.value !== '')}
        className="
          peer
          w-full bg-transparent
          border-b border-[#291b03]/20
          text-[#291b03] text-sm pt-5 pb-2 px-0
          outline-none
          focus:border-[#cca027]
          transition-colors duration-300
          placeholder-transparent
        "
      />
      
      <label
        htmlFor={name}
        className="
          absolute left-0 top-5
          text-[#291b03]/60 text-sm font-medium
          transition-all duration-300
          pointer-events-none
          peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#291b03]/60
          peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-[#cca027]
          peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[#cca027]
        "
      >
        {label} {required && <span className="text-[#cca027]">*</span>}
      </label>

      {/* Animated underline */}
      <span className={`
        absolute bottom-0 left-0 h-0.5 bg-[#cca027]
        transition-all duration-300
        ${isFocused || hasValue ? 'w-full' : 'w-0'}
      `} />

      <ValidationError
        prefix={label}
        field={name}
        errors={errors}
        className="text-red-400 text-xs mt-1 block"
      />
    </motion.div>
  );
}
