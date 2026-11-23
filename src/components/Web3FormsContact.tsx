"use client";

import { FormEvent, useState } from "react";
import styles from "./Web3FormsContact.module.css";

const accessKey = "2d5b1a15-16df-4045-8263-9418f165665d";

type SubmissionState = "idle" | "sending" | "success" | "error";

export function Web3FormsContact() {
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("Sending your enquiry…");

    try {
      const formData = new FormData(event.currentTarget);
      formData.append("access_key", accessKey);
      formData.append("subject", "New CEC website contact enquiry");
      formData.append("from_name", "City Engineering College website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!result.success) {
        throw new Error(result.message || "Unable to send your enquiry.");
      }

      event.currentTarget.reset();
      setStatus("success");
      setMessage("Thanks — your enquiry has been sent.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send your enquiry.");
    }
  }

  return (
    <aside className={styles.card} aria-label="Contact City Engineering College">
      <div className={styles.heading}>
        <span className={styles.kicker}>CITY ENGINEERING COLLEGE</span>
        <h2>Contact us</h2>
        <p>Send an enquiry and our team will get back to you.</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.field} name="name" type="text" placeholder="Your name" autoComplete="name" required />
        <input className={styles.field} name="email" type="email" placeholder="Email address" autoComplete="email" required />
        <textarea className={[styles.field, styles.message].join(" ")} name="message" placeholder="How can we help?" rows={3} required />
        <label className={styles.botcheck} aria-hidden="true"><input name="botcheck" type="checkbox" tabIndex={-1} /></label>
        <button className={styles.submit} type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send enquiry"}</button>
        {message ? <p className={[styles.status, status === "error" ? styles.error : styles.success].join(" ")} aria-live="polite">{message}</p> : null}
      </form>
    </aside>
  );
}
