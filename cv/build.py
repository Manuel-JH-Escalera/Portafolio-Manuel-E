"""Genera public/cv-manuel-escalera-{es,en}.pdf desde este archivo.

Uso (desde la raíz del repo):  python cv/build.py
Requiere Chrome o Edge instalado (se usa en modo headless, sin ventana).
Edita el contenido en CV más abajo y vuelve a correr el script.
"""
import html
import os
import re
import subprocess
import sys
import tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

BROWSERS = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    "/usr/bin/google-chrome",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
]

CSS = """
@page { size: Letter; margin: 9mm 13mm 8mm; }
* { box-sizing: border-box; }
body { font-family: 'Source Serif 4', 'Source Serif Pro', Georgia, 'Times New Roman', serif;
       font-size: 9.3pt; line-height: 1.28; color: #000; margin: 0; }
a { color: #1155cc; }
h1 { font-size: 23pt; text-align: center; margin: 0 0 1pt; }
.contact { text-align: center; font-size: 9.8pt; }
.rule { border: 0; border-top: 1.2pt solid #000; margin: 7pt 0 6pt; }
.summary { font-style: italic; margin: 0 0 7pt; }
.summary b { font-style: italic; }
h2 { font-size: 10.4pt; text-transform: uppercase; border-bottom: 1pt solid #000;
     margin: 8pt 0 5pt; padding-bottom: 1pt; }
.job { margin-bottom: 6pt; break-inside: avoid; }
.row { display: flex; justify-content: space-between; gap: 12pt; }
.row .r { white-space: nowrap; text-align: right; }
.org { font-weight: 700; }
.when { font-style: italic; }
ul { margin: 3pt 0 0; padding-left: 26pt; }
li { margin-bottom: 1.6pt; padding-right: 8pt; }
.skills li { margin-bottom: 1.2pt; }
.edu { margin-bottom: 3pt; }
"""

CONTACT = (
    'Santiago, Chile · <a href="https://linkedin.com/in/manuel-escalera">linkedin.com/in/manuel-escalera</a>'
    ' · +56931884105<br>'
    '<a href="mailto:manuel.jh.escalera@gmail.com">manuel.jh.escalera@gmail.com</a>'
    ' · <a href="https://manuelescalera.dev">manuelescalera.dev</a>'
)

