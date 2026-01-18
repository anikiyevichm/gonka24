import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import { cn } from "../../lib/utils";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    budget: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");

    try {
      const GOOGLE_SCRIPT_URL = process.env.REACT_APP_GOOGLE_SCRIPT_URL;

      if (!GOOGLE_SCRIPT_URL) {
        console.error("REACT_APP_GOOGLE_SCRIPT_URL is not defined");
        throw new Error("Configuration error");
      }

      // Используем стандартный fetch
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Важно для Google Script, чтобы избежать проблем с CORS
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Так как используется no-cors, мы не получим тело ответа, 
      // но если запрос не упал, считаем его успешным
      setStatus("success");

      setTimeout(() => {
        onClose();
        setStatus("idle");
        setFormData({ name: "", contact: "", budget: "" });
      }, 2000);

    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center pointer-events-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={cn(
              "relative z-10 bg-card text-card-foreground shadow-2xl overflow-hidden pointer-events-auto",
              // Mobile styles: Full width, rounded-t-xl
              "w-full rounded-t-xl",
              // Desktop styles: Centered, specific width, rounded-2xl, no slide up (override via media query logic in variants ideally, but here we can rely on layout)
              "md:w-full md:max-w-md md:rounded-2xl md:h-auto md:max-h-[90vh]"
            )}
            style={{
              // Reset transform on desktop if needed, or handle differently
              // For simplicity, we keep the slide up for both but on desktop it slides up to center
            }}
          >
            {/* On desktop, we want a fade/scale usually, but slide-up is okay if centered properly. 
                However, to strictly center without bottom alignment on desktop, we need to change flex items-end to items-center on md.
                I did that in the wrapper: flex items-end md:items-center.
                Now 'y: 100%' means:
                - Mobile (items-end): Slide from below screen.
                - Desktop (items-center): Slide from below the center position? 
                Actually 'y' is transform. 
                If we want different animations per breakpoint, we need `window.matchMedia` or distinct components. 
                Let's try a Conditional Animation approach or just keep it simple.
            */}
            <div className="relative p-6 flex flex-col max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mt-8 md:mt-0 flex-1 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-2 text-center">Get an Offer</h2>
                <p className="text-muted-foreground text-center mb-8">
                  Leave your contact details to receive an offer or write to us on Telegram
                </p>

                {status === "success" ? (
                  <div className="text-center py-12 text-green-500 bg-green-500/10 rounded-xl">
                    <p className="text-xl font-bold">Successfully Sent!</p>
                    <p className="text-sm mt-2">We will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Input */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>

                    {/* Contact Input */}
                    <div className="space-y-2">
                      <label htmlFor="contact" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Contact <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact"
                        type="text"
                        placeholder="Telegram / Email / Phone"
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>

                    {/* Budget Input */}
                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Planned budget (USD) <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="budget"
                        type="text" // using text to allow "$5000", "5k", etc.
                        placeholder="e.g. 5000"
                        required
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-12 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Get an offer"
                      )}
                    </button>

                    {status === "error" && (
                      <p className="text-red-500 text-sm text-center">
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
