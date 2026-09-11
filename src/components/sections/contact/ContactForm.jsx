import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";
import toast from "react-hot-toast";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import InputField from "../../ui/InputField";
import TextAreaField from "../../ui/TextAreaField";
import Button from "../../ui/Button";

import { contactSchema } from "../../../validation/contactSchema";

import SuccessAnimation from "./SuccessAnimation";

export default function ContactForm() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const sendEmail = async () => {
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      reset();
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return <SuccessAnimation />;
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(sendEmail)}
      className="rounded-xl border border-line bg-surface p-6 sm:p-8"
    >
      <h3 className="mb-6 text-xl font-semibold text-ink-text">
        Send a message
      </h3>

      <div className="grid gap-5">
        <InputField
          label="Full Name"
          placeholder="John Doe"
          error={errors.name?.message}
          {...register("name")}
        />

        <InputField
          label="Email"
          type="email"
          placeholder="john@example.com"
          error={errors.email?.message}
          {...register("email")}
        />

        <InputField
          label="Subject"
          placeholder="Let's work together"
          error={errors.subject?.message}
          {...register("subject")}
        />

        <TextAreaField
          label="Message"
          placeholder="Tell me about your project..."
          error={errors.message?.message}
          {...register("message")}
        />

        <Button type="submit" disabled={!isValid || loading} className="mt-2 w-full">
          <FaPaperPlane className={loading ? "animate-pulse" : ""} />
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