# En los textos, **así** se convierte en negrita.
CV = {
    "es": {
        "file": "cv-manuel-escalera-es.pdf",
        "title": "CV Manuel Escalera — Product Engineer",
        "summary": "**Product Engineer (Full Stack + IA aplicada) con más de 4 años de experiencia.** "
                   "Construyo productos completos, de la idea al cliente pagando: fundé y opero solo "
                   "imprimetuscartas.cl, con más de 500 pedidos y tres sistemas de IA en producción. "
                   "React, TypeScript, Node.js, Python y Claude. Estudiante de Ingeniería en Informática. "
                   "Inglés C2 Proficient.",
        "h_exp": "Experiencia profesional",
        "h_edu": "Educación",
        "h_skills": "Habilidades técnicas",
        "jobs": [
            {
                "org": "imprimetuscartas.cl", "place": "Santiago, Chile",
                "role": "Fundador &amp; Product Engineer", "when": "Febrero 2026 – Presente",
                "link": "https://imprimetuscartas.cl",
                "bullets": [
                    "Construí y opero solo una plataforma de impresión bajo demanda de cartas personalizadas: "
                    "**537 pedidos, $15,5 M CLP vendidos y 139 mil cartas impresas en 7 meses**, con un "
                    "crecimiento de 28 veces en ventas mensuales entre abril y octubre de 2026.",
                    "Diseñé el sistema completo: **editor de cartas en el navegador** (Konva, 300 DPI), precios "
                    "por volumen, dos pasarelas de pago (Webpay y MercadoPago), **worker de imposición en "
                    "Python** para plotter de corte y panel de operación con couriers y facturación.",
                    "**Agente de atención por WhatsApp sobre Claude** con tool use, derivación a humano y "
                    "tests de evasión: cotiza con el mismo código que la web y nunca inventa precios ni plazos.",
                    "**Control de calidad por visión computacional** (OpenCV: SIFT, FLANN, RANSAC) que detecta "
                    "cartas faltantes o falladas desde una foto de celular, y generador de imágenes con IA "
                    "(Claude Haiku + Flux) con créditos, moderación y anti-abuso.",
                    "Auditoría de UX y accesibilidad para adultos mayores y baja alfabetización digital; "
                    "herramienta de costeo (estado de resultados, punto de equilibrio) que fija los precios.",
                    "**968 commits en 8 repos y 146 archivos de test** con Claude Code como par de programación; "
                    "staging y producción auto-hosteados (Hetzner, Coolify, Cloudflare), en paralelo a un "
                    "empleo a jornada completa.",
                    "**Stack:** TanStack Start, React 19, TypeScript, Express, Prisma, PostgreSQL, Python/Flask, "
                    "Claude API, Backblaze B2, Cloudflare Workers.",
                ],
            },
            {
                "org": "VTI Universidad de Chile", "place": "Santiago, Chile",
                "role": "Desarrollador Full Stack (Enfocado en Frontend)", "when": "Marzo 2024 – Presente",
                "bullets": [
                    "Lidero el desarrollo frontend de sistemas de admisión universitaria a nivel nacional (PAES), "
                    "que impactan a miles de usuarios al año, con **Next.js y React**.",
                    "Diseño e implemento soluciones robustas y accesibles, optimizando el rendimiento en "
                    "dispositivos móviles y de escritorio.",
                    "Colaboro en equipos ágiles multidisciplinarios para mejorar la eficiencia operativa de "
                    "procesos institucionales críticos.",
                ],
            },
            {
                "org": "ALChile", "place": "Santiago, Chile",
                "role": "Desarrollador Full Stack", "when": "Julio 2022 – Marzo 2024",
                "bullets": [
                    "Diseñé y entregué aplicaciones de alto rendimiento con **React.js, Angular y TypeScript**.",
                    "Desarrollé APIs RESTful con **Node.js y Express**, integrando PostgreSQL y NoSQL "
                    "(Redis/MongoDB).",
                    "Gestioné infraestructura en **AWS**, supervisando despliegue y monitoreo para asegurar "
                    "alta disponibilidad.",
                ],
            },
        ],
        "edu": [
            ("Instituto Profesional IPLACEX", "Santiago, Chile", "Ingeniería en Informática", "Marzo 2026 – Presente"),
            ("Instituto Profesional Duoc UC", "Santiago, Chile", "Analista Programador Computacional", "Marzo 2023 – Junio 2025"),
        ],
        "skills": [
            ("Frontend", "React, TypeScript, TanStack Start/Router/Query, Next.js, Tailwind, Shadcn, Konva, Zustand, Angular."),
            ("Backend", "Node.js, Express, Python, Flask, Prisma, Better Auth/OAuth, webhooks y pagos, APIs REST, Go."),
            ("IA &amp; Agentes", "Claude API y tool use, agentes en producción, Claude Code, diseño de prompts y caching, "
                               "generación de imágenes (Flux/fal.ai), visión computacional (OpenCV), moderación de contenido, MCP."),
            ("Datos &amp; Cloud", "PostgreSQL, Redis, S3/Backblaze B2, Cloudflare Workers, Docker, Coolify, Hetzner, AWS, Sentry, Git, Vitest/Jest/pytest."),
            ("Idiomas", "Español (nativo), Inglés (C2 Proficient – EF SET)."),
        ],
    },
    "en": {
        "file": "cv-manuel-escalera-en.pdf",
        "title": "Resume Manuel Escalera — Product Engineer",
        "summary": "**Product Engineer (Full Stack + Applied AI) with 4+ years of experience.** "
                   "I build complete products, from the idea to a paying customer: I founded and run solo "
                   "imprimetuscartas.cl, with 500+ orders and three AI systems in production. "
                   "React, TypeScript, Node.js, Python and Claude. Currently pursuing a B.S. in Computer "
                   "Engineering. English C2 Proficient.",
        "h_exp": "Professional experience",
        "h_edu": "Education",
        "h_skills": "Technical skills",
        "jobs": [
            {
                "org": "imprimetuscartas.cl", "place": "Santiago, Chile",
                "role": "Founder &amp; Product Engineer", "when": "February 2026 – Present",
                "link": "https://imprimetuscartas.cl",
                "bullets": [
                    "Built and operate solo a print-on-demand platform for custom playing cards: "
                    "**537 orders, ~USD 16k in sales and 139,000 cards printed in 7 months**, with monthly "
                    "sales growing 28x between April and October 2026.",
                    "Designed the whole system: **in-browser card editor** (Konva, 300 DPI), volume pricing, "
                    "two payment gateways (Webpay and MercadoPago), a **Python imposition worker** for a "
                    "cutting plotter, and an ops panel with courier integrations and invoicing.",
                    "**WhatsApp support agent on Claude** with tool use, human handoff and evasion tests: it "
                    "quotes with the same code as the website and never invents a price or a delivery date.",
                    "**Computer-vision QA** (OpenCV: SIFT, FLANN, RANSAC) that finds missing or failed cards "
                    "from a phone photo, and an AI image generator (Claude Haiku + Flux) with credits, "
                    "moderation and anti-abuse.",
                    "UX and accessibility audit for older and low-digital-literacy users; costing tool "
                    "(income statement, break-even) that drives pricing.",
                    "**968 commits across 8 repos and 146 test files** with Claude Code as a pair programmer; "
                    "self-hosted staging and production (Hetzner, Coolify, Cloudflare), alongside a "
                    "full-time job.",
                    "**Stack:** TanStack Start, React 19, TypeScript, Express, Prisma, PostgreSQL, Python/Flask, "
                    "Claude API, Backblaze B2, Cloudflare Workers.",
                ],
            },
            {
                "org": "VTI Universidad de Chile", "place": "Santiago, Chile",
                "role": "Full Stack Developer (Frontend Focused)", "when": "March 2024 – Present",
                "bullets": [
                    "Lead frontend development for national university admission systems (PAES), impacting "
                    "thousands of users annually, using **Next.js and React**.",
                    "Implement robust, accessible frontend solutions, optimizing performance across mobile "
                    "and desktop.",
                    "Collaborate within cross-functional Agile teams to improve operational efficiency for "
                    "critical institutional systems.",
                ],
            },
            {
                "org": "ALChile", "place": "Santiago, Chile",
                "role": "Full Stack Developer", "when": "July 2022 – March 2024",
                "bullets": [
                    "Designed and delivered high-performance platforms using **React.js, Angular and TypeScript**.",
                    "Developed and consumed RESTful APIs using **Node.js and Express**, integrating PostgreSQL "
                    "and NoSQL databases.",
                    "Managed **AWS cloud infrastructure**, overseeing deployment, monitoring and maintenance "
                    "to ensure high availability.",
                ],
            },
        ],
        "edu": [
            ("IPLACEX Professional Institute", "Santiago, Chile", "B.S. in Computer Engineering", "March 2026 – Present"),
            ("Duoc UC Professional Institute", "Santiago, Chile", "Associate's Degree – Computer Programmer Analyst", "March 2023 – June 2025"),
        ],
        "skills": [
            ("Frontend", "React, TypeScript, TanStack Start/Router/Query, Next.js, Tailwind, Shadcn, Konva, Zustand, Angular."),
            ("Backend", "Node.js, Express, Python, Flask, Prisma, Better Auth/OAuth, webhooks and payments, REST APIs, Go."),
            ("AI &amp; Agents", "Claude API and tool use, agents in production, Claude Code, prompt design and caching, "
                               "image generation (Flux/fal.ai), computer vision (OpenCV), content moderation, MCP."),
            ("Data &amp; Cloud", "PostgreSQL, Redis, S3/Backblaze B2, Cloudflare Workers, Docker, Coolify, Hetzner, AWS, Sentry, Git, Vitest/Jest/pytest."),
            ("Languages", "Spanish (native), English (C2 Proficient – EF SET certified)."),
        ],
    },
}


