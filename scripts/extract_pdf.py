from pdfminer.high_level import extract_text
import sys

if len(sys.argv) < 2:
    print('Usage: python extract_pdf.py <pdf-path>')
    sys.exit(1)

path = sys.argv[1]
try:
    text = extract_text(path)
    print(text)
except Exception as e:
    print('ERROR:', e)
    sys.exit(2)
