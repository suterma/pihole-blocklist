# pihole-blocklist
Blocklists and tools for usage with the [Pi-hole](https://pi-hole.net/)

Note that theses lists may contain [AdblockPlus (ABP) domains](https://adblockplus.org/filter-cheatsheet#blocking2), which are [now supported](https://github.com/pi-hole/FTL/pull/1532).

# Lists

This repository contains various ready-to use and experimental blocklists in the ```\list\``` folder. To use with the Pihole, import them via the "Adlists" menu, in the form e.g.

    https://raw.githubusercontent.com/suterma/pihole-blocklist/main/list/block-youtube-content.txt

# List conversion tool
`convert-from-pihole-exact-to-abp.js` converts a Pihole exact blacklist into list containing the domains in [AdblockPlus (ABP) domains](https://adblockplus.org/filter-cheatsheet#blocking2) domains.

## Usage
Place your origin blocklist file as "testdata\blacklist.exact.json" then run 

```
node ./src/convert-from-pihole-exact-to-abp.js
```

You get your converted file as "testdata/blacklist.adblockplus.txt". You may want to manually inspect the file before actual use.