def bold(text):
    return re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", text)


def render(lang, d):
    out = [f'<!doctype html><html lang="{lang}"><head><meta charset="utf-8">'
           f'<title>{html.escape(d["title"])}</title><style>{CSS}</style></head><body>',
           '<h1>Manuel Escalera Choque</h1>', f'<div class="contact">{CONTACT}</div>',
           '<hr class="rule">', f'<p class="summary">{bold(d["summary"])}</p>',
           f'<h2>{d["h_exp"]}</h2>']
    for j in d["jobs"]:
        org = j["org"]
        if j.get("link"):
            org = f'<a href="{j["link"]}">{org}</a>'
        out.append('<div class="job">'
                   f'<div class="row"><span class="org">{org}</span><span class="r org">{j["place"]}</span></div>'
                   f'<div class="row"><span>{j["role"]}</span><span class="r when">{j["when"]}</span></div>'
                   '<ul>' + ''.join(f'<li>{bold(b)}</li>' for b in j["bullets"]) + '</ul></div>')
    out.append(f'<h2>{d["h_skills"]}</h2><ul class="skills">'
               + ''.join(f'<li><b>{k}:</b> {v}</li>' for k, v in d["skills"]) + '</ul>')
    out.append(f'<h2>{d["h_edu"]}</h2>')
    for org, place, degree, when in d["edu"]:
        out.append('<div class="edu">'
                   f'<div class="row"><span class="org">{org}</span><span class="r org">{place}</span></div>'
                   f'<div class="row"><span class="when">{degree}</span><span class="r when">{when}</span></div></div>')
    out.append('</body></html>')
    return ''.join(out)


def main():
    browser = next((b for b in BROWSERS if os.path.exists(b)), None)
    if not browser:
        sys.exit("No se encontró Chrome ni Edge.")
    for lang, d in CV.items():
        with tempfile.TemporaryDirectory() as tmp:
            src = os.path.join(tmp, f"cv-{lang}.html")
            with open(src, "w", encoding="utf-8") as f:
                f.write(render(lang, d))
            dest = os.path.join(ROOT, "public", d["file"])
            subprocess.run([browser, "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
                            f"--user-data-dir={os.path.join(tmp, 'profile')}",
                            f"--print-to-pdf={dest}", "file:///" + src.replace("\\", "/")],
                           check=True, capture_output=True, timeout=120)
            pages = len(re.findall(rb"/Type\s*/Page[^s]", open(dest, "rb").read()))
            print(f"{d['file']}: {pages} pagina(s), {os.path.getsize(dest) // 1024} KB")


if __name__ == "__main__":
    main()
