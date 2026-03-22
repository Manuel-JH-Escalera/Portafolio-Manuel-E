const CV_FILES: Record<string, string> = {
  es: '/cv-manuel-escalera-es.pdf',
  en: '/cv-manuel-escalera-en.pdf',
};

export function downloadResume(language: string): void {
  const file = CV_FILES[language] ?? CV_FILES.en;
  const link = document.createElement('a');
  link.href = file;
  link.download = file.split('/').pop()!;
  link.click();
}
