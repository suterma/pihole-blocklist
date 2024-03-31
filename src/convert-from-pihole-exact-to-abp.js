"use strict";
/**
 * Loads an exact match blocklist file from a Pihole config export and converts it into a file with the Adblock Plus (ABP) notation.
 * @remarks Truncates all URL's at the second level domain (*.example.com) and removes duplicate entries afterwards.
 * @remarks For easy management, also orders the list alphabetically
 */
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const blocklist = JSON.parse((0, fs_1.readFileSync)("./../testdata/blacklist.exact.json", "utf8"));
const blockSecondLevelDomains = blocklist.map((entry) => extractSecondLevelDomain(entry.domain));
const uniqueBlockSecondLevelDomains = [...new Set(blockSecondLevelDomains)];
const blockDomainsAdblockPlus = uniqueBlockSecondLevelDomains
    .sort()
    .map((domain) => '||' + domain + '^')
    .join('\n');
(0, fs_1.writeFileSync)('./../testdata/blacklist.adblockplus.txt', blockDomainsAdblockPlus);
console.log(blockDomainsAdblockPlus);
function extractSecondLevelDomain(domain) {
    return domain.split('.').slice(-2).join('.');
}
//# sourceMappingURL=convert-from-pihole-exact-to-abp.js.map