# Notices and asset provenance

**Muse Desktop is unofficial community software, maintained by Robert Courson (@robzilla1738). It is not affiliated with, endorsed by, sponsored by, or supported by Meta.** Meta, Muse, and Muse Code names and marks belong to their respective owners. No affiliation, endorsement, or trademark license is implied.

The MIT license covers the original application source and documentation. It does not grant rights to third-party names, marks, reference images, or underlying character designs.

| Asset                                                                                                   | Source                                                                                                              |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `src/renderer/public/muse-logo.png`                                                                     | Exact Muse M artwork supplied by the project requester; used as the chat watermark and brand mark.                  |
| `src/renderer/public/themes/*.png`                                                                      | Generated with the OpenAI image-generation tool using the requester's cream plush mascot photograph as a reference. |
| `src/renderer/public/mascot-wave.png`                                                                   | Generated transparent waving mascot using the same reference.                                                       |
| `src/renderer/public/icon.png`, `resources/icon.png`, `resources/icon.icns`, `resources/icon.iconset/*` | Generated mascot icon and resized macOS icon derivatives.                                                           |
| `docs/screenshots/*.png`                                                                                | Screenshots of this application with synthetic test conversations and projects.                                     |

Exact generation prompts are retained in `docs/image-prompts.json` and `docs/plush-image-prompt.json`. Original reference photographs and the supplied layout inspiration are not redistributed in this repository. Confirm the rights for supplied marks and the underlying mascot before redistributing branded artwork. Forks can replace the PNGs and regenerate the icon without changing the app's functionality.

The runtime includes the official `@muse-code/sdk` and other dependencies under their own licenses. `package-lock.json` records exact versions. Electron includes Chromium and Node.js notices in the packaged application; dependency license files are retained by the packager.

Sparkle 2 is Copyright © 2006–2026 Sparkle Project and distributed under its own license. The complete upstream notice is included as `Contents/Resources/Sparkle-LICENSE.txt` in each packaged app. The native bridge in this repository is original MIT-licensed code.

The word “unofficial” clarifies authorship; it does not grant permission to use someone else's trademarks or character artwork. Review [Meta's trademark policy](https://opensource.fb.com/legal/trademark/) before distributing branded builds. This repository makes no claim of trademark ownership or legal clearance.
