"""
Image optimization helper for local development.

Usage:
  python tools/python/optimize_images.py

Install Pillow first:
  pip install pillow

This script creates optimized JPG images in:
  assets/images/optimized
"""

from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
SRC_DIR = ROOT / "assets" / "images"
OUT_DIR = SRC_DIR / "optimized"

MAX_WIDTH = 1920
QUALITY = 82

OUT_DIR.mkdir(parents=True, exist_ok=True)

for path in SRC_DIR.glob("*.JPG"):
    with Image.open(path) as img:
        img = img.convert("RGB")
        width, height = img.size

        if width > MAX_WIDTH:
            new_height = int(height * (MAX_WIDTH / width))
            img = img.resize((MAX_WIDTH, new_height))

        out_path = OUT_DIR / path.name
        img.save(out_path, "JPEG", quality=QUALITY, optimize=True, progressive=True)

        print(f"optimized: {out_path.relative_to(ROOT)}")
