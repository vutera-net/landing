#!/bin/bash

# PNG → ICO converter using ImageMagick
# Usage: ./png2ico.sh input.png output.ico

if [ -z "$1" ]; then
  echo "Usage: $0 input.png [output.ico]"
  exit 1
fi

INPUT="$1"
OUTPUT="${2:-icon.ico}"

# Check ImageMagick
if ! command -v magick &> /dev/null; then
  echo "ImageMagick chưa được cài. Cài bằng:"
  echo "brew install imagemagick"
  exit 1
fi

echo "🔧 Đang tạo ICO từ $INPUT ..."
magick "$INPUT" -define icon:auto-resize "$OUTPUT"

echo "🎉 Hoàn tất! File ICO: $OUTPUT"

