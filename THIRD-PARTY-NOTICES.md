# Attribution and asset provenance

This is an unofficial learning and compatibility adaptation of Muse Desktop by Robert Courson (@robzilla1738): https://github.com/robzilla1738/muse-desktop . The original MIT copyright and license are preserved in LICENSE. The original upstream notice is preserved separately in UPSTREAM-NOTICE.md. Neither the upstream author nor Meta endorses this adaptation.

## Artwork replacement

The upstream notice states that its MIT license covers source and documentation, but does not grant rights to third-party names, marks, reference images or underlying character designs. This adaptation therefore replaces the upstream logo, icon, mascot and theme backgrounds with unicorn artwork supplied by this adaptation's maintainer. This is a precaution concerning asset rights, not a claim that upstream code cannot be reused. Replacement artwork is not automatically licensed under the source-code MIT license. Confirm rights separately before redistributing it.

- `renderer/launcher.png`: maintainer-provided geometric unicorn avatar.
- `renderer/assets.mjs`: embedded derivatives of maintainer-provided unicorn artwork used by the runtime.
- `views/muse/**/*.png`: replacement unicorn artwork and backgrounds.
- `icon.svg`: adaptation's geometric unicorn icon.

Muse, Muse Code and Meta names belong to their respective owners. Mentioning them identifies the source and compatibility target; it does not assert ownership or trademark permission.

## Bundled code

The renderer uses React, React DOM, lucide-react, react-markdown and remark-gfm, with their dependency licenses. Dependencies are recorded in package-lock.json. This plugin uses PI-Desktop's model API rather than shipping the Muse Code SDK, Electron, or Sparkle runtime. See dependency license notices in DEPENDENCY-LICENSES.txt.
