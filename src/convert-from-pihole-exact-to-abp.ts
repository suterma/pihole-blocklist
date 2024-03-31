/**
 * Loads an exact match blocklist file from a Pihole config export and converts it into a file with the Adblock Plus (ABP) notation.
 * @remarks Truncates all URL's at the second level domain (*.example.com) and removes duplicate entries afterwards.
 * @remarks For easy management, also orders the list alphabetically
 */

import { readFileSync, writeFileSync } from 'fs';
import { ExactDomainListEntry } from '../types/ExactDomainListEntry';
const blocklist: ExactDomainListEntry[] = JSON.parse(readFileSync("./testdata/blacklist.exact.json", "utf8"));
const blockSecondLevelDomains = blocklist.map((entry) => extractSecondLevelDomain(entry.domain));

const uniqueBlockSecondLevelDomains = [...new Set(blockSecondLevelDomains)]

const blockDomainsAdblockPlus = 
  uniqueBlockSecondLevelDomains
  .sort()
  .map((domain) => '||'+ domain + '^')
  .join('\n');

writeFileSync('./testdata/blacklist.adblockplus.txt', blockDomainsAdblockPlus);

console.log(blockDomainsAdblockPlus);


function extractSecondLevelDomain(domain:string) {
    return domain.split('.').slice(-2).join('.')
  }