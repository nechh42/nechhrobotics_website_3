export type ContactMailtoValues = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

export function buildContactMessage(values: ContactMailtoValues, locale: "tr" | "en") {
  const isEnglish = locale === "en";
  return [
    `${isEnglish ? "Name" : "Ad soyad"}: ${values.name}`,
    `${isEnglish ? "Email" : "E-posta"}: ${values.email}`,
    `${isEnglish ? "Company" : "Kurum"}: ${values.company || (isEnglish ? "Not specified" : "Belirtilmedi")}`,
    `${isEnglish ? "Subject" : "Konu"}: ${values.subject || (isEnglish ? "Nechh Robotics website enquiry" : "Nechh Robotics web sitesi mesajı")}`,
    "",
    values.message,
  ].join("\n");
}

export function buildContactMailto(values: ContactMailtoValues, locale: "tr" | "en") {
  const isEnglish = locale === "en";
  const body = buildContactMessage(values, locale);
  const subject = values.subject || (isEnglish ? "Nechh Robotics website enquiry" : "Nechh Robotics web sitesi mesajı");
  return `mailto:nechhlab.global@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
