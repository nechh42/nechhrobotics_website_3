/** Evidence Grid: the contact form is a transparent mail-client handoff until direct delivery is enabled. */
import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { buildContactMailto, buildContactMessage } from "@/lib/contactMailto";

type Locale = "tr" | "en";

export function ContactForm({ locale = "tr" }: { locale?: Locale }) {
  const isEnglish = locale === "en";
  const [values, setValues] = useState({ name: "", email: "", company: "", subject: "", message: "" });
  const [notice, setNotice] = useState("");
  const labels = isEnglish
    ? { eyebrow: "SEND A NOTE", title: "Frame the question.<br />We will pick up the context.", name: "Name", email: "Business email", company: "Company / organisation", subject: "Topic", message: "Your message", submit: "Open in my email app", copy: "Copy message", note: "This review version opens your email application with the message prefilled; direct delivery will be enabled after Gmail authentication is configured.", fallback: "If an email application does not open, copy the prepared message and send it to nechhlab.global@gmail.com.", success: "Your email application should now open with the message prepared.", copied: "The prepared message has been copied. Paste it into an email to nechhlab.global@gmail.com.", copyError: "Copying was not available in this browser. Please use the direct email address above." }
    : { eyebrow: "MESAJINIZ", title: "Soruyu çerçeveleyin.<br />Bağlamı birlikte alalım.", name: "Ad soyad", email: "Kurumsal e-posta", company: "Kurum / organizasyon", subject: "Konu", message: "Mesajınız", submit: "E-posta uygulamamda aç", copy: "Mesajı kopyala", note: "Bu inceleme sürümünde form, mesajı hazır hâlde e-posta uygulamanızda açar; doğrudan teslimat Gmail bağlantısı tamamlandığında etkinleşir.", fallback: "E-posta uygulamanız açılmazsa hazırlanan metni kopyalayıp nechhlab.global@gmail.com adresine gönderebilirsiniz.", success: "E-posta uygulamanız mesaj hazırlanmış hâlde açılmalıdır.", copied: "Hazırlanan mesaj kopyalandı. Metni nechhlab.global@gmail.com adresine e-posta olarak gönderebilirsiniz.", copyError: "Bu tarayıcıda kopyalama yapılamadı. Lütfen yukarıdaki doğrudan e-posta adresini kullanın." };

  function update(field: keyof typeof values, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = buildContactMailto(values, locale);
    setNotice(labels.success);
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(buildContactMessage(values, locale));
      setNotice(labels.copied);
    } catch {
      setNotice(labels.copyError);
    }
  }

  return <section className="contact-form-section"><div className="form-rail"><span>MAIL / 01</span><i /></div><div className="form-intro"><p className="eyebrow">{labels.eyebrow}</p><h2 dangerouslySetInnerHTML={{ __html: labels.title }} /><p>{labels.note}</p></div><form className="contact-form" onSubmit={handleSubmit}><label><span>{labels.name}</span><input required value={values.name} onChange={(event) => update("name", event.target.value)} /></label><label><span>{labels.email}</span><input type="email" required value={values.email} onChange={(event) => update("email", event.target.value)} /></label><label><span>{labels.company}</span><input value={values.company} onChange={(event) => update("company", event.target.value)} /></label><label><span>{labels.subject}</span><input required value={values.subject} onChange={(event) => update("subject", event.target.value)} /></label><label className="form-message"><span>{labels.message}</span><textarea required value={values.message} onChange={(event) => update("message", event.target.value)} rows={5} /></label><div className="form-actions"><button type="submit" className="button button-primary">{labels.submit} <ArrowUpRight size={17} /></button><button type="button" className="form-copy-button" onClick={copyMessage}>{labels.copy}</button></div><p className="form-fallback">{labels.fallback}</p>{notice ? <p className="form-notice" role="status">{notice}</p> : null}</form></section>;
}
