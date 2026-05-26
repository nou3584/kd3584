/*
Optional C++ source for future WebAssembly visual effects.

GitHub Pages cannot compile C++ by itself.
Compile with Emscripten if you want to use this from JavaScript.

Example:
  emcc tools/cpp/glow.cpp -O2 -s MODULARIZE=1 -s EXPORT_ES6=1 \
    -s EXPORTED_FUNCTIONS='["_glowIntensity"]' \
    -o assets/js/glow.js
*/

#include <cmath>

extern "C" {
  double glowIntensity(double timeSeconds) {
    return 0.72
      + 0.12 * std::sin(timeSeconds * 2.4)
      + 0.04 * std::sin(timeSeconds * 9.1);
  }
}
