from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet

def generate_pdf(result):
    file_path = "report.pdf"

    doc = SimpleDocTemplate(file_path)
    styles = getSampleStyleSheet()

    content = []

    # Title
    content.append(Paragraph("AI Code Review Report", styles["Title"]))
    content.append(Spacer(1, 10))

    # Grade
    content.append(Paragraph(f"Grade: {result.get('grade', '')}", styles["Heading2"]))
    content.append(Spacer(1, 10))

    # Issues
    content.append(Paragraph("Issues:", styles["Heading3"]))
    for issue in result.get("issues", []):
        content.append(Paragraph(f"- {issue}", styles["Normal"]))
    content.append(Spacer(1, 10))

    # Suggestions
    content.append(Paragraph("Suggestions:", styles["Heading3"]))
    for sug in result.get("suggestions", []):
        content.append(Paragraph(f"- {sug}", styles["Normal"]))
    content.append(Spacer(1, 10))

    # Improved Code
    content.append(Paragraph("Improved Code:", styles["Heading3"]))
    content.append(Paragraph(result.get("improved_code", ""), styles["Normal"]))

    doc.build(content)

    return file_path