
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mnjnapry");

  return (
    <section className="relative w-full bg-[#fbf8f3] flex justify-center px-6 py-10 max-sm:py-12 overflow-hidden">

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          relative z-10
          w-full max-w-xl
          rounded-3xl
          bg-gradient-to-br from-[#1a1410]/90 to-[#0a0605]/90
          backdrop-blur-sm
          p-6 md:p-8
          shadow-[0_20px_60px_rgba(192,136,96,0.15)]
          border border-[#C08860]/20
          hover:border-[#C08860]/40
          transition-all duration-500
          group
        "
      >
        
        {/* Content */}
        <div className="relative z-10">
          {/* TOP TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <p className="text-[#291b03] text-sm mb-2 max-sm:text-xs">
              Ready to take the next step in your business?
            </p>

            <h2 className="font-serif text-3xl max-sm:text-2xl mb-2">
              <span className="bg-gradient-to-r from-[#B8734E] to-[#8a563a] bg-clip-text text-transparent italic font-bold animate-[shimmer_3s_ease-in-out_infinite] bg-[length:200%_auto]">
                Let's Talk
              </span>
            </h2>

            {/* Decorative line */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#B8734E] to-transparent rounded-full mt-1" />
          </motion.div>

          {/* SUCCESS MESSAGE */}
          {state.succeeded ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#B8734E]/20 to-[#8a563a]/20 border-2 border-[#B8734E] flex items-center justify-center">
                <span className="text-[#D4A574] text-3xl">✓</span>
              </div>
              <p className="text-[#291b03] text-xl font-serif mb-2">Thank you for reaching out!</p>
              <p className="text-[#291b03] text-sm">We'll get back to you soon.</p>
            </motion.div>
          ) : (
            /* FORM */
            <form onSubmit={handleSubmit} className="space-y-5">
              <FloatingInput
                label="Name"
                name="name"
                type="text"
                required
                errors={state.errors}
              />

              <FloatingInput
                label="Email"
                name="email"
                type="email"
                required
                errors={state.errors}
              />

              <FloatingInput
                label="Mobile Number"
                name="mobile"
                type="tel"
                required
                errors={state.errors}
              />

              <FloatingInput
                label="Website/Social Media Link"
                name="website"
                type="text"
                errors={state.errors}
              />

              <FloatingInput
                label="Services Interested In"
                name="services"
                type="text"
                errors={state.errors}
              />

              <FloatingInput
                label="Your Objective"
                name="objective"
                type="text"
                errors={state.errors}
              />

              {/* SUBMIT */}
              <motion.button
                type="submit"
                disabled={state.submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="
                  relative group w-full mt-6 py-3 rounded-full
                  border-2 border-[#C08860]
                  text-[#291b03] font-semibold tracking-widest text-sm
                  overflow-hidden
                  transition-all duration-300
                  disabled:opacity-50 disabled:cursor-not-allowed
                  disabled:hover:scale-100
                  shadow-lg hover:shadow-[0_10px_40px_rgba(192,136,96,0.3)]
                "
              >
                {/* Background gradient */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#B8734E] to-[#8a563a] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[length:200%_auto] animate-[shimmer_3s_ease-in-out_infinite]" />
                
                {/* Button content */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {state.submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      SUBMITTING...
                    </>
                  ) : (
                    <>
                      <span>SUBMIT</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </span>

                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.button>
            </form>
          )}
        </div>

      </motion.div>

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}

/* ================= FLOATING INPUT COMPONENT ================= */

function FloatingInput({ label, name, type = "text", required = false, errors }) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
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
          border-b-2 border-[#C08860]/30
          text-[#291b03] text-sm pt-5 pb-1.5 px-0
          outline-none
          focus:border-[#C08860]
          transition-all duration-300
          placeholder-transparent
        "
      />
      
      <label
        htmlFor={name}
        className="
          absolute left-0 top-5
          text-[#291b03] text-sm
          transition-all duration-300
          pointer-events-none
          peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#291b03]
          peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-[#D4A574]
          peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[#D4A574]
        "
      >
        {label} {required && <span className="text-[#C08860]">*</span>}
      </label>

      {/* Animated underline */}
      <span className={`
        absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#B8734E] to-[#D4A574]
        transition-all duration-300
        ${isFocused || hasValue ? 'w-full' : 'w-0'}
      `} />

      {/* Icon indicator */}
      {(isFocused || hasValue) && (
        <motion.span
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          className="absolute right-0 top-5 text-[#D4A574]"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.span>
      )}

      <ValidationError
        prefix={label}
        field={name}
        errors={errors}
        className="text-red-400 text-xs mt-1 block"
      />
    </motion.div>
  );
}