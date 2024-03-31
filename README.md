# pihole-blocklist
Blocklists and tools for usage with the [Pi-hole](https://pi-hole.net/)

Note that theses lists may contain [AdblockPlus (ABP) domains](https://adblockplus.org/filter-cheatsheet#blocking2), which are [now supported](https://github.com/pi-hole/FTL/pull/1532).

# Usage
Place your origin blocklist file as "testdata\blacklist.exact.json" then run 

```
node ./src/convert-from-pihole-exact-to-abp.js
```

You get your converted file as "testdata/blacklist.adblockplus.txt". You may want to manually inspect the file before actual use.
