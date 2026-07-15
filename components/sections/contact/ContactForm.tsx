"use client";

import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const inputClass =
  "w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}

export function ContactForm() {
  const { t } = useTranslation();
  const cp = t.contactPage;
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const schema = z.object({
    organization: z.string().min(1, cp.errorRequired),
    contactName: z.string().min(1, cp.errorRequired),
    role: z.string().min(1, cp.errorRequired),
    phone: z
      .string()
      .min(1, cp.errorRequired)
      .regex(/^[\d+\-\s()]{7,20}$/, cp.errorPhone),
    email: z.string().min(1, cp.errorRequired).email(cp.errorEmail),
    interest: z.string().min(1, cp.errorRequired),
    message: z.string().optional(),
  });

  type FormValues = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = handleSubmit(async (values) => {
    setSubmitError(false);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("submit_failed");
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError(true);
    }
  });

  if (submitted) {
    return (
      <Card className="flex flex-col items-center gap-3 py-16 text-center">
        <CheckCircle2 size={40} className="text-brand-blue" />
        <h3 className="font-heading text-xl font-semibold text-ink">{cp.successTitle}</h3>
        <p className="text-sm text-ink-muted">{cp.successMessage}</p>
      </Card>
    );
  }

  return (
    <Card>
      <h2 className="font-heading text-lg font-semibold text-ink">{cp.formTitle}</h2>
      <form onSubmit={onSubmit} className="mt-6 space-y-5" noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label={cp.fields.organization} error={errors.organization?.message}>
            <input
              {...register("organization")}
              placeholder={cp.fields.organizationPlaceholder}
              className={inputClass}
            />
          </Field>
          <Field label={cp.fields.contactName} error={errors.contactName?.message}>
            <input
              {...register("contactName")}
              placeholder={cp.fields.contactNamePlaceholder}
              className={inputClass}
            />
          </Field>
          <Field label={cp.fields.role} error={errors.role?.message}>
            <input
              {...register("role")}
              placeholder={cp.fields.rolePlaceholder}
              className={inputClass}
            />
          </Field>
          <Field label={cp.fields.phone} error={errors.phone?.message}>
            <input
              {...register("phone")}
              placeholder={cp.fields.phonePlaceholder}
              className={inputClass}
            />
          </Field>
          <Field label={cp.fields.email} error={errors.email?.message}>
            <input
              {...register("email")}
              placeholder={cp.fields.emailPlaceholder}
              className={inputClass}
            />
          </Field>
          <Field label={cp.fields.interest} error={errors.interest?.message}>
            <select {...register("interest")} defaultValue="" className={inputClass}>
              <option value="" disabled>
                {cp.fields.interestPlaceholder}
              </option>
              {cp.interestOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field label={cp.fields.message} error={errors.message?.message}>
          <textarea
            {...register("message")}
            placeholder={cp.fields.messagePlaceholder}
            rows={4}
            className={inputClass}
          />
        </Field>

        {submitError && (
          <div className="flex items-start gap-2 rounded-lg bg-red-50 px-3.5 py-2.5 text-sm text-red-600">
            <AlertCircle size={16} className="mt-0.5 flex-none" />
            <span>{cp.submitError}</span>
          </div>
        )}

        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? cp.submitting : cp.submit}
        </Button>
      </form>
    </Card>
  );
}
